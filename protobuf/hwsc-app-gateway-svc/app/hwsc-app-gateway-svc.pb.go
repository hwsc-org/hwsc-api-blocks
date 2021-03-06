// Code generated by protoc-gen-go. DO NOT EDIT.
// source: protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc.proto

package app

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	document "github.com/hwsc-org/hwsc-api-blocks/protobuf/hwsc-document-svc/document"
	file "github.com/hwsc-org/hwsc-api-blocks/protobuf/hwsc-file-transaction-svc/file"
	user "github.com/hwsc-org/hwsc-api-blocks/protobuf/hwsc-user-svc/user"
	lib "github.com/hwsc-org/hwsc-api-blocks/protobuf/lib"
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

type AppGatewayServiceRequest struct {
	Token                  string                       `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	UserRequest            *user.UserRequest            `protobuf:"bytes,2,opt,name=user_request,json=userRequest,proto3" json:"user_request,omitempty"`
	DocumentRequest        *document.DocumentRequest    `protobuf:"bytes,3,opt,name=document_request,json=documentRequest,proto3" json:"document_request,omitempty"`
	FileTransactionRequest *file.FileTransactionRequest `protobuf:"bytes,4,opt,name=file_transaction_request,json=fileTransactionRequest,proto3" json:"file_transaction_request,omitempty"`
	Chunk                  *file.Chunk                  `protobuf:"bytes,5,opt,name=chunk,proto3" json:"chunk,omitempty"`
	XXX_NoUnkeyedLiteral   struct{}                     `json:"-"`
	XXX_unrecognized       []byte                       `json:"-"`
	XXX_sizecache          int32                        `json:"-"`
}

func (m *AppGatewayServiceRequest) Reset()         { *m = AppGatewayServiceRequest{} }
func (m *AppGatewayServiceRequest) String() string { return proto.CompactTextString(m) }
func (*AppGatewayServiceRequest) ProtoMessage()    {}
func (*AppGatewayServiceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_e704376ae5827c01, []int{0}
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

func (m *AppGatewayServiceRequest) GetUserRequest() *user.UserRequest {
	if m != nil {
		return m.UserRequest
	}
	return nil
}

func (m *AppGatewayServiceRequest) GetDocumentRequest() *document.DocumentRequest {
	if m != nil {
		return m.DocumentRequest
	}
	return nil
}

func (m *AppGatewayServiceRequest) GetFileTransactionRequest() *file.FileTransactionRequest {
	if m != nil {
		return m.FileTransactionRequest
	}
	return nil
}

func (m *AppGatewayServiceRequest) GetChunk() *file.Chunk {
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
	User    *lib.User                          `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	// for ListUsers response
	UserCollection []*lib.User   `protobuf:"bytes,5,rep,name=user_collection,json=userCollection,proto3" json:"user_collection,omitempty"`
	Document       *lib.Document `protobuf:"bytes,6,opt,name=document,proto3" json:"document,omitempty"`
	// Response for ListUserDocumentCollection
	// Response for QueryDocument
	DocumentCollection []*lib.Document `protobuf:"bytes,7,rep,name=document_collection,json=documentCollection,proto3" json:"document_collection,omitempty"`
	// Response for ListDistinctFieldValues
	QueryResults         *lib.QueryTransaction `protobuf:"bytes,8,opt,name=query_results,json=queryResults,proto3" json:"query_results,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *AppGatewayServiceResponse) Reset()         { *m = AppGatewayServiceResponse{} }
func (m *AppGatewayServiceResponse) String() string { return proto.CompactTextString(m) }
func (*AppGatewayServiceResponse) ProtoMessage()    {}
func (*AppGatewayServiceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_e704376ae5827c01, []int{1}
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

func (m *AppGatewayServiceResponse) GetUser() *lib.User {
	if m != nil {
		return m.User
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetUserCollection() []*lib.User {
	if m != nil {
		return m.UserCollection
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetDocument() *lib.Document {
	if m != nil {
		return m.Document
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetDocumentCollection() []*lib.Document {
	if m != nil {
		return m.DocumentCollection
	}
	return nil
}

func (m *AppGatewayServiceResponse) GetQueryResults() *lib.QueryTransaction {
	if m != nil {
		return m.QueryResults
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*AppGatewayServiceResponse) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*AppGatewayServiceResponse_Code)(nil),
	}
}

func init() {
	proto.RegisterType((*AppGatewayServiceRequest)(nil), "app.AppGatewayServiceRequest")
	proto.RegisterType((*AppGatewayServiceResponse)(nil), "app.AppGatewayServiceResponse")
}

func init() {
	proto.RegisterFile("protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc.proto", fileDescriptor_e704376ae5827c01)
}

var fileDescriptor_e704376ae5827c01 = []byte{
	// 658 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x96, 0x4f, 0x4f, 0xdb, 0x4c,
	0x10, 0xc6, 0x81, 0x10, 0x42, 0x06, 0x02, 0x2f, 0xfb, 0xd2, 0x62, 0xd2, 0x52, 0x51, 0x4e, 0xf4,
	0x10, 0x47, 0xa2, 0x3d, 0xb5, 0x55, 0x25, 0x20, 0x25, 0x15, 0xa2, 0x55, 0x31, 0x7f, 0x0e, 0x48,
	0x15, 0xda, 0xd8, 0x43, 0x62, 0x61, 0xec, 0xc5, 0xbb, 0x06, 0xf1, 0x89, 0x7a, 0xec, 0xa7, 0xea,
	0xf7, 0xa8, 0x76, 0x36, 0x36, 0x71, 0x21, 0xea, 0x81, 0xbd, 0x65, 0x67, 0x9e, 0xf9, 0xed, 0xce,
	0x33, 0x6b, 0xc7, 0xf0, 0x51, 0xa4, 0x89, 0x4a, 0x7a, 0xd9, 0x45, 0x7b, 0x70, 0x2b, 0xfd, 0x16,
	0x17, 0xa2, 0xd5, 0xe7, 0x0a, 0x6f, 0xf9, 0x5d, 0x4b, 0xde, 0xf8, 0x6d, 0x2e, 0xc4, 0xa3, 0x09,
	0x97, 0xca, 0x58, 0x85, 0x0b, 0xd1, 0x6c, 0x97, 0x11, 0x99, 0xc4, 0x94, 0x6a, 0xf5, 0x8f, 0x72,
	0xc8, 0x54, 0x35, 0x57, 0x8a, 0x82, 0x28, 0xec, 0x91, 0x6c, 0x98, 0xf8, 0x50, 0x26, 0x05, 0x89,
	0x9f, 0x5d, 0x61, 0xac, 0x88, 0x96, 0x2f, 0x1e, 0xa6, 0x86, 0xc5, 0x2f, 0x4a, 0xd4, 0x5c, 0x30,
	0x4c, 0x76, 0xcb, 0xe4, 0x8b, 0x30, 0xc2, 0x96, 0x4a, 0x79, 0x2c, 0xb9, 0xaf, 0xc2, 0x24, 0xa6,
	0x1d, 0x74, 0x70, 0x7c, 0xda, 0x80, 0x36, 0x7e, 0x4e, 0x81, 0xb3, 0x2d, 0x44, 0xd7, 0x58, 0x71,
	0x84, 0xe9, 0x4d, 0xe8, 0xa3, 0x87, 0xd7, 0x19, 0x4a, 0xc5, 0x96, 0xa1, 0xaa, 0x92, 0x4b, 0x8c,
	0x9d, 0xc9, 0xf5, 0xc9, 0xcd, 0xba, 0x67, 0x16, 0xec, 0x1d, 0xcc, 0xeb, 0x1e, 0xcf, 0x53, 0xa3,
	0x72, 0xa6, 0xd6, 0x27, 0x37, 0xe7, 0xb6, 0x96, 0x5c, 0x6a, 0xfc, 0x44, 0x62, 0x3a, 0x2c, 0xf7,
	0xe6, 0xb2, 0xfb, 0x05, 0xeb, 0xc0, 0x7f, 0x79, 0x0f, 0x45, 0x65, 0x85, 0x2a, 0x57, 0xdd, 0xa2,
	0xb9, 0xce, 0xf0, 0x47, 0x4e, 0x58, 0x0c, 0xca, 0x01, 0x76, 0x0a, 0x8e, 0x6e, 0xe6, 0x7c, 0xa4,
	0x99, 0x82, 0x36, 0x4d, 0xb4, 0x97, 0xae, 0x16, 0xb8, 0x7b, 0x61, 0x84, 0xc7, 0xf7, 0xa2, 0x1c,
	0xf8, 0xfc, 0xe2, 0xd1, 0x38, 0x7b, 0x0d, 0x55, 0x7f, 0x90, 0xc5, 0x97, 0x4e, 0x95, 0x20, 0x73,
	0x06, 0xb2, 0xab, 0x43, 0x9e, 0xc9, 0x6c, 0xfc, 0x9e, 0x82, 0xd5, 0x47, 0x9c, 0x92, 0x22, 0x89,
	0x25, 0xb2, 0x65, 0x98, 0xf6, 0x93, 0x00, 0xc9, 0xa9, 0xc6, 0x97, 0x09, 0x8f, 0x56, 0xcc, 0x81,
	0xda, 0x15, 0x4a, 0xc9, 0xfb, 0x48, 0x2e, 0xd5, 0xbd, 0x7c, 0x79, 0x6f, 0x6d, 0x65, 0xd4, 0xda,
	0x35, 0x98, 0xd6, 0x9e, 0x0d, 0x5b, 0xa9, 0xbb, 0x51, 0xd8, 0x33, 0x8e, 0x52, 0x98, 0x6d, 0xc1,
	0x22, 0x39, 0xef, 0x27, 0x51, 0x84, 0x74, 0x7e, 0xa7, 0xba, 0x5e, 0x29, 0x2b, 0x17, 0xb4, 0x62,
	0xb7, 0x10, 0xb0, 0x37, 0x30, 0x9b, 0x9b, 0xe8, 0xcc, 0x10, 0xb6, 0x41, 0xe2, 0xc2, 0xea, 0x22,
	0xcd, 0x3e, 0xc1, 0xff, 0xc5, 0x88, 0x46, 0xb6, 0xa8, 0xd1, 0x16, 0x7f, 0x55, 0xb1, 0x5c, 0x39,
	0xb2, 0xd5, 0x7b, 0x68, 0x5c, 0x67, 0x98, 0xde, 0x9d, 0xa7, 0x28, 0xb3, 0x48, 0x49, 0x67, 0x96,
	0xf6, 0x7b, 0x46, 0x95, 0x87, 0x3a, 0x33, 0xea, 0xfc, 0x3c, 0x69, 0x3d, 0x23, 0xdd, 0x99, 0x85,
	0x19, 0xa9, 0xb8, 0xca, 0xe4, 0xd6, 0x2f, 0x80, 0xa5, 0x07, 0x3e, 0xb3, 0x03, 0xa8, 0x77, 0x51,
	0x1d, 0x91, 0x84, 0xad, 0xb9, 0x5c, 0x08, 0x77, 0xdc, 0xb5, 0x6d, 0xbe, 0x1a, 0x97, 0x36, 0xb3,
	0xda, 0x98, 0x60, 0x1e, 0x2c, 0x76, 0x51, 0x7d, 0xc3, 0xdb, 0xed, 0x4c, 0x0d, 0x8e, 0x8d, 0xf5,
	0x4f, 0x65, 0x7e, 0x05, 0xd8, 0x4d, 0x91, 0x2b, 0xd4, 0x63, 0xb0, 0x82, 0xeb, 0x60, 0x84, 0x16,
	0x71, 0x27, 0x22, 0xb0, 0x76, 0xba, 0x03, 0xa8, 0x1f, 0x84, 0x52, 0x69, 0x98, 0x85, 0x71, 0xec,
	0x43, 0xad, 0x8b, 0xca, 0xce, 0xc9, 0xbe, 0x43, 0xe3, 0x68, 0xc0, 0x53, 0xcc, 0x6f, 0xea, 0xd3,
	0x89, 0x87, 0xb0, 0x60, 0x06, 0x6b, 0x0f, 0xf9, 0x03, 0x9a, 0xb9, 0x7d, 0x9d, 0x87, 0xcf, 0x91,
	0x8d, 0x13, 0x9b, 0x61, 0x5b, 0x35, 0xc1, 0x5c, 0x47, 0x7b, 0xc8, 0x7d, 0xa8, 0x6d, 0x07, 0x81,
	0x7e, 0x51, 0x5b, 0x7c, 0x5a, 0xec, 0xe0, 0xce, 0x60, 0x45, 0xcf, 0xa7, 0x13, 0x4a, 0x15, 0xc6,
	0xbe, 0xda, 0x0b, 0x31, 0x0a, 0x4e, 0x79, 0x94, 0xa1, 0xb4, 0x72, 0x41, 0xe9, 0x5d, 0x68, 0xcd,
	0xc8, 0x9d, 0xee, 0xd9, 0xe7, 0x7e, 0xa8, 0x06, 0x59, 0xcf, 0xf5, 0x93, 0x2b, 0xf3, 0x8f, 0x9f,
	0xa4, 0xfd, 0xfc, 0x3b, 0x27, 0x6c, 0xf5, 0xa2, 0xc4, 0xbf, 0x94, 0xed, 0x7f, 0x7e, 0x19, 0xf5,
	0x66, 0x48, 0xf2, 0xf6, 0x4f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xf5, 0xd8, 0x33, 0x01, 0x45, 0x09,
	0x00, 0x00,
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
	GetNewAuthToken(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	CreateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	DeleteUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
	UpdateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error)
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
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) GetNewAuthToken(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/GetNewAuthToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) CreateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/CreateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) DeleteUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/DeleteUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) UpdateUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/UpdateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ListUsers(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/ListUsers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) GetUser(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/GetUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ShareDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/ShareDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) CreateDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/CreateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ListUserDocumentCollection(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/ListUserDocumentCollection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) UpdateDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/UpdateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) DeleteDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/DeleteDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) AddFile(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/AddFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) DeleteFile(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/DeleteFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) ListDistinctFieldValues(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/ListDistinctFieldValues", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appGatewayServiceClient) QueryDocument(ctx context.Context, in *AppGatewayServiceRequest, opts ...grpc.CallOption) (*AppGatewayServiceResponse, error) {
	out := new(AppGatewayServiceResponse)
	err := c.cc.Invoke(ctx, "/app.AppGatewayService/QueryDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AppGatewayServiceServer is the server API for AppGatewayService service.
type AppGatewayServiceServer interface {
	GetStatus(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	GetNewAuthToken(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	CreateUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	DeleteUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
	UpdateUser(context.Context, *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error)
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

// UnimplementedAppGatewayServiceServer can be embedded to have forward compatible implementations.
type UnimplementedAppGatewayServiceServer struct {
}

func (*UnimplementedAppGatewayServiceServer) GetStatus(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetStatus not implemented")
}
func (*UnimplementedAppGatewayServiceServer) GetNewAuthToken(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNewAuthToken not implemented")
}
func (*UnimplementedAppGatewayServiceServer) CreateUser(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUser not implemented")
}
func (*UnimplementedAppGatewayServiceServer) DeleteUser(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUser not implemented")
}
func (*UnimplementedAppGatewayServiceServer) UpdateUser(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUser not implemented")
}
func (*UnimplementedAppGatewayServiceServer) ListUsers(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUsers not implemented")
}
func (*UnimplementedAppGatewayServiceServer) GetUser(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUser not implemented")
}
func (*UnimplementedAppGatewayServiceServer) ShareDocument(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ShareDocument not implemented")
}
func (*UnimplementedAppGatewayServiceServer) CreateDocument(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDocument not implemented")
}
func (*UnimplementedAppGatewayServiceServer) ListUserDocumentCollection(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUserDocumentCollection not implemented")
}
func (*UnimplementedAppGatewayServiceServer) UpdateDocument(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDocument not implemented")
}
func (*UnimplementedAppGatewayServiceServer) DeleteDocument(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDocument not implemented")
}
func (*UnimplementedAppGatewayServiceServer) AddFile(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddFile not implemented")
}
func (*UnimplementedAppGatewayServiceServer) DeleteFile(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFile not implemented")
}
func (*UnimplementedAppGatewayServiceServer) ListDistinctFieldValues(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDistinctFieldValues not implemented")
}
func (*UnimplementedAppGatewayServiceServer) QueryDocument(ctx context.Context, req *AppGatewayServiceRequest) (*AppGatewayServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QueryDocument not implemented")
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
		FullMethod: "/app.AppGatewayService/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).GetStatus(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppGatewayService_GetNewAuthToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppGatewayServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppGatewayServiceServer).GetNewAuthToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/app.AppGatewayService/GetNewAuthToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).GetNewAuthToken(ctx, req.(*AppGatewayServiceRequest))
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
		FullMethod: "/app.AppGatewayService/CreateUser",
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
		FullMethod: "/app.AppGatewayService/DeleteUser",
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
		FullMethod: "/app.AppGatewayService/UpdateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).UpdateUser(ctx, req.(*AppGatewayServiceRequest))
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
		FullMethod: "/app.AppGatewayService/ListUsers",
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
		FullMethod: "/app.AppGatewayService/GetUser",
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
		FullMethod: "/app.AppGatewayService/ShareDocument",
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
		FullMethod: "/app.AppGatewayService/CreateDocument",
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
		FullMethod: "/app.AppGatewayService/ListUserDocumentCollection",
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
		FullMethod: "/app.AppGatewayService/UpdateDocument",
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
		FullMethod: "/app.AppGatewayService/DeleteDocument",
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
		FullMethod: "/app.AppGatewayService/AddFile",
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
		FullMethod: "/app.AppGatewayService/DeleteFile",
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
		FullMethod: "/app.AppGatewayService/ListDistinctFieldValues",
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
		FullMethod: "/app.AppGatewayService/QueryDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppGatewayServiceServer).QueryDocument(ctx, req.(*AppGatewayServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _AppGatewayService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "app.AppGatewayService",
	HandlerType: (*AppGatewayServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _AppGatewayService_GetStatus_Handler,
		},
		{
			MethodName: "GetNewAuthToken",
			Handler:    _AppGatewayService_GetNewAuthToken_Handler,
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
	Metadata: "protobuf/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc.proto",
}
