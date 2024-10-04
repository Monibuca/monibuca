package m7s

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"maps"
	"net"
	"net/http"
	"runtime"
	"strings"
	"time"

	"m7s.live/m7s/v5/pkg/task"

	"github.com/shirou/gopsutil/v3/cpu"
	"github.com/shirou/gopsutil/v3/disk"
	"github.com/shirou/gopsutil/v3/mem"
	. "github.com/shirou/gopsutil/v3/net"
	"google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/timestamppb"
	"gopkg.in/yaml.v3"
	"m7s.live/m7s/v5/pb"
	"m7s.live/m7s/v5/pkg"
	"m7s.live/m7s/v5/pkg/config"
	"m7s.live/m7s/v5/pkg/util"
)

var localIP string
var empty = &emptypb.Empty{}

func (s *Server) SysInfo(context.Context, *emptypb.Empty) (res *pb.SysInfoResponse, err error) {
	if localIP == "" {
		if conn, err := net.Dial("udp", "114.114.114.114:80"); err == nil {
			localIP, _, _ = strings.Cut(conn.LocalAddr().String(), ":")
		}
	}
	res = &pb.SysInfoResponse{
		Version:   Version,
		LocalIP:   localIP,
		StartTime: timestamppb.New(s.StartTime),
		GoVersion: runtime.Version(),
		Os:        runtime.GOOS,
		Arch:      runtime.GOARCH,
		Cpus:      int32(runtime.NumCPU()),
	}
	for p := range s.Plugins.Range {
		res.Plugins = append(res.Plugins, &pb.PluginInfo{
			Name:     p.Meta.Name,
			Version:  p.Meta.Version,
			Disabled: p.Disabled,
		})
	}
	return
}

// /api/stream/annexb/{streamPath}
func (s *Server) api_Stream_AnnexB_(rw http.ResponseWriter, r *http.Request) {
	publisher, ok := s.Streams.Get(r.PathValue("streamPath"))
	if !ok || publisher.VideoTrack.AVTrack == nil {
		http.Error(rw, pkg.ErrNotFound.Error(), http.StatusNotFound)
		return
	}
	err := publisher.VideoTrack.WaitReady()
	if err != nil {
		http.Error(rw, err.Error(), http.StatusInternalServerError)
		return
	}
	rw.Header().Set("Content-Type", "application/octet-stream")
	reader := pkg.NewAVRingReader(publisher.VideoTrack.AVTrack)
	err = reader.StartRead(publisher.VideoTrack.GetIDR())
	if err != nil {
		http.Error(rw, err.Error(), http.StatusInternalServerError)
		return
	}
	defer reader.StopRead()
	if reader.Value.Raw == nil {
		if err = reader.Value.Demux(publisher.VideoTrack.ICodecCtx); err != nil {
			http.Error(rw, err.Error(), http.StatusInternalServerError)
			return
		}
	}
	var annexb pkg.AnnexB
	var t pkg.AVTrack

	t.ICodecCtx, t.SequenceFrame, err = annexb.ConvertCtx(publisher.VideoTrack.ICodecCtx)
	if t.ICodecCtx == nil {
		http.Error(rw, "unsupported codec", http.StatusInternalServerError)
		return
	}
	annexb.Mux(t.ICodecCtx, &reader.Value)
	_, err = annexb.WriteTo(rw)
}

func (s *Server) getStreamInfo(pub *Publisher) (res *pb.StreamInfoResponse, err error) {
	tmp, _ := json.Marshal(pub.Description)
	res = &pb.StreamInfoResponse{
		Meta:        string(tmp),
		Path:        pub.StreamPath,
		State:       int32(pub.State),
		StartTime:   timestamppb.New(pub.StartTime),
		Subscribers: int32(pub.Subscribers.Length),
		Type:        pub.Plugin.Meta.Name,
	}

	if t := pub.AudioTrack.AVTrack; t != nil {
		if t.ICodecCtx != nil {
			res.AudioTrack = &pb.AudioTrackInfo{
				Codec: t.FourCC().String(),
				Meta:  t.GetInfo(),
				Bps:   uint32(t.BPS),
				Fps:   uint32(t.FPS),
				Delta: pub.AudioTrack.Delta.String(),
			}
			res.AudioTrack.SampleRate = uint32(t.ICodecCtx.(pkg.IAudioCodecCtx).GetSampleRate())
			res.AudioTrack.Channels = uint32(t.ICodecCtx.(pkg.IAudioCodecCtx).GetChannels())
		}
	}
	if t := pub.VideoTrack.AVTrack; t != nil {
		if t.ICodecCtx != nil {
			res.VideoTrack = &pb.VideoTrackInfo{
				Codec: t.FourCC().String(),
				Meta:  t.GetInfo(),
				Bps:   uint32(t.BPS),
				Fps:   uint32(t.FPS),
				Delta: pub.VideoTrack.Delta.String(),
				Gop:   uint32(pub.GOP),
			}
			res.VideoTrack.Width = uint32(t.ICodecCtx.(pkg.IVideoCodecCtx).Width())
			res.VideoTrack.Height = uint32(t.ICodecCtx.(pkg.IVideoCodecCtx).Height())
		}
	}
	return
}

