// Code generated by protoc-gen-go. DO NOT EDIT.
// source: hwsc-app-gateway-svc.proto

package hwsc

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

type AppGatewayServiceRequest struct {
	Token                  string                  `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	UserRequest            *UserRequest            `protobuf:"bytes,2,opt,name=user_request,json=userRequest,proto3" json:"user_request,omitempty"`
	DocumentRequest        *DocumentRequest        `protobuf:"bytes,3,opt,name=document_request,json=documentRequest,proto3" json:"document_request,omitempty"`
	FileTransactionRequest *FileTransactionRequest `protobuf:"bytes,4,opt,name=file_transaction_request,json=fileTransactionRequest,proto3" json:"file_transaction_request,omitempty"`
	Chunk                  *Chunk                  `protobuf:"bytes,5,opt,name=chunk,proto3" json:"chunk,omitempty"`
	XXX_NoUnkeyedLiteral   struct{}                `json:"-"`
	XXX_unrecognized       []byte                  `json:"-"`
	XXX_sizecache          int32                   `json:"-"`
}

func (m *AppGatewayServiceRequest) Reset()         { *m = AppGatewayServiceRequest{} }
func (m *AppGatewayServiceRequest) String() string { return proto.CompactTextString(m) }
func (*AppGatewayServiceRequest) ProtoMessage()    {}
func (*AppGatewayServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f25123fc1481ece, []int{0}
}

func (m *AppGatewayServiceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AppGatewayServiceRequest.Unmarshal(m, b)
}
func (m *AppGatewayServiceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AppGatewayServiceRequest.Marshal(b, m, deterministic)
}
func (m *AppGatewayServiceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AppGatewayServiceRequest.Merge(m, src)
}
func (m *AppGatewayServiceRequest) XXX_Size() int {
	return xxx_messageInfo_AppGatewayServiceRequest.Size(m)
}
func (m *AppGatewayServiceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AppGatewayServiceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AppGatewayServiceRequest proto.InternalMessageInfo

func (m *AppGatewayServiceRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *AppGatewayServiceRequest) GetUserRequest() *UserRequest {
	if m != nil {
		return m.UserRequest
	}
	return nil
}

func (m *AppGatewayServiceRequest) GetDocumentRequest() *DocumentRequest {
	if m != nil {
		return m.DocumentRequest
	}
	return nil
}

func (m *AppGatewayServiceRequest) GetFileTransactionRequest() *FileTransactionRequest {
	if m != nil {
		return m.FileTransactionRequest
	}
	return nil
}

func (m *AppGatewayServiceRequest) GetChunk() *Chunk {
	if m != nil {
		return m.Chunk
	}
	return nil
}

type AppGatewayServiceResponse struct {
	// Types that are valid to be assigned to Status:
	//	*AppGatewayServiceResponse_Code
	Status  isAppGatewayServiceResponse_Status `protobuf_oneof:"status"`
	Message string                             `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Token   string                             `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	User    *User                              `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	// for ListUsers response
	UserCollection []*User   `protobuf:"bytes,5,rep,name=user_collection,json=userCollection,proto3" json:"user_collection,omitempty"`
	Document       *Document `protobuf:"bytes,6,opt,name=document,proto3" json:"document,omitempty"`
	// Response for ListUserDocumentCollection
	// Response for QueryDocument
	DocumentCollection []*Document `protobuf:"bytes,7,rep,name=document_collection,json=documentCollection,proto3" json:"document_collection,omitempty"`
	// Response for ListDistinctFieldValues
	QueryResults         *QueryTransaction `protobuf:"bytes,8,opt,name=query_results,json=queryResults,proto3" json:"query_results,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *AppGatewayServiceResponse) Reset()         { *m = AppGatewayServiceResponse{} }
func (m *AppGatewayServiceResponse) String() string { return proto.CompactTextString(m) }
func (*AppGatewayServiceResponse) ProtoMessage()    {}
func (*AppGatewayServiceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_1f25123fc1481ece, []int{1}
}

func (m *AppGatewayServiceResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AppGatewayServiceResponse.Unmarshal(m, b)
}
func (m *AppGatewayServiceResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AppGatewayServiceResponse.Marshal(b, m, deterministic)
}
func (m *AppGatewayServiceResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AppGatewayServiceResponse.Merge(m, src)
}
func (m *AppGatewayServiceResponse) XXX_Size() int {
	return xxx_messageInfo_AppGatewayServiceResponse.Size(m)
}
func (m *AppGatewayServiceResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_AppGatewayServiceResponse.DiscardUnknown(m)
}

var xxx_messageInfo_AppGatewayServiceResponse proto.InternalMessageInfo

type isAppGatewayServiceResponse_Status interface {
	isAppGatewayServiceResponse_Status()
}

type AppGatewayServiceResponse_Code struct {
	Code uint32 `protobuf:"varint,1,opt,name=code,proto3,oneof"`
}

func (*AppGatewayServiceResponse_Code) isAppGatewayServiceResponse_Status() {}

func (m *AppGatewayServiceResponse) GetStatus() isAppGatewayServiceResponse_Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetCode() uint32 {
	if x, ok := m.GetStatus().(*AppGatewayServiceResponse_Code); ok {
		return x.Code
	}
	return 0
}

func (m *AppGatewayServiceResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *AppGatewayServiceResponse) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *AppGatewayServiceResponse) GetUser() *User {
	if m != nil {
		return m.User
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetUserCollection() []*User {
	if m != nil {
		return m.UserCollection
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetDocument() *Document {
	if m != nil {
		return m.Document
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetDocumentCollection() []*Document {
	if m != nil {
		return m.DocumentCollection
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetQueryResults() *QueryTransaction {
	if m != nil {
		return m.QueryResults
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*AppGatewayServiceResponse) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _AppGatewayServiceResponse_OneofMarshaler, _AppGatewayServiceResponse_OneofUnmarshaler, _AppGatewayServiceResponse_OneofSizer, []interface{}{
		(*AppGatewayServiceResponse_Code)(nil),
	}
}

func _AppGatewayServiceResponse_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*AppGatewayServiceResponse)
	// status
	switch x := m.Status.(type) {
	case *AppGatewayServiceResponse_Code:
		b.EncodeVarint(1<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.Code))
	case nil:
	default:
		return fmt.Errorf("AppGatewayServiceResponse.Status has unexpected type %T", x)
	}
	return nil
}

func _AppGatewayServiceResponse_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*AppGatewayServiceResponse)
	switch tag {
	case 1: // status.code
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Status = &AppGatewayServiceResponse_Code{uint32(x)}
		return true, err
	default:
		return false, nil
	}
}

func _AppGatewayServiceResponse_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*AppGatewayServiceResponse)
	// status
	switch x := m.Status.(type) {
	case *AppGatewayServiceResponse_Code:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(x.Code))
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

func init() {
	proto.RegisterType((*AppGatewayServiceRequest)(nil), "hwscAppGatewaySvc.AppGatewayServiceRequest")
	proto.RegisterType((*AppGatewayServiceResponse)(nil), "hwscAppGatewaySvc.AppGatewayServiceResponse")
}

func init() { proto.RegisterFile("hwsc-app-gateway-svc.proto", fileDescriptor_1f25123fc1481ece) }

var fileDescriptor_1f25123fc1481ece = []byte{
	// 613 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x56, 0x4f, 0x4f, 0xdb, 0x4e,
	0x10, 0xe5, 0x4f, 0xfe, 0x0e, 0x10, 0x60, 0x41, 0xe0, 0x5f, 0xa4, 0x5f, 0x1b, 0x71, 0x42, 0x6d,
	0xe3, 0x03, 0x1c, 0x39, 0x54, 0x21, 0x11, 0xa9, 0xd4, 0x5e, 0xea, 0x40, 0x0f, 0xbd, 0x44, 0xee,
	0x7a, 0x12, 0x5b, 0x38, 0xb6, 0xf1, 0xae, 0x83, 0xf2, 0x51, 0xf9, 0x0a, 0xfd, 0x14, 0xd5, 0xce,
	0xc6, 0x8e, 0x9b, 0x80, 0xd4, 0x8b, 0x7d, 0x8a, 0x67, 0xe7, 0xed, 0x7b, 0x3b, 0xf3, 0x76, 0xec,
	0x40, 0xdb, 0x7d, 0x16, 0xbc, 0x6b, 0x47, 0x51, 0x77, 0x6a, 0x4b, 0x7c, 0xb6, 0x17, 0x5d, 0x31,
	0xe7, 0x66, 0x14, 0x87, 0x32, 0x64, 0xc7, 0x2a, 0xd7, 0x8b, 0xa2, 0xa1, 0xce, 0x8c, 0xe6, 0xbc,
	0x7d, 0x42, 0xf0, 0x44, 0x60, 0xbc, 0xc2, 0xb5, 0x41, 0xc5, 0xcb, 0xe7, 0x73, 0x02, 0x38, 0x21,
	0x4f, 0x66, 0x18, 0xc8, 0x1c, 0xa8, 0x95, 0xae, 0x2d, 0xe3, 0xf7, 0x04, 0x9c, 0x78, 0x3e, 0x76,
	0x65, 0x6c, 0x07, 0xc2, 0xe6, 0xd2, 0x0b, 0x83, 0xd5, 0x86, 0x8b, 0x97, 0x1d, 0x30, 0x72, 0xe2,
	0x18, 0xcf, 0x3d, 0x8e, 0x16, 0x3e, 0x25, 0x28, 0x24, 0x3b, 0x85, 0xaa, 0x0c, 0x1f, 0x31, 0x30,
	0xb6, 0x3b, 0xdb, 0x97, 0x4d, 0x4b, 0x07, 0xec, 0x06, 0xf6, 0xd5, 0x51, 0xc6, 0xb1, 0x46, 0x19,
	0x3b, 0x9d, 0xed, 0xcb, 0xbd, 0x2b, 0xc3, 0x54, 0x52, 0x0f, 0x02, 0xe3, 0xd1, 0x9c, 0x9b, 0xea,
	0x77, 0xc9, 0x62, 0xed, 0x25, 0xab, 0x80, 0x7d, 0x85, 0xa3, 0xf4, 0x88, 0x19, 0xc1, 0x2e, 0x11,
	0x74, 0x88, 0x60, 0xb0, 0x4c, 0x2a, 0x92, 0xf4, 0x39, 0x25, 0x3a, 0x74, 0xfe, 0x5e, 0x60, 0x2e,
	0x18, 0xaa, 0xb4, 0x71, 0xae, 0xb4, 0x8c, 0xb4, 0x42, 0xa4, 0x26, 0x91, 0xde, 0x79, 0x3e, 0xde,
	0xaf, 0x30, 0x8a, 0x7b, 0x6d, 0x29, 0x95, 0x38, 0x9b, 0xbc, 0xba, 0xce, 0xae, 0xa1, 0xca, 0xdd,
	0x24, 0x78, 0x34, 0xaa, 0x44, 0xfb, 0xff, 0x5b, 0xb4, 0x7d, 0x05, 0xb2, 0x34, 0xf6, 0xe2, 0xf7,
	0x0e, 0xfc, 0xf7, 0x4a, 0x6f, 0x45, 0x14, 0x06, 0x02, 0xd9, 0x29, 0x54, 0x78, 0xe8, 0x20, 0xf5,
	0xf6, 0xe0, 0xcb, 0x96, 0x45, 0x11, 0x33, 0xa0, 0x3e, 0x43, 0x21, 0xec, 0x29, 0x52, 0x5f, 0x9b,
	0x56, 0x1a, 0xae, 0xcc, 0xd8, 0xcd, 0x9b, 0xf1, 0x0e, 0x2a, 0xaa, 0xbd, 0xcb, 0x72, 0x81, 0xce,
	0xa5, 0xbb, 0x4f, 0xeb, 0xec, 0x1a, 0x0e, 0xc9, 0x2c, 0x1e, 0xfa, 0x3e, 0xd2, 0x31, 0x8d, 0x6a,
	0x67, 0x77, 0x0d, 0xda, 0x52, 0x90, 0x7e, 0x86, 0x60, 0x1f, 0xa0, 0x91, 0xb6, 0xda, 0xa8, 0x11,
	0x71, 0x4b, 0xa3, 0x33, 0x47, 0xb2, 0x3c, 0xfb, 0x0c, 0x27, 0x99, 0xa1, 0x39, 0x91, 0x3a, 0x89,
	0xac, 0x6f, 0x63, 0x29, 0x34, 0x27, 0x76, 0x03, 0x07, 0x4f, 0x09, 0xc6, 0x8b, 0x71, 0x8c, 0x22,
	0xf1, 0xa5, 0x30, 0x1a, 0xa4, 0x78, 0xa6, 0xb7, 0x7e, 0x57, 0xa9, 0xbc, 0x21, 0xfb, 0x04, 0xb6,
	0x34, 0xf6, 0xb6, 0x01, 0x35, 0x21, 0x6d, 0x99, 0x88, 0xab, 0x97, 0x16, 0x1c, 0x6f, 0x34, 0x9b,
	0xb9, 0xd0, 0x1c, 0xa2, 0x1c, 0x11, 0x84, 0x7d, 0x34, 0x37, 0x46, 0xcd, 0x7c, 0xeb, 0xee, 0xb7,
	0x3f, 0xfd, 0x1b, 0x58, 0x9b, 0x79, 0xb1, 0xc5, 0xa6, 0xd0, 0x18, 0xa2, 0xbc, 0x27, 0x53, 0x0a,
	0x15, 0xf2, 0x00, 0xfa, 0x31, 0xda, 0x12, 0x95, 0x75, 0x85, 0x4b, 0x0d, 0xd0, 0xc7, 0x92, 0xa4,
	0x1e, 0x22, 0xa7, 0x94, 0xaa, 0x42, 0x38, 0xea, 0x25, 0xd2, 0xc5, 0x40, 0x7a, 0xbc, 0x14, 0x41,
	0x17, 0x9a, 0xdf, 0x3c, 0x21, 0x95, 0x50, 0xc1, 0x97, 0x70, 0x02, 0xf5, 0x21, 0xca, 0xe2, 0x2b,
	0xf2, 0xe1, 0x60, 0xe4, 0xda, 0x31, 0xa6, 0x83, 0x5d, 0xac, 0xda, 0x0c, 0x5a, 0xfa, 0xc6, 0x97,
	0x23, 0xb7, 0x80, 0x76, 0x6a, 0xd7, 0x60, 0xf3, 0x75, 0x55, 0x74, 0xa5, 0x7a, 0x0a, 0x4a, 0x6b,
	0xac, 0x9e, 0xef, 0x72, 0xe4, 0x26, 0x50, 0xef, 0x39, 0x8e, 0xfa, 0x6a, 0x96, 0xf4, 0xda, 0x2a,
	0x5e, 0x6a, 0x0e, 0xe7, 0xea, 0xae, 0x0c, 0x3c, 0x21, 0xbd, 0x80, 0xcb, 0x3b, 0x0f, 0x7d, 0xe7,
	0x87, 0xed, 0x27, 0x28, 0x0a, 0x1f, 0x40, 0xfa, 0x32, 0x96, 0x62, 0xdc, 0x6d, 0xed, 0x67, 0x45,
	0x6d, 0xf8, 0x55, 0xa3, 0xff, 0x8c, 0xd7, 0x7f, 0x02, 0x00, 0x00, 0xff, 0xff, 0xa7, 0x6b, 0x4b,
	0xab, 0xcf, 0x0a, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// AppGatewayServiceClient is the client API for AppGatewayService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AppGatewayServiceClient interface {
	GetStatus(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	GetToken(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	CreateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	DeleteUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	UpdateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	AuthenticateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	ListUsers(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	GetUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	ShareDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	CreateDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	ListUserDocumentCollection(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	UpdateDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	DeleteDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	AddFile(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	DeleteFile(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	ListDistinctFieldValues(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	QueryDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
}

type appGatewayServiceClient struct {
	cc *grpc.ClientConn
}

func NewAppGatewayServiceClient(cc *grpc.ClientConn) AppGatewayServiceClient {
	return &appGatewayServiceClient{cc}
}

func (c *appGatewayServiceClient) GetStatus(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) GetToken(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/GetToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) CreateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/CreateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) DeleteUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/DeleteUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) UpdateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/UpdateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) AuthenticateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/AuthenticateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ListUsers(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/ListUsers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) GetUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/GetUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ShareDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/ShareDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) CreateDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/CreateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ListUserDocumentCollection(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/ListUserDocumentCollection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) UpdateDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/UpdateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) DeleteDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/DeleteDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) AddFile(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/AddFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) DeleteFile(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/DeleteFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ListDistinctFieldValues(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/ListDistinctFieldValues", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) QueryDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/hwscAppGatewaySvc.AppGatewayService/QueryDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AppGatewayServiceServer is the server API for AppGatewayService service.
type AppGatewayServiceServer interface {
	GetStatus(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	GetToken(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	CreateUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	DeleteUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	UpdateUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	AuthenticateUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	ListUsers(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	GetUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	ShareDocument(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	CreateDocument(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	ListUserDocumentCollection(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	UpdateDocument(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	DeleteDocument(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	AddFile(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	DeleteFile(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	ListDistinctFieldValues(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	QueryDocument(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
}

func RegisterAppGatewayServiceServer(s *grpc.Server, srv AppGatewayServiceServer) {
	s.RegisterService(&_AppGatewayService_serviceDesc, srv)
}

func _AppGatewayService_GetStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).GetStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).GetStatus(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_GetToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).GetToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/GetToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).GetToken(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/CreateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).CreateUser(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_DeleteUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).DeleteUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/DeleteUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).DeleteUser(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_UpdateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).UpdateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/UpdateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).UpdateUser(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_AuthenticateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).AuthenticateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/AuthenticateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).AuthenticateUser(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_ListUsers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).ListUsers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/ListUsers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).ListUsers(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_GetUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).GetUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/GetUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).GetUser(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_ShareDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).ShareDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/ShareDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).ShareDocument(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_CreateDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).CreateDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/CreateDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).CreateDocument(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_ListUserDocumentCollection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).ListUserDocumentCollection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/ListUserDocumentCollection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).ListUserDocumentCollection(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_UpdateDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).UpdateDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/UpdateDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).UpdateDocument(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_DeleteDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).DeleteDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/DeleteDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).DeleteDocument(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_AddFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).AddFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/AddFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).AddFile(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_DeleteFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).DeleteFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/DeleteFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).DeleteFile(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_ListDistinctFieldValues_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).ListDistinctFieldValues(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/ListDistinctFieldValues",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).ListDistinctFieldValues(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_QueryDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).QueryDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscAppGatewaySvc.AppGatewayService/QueryDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).QueryDocument(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AppGatewayService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hwscAppGatewaySvc.AppGatewayService",
	HandlerType: (*AppGatewayServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _AppGatewayService_GetStatus_Handler,
		},
		{
			MethodName: "GetToken",
			Handler:    _AppGatewayService_GetToken_Handler,
		},
		{
			MethodName: "CreateUser",
			Handler:    _AppGatewayService_CreateUser_Handler,
		},
		{
			MethodName: "DeleteUser",
			Handler:    _AppGatewayService_DeleteUser_Handler,
		},
		{
			MethodName: "UpdateUser",
			Handler:    _AppGatewayService_UpdateUser_Handler,
		},
		{
			MethodName: "AuthenticateUser",
			Handler:    _AppGatewayService_AuthenticateUser_Handler,
		},
		{
			MethodName: "ListUsers",
			Handler:    _AppGatewayService_ListUsers_Handler,
		},
		{
			MethodName: "GetUser",
			Handler:    _AppGatewayService_GetUser_Handler,
		},
		{
			MethodName: "ShareDocument",
			Handler:    _AppGatewayService_ShareDocument_Handler,
		},
		{
			MethodName: "CreateDocument",
			Handler:    _AppGatewayService_CreateDocument_Handler,
		},
		{
			MethodName: "ListUserDocumentCollection",
			Handler:    _AppGatewayService_ListUserDocumentCollection_Handler,
		},
		{
			MethodName: "UpdateDocument",
			Handler:    _AppGatewayService_UpdateDocument_Handler,
		},
		{
			MethodName: "DeleteDocument",
			Handler:    _AppGatewayService_DeleteDocument_Handler,
		},
		{
			MethodName: "AddFile",
			Handler:    _AppGatewayService_AddFile_Handler,
		},
		{
			MethodName: "DeleteFile",
			Handler:    _AppGatewayService_DeleteFile_Handler,
		},
		{
			MethodName: "ListDistinctFieldValues",
			Handler:    _AppGatewayService_ListDistinctFieldValues_Handler,
		},
		{
			MethodName: "QueryDocument",
			Handler:    _AppGatewayService_QueryDocument_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "hwsc-app-gateway-svc.proto",
}
