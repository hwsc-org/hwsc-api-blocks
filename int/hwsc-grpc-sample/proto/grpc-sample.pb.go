// Code generated by protoc-gen-go. DO NOT EDIT.
// source: int/hwsc-grpc-sample/proto/grpc-sample.proto

package grpcSamplePb

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

func init() {
	proto.RegisterFile("int/hwsc-grpc-sample/proto/grpc-sample.proto", fileDescriptor_17b58f13ac440f7c)
}

var fileDescriptor_17b58f13ac440f7c = []byte{
	// 90 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0xc9, 0xcc, 0x2b, 0xd1,
	0xcf, 0x28, 0x2f, 0x4e, 0xd6, 0x4d, 0x2f, 0x2a, 0x48, 0xd6, 0x2d, 0x4e, 0xcc, 0x2d, 0xc8, 0x49,
	0xd5, 0x2f, 0x28, 0xca, 0x2f, 0xc9, 0xd7, 0x47, 0x12, 0xd1, 0x03, 0x8b, 0x08, 0xb1, 0x41, 0x78,
	0x46, 0xfc, 0x5c, 0xbc, 0xc1, 0x60, 0x56, 0x70, 0x6a, 0x51, 0x59, 0x66, 0x72, 0xaa, 0x13, 0x5f,
	0x14, 0x0f, 0x48, 0x35, 0x44, 0x30, 0x20, 0x29, 0x89, 0x0d, 0xac, 0xde, 0x18, 0x10, 0x00, 0x00,
	0xff, 0xff, 0x8c, 0xe2, 0x26, 0xe4, 0x5f, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// SampleServiceClient is the client API for SampleService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type SampleServiceClient interface {
}

type sampleServiceClient struct {
	cc *grpc.ClientConn
}

func NewSampleServiceClient(cc *grpc.ClientConn) SampleServiceClient {
	return &sampleServiceClient{cc}
}

// SampleServiceServer is the server API for SampleService service.
type SampleServiceServer interface {
}

func RegisterSampleServiceServer(s *grpc.Server, srv SampleServiceServer) {
	s.RegisterService(&_SampleService_serviceDesc, srv)
}

var _SampleService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "sample.SampleService",
	HandlerType: (*SampleServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "int/hwsc-grpc-sample/proto/grpc-sample.proto",
}