func (s *Server) StreamInfo(ctx context.Context, req *pb.StreamSnapRequest) (res *pb.StreamInfoResponse, err error) {
	s.Streams.Call(func() error {
		if pub, ok := s.Streams.Get(req.StreamPath); ok {
			res, err = s.getStreamInfo(pub)
		} else {
			err = pkg.ErrNotFound
		}
		return nil
	})
	return
}

func (s *Server) TaskTree(context.Context, *emptypb.Empty) (res *pb.TaskTreeResponse, err error) {
	var fillData func(m task.ITask) *pb.TaskTreeResponse
	fillData = func(m task.ITask) (res *pb.TaskTreeResponse) {
		res = &pb.TaskTreeResponse{Id: m.GetTaskID(), State: uint32(m.GetState()), Type: uint32(m.GetTaskType()), Owner: m.GetOwnerType(), StartTime: timestamppb.New(m.GetTask().StartTime), Description: maps.Collect(func(yield func(key, value string) bool) {
			for k, v := range m.GetTask().Description {
				yield(k, fmt.Sprintf("%+v", v))
			}
		})}
		if job, ok := m.(task.IJob); ok {
			res.Blocked = job.Blocked()
			for t := range job.RangeSubTask {
				res.Children = append(res.Children, fillData(t))
			}
		}
		return
	}
	res = fillData(&Servers)
	return
}

func (s *Server) GetSubscribers(context.Context, *pb.SubscribersRequest) (res *pb.SubscribersResponse, err error) {
	s.Streams.Call(func() error {
		var subscribers []*pb.SubscriberSnapShot
		for subscriber := range s.Subscribers.Range {
			meta, _ := json.Marshal(subscriber.Description)
			snap := &pb.SubscriberSnapShot{
				Id:        subscriber.ID,
				StartTime: timestamppb.New(subscriber.StartTime),
				Meta:      string(meta),
			}
			if ar := subscriber.AudioReader; ar != nil {
				snap.AudioReader = &pb.RingReaderSnapShot{
					Sequence:  ar.Value.Sequence,
					Timestamp: ar.AbsTime,
					Delay:     ar.Delay,
					State:     int32(ar.State),
				}
			}
			if vr := subscriber.VideoReader; vr != nil {
				snap.VideoReader = &pb.RingReaderSnapShot{
					Sequence:  vr.Value.Sequence,
					Timestamp: vr.AbsTime,
					Delay:     vr.Delay,
					State:     int32(vr.State),
				}
			}
			subscribers = append(subscribers, snap)
		}
		res = &pb.SubscribersResponse{
			List:  subscribers,
			Total: int32(s.Subscribers.Length),
		}
		return nil
	})
	return
}
func (s *Server) AudioTrackSnap(_ context.Context, req *pb.StreamSnapRequest) (res *pb.TrackSnapShotResponse, err error) {
	s.Streams.Call(func() error {
		if pub, ok := s.Streams.Get(req.StreamPath); ok && pub.HasAudioTrack() {
			res = &pb.TrackSnapShotResponse{}
			if pub.AudioTrack.Allocator != nil {
				for _, memlist := range pub.AudioTrack.Allocator.GetChildren() {
					var list []*pb.MemoryBlock
					for _, block := range memlist.GetBlocks() {
						list = append(list, &pb.MemoryBlock{
							S: uint32(block.Start),
							E: uint32(block.End),
						})
					}
					res.Memory = append(res.Memory, &pb.MemoryBlockGroup{List: list, Size: uint32(memlist.Size)})
				}
			}
			res.Reader = make(map[uint32]uint32)
			for sub := range pub.SubscriberRange {
				if sub.AudioReader == nil {
					continue
				}
				res.Reader[uint32(sub.ID)] = sub.AudioReader.Value.Sequence
			}
			pub.AudioTrack.Ring.Do(func(v *pkg.AVFrame) {
				if v.TryRLock() {
					if len(v.Wraps) > 0 {
						var snap pb.TrackSnapShot
						snap.Sequence = v.Sequence
						snap.Timestamp = uint32(v.Timestamp / time.Millisecond)
						snap.WriteTime = timestamppb.New(v.WriteTime)
						snap.Wrap = make([]*pb.Wrap, len(v.Wraps))
						snap.KeyFrame = v.IDR
						res.RingDataSize += uint32(v.Wraps[0].GetSize())
						for i, wrap := range v.Wraps {
							snap.Wrap[i] = &pb.Wrap{
								Timestamp: uint32(wrap.GetTimestamp() / time.Millisecond),
								Size:      uint32(wrap.GetSize()),
								Data:      wrap.String(),
							}
						}
						res.Ring = append(res.Ring, &snap)
					}
					v.RUnlock()
				}
			})
		} else {
			err = pkg.ErrNotFound
		}
		return nil
	})
	return
}
func (s *Server) api_VideoTrack_SSE(rw http.ResponseWriter, r *http.Request) {
	streamPath := r.PathValue("streamPath")
	if r.URL.RawQuery != "" {
		streamPath += "?" + r.URL.RawQuery
	}
	suber, err := s.Subscribe(r.Context(), streamPath)
	sse := util.NewSSE(rw, r.Context())
	PlayBlock(suber, (func(frame *pkg.AVFrame) (err error))(nil), func(frame *pkg.AVFrame) (err error) {
		var snap pb.TrackSnapShot
		snap.Sequence = frame.Sequence
		snap.Timestamp = uint32(frame.Timestamp / time.Millisecond)
		snap.WriteTime = timestamppb.New(frame.WriteTime)
		snap.Wrap = make([]*pb.Wrap, len(frame.Wraps))
		snap.KeyFrame = frame.IDR
		for i, wrap := range frame.Wraps {
			snap.Wrap[i] = &pb.Wrap{
				Timestamp: uint32(wrap.GetTimestamp() / time.Millisecond),
				Size:      uint32(wrap.GetSize()),
				Data:      wrap.String(),
			}
		}
		return sse.WriteJSON(&snap)
	})
	if err != nil {
		http.Error(rw, err.Error(), http.StatusBadRequest)
		return
	}
}

