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

type DocumentRequest struct {
	Data      *Document `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	ImageUrls []string  `protobuf:"bytes,2,rep,name=image_urls,json=imageUrls,proto3" json:"image_urls,omitempty"`
	AudioUrls []string  `protobuf:"bytes,3,rep,name=audio_urls,json=audioUrls,proto3" json:"audio_urls,omitempty"`
	VideoUrls []string  `protobuf:"bytes,4,rep,name=video_urls,json=videoUrls,proto3" json:"video_urls,omitempty"`
	FileUrls  []string  `protobuf:"bytes,5,rep,name=file_urls,json=fileUrls,proto3" json:"file_urls,omitempty"`
	// Request for AddFileMetadata & DeleteFileMetadata
	FileMetadataParameters *FileMetadataTransaction `protobuf:"bytes,6,opt,name=fileMetadata_parameters,json=fileMetadataParameters,proto3" json:"fileMetadata_parameters,omitempty"`
	// Request for QueryDocument
	QueryParameters      *QueryTransaction `protobuf:"bytes,7,opt,name=query_parameters,json=queryParameters,proto3" json:"query_parameters,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-" bson:"-"`
	XXX_unrecognized     []byte            `json:"-" bson:"-"`
	XXX_sizecache        int32             `json:"-" bson:"-"`
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

func (m *DocumentRequest) GetImageUrls() []string {
	if m != nil {
		return m.ImageUrls
	}
	return nil
}

func (m *DocumentRequest) GetAudioUrls() []string {
	if m != nil {
		return m.AudioUrls
	}
	return nil
}

func (m *DocumentRequest) GetVideoUrls() []string {
	if m != nil {
		return m.VideoUrls
	}
	return nil
}

func (m *DocumentRequest) GetFileUrls() []string {
	if m != nil {
		return m.FileUrls
	}
	return nil
}

func (m *DocumentRequest) GetFileMetadataParameters() *FileMetadataTransaction {
	if m != nil {
		return m.FileMetadataParameters
	}
	return nil
}

func (m *DocumentRequest) GetQueryParameters() *QueryTransaction {
	if m != nil {
		return m.QueryParameters
	}
	return nil
}

type DocumentResponse struct {
	// Types that are valid to be assigned to Status:
	//	*DocumentResponse_Code
	Status  isDocumentResponse_Status `protobuf_oneof:"status"`
	Message string                    `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Data    *Document                 `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
	// Response for ListUserDocumentCollection
	// Response for QueryDocument
	DocumentCollection []*Document `protobuf:"bytes,4,rep,name=document_collection,json=documentCollection,proto3" json:"document_collection,omitempty"`
	// Response for ListDistinctFieldValues
	QueryResults         *QueryTransaction `protobuf:"bytes,5,opt,name=query_results,json=queryResults,proto3" json:"query_results,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-" bson:"-"`
	XXX_unrecognized     []byte            `json:"-" bson:"-"`
	XXX_sizecache        int32             `json:"-" bson:"-"`
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

func (m *DocumentResponse) GetQueryResults() *QueryTransaction {
	if m != nil {
		return m.QueryResults
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
	proto.RegisterType((*DocumentRequest)(nil), "hwscDocumentSvc.DocumentRequest")
	proto.RegisterType((*DocumentResponse)(nil), "hwscDocumentSvc.DocumentResponse")
}

func init() { proto.RegisterFile("hwsc-document-svc.proto", fileDescriptor_df8cb3768c60511d) }

var fileDescriptor_df8cb3768c60511d = []byte{
	// 484 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x94, 0xcf, 0x6e, 0x13, 0x31,
	0x10, 0xc6, 0x9b, 0x3f, 0xa4, 0xcd, 0x40, 0x92, 0xe2, 0xa2, 0x66, 0x15, 0x54, 0x29, 0xe4, 0x94,
	0x4b, 0xf7, 0x50, 0x8e, 0x1c, 0x50, 0xdb, 0xa8, 0x70, 0x00, 0xa9, 0x6c, 0x48, 0x8a, 0xe0, 0x10,
	0x5c, 0xef, 0x50, 0x2c, 0x39, 0xbb, 0xa9, 0xed, 0x0d, 0xe2, 0x05, 0x39, 0xf0, 0x30, 0x3c, 0x03,
	0xf2, 0x38, 0x9b, 0xac, 0x52, 0x29, 0xa7, 0xed, 0x6d, 0x3d, 0xbf, 0xcf, 0x9f, 0xc6, 0x9f, 0xc7,
	0x0b, 0xdd, 0x9f, 0xbf, 0x8c, 0x38, 0x8d, 0x53, 0x91, 0xcd, 0x31, 0xb1, 0xa7, 0x66, 0x29, 0xc2,
	0x85, 0x4e, 0x6d, 0xca, 0x3a, 0x0e, 0x8c, 0x56, 0xf5, 0xf1, 0x52, 0xf4, 0xda, 0xb9, 0xc8, 0x0b,
	0x06, 0x7f, 0xab, 0xd0, 0xc9, 0x79, 0x84, 0xf7, 0x19, 0x1a, 0xcb, 0x06, 0x50, 0x8f, 0xb9, 0xe5,
	0x41, 0xa5, 0x5f, 0x19, 0x3e, 0x3d, 0x6b, 0x87, 0xce, 0x23, 0x5c, 0x8b, 0x88, 0xb1, 0x13, 0x00,
	0x39, 0xe7, 0x77, 0x38, 0xcb, 0xb4, 0x32, 0x41, 0xb5, 0x5f, 0x1b, 0x36, 0xa3, 0x26, 0x55, 0x26,
	0x5a, 0x19, 0x87, 0x79, 0x16, 0xcb, 0xd4, 0xe3, 0x9a, 0xc7, 0x54, 0xc9, 0xf1, 0x52, 0xc6, 0xb8,
	0xc2, 0x75, 0x8f, 0xa9, 0x42, 0xf8, 0x25, 0x34, 0x7f, 0x48, 0xb5, 0xf2, 0x7e, 0x42, 0xf4, 0xc0,
	0x15, 0x08, 0x4e, 0xa1, 0xeb, 0xbe, 0x3f, 0xa2, 0xe5, 0xae, 0x93, 0xd9, 0x82, 0x6b, 0x3e, 0x47,
	0x8b, 0xda, 0x04, 0x0d, 0x6a, 0xf8, 0xc4, 0x37, 0x7c, 0x55, 0x10, 0x7d, 0xd6, 0x3c, 0x31, 0x5c,
	0x58, 0x99, 0x26, 0xd1, 0x71, 0x71, 0xf7, 0xf5, 0x7a, 0x33, 0x3b, 0x87, 0xc3, 0xfb, 0x0c, 0xf5,
	0xef, 0xa2, 0xe1, 0x3e, 0x19, 0x1e, 0x7b, 0xc3, 0x4f, 0x8e, 0x16, 0x9d, 0x3a, 0xa4, 0xdf, 0x58,
	0x0c, 0xfe, 0x55, 0xe0, 0x70, 0x13, 0xa6, 0x59, 0xa4, 0x89, 0x41, 0xf6, 0x02, 0xea, 0x22, 0x8d,
	0x91, 0xd2, 0x6c, 0xbd, 0xdf, 0x8b, 0x68, 0xc5, 0x02, 0xd8, 0x9f, 0xa3, 0x31, 0xfc, 0x0e, 0x83,
	0x6a, 0xbf, 0x32, 0x6c, 0x46, 0xf9, 0x72, 0x9d, 0x7e, 0x6d, 0x47, 0xfa, 0x6f, 0xe1, 0x28, 0xbf,
	0xc7, 0x99, 0x48, 0x95, 0x42, 0x6a, 0x88, 0x82, 0x7c, 0xb8, 0x85, 0xe5, 0xd2, 0xcb, 0xb5, 0x92,
	0xbd, 0x81, 0x96, 0x3f, 0xac, 0x46, 0x93, 0x29, 0xeb, 0x52, 0xde, 0x75, 0xd2, 0x67, 0x24, 0x8e,
	0xbc, 0xf6, 0xe2, 0x00, 0x1a, 0xc6, 0x72, 0x9b, 0x99, 0xb3, 0x3f, 0x8d, 0xcd, 0xf4, 0x8c, 0x51,
	0x2f, 0xa5, 0x40, 0x16, 0x41, 0xf3, 0x1d, 0xda, 0x31, 0x09, 0x58, 0x3f, 0xdc, 0x1a, 0xc0, 0x70,
	0x6b, 0xd8, 0x7a, 0xaf, 0x76, 0x28, 0x7c, 0x82, 0x83, 0x3d, 0x76, 0x03, 0xed, 0x4b, 0x8d, 0xdc,
	0x62, 0xce, 0xca, 0x32, 0x16, 0xd0, 0xfb, 0x20, 0x8d, 0x9d, 0x18, 0xd4, 0xa3, 0x87, 0x29, 0x95,
	0xd7, 0xfd, 0x64, 0x11, 0x3f, 0x42, 0xf7, 0x37, 0xd0, 0x1e, 0xa1, 0xc2, 0xf2, 0x8d, 0xbf, 0x40,
	0xe7, 0x3c, 0x8e, 0x8b, 0x2f, 0xa8, 0x2c, 0xe7, 0x6f, 0xc0, 0x7c, 0xcb, 0x8f, 0x61, 0xfe, 0x1d,
	0xba, 0xee, 0x36, 0x47, 0xd2, 0x58, 0x99, 0x08, 0x7b, 0x25, 0x51, 0xc5, 0x53, 0xae, 0x32, 0x2c,
	0x6d, 0x10, 0xa7, 0xd0, 0xa2, 0xc7, 0x51, 0x72, 0xe0, 0x17, 0x47, 0x5f, 0x9f, 0x6f, 0xa9, 0xae,
	0x6f, 0x6f, 0x1b, 0xf4, 0x8b, 0x7e, 0xfd, 0x3f, 0x00, 0x00, 0xff, 0xff, 0x8e, 0x08, 0xbd, 0x6a,
	0xde, 0x05, 0x00, 0x00,
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
	DeleteFileMetadata(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
	ListDistinctFieldValues(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
	QueryDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error)
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

func (c *documentServiceClient) DeleteFileMetadata(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/DeleteFileMetadata", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *documentServiceClient) ListDistinctFieldValues(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/ListDistinctFieldValues", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *documentServiceClient) QueryDocument(ctx context.Context, in *DocumentRequest, opts ...grpc.CallOption) (*DocumentResponse, error) {
	out := new(DocumentResponse)
	err := c.cc.Invoke(ctx, "/hwscDocumentSvc.DocumentService/QueryDocument", in, out, opts...)
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
	DeleteFileMetadata(context.Context, *DocumentRequest) (*DocumentResponse, error)
	ListDistinctFieldValues(context.Context, *DocumentRequest) (*DocumentResponse, error)
	QueryDocument(context.Context, *DocumentRequest) (*DocumentResponse, error)
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

func _DocumentService_DeleteFileMetadata_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).DeleteFileMetadata(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/DeleteFileMetadata",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).DeleteFileMetadata(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DocumentService_ListDistinctFieldValues_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).ListDistinctFieldValues(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/ListDistinctFieldValues",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).ListDistinctFieldValues(ctx, req.(*DocumentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DocumentService_QueryDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DocumentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DocumentServiceServer).QueryDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscDocumentSvc.DocumentService/QueryDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DocumentServiceServer).QueryDocument(ctx, req.(*DocumentRequest))
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
		{
			MethodName: "DeleteFileMetadata",
			Handler:    _DocumentService_DeleteFileMetadata_Handler,
		},
		{
			MethodName: "ListDistinctFieldValues",
			Handler:    _DocumentService_ListDistinctFieldValues_Handler,
		},
		{
			MethodName: "QueryDocument",
			Handler:    _DocumentService_QueryDocument_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "hwsc-document-svc.proto",
}
