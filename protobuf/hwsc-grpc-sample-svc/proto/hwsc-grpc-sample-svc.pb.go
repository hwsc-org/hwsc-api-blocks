// Code generated by protoc-gen-go. DO NOT EDIT.
// source: protobuf/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto

package hwscGrpcSampleSvcPb

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// The SampleService request message containing the user's name.
type SampleServiceRequest struct {
	FirstName            string   `protobuf:"bytes,1,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	CreateTimestamp      int64    `protobuf:"varint,2,opt,name=create_timestamp,json=createTimestamp,proto3" json:"create_timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SampleServiceRequest) Reset()         { *m = SampleServiceRequest{} }
func (m *SampleServiceRequest) String() string { return proto.CompactTextString(m) }
func (*SampleServiceRequest) ProtoMessage()    {}
func (*SampleServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_598f4db756d1ffcb, []int{0}
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

func (m *SampleServiceRequest) GetFirstName() string {
	if m != nil {
		return m.FirstName
	}
	return ""
}

func (m *SampleServiceRequest) GetCreateTimestamp() int64 {
	if m != nil {
		return m.CreateTimestamp
	}
	return 0
}

// The SampleService response message containing the greetings.
type SampleServiceResponse struct {
	Message              string   `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	ResponseTimestamp    int64    `protobuf:"varint,2,opt,name=response_timestamp,json=responseTimestamp,proto3" json:"response_timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SampleServiceResponse) Reset()         { *m = SampleServiceResponse{} }
func (m *SampleServiceResponse) String() string { return proto.CompactTextString(m) }
func (*SampleServiceResponse) ProtoMessage()    {}
func (*SampleServiceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_598f4db756d1ffcb, []int{1}
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

func (m *SampleServiceResponse) GetResponseTimestamp() int64 {
	if m != nil {
		return m.ResponseTimestamp
	}
	return 0
}

func init() {
	proto.RegisterType((*SampleServiceRequest)(nil), "hwscGrpcSampleSvc.SampleServiceRequest")
	proto.RegisterType((*SampleServiceResponse)(nil), "hwscGrpcSampleSvc.SampleServiceResponse")
}

func init() {
	proto.RegisterFile("protobuf/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto", fileDescriptor_598f4db756d1ffcb)
}

var fileDescriptor_598f4db756d1ffcb = []byte{
	// 242 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x90, 0x41, 0x4b, 0xc3, 0x40,
	0x10, 0x85, 0x8d, 0x82, 0xda, 0x01, 0xd1, 0x8e, 0x16, 0x82, 0x20, 0x94, 0x5c, 0x8c, 0x87, 0xa4,
	0xa0, 0x77, 0x0f, 0x5e, 0xf4, 0x24, 0x92, 0x78, 0xf2, 0x92, 0x6e, 0x96, 0x69, 0x0d, 0x64, 0xbb,
	0xeb, 0xce, 0x36, 0xe2, 0xbf, 0x17, 0xb7, 0x5d, 0x41, 0x13, 0xe8, 0x71, 0xde, 0xf7, 0x98, 0x8f,
	0x19, 0xb8, 0x37, 0x56, 0x3b, 0x5d, 0xaf, 0x17, 0xb3, 0xf7, 0x4f, 0x96, 0xd9, 0xd2, 0x1a, 0x99,
	0xb1, 0x50, 0xa6, 0xa5, 0x8c, 0x3b, 0x39, 0xf3, 0x74, 0x10, 0xe5, 0x1e, 0xe1, 0xf8, 0x87, 0x3d,
	0x5a, 0x23, 0x4b, 0x4f, 0xca, 0x4e, 0x26, 0x73, 0xb8, 0xd8, 0x0e, 0x64, 0xbb, 0x46, 0x52, 0x41,
	0x1f, 0x6b, 0x62, 0x87, 0x57, 0x00, 0x8b, 0xc6, 0xb2, 0xab, 0x56, 0x42, 0x51, 0x1c, 0x4d, 0xa3,
	0x74, 0x54, 0x8c, 0x7c, 0xf2, 0x2c, 0x14, 0xe1, 0x0d, 0x9c, 0x49, 0x4b, 0xc2, 0x51, 0xe5, 0x1a,
	0x45, 0xec, 0x84, 0x32, 0xf1, 0xfe, 0x34, 0x4a, 0x0f, 0x8a, 0xd3, 0x4d, 0xfe, 0x1a, 0xe2, 0x64,
	0x0e, 0x93, 0x7f, 0x06, 0x36, 0x7a, 0xc5, 0x84, 0x31, 0x1c, 0x29, 0x62, 0x16, 0xcb, 0xb0, 0x3f,
	0x8c, 0x98, 0x01, 0xda, 0x6d, 0xab, 0xb7, 0x7f, 0x1c, 0xc8, 0xaf, 0xe1, 0xd6, 0xc0, 0xc9, 0x1f,
	0x03, 0x56, 0x70, 0x5c, 0x8a, 0xaf, 0x27, 0x6a, 0x5b, 0x8d, 0xd7, 0x79, 0xef, 0xe8, 0x7c, 0xe8,
	0xe2, 0xcb, 0x74, 0x77, 0x71, 0x23, 0x4e, 0xf6, 0x1e, 0x26, 0x6f, 0xe7, 0xbd, 0xf2, 0x4b, 0x5d,
	0x1f, 0xfa, 0x37, 0xdf, 0x7d, 0x07, 0x00, 0x00, 0xff, 0xff, 0xa7, 0x3d, 0xb9, 0xe5, 0xa8, 0x01,
	0x00, 0x00,
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
	err := c.cc.Invoke(ctx, "/hwscGrpcSampleSvc.SampleService/SayHello", in, out, opts...)
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

// UnimplementedSampleServiceServer can be embedded to have forward compatible implementations.
type UnimplementedSampleServiceServer struct {
}

func (*UnimplementedSampleServiceServer) SayHello(ctx context.Context, req *SampleServiceRequest) (*SampleServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SayHello not implemented")
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
		FullMethod: "/hwscGrpcSampleSvc.SampleService/SayHello",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SampleServiceServer).SayHello(ctx, req.(*SampleServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _SampleService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hwscGrpcSampleSvc.SampleService",
	HandlerType: (*SampleServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SayHello",
			Handler:    _SampleService_SayHello_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "protobuf/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto",
}
