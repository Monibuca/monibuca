package transcode

import (
	"m7s.live/pro"
	"m7s.live/pro/pkg/task"
)

func NewPuller() m7s.IPuller {
	return &Puller{}
}

type Puller struct {
	task.Task
	PullJob m7s.PullJob
}

func (p *Puller) GetPullJob() *m7s.PullJob {
	return &p.PullJob

}
