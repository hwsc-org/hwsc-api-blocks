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

// The SampleService request message containing the user's name.
type SampleServiceRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SampleServiceRequest) Reset()         { *m = SampleServiceRequest{} }
func (m *SampleServiceRequest) String() string { return proto.CompactTextString(m) }
func (*SampleServiceRequest) ProtoMessage()    {}
func (*SampleServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_17b58f13ac440f7c, []int{0}
}

func (m *SampleServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SampleServiceRequest.Unmarshal(m, b)
}
func (m *SampleServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SampleServiceRequest.Marshal(b, m, deterministic)
}
func (m *SampleServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SampleServiceRequest.Merge(m, src)
}
func (m *SampleServiceRequest) XXX_Size() int {
	return xxx_messageInfo_SampleServiceRequest.Size(m)
}
func (m *SampleServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_SampleServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_SampleServiceRequest proto.InternalMessageInfo

func (m *SampleServiceRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// The SampleService response message containing the greetings
type SampleServiceResponse struct {
	Message              string   `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SampleServiceResponse) Reset()         { *m = SampleServiceResponse{} }
func (m *SampleServiceResponse) String() string { return proto.CompactTextString(m) }
func (*SampleServiceResponse) ProtoMessage()    {}
func (*SampleServiceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_17b58f13ac440f7c, []int{1}
}

func (m *SampleServiceResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SampleServiceResponse.Unmarshal(m, b)
}
func (m *SampleServiceResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SampleServiceResponse.Marshal(b, m, deterministic)
}
func (m *SampleServiceResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SampleServiceResponse.Merge(m, src)
}
func (m *SampleServiceResponse) XXX_Size() int {
	return xxx_messageInfo_SampleServiceResponse.Size(m)
}
func (m *SampleServiceResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_SampleServiceResponse.DiscardUnknown(m)
}

var xxx_messageInfo_SampleServiceResponse proto.InternalMessageInfo

func (m *SampleServiceResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*SampleServiceRequest)(nil), "sample.SampleServiceRequest")
	proto.RegisterType((*SampleServiceResponse)(nil), "sample.SampleServiceResponse")
}

func init() {
	proto.RegisterFile("int/hwsc-grpc-sample/proto/grpc-sample.proto", fileDescriptor_17b58f13ac440f7c)
}

var fileDescriptor_17b58f13ac440f7c = []byte{
	// 175 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0xc9, 0xcc, 0x2b, 0xd1,
	0xcf, 0x28, 0x2f, 0x4e, 0xd6, 0x4d, 0x2f, 0x2a, 0x48, 0xd6, 0x2d, 0x4e, 0xcc, 0x2d, 0xc8, 0x49,
	0xd5, 0x2f, 0x28, 0xca, 0x2f, 0xc9, 0xd7, 0x47, 0x12, 0xd1, 0x03, 0x8b, 0x08, 0xb1, 0x41, 0x78,
	0x4a, 0x5a, 0x5c, 0x22, 0xc1, 0x60, 0x56, 0x70, 0x6a, 0x51, 0x59, 0x66, 0x72, 0x6a, 0x50, 0x6a,
	0x61, 0x69, 0x6a, 0x71, 0x89, 0x90, 0x10, 0x17, 0x4b, 0x5e, 0x62, 0x6e, 0xaa, 0x04, 0xa3, 0x02,
	0xa3, 0x06, 0x67, 0x10, 0x98, 0xad, 0x64, 0xc8, 0x25, 0x8a, 0xa6, 0xb6, 0xb8, 0x20, 0x3f, 0xaf,
	0x38, 0x55, 0x48, 0x82, 0x8b, 0x3d, 0x37, 0xb5, 0xb8, 0x38, 0x31, 0x1d, 0xa6, 0x1e, 0xc6, 0x35,
	0x8a, 0xe2, 0xe2, 0x45, 0xd1, 0x22, 0xe4, 0xc9, 0xc5, 0x11, 0x9c, 0x58, 0xe9, 0x91, 0x9a, 0x93,
	0x93, 0x2f, 0x24, 0xa3, 0x07, 0x75, 0x12, 0x36, 0x17, 0x48, 0xc9, 0xe2, 0x90, 0x85, 0xd8, 0xa9,
	0xc4, 0xe0, 0xc4, 0x17, 0xc5, 0x03, 0xf2, 0x17, 0x44, 0x3a, 0x20, 0x29, 0x89, 0x0d, 0xec, 0x33,
	0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0xfc, 0xdd, 0x45, 0x06, 0x09, 0x01, 0x00, 0x00,
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
	// Sends a greeting
	SayHello(ctx context.Context, in *SampleServiceRequest, opts ...grpc.CallOption) (*SampleServiceResponse, error)
}

type sampleServiceClient struct {
	cc *grpc.ClientConn
}

func NewSampleServiceClient(cc *grpc.ClientConn) SampleServiceClient {
	return &sampleServiceClient{cc}
}

func (c *sampleServiceClient) SayHello(ctx context.Context, in *SampleServiceRequest, opts ...grpc.CallOption) (*SampleServiceResponse, error) {
	out := new(SampleServiceResponse)
	err := c.cc.Invoke(ctx, "/sample.SampleService/SayHello", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SampleServiceServer is the server API for SampleService service.
type SampleServiceServer interface {
	// Sends a greeting
	SayHello(context.Context, *SampleServiceRequest) (*SampleServiceResponse, error)
}

func RegisterSampleServiceServer(s *grpc.Server, srv SampleServiceServer) {
	s.RegisterService(&_SampleService_serviceDesc, srv)
}

func _SampleService_SayHello_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SampleServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SampleServiceServer).SayHello(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sample.SampleService/SayHello",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SampleServiceServer).SayHello(ctx, req.(*SampleServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _SampleService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "sample.SampleService",
	HandlerType: (*SampleServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SayHello",
			Handler:    _SampleService_SayHello_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "int/hwsc-grpc-sample/proto/grpc-sample.proto",
}
