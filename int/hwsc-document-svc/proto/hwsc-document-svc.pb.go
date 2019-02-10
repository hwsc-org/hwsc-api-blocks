// Code generated by protoc-gen-go. DO NOT EDIT.
// source: hwsc-document-svc.proto

package hwsc

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type DocumentRequest struct {
	Token     *Token    `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Data      *Document `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	ImageUrls []string  `protobuf:"bytes,3,rep,name=image_urls,json=imageUrls,proto3" json:"image_urls,omitempty"`
	AudioUrls []string  `protobuf:"bytes,4,rep,name=audio_urls,json=audioUrls,proto3" json:"audio_urls,omitempty"`
	VideoUrls []string  `protobuf:"bytes,5,rep,name=video_urls,json=videoUrls,proto3" json:"video_urls,omitempty"`
	FileUrls  []string  `protobuf:"bytes,6,rep,name=file_urls,json=fileUrls,proto3" json:"file_urls,omitempty"`
	// Request for AddFileMetadata & DeleteFileMetadata
	FileMetadataParameters *FileMetadataTransaction `protobuf:"bytes,7,opt,name=fileMetadata_parameters,json=fileMetadataParameters,proto3" json:"fileMetadata_parameters,omitempty"`
	// Request for QueryDocument
	QueryParameters      *QueryTransaction `protobuf:"bytes,8,opt,name=query_parameters,json=queryParameters,proto3" json:"query_parameters,omitempty"`
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

func (m *DocumentRequest) GetToken() *Token {
	if m != nil {
		return m.Token
	}
	return nil
}

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

// XXX_OneofWrappers is for the internal use of the proto package.
func (*DocumentResponse) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*DocumentResponse_Code)(nil),
	}
}

func init() {
	proto.RegisterType((*DocumentRequest)(nil), "hwscDocumentSvc.DocumentRequest")
	proto.RegisterType((*DocumentResponse)(nil), "hwscDocumentSvc.DocumentResponse")
}

func init() { proto.RegisterFile("hwsc-document-svc.proto", fileDescriptor_df8cb3768c60511d) }