func (s *Server) VideoTrackSnap(ctx context.Context, req *pb.StreamSnapRequest) (res *pb.TrackSnapShotResponse, err error) {
	s.Streams.Call(func() error {
		if pub, ok := s.Streams.Get(req.StreamPath); ok && pub.HasVideoTrack() {
			res = &pb.TrackSnapShotResponse{}
			if pub.VideoTrack.Allocator != nil {
				for _, memlist := range pub.VideoTrack.Allocator.GetChildren() {
					var list []*pb.MemoryBlock
					for _, block := range memlist.GetBlocks() {
						list = append(list, &pb.MemoryBlock{
							S: uint32(block.Start),
							E: uint32(block.End),
						})
					}
					res.Memory = append(res.Memory, &pb.MemoryBlockGroup{List: list, Size: uint32(memlist.Size)})
				}
			}
			res.Reader = make(map[uint32]uint32)
			for sub := range pub.SubscriberRange {
				if sub.VideoReader == nil {
					continue
				}
				res.Reader[sub.ID] = sub.VideoReader.Value.Sequence
			}
			pub.VideoTrack.Ring.Do(func(v *pkg.AVFrame) {
				if v.TryRLock() {
					if len(v.Wraps) > 0 {
						var snap pb.TrackSnapShot
						snap.Sequence = v.Sequence
						snap.Timestamp = uint32(v.Timestamp / time.Millisecond)
						snap.WriteTime = timestamppb.New(v.WriteTime)
						snap.Wrap = make([]*pb.Wrap, len(v.Wraps))
						snap.KeyFrame = v.IDR
						res.RingDataSize += uint32(v.Wraps[0].GetSize())
						for i, wrap := range v.Wraps {
							snap.Wrap[i] = &pb.Wrap{
								Timestamp: uint32(wrap.GetTimestamp() / time.Millisecond),
								Size:      uint32(wrap.GetSize()),
								Data:      wrap.String(),
							}
						}
						res.Ring = append(res.Ring, &snap)
					}
					v.RUnlock()
				}
			})
		} else {
			err = pkg.ErrNotFound
		}
		return nil
	})
	return
}

