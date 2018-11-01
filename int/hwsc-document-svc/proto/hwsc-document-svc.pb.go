// Code generated by protoc-gen-go. DO NOT EDIT.
// source: hwsc-document-svc.proto

package hwscDocumentSvcPb

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

type DocumentRequest_FileType int32

const (
	DocumentRequest_FILE  DocumentRequest_FileType = 0
	DocumentRequest_AUDIO DocumentRequest_FileType = 1
	DocumentRequest_IMAGE DocumentRequest_FileType = 2
	DocumentRequest_VIDEO DocumentRequest_FileType = 3
)

var DocumentRequest_FileType_name = map[int32]string{
	0: "FILE",
	1: "AUDIO",
	2: "IMAGE",
	3: "VIDEO",
}

var DocumentRequest_FileType_value = map[string]int32{
	"FILE":  0,
	"AUDIO": 1,
	"IMAGE": 2,
	"VIDEO": 3,
}

func (x DocumentRequest_FileType) String() string {
	return proto.EnumName(DocumentRequest_FileType_name, int32(x))
}

func (DocumentRequest_FileType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_df8cb3768c60511d, []int{0, 0}
}

type DocumentRequest struct {
	Data *Document `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	// For adding/deleting FileMetadata
	Url                  string                   `protobuf:"bytes,2,opt,name=url,proto3" json:"url,omitempty"`
	Fuid                 string                   `protobuf:"bytes,3,opt,name=fuid,proto3" json:"fuid,omitempty"`
	Media                DocumentRequest_FileType `protobuf:"varint,4,opt,name=media,proto3,enum=hwscDocumentSvc.DocumentRequest_FileType" json:"media,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-" bson:"-"`
	XXX_unrecognized     []byte                   `json:"-" bson:"-"`
	XXX_sizecache        int32                    `json:"-" bson:"-"`
}

func (m *DocumentRequest) Reset()         { *m = DocumentRequest{} }
func (m *DocumentRequest) String() string { return proto.CompactTextString(m) }
func (*DocumentRequest) ProtoMessage()    {}
func (*DocumentRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_df8cb3768c60511d, []int{0}
}

func (m *DocumentRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DocumentRequest.Unmarshal(m, b)
}
func (m *DocumentRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DocumentRequest.Marshal(b, m, deterministic)
}
func (m *DocumentRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DocumentRequest.Merge(m, src)
}
func (m *DocumentRequest) XXX_Size() int {
	return xxx_messageInfo_DocumentRequest.Size(m)
}
func (m *DocumentRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DocumentRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DocumentRequest proto.InternalMessageInfo

func (m *DocumentRequest) GetData() *Document {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *DocumentRequest) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

func (m *DocumentRequest) GetFuid() string {
	if m != nil {
		return m.Fuid
	}
	return ""
}

func (m *DocumentRequest) GetMedia() DocumentRequest_FileType {
	if m != nil {
		return m.Media
	}
	return DocumentRequest_FILE
}

type DocumentResponse struct {
	// Types that are valid to be assigned to Status:
	//	*DocumentResponse_Code
	Status  isDocumentResponse_Status `protobuf_oneof:"status"`
	Message string                    `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Data    *Document                 `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
	// Return for ListUserDocumentCollection
	DocumentCollection   []*Document `protobuf:"bytes,4,rep,name=document_collection,json=documentCollection,proto3" json:"document_collection,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-" bson:"-"`
	XXX_unrecognized     []byte      `json:"-" bson:"-"`
	XXX_sizecache        int32       `json:"-" bson:"-"`
}

func (m *DocumentResponse) Reset()         { *m = DocumentResponse{} }
func (m *DocumentResponse) String() string { return proto.CompactTextString(m) }
func (*DocumentResponse) ProtoMessage()    {}
func (*DocumentResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_df8cb3768c60511d, []int{1}
}

func (m *DocumentResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DocumentResponse.Unmarshal(m, b)
}
func (m *DocumentResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DocumentResponse.Marshal(b, m, deterministic)
}
func (m *DocumentResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DocumentResponse.Merge(m, src)
}
func (m *DocumentResponse) XXX_Size() int {
	return xxx_messageInfo_DocumentResponse.Size(m)
}
func (m *DocumentResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DocumentResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DocumentResponse proto.InternalMessageInfo

type isDocumentResponse_Status interface {
	isDocumentResponse_Status()
}

type DocumentResponse_Code struct {
	Code uint32 `protobuf:"varint,1,opt,name=code,proto3,oneof"`
}

func (*DocumentResponse_Code) isDocumentResponse_Status() {}

func (m *DocumentResponse) GetStatus() isDocumentResponse_Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *DocumentResponse) GetCode() uint32 {
	if x, ok := m.GetStatus().(*DocumentResponse_Code); ok {
		return x.Code
	}
	return 0
}

func (m *DocumentResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *DocumentResponse) GetData() *Document {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *DocumentResponse) GetDocumentCollection() []*Document {
	if m != nil {
		return m.DocumentCollection
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*DocumentResponse) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _DocumentResponse_OneofMarshaler, _DocumentResponse_OneofUnmarshaler, _DocumentResponse_OneofSizer, []interface{}{
		(*DocumentResponse_Code)(nil),
	}
}

func _DocumentResponse_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*DocumentResponse)
	// status
	switch x := m.Status.(type) {
	case *DocumentResponse_Code:
		b.EncodeVarint(1<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.Code))
	case nil:
	default:
		return fmt.Errorf("DocumentResponse.Status has unexpected type %T", x)
	}
	return nil
}

func _DocumentResponse_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*DocumentResponse)
	switch tag {
	case 1: // status.code
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Status = &DocumentResponse_Code{uint32(x)}
		return true, err
	default:
		return false, nil
	}
}

func _DocumentResponse_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*DocumentResponse)
	// status
	switch x := m.Status.(type) {
	case *DocumentResponse_Code:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(x.Code))
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

func init() {
	proto.RegisterEnum("hwscDocumentSvc.DocumentRequest_FileType", DocumentRequest_FileType_name, DocumentRequest_FileType_value)
	proto.RegisterType((*DocumentRequest)(nil), "hwscDocumentSvc.DocumentRequest")
	proto.RegisterType((*DocumentResponse)(nil), "hwscDocumentSvc.DocumentResponse")
}

func init() { proto.RegisterFile("hwsc-document-svc.proto", fileDescriptor_df8cb3768c60511d) }

var fileDescriptor_df8cb3768c60511d = []byte{
	// 398 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x93, 0x41, 0xaf, 0xd2, 0x40,
	0x10, 0xc7, 0x29, 0x2d, 0x08, 0x63, 0x2c, 0x75, 0x31, 0xb1, 0xe1, 0x54, 0x7b, 0xc2, 0x03, 0x3d,
	0x60, 0x3c, 0x13, 0xa0, 0x80, 0x4d, 0x20, 0x98, 0x22, 0x62, 0xbc, 0x98, 0xb2, 0x3b, 0x6a, 0x93,
	0x42, 0x6b, 0x77, 0x8b, 0xf1, 0x53, 0x19, 0x3f, 0x8b, 0x5f, 0xe8, 0xa5, 0x0b, 0x85, 0x84, 0xf7,
	0xc2, 0xbb, 0xf4, 0xdd, 0x66, 0x67, 0x7e, 0xfb, 0xef, 0xcc, 0xbf, 0xb3, 0xf0, 0xfa, 0xe7, 0x6f,
	0x4e, 0x7b, 0x2c, 0xa6, 0xd9, 0x0e, 0xf7, 0xa2, 0xc7, 0x0f, 0xd4, 0x49, 0xd2, 0x58, 0xc4, 0xa4,
	0x95, 0x17, 0xdc, 0x53, 0x7e, 0x75, 0xa0, 0x1d, 0xbd, 0x80, 0x8e, 0x80, 0xfd, 0x5f, 0x81, 0x56,
	0x51, 0xf7, 0xf1, 0x57, 0x86, 0x5c, 0x10, 0x1b, 0x34, 0x16, 0x88, 0xc0, 0x54, 0x2c, 0xa5, 0xfb,
	0xbc, 0xaf, 0x3b, 0xb9, 0x86, 0x73, 0x86, 0x64, 0x8d, 0x18, 0xa0, 0x66, 0x69, 0x64, 0x56, 0x2d,
	0xa5, 0xdb, 0xf4, 0xf3, 0x90, 0x10, 0xd0, 0xbe, 0x67, 0x21, 0x33, 0x55, 0x99, 0x92, 0x31, 0x19,
	0x40, 0x6d, 0x87, 0x2c, 0x0c, 0x4c, 0xcd, 0x52, 0xba, 0x7a, 0xff, 0xad, 0x73, 0xd5, 0x8e, 0x73,
	0xf5, 0x69, 0x67, 0x1a, 0x46, 0xf8, 0xe9, 0x4f, 0x82, 0xfe, 0xf1, 0x9e, 0xfd, 0x1e, 0x1a, 0x45,
	0x8a, 0x34, 0x40, 0x9b, 0x7a, 0xf3, 0x89, 0x51, 0x21, 0x4d, 0xa8, 0x0d, 0xd7, 0xae, 0xb7, 0x34,
	0x94, 0x3c, 0xf4, 0x16, 0xc3, 0xd9, 0xc4, 0xa8, 0xe6, 0xe1, 0x67, 0xcf, 0x9d, 0x2c, 0x0d, 0xd5,
	0xfe, 0xa7, 0x80, 0x71, 0x91, 0xe6, 0x49, 0xbc, 0xe7, 0x48, 0x5e, 0x81, 0x46, 0x63, 0x86, 0x72,
	0xac, 0x17, 0x1f, 0x2a, 0xbe, 0x3c, 0x11, 0x13, 0x9e, 0xed, 0x90, 0xf3, 0xe0, 0x07, 0x9e, 0x86,
	0x29, 0x8e, 0x67, 0x1b, 0xd4, 0x1b, 0x36, 0x0c, 0xa0, 0x5d, 0x18, 0xfa, 0x8d, 0xc6, 0x51, 0x84,
	0x54, 0x84, 0xf1, 0xde, 0xd4, 0x2c, 0xf5, 0x81, 0x2b, 0xa4, 0x40, 0xc7, 0x67, 0x72, 0xd4, 0x80,
	0x3a, 0x17, 0x81, 0xc8, 0x78, 0xff, 0xaf, 0x76, 0xf9, 0x13, 0x2b, 0x4c, 0x0f, 0x21, 0x45, 0xe2,
	0x43, 0x73, 0x86, 0x62, 0x25, 0x01, 0x62, 0x3d, 0xe6, 0x5e, 0xe7, 0xcd, 0x0d, 0xe2, 0x68, 0x82,
	0x5d, 0x21, 0x1b, 0xd0, 0xc7, 0x29, 0x06, 0x02, 0x8b, 0x5a, 0x59, 0xc2, 0x14, 0x3a, 0xf3, 0x90,
	0x8b, 0x35, 0xc7, 0xd4, 0xbd, 0x37, 0x68, 0x89, 0xdd, 0xaf, 0x13, 0xf6, 0x04, 0xdd, 0x6f, 0x40,
	0x77, 0x31, 0xc2, 0xf2, 0x85, 0xbf, 0x40, 0x6b, 0xc8, 0x58, 0xbe, 0xc5, 0x0b, 0x14, 0x81, 0xdc,
	0x9a, 0x72, 0x94, 0x47, 0xed, 0xaf, 0x2f, 0xaf, 0xa8, 0x8f, 0xdb, 0x6d, 0x5d, 0xbe, 0xeb, 0x77,
	0x77, 0x01, 0x00, 0x00, 0xff, 0xff, 0xa3, 0x15, 0xfb, 0xce, 0x13, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// DocumentServiceClient is the client API for DocumentService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type DocumentServiceClient interface {
	GetStatus(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
	CreateDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
	ListUserDocumentCollection(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
	UpdateDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
	DeleteDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
	AddFileMetadata(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
}

type documentServiceClient struct {
	cc *grpc.ClientConn
}

func NewDocumentServiceClient(cc *grpc.ClientConn) DocumentServiceClient {
	return &documentServiceClient{cc}
}

func (c *documentServiceClient) GetStatus(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *documentServiceClient) CreateDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/CreateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *documentServiceClient) ListUserDocumentCollection(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/ListUserDocumentCollection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *documentServiceClient) UpdateDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/UpdateDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *documentServiceClient) DeleteDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/DeleteDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *documentServiceClient) AddFileMetadata(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/AddFileMetadata", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DocumentServiceServer is the server API for DocumentService service.
type DocumentServiceServer interface {
	GetStatus(context.Context, *DocumentRequest) (*DocumentResponse, error)
	CreateDocument(context.Context, *DocumentRequest) (*DocumentResponse, error)
	ListUserDocumentCollection(context.Context, *DocumentRequest) (*DocumentResponse, error)
	UpdateDocument(context.Context, *DocumentRequest) (*DocumentResponse, error)
	DeleteDocument(context.Context, *DocumentRequest) (*DocumentResponse, error)
	AddFileMetadata(context.Context, *DocumentRequest) (*DocumentResponse, error)
}

func RegisterDocumentServiceServer(s *grpc.Server, srv DocumentServiceServer) {
	s.RegisterService(&_DocumentService_serviceDesc, srv)
}

func _DocumentService_GetStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).GetStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).GetStatus(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DocumentService_CreateDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).CreateDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/CreateDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).CreateDocument(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DocumentService_ListUserDocumentCollection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).ListUserDocumentCollection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/ListUserDocumentCollection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).ListUserDocumentCollection(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DocumentService_UpdateDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).UpdateDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/UpdateDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).UpdateDocument(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DocumentService_DeleteDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).DeleteDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/DeleteDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).DeleteDocument(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DocumentService_AddFileMetadata_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).AddFileMetadata(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/AddFileMetadata",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).AddFileMetadata(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _DocumentService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hwscDocumentSvc.DocumentService",
	HandlerType: (*DocumentServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _DocumentService_GetStatus_Handler,
		},
		{
			MethodName: "CreateDocument",
			Handler:    _DocumentService_CreateDocument_Handler,
		},
		{
			MethodName: "ListUserDocumentCollection",
			Handler:    _DocumentService_ListUserDocumentCollection_Handler,
		},
		{
			MethodName: "UpdateDocument",
			Handler:    _DocumentService_UpdateDocument_Handler,
		},
		{
			MethodName: "DeleteDocument",
			Handler:    _DocumentService_DeleteDocument_Handler,
		},
		{
			MethodName: "AddFileMetadata",
			Handler:    _DocumentService_AddFileMetadata_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "hwsc-document-svc.proto",
}