var fileDescriptor_df8cb3768c60511d = []byte{
	// 500 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x94, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0xd7, 0xb5, 0xcb, 0x9a, 0x57, 0xda, 0x4e, 0x06, 0xad, 0x51, 0xd1, 0xa4, 0xae, 0xa7,
	0x5d, 0x96, 0xc3, 0x38, 0x72, 0x40, 0xdb, 0xaa, 0xc1, 0x01, 0x24, 0x48, 0xd7, 0x0e, 0xc1, 0xa1,
	0x18, 0xe7, 0x31, 0x2c, 0xd2, 0xa4, 0xb3, 0x9d, 0x22, 0xbe, 0x20, 0xdf, 0x06, 0x3e, 0xc3, 0xe4,
	0xe7, 0xa6, 0x8d, 0x36, 0xa9, 0xa7, 0xec, 0x16, 0xbf, 0xff, 0xcf, 0x7f, 0x3d, 0xff, 0xfd, 0x1c,
	0xe8, 0xfd, 0xfc, 0xad, 0xc5, 0x69, 0x9c, 0x89, 0x7c, 0x8e, 0xa9, 0x39, 0xd5, 0x4b, 0x11, 0x2e,
	0x54, 0x66, 0x32, 0xd6, 0xb5, 0xc2, 0x68, 0x55, 0x1f, 0x2f, 0x45, 0xbf, 0x53, 0x40, 0x0e, 0xe8,
	0xb7, 0x4c, 0xf6, 0x0b, 0x53, 0xb7, 0x18, 0xfe, 0xdb, 0x85, 0x6e, 0x01, 0x47, 0x78, 0x97, 0xa3,
	0x36, 0xec, 0x18, 0xf6, 0x08, 0x09, 0x6a, 0x83, 0xda, 0x49, 0xeb, 0xac, 0x15, 0x5a, 0xc7, 0xf0,
	0xda, 0x96, 0x22, 0xa7, 0xb0, 0x21, 0x34, 0x62, 0x6e, 0x78, 0xb0, 0x4b, 0x44, 0xc7, 0x11, 0x6b,
	0x1f, 0xd2, 0xd8, 0x11, 0x80, 0x9c, 0xf3, 0x5b, 0x9c, 0xe5, 0x2a, 0xd1, 0x41, 0x7d, 0x50, 0x3f,
	0xf1, 0x23, 0x9f, 0x2a, 0x13, 0x95, 0x68, 0x2b, 0xf3, 0x3c, 0x96, 0x99, 0x93, 0x1b, 0x4e, 0xa6,
	0x4a, 0x21, 0x2f, 0x65, 0x8c, 0x2b, 0x79, 0xcf, 0xc9, 0x54, 0x21, 0xf9, 0x25, 0xf8, 0x3f, 0x64,
	0xb2, 0xf2, 0xf6, 0x48, 0x6d, 0xda, 0x02, 0x89, 0x53, 0xe8, 0xd9, 0xef, 0x0f, 0x68, 0xb8, 0xed,
	0x64, 0xb6, 0xe0, 0x8a, 0xcf, 0xd1, 0xa0, 0xd2, 0xc1, 0x3e, 0x35, 0x7c, 0xe4, 0x1a, 0xbe, 0x2a,
	0x41, 0xd7, 0x8a, 0xa7, 0x9a, 0x0b, 0x23, 0xb3, 0x34, 0x3a, 0x2c, 0xef, 0xfe, 0xb8, 0xde, 0xcc,
	0xce, 0xe1, 0xe0, 0x2e, 0x47, 0xf5, 0xa7, 0x6c, 0xd8, 0x24, 0xc3, 0x43, 0x67, 0xf8, 0xc9, 0xaa,
	0x65, 0xa7, 0x2e, 0xf1, 0x1b, 0x8b, 0xe1, 0xff, 0x1a, 0x1c, 0x6c, 0xf2, 0xd6, 0x8b, 0x2c, 0xd5,
	0xc8, 0x5e, 0x40, 0x43, 0x64, 0x31, 0x52, 0xde, 0xed, 0x77, 0x3b, 0x11, 0xad, 0x58, 0x00, 0xfb,
	0x73, 0xd4, 0x9a, 0xdf, 0x22, 0xc5, 0xec, 0x47, 0xc5, 0x72, 0x9d, 0x7e, 0x7d, 0x4b, 0xfa, 0x6f,
	0xe0, 0x79, 0x71, 0xef, 0x33, 0x91, 0x25, 0x09, 0x52, 0x43, 0x94, 0xf3, 0xe3, 0x2d, 0xac, 0x40,
	0x2f, 0xd7, 0x24, 0x7b, 0x0d, 0x6d, 0x77, 0x58, 0x85, 0x3a, 0x4f, 0x8c, 0xbd, 0x83, 0x6d, 0x27,
	0x7d, 0x46, 0x70, 0xe4, 0xd8, 0x8b, 0x26, 0x78, 0xda, 0x70, 0x93, 0xeb, 0xb3, 0xbf, 0xde, 0x66,
	0xc0, 0xc6, 0xa8, 0x96, 0x52, 0x20, 0x8b, 0xc0, 0x7f, 0x8b, 0x66, 0x4c, 0x00, 0x1b, 0x84, 0x0f,
	0x06, 0x36, 0x7c, 0x30, 0x8f, 0xfd, 0xe3, 0x2d, 0x84, 0x4b, 0x70, 0xb8, 0xc3, 0x6e, 0xa0, 0x73,
	0xa9, 0x90, 0x1b, 0x2c, 0xb4, 0xaa, 0x8c, 0x05, 0xf4, 0xdf, 0x4b, 0x6d, 0x26, 0x1a, 0xd5, 0xe8,
	0x71, 0x4a, 0xd5, 0x75, 0x3f, 0x59, 0xc4, 0x4f, 0xd0, 0xfd, 0x0d, 0x74, 0x46, 0x98, 0x60, 0xf5,
	0xc6, 0x9f, 0xa1, 0x7b, 0x1e, 0xc7, 0xe5, 0x17, 0x54, 0x95, 0xf3, 0x57, 0x60, 0xae, 0xe5, 0xa7,
	0x30, 0xff, 0x06, 0x3d, 0x7b, 0x9b, 0x23, 0xa9, 0x8d, 0x4c, 0x85, 0xb9, 0x92, 0x98, 0xc4, 0x53,
	0x9e, 0xe4, 0x58, 0xd9, 0x20, 0x4e, 0xa1, 0x4d, 0x8f, 0xa3, 0xe2, 0xc0, 0x2f, 0xbc, 0x2f, 0x0d,
	0x4b, 0x7d, 0xf7, 0xe8, 0xc7, 0xfd, 0xea, 0x3e, 0x00, 0x00, 0xff, 0xff, 0x75, 0x03, 0xd6, 0xe5,
	0x01, 0x06, 0x00, 0x00,
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