func (s *Server) Restart(ctx context.Context, req *pb.RequestWithId) (res *emptypb.Empty, err error) {
	if s, ok := Servers.Get(req.Id); ok {
		s.Stop(pkg.ErrRestart)
	}
	return empty, err
}

func (s *Server) Shutdown(ctx context.Context, req *pb.RequestWithId) (res *emptypb.Empty, err error) {
	if s, ok := Servers.Get(req.Id); ok {
		s.Stop(pkg.ErrStopFromAPI)
	} else {
		return nil, pkg.ErrNotFound
	}
	return empty, err
}

func (s *Server) ChangeSubscribe(ctx context.Context, req *pb.ChangeSubscribeRequest) (res *pb.SuccessResponse, err error) {
	s.Streams.Call(func() error {
		if subscriber, ok := s.Subscribers.Get(req.Id); ok {
			if pub, ok := s.Streams.Get(req.StreamPath); ok {
				subscriber.Publisher.RemoveSubscriber(subscriber)
				subscriber.StreamPath = req.StreamPath
				pub.AddSubscriber(subscriber)
				return nil
			}
		}
		err = pkg.ErrNotFound
		return nil
	})
	return &pb.SuccessResponse{}, err
}

func (s *Server) StopSubscribe(ctx context.Context, req *pb.RequestWithId) (res *pb.SuccessResponse, err error) {
	s.Streams.Call(func() error {
		if subscriber, ok := s.Subscribers.Get(req.Id); ok {
			subscriber.Stop(errors.New("stop by api"))
		} else {
			err = pkg.ErrNotFound
		}
		return nil
	})
	return &pb.SuccessResponse{}, err
}

// /api/stream/list
func (s *Server) StreamList(_ context.Context, req *pb.StreamListRequest) (res *pb.StreamListResponse, err error) {
	s.Streams.Call(func() error {
		var streams []*pb.StreamInfoResponse
		for publisher := range s.Streams.Range {
			info, err := s.getStreamInfo(publisher)
			if err != nil {
				continue
			}
			streams = append(streams, info)
		}
		res = &pb.StreamListResponse{List: streams, Total: int32(s.Streams.Length), PageNum: req.PageNum, PageSize: req.PageSize}
		return nil
	})
	return
}

func (s *Server) WaitList(context.Context, *emptypb.Empty) (res *pb.StreamWaitListResponse, err error) {
	s.Streams.Call(func() error {
		res = &pb.StreamWaitListResponse{
			List: make(map[string]int32),
		}
		for subs := range s.Waiting.Range {
			res.List[subs.StreamPath] = int32(subs.Length)
		}
		return nil
	})
	return
}

func (s *Server) Api_Summary_SSE(rw http.ResponseWriter, r *http.Request) {
	util.ReturnFetchValue(func() *pb.SummaryResponse {
		ret, _ := s.Summary(r.Context(), nil)
		return ret
	}, rw, r)
}

func (s *Server) Summary(context.Context, *emptypb.Empty) (res *pb.SummaryResponse, err error) {
	dur := time.Since(s.lastSummaryTime)
	if dur < time.Second {
		res = s.lastSummary
		return
	}
	v, _ := mem.VirtualMemory()
	d, _ := disk.Usage("/")
	nv, _ := IOCounters(true)
	res = &pb.SummaryResponse{
		Memory: &pb.Usage{
			Total: v.Total >> 20,
			Free:  v.Available >> 20,
			Used:  v.Used >> 20,
			Usage: float32(v.UsedPercent),
		},
		HardDisk: &pb.Usage{
			Total: d.Total >> 30,
			Free:  d.Free >> 30,
			Used:  d.Used >> 30,
			Usage: float32(d.UsedPercent),
		},
	}
	if cc, _ := cpu.Percent(time.Second, false); len(cc) > 0 {
		res.CpuUsage = float32(cc[0])
	}
	netWorks := []*pb.NetWorkInfo{}
	for i, n := range nv {
		info := &pb.NetWorkInfo{
			Name:    n.Name,
			Receive: n.BytesRecv,
			Sent:    n.BytesSent,
		}
		if s.lastSummary != nil && len(s.lastSummary.NetWork) > i {
			info.ReceiveSpeed = (n.BytesRecv - s.lastSummary.NetWork[i].Receive) / uint64(dur.Seconds())
			info.SentSpeed = (n.BytesSent - s.lastSummary.NetWork[i].Sent) / uint64(dur.Seconds())
		}
		netWorks = append(netWorks, info)
	}
	res.StreamCount = int32(s.Streams.Length)
	res.PullCount = int32(s.Pulls.Length)
	res.PushCount = int32(s.Pushs.Length)
	res.SubscribeCount = int32(s.Subscribers.Length)
	res.RecordCount = int32(s.Records.Length)
	res.TransformCount = int32(s.Transforms.Length)
	res.NetWork = netWorks
	s.lastSummary = res
	s.lastSummaryTime = time.Now()
	return
}

