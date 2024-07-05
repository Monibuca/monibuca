// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: rtmp.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	pb "m7s.live/m7s/v5/pb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// RtmpClient is the client API for Rtmp service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RtmpClient interface {
	PushOut(ctx context.Context, in *PushRequest, opts ...grpc.CallOption) (*pb.SuccessResponse, error)
}

type rtmpClient struct {
	cc grpc.ClientConnInterface
}

func NewRtmpClient(cc grpc.ClientConnInterface) RtmpClient {
	return &rtmpClient{cc}
}

func (c *rtmpClient) PushOut(ctx context.Context, in *PushRequest, opts ...grpc.CallOption) (*pb.SuccessResponse, error) {
	out := new(pb.SuccessResponse)
	err := c.cc.Invoke(ctx, "/m7s.rtmp/PushOut", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RtmpServer is the server API for Rtmp service.
// All implementations must embed UnimplementedRtmpServer
// for forward compatibility
type RtmpServer interface {
	PushOut(context.Context, *PushRequest) (*pb.SuccessResponse, error)
	mustEmbedUnimplementedRtmpServer()
}

// UnimplementedRtmpServer must be embedded to have forward compatible implementations.
type UnimplementedRtmpServer struct {
}

func (UnimplementedRtmpServer) PushOut(context.Context, *PushRequest) (*pb.SuccessResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushOut not implemented")
}
func (UnimplementedRtmpServer) mustEmbedUnimplementedRtmpServer() {}

// UnsafeRtmpServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RtmpServer will
// result in compilation errors.
type UnsafeRtmpServer interface {
	mustEmbedUnimplementedRtmpServer()
}

func RegisterRtmpServer(s grpc.ServiceRegistrar, srv RtmpServer) {
	s.RegisterService(&Rtmp_ServiceDesc, srv)
}

func _Rtmp_PushOut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PushRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RtmpServer).PushOut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/m7s.rtmp/PushOut",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RtmpServer).PushOut(ctx, req.(*PushRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Rtmp_ServiceDesc is the grpc.ServiceDesc for Rtmp service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Rtmp_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "m7s.rtmp",
	HandlerType: (*RtmpServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PushOut",
			Handler:    _Rtmp_PushOut_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "rtmp.proto",
}