// /api/config/json/{name}
func (s *Server) api_Config_JSON_(rw http.ResponseWriter, r *http.Request) {
	name := r.PathValue("name")
	var conf *config.Config
	if name == "global" {
		conf = &s.Config
	} else {
		p, ok := s.Plugins.Get(name)
		if !ok {
			http.Error(rw, pkg.ErrNotFound.Error(), http.StatusNotFound)
			return
		}
		conf = &p.Config
	}
	rw.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(rw).Encode(conf.GetMap())
	if err != nil {
		http.Error(rw, err.Error(), http.StatusInternalServerError)
	}
}

func (s *Server) GetConfig(_ context.Context, req *pb.GetConfigRequest) (res *pb.GetConfigResponse, err error) {
	res = &pb.GetConfigResponse{}
	var conf *config.Config
	if req.Name == "global" {
		conf = &s.Config
	} else {
		p, ok := s.Plugins.Get(req.Name)
		if !ok {
			err = pkg.ErrNotFound
			return
		}
		conf = &p.Config
	}
	var mm []byte
	mm, err = yaml.Marshal(conf.File)
	if err != nil {
		return
	}
	res.File = string(mm)

	mm, err = yaml.Marshal(conf.Modify)
	if err != nil {
		return
	}
	res.Modified = string(mm)

	mm, err = yaml.Marshal(conf.GetMap())
	if err != nil {
		return
	}
	res.Merged = string(mm)
	return
}

func (s *Server) ModifyConfig(_ context.Context, req *pb.ModifyConfigRequest) (res *pb.SuccessResponse, err error) {
	var conf *config.Config
	if req.Name == "global" {
		conf = &s.Config
		defer s.SaveConfig()
	} else {
		p, ok := s.Plugins.Get(req.Name)
		if !ok {
			err = pkg.ErrNotFound
			return
		}
		defer p.SaveConfig()
		conf = &p.Config
	}
	var modified map[string]any
	err = yaml.Unmarshal([]byte(req.Yaml), &modified)
	if err != nil {
		return
	}
	conf.ParseModifyFile(modified)
	return
}

func (s *Server) GetDeviceList(ctx context.Context, req *emptypb.Empty) (res *pb.DeviceListResponse, err error) {
	res = &pb.DeviceListResponse{}
	for device := range s.Devices.Range {
		res.Data = append(res.Data, &pb.DeviceInfo{
			Name:       device.Name,
			CreateTime: timestamppb.New(device.CreatedAt),
			UpdateTime: timestamppb.New(device.UpdatedAt),
			Type:       device.Type,
			PullURL:    device.PullURL,
			ParentID:   uint32(device.ParentID),
			Status:     uint32(device.Status),
			ID:         uint32(device.ID),
		})
	}
	return
}

func (s *Server) AddDevice(ctx context.Context, req *pb.DeviceInfo) (res *pb.SuccessResponse, err error) {
	device := &Device{
		server:   s,
		Name:     req.Name,
		Type:    	req.Type,
		PullURL:  req.PullURL,
		ParentID: uint(req.ParentID),
	}
	if s.DB == nil {
		err = pkg.ErrNoDB
		return
	}
	s.DB.Create(device)
	s.Devices.Add(device)
	res = &pb.SuccessResponse{}
	return
}

func (s *Server) UpdateDevice(ctx context.Context, req *pb.DeviceInfo) (res *pb.SuccessResponse, err error) {
	if s.DB == nil {
		err = pkg.ErrNoDB
		return
	}
	target := &Device{}
	target.ID = uint(req.ID)
	target.Name = req.Name
	target.PullURL = req.PullURL
	target.ParentID = uint(req.ParentID)
	target.Type = req.Type
	s.DB.Save(target)
	res = &pb.SuccessResponse{}
	return
}

func (s *Server) RemoveDevice(ctx context.Context, req *pb.RequestWithId) (res *pb.SuccessResponse, err error) {
	if s.DB == nil {
		err = pkg.ErrNoDB
		return
	}
	s.DB.Delete(&Device{}, req.Id)
	s.Devices.RemoveByKey(uint32(req.Id))
	res = &pb.SuccessResponse{}
	return

}
