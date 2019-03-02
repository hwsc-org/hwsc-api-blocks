// Code generated by protoc-gen-go. DO NOT EDIT.
// source: int/hwsc-user-svc/user/hwsc-user-svc.proto

package user

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	lib "github.com/hwsc-org/hwsc-api-blocks/lib"
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

type UserRequest struct {
	Identification       *lib.Identification `protobuf:"bytes,1,opt,name=identification,proto3" json:"identification,omitempty"`
	User                 *lib.User           `protobuf:"bytes,2,opt,name=user,proto3" json:"user,omitempty"`
	Duid                 string              `protobuf:"bytes,3,opt,name=duid,proto3" json:"duid,omitempty"`
	UuidsToShareDuid     []string            `protobuf:"bytes,4,rep,name=uuids_to_share_duid,json=uuidsToShareDuid,proto3" json:"uuids_to_share_duid,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-" bson:"-"`
	XXX_unrecognized     []byte              `json:"-" bson:"-"`
	XXX_sizecache        int32               `json:"-" bson:"-"`
}

func (m *UserRequest) Reset()         { *m = UserRequest{} }
func (m *UserRequest) String() string { return proto.CompactTextString(m) }
func (*UserRequest) ProtoMessage()    {}
func (*UserRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_6d3a4bbc0dc5f314, []int{0}
}

func (m *UserRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserRequest.Unmarshal(m, b)
}
func (m *UserRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserRequest.Marshal(b, m, deterministic)
}
func (m *UserRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserRequest.Merge(m, src)
}
func (m *UserRequest) XXX_Size() int {
	return xxx_messageInfo_UserRequest.Size(m)
}
func (m *UserRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UserRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UserRequest proto.InternalMessageInfo

func (m *UserRequest) GetIdentification() *lib.Identification {
	if m != nil {
		return m.Identification
	}
	return nil
}

func (m *UserRequest) GetUser() *lib.User {
	if m != nil {
		return m.User
	}
	return nil
}

func (m *UserRequest) GetDuid() string {
	if m != nil {
		return m.Duid
	}
	return ""
}

func (m *UserRequest) GetUuidsToShareDuid() []string {
	if m != nil {
		return m.UuidsToShareDuid
	}
	return nil
}

type UserResponse struct {
	// Types that are valid to be assigned to Status:
	//	*UserResponse_Code
	Status               isUserResponse_Status `protobuf_oneof:"status"`
	Message              string                `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Identification       *lib.Identification   `protobuf:"bytes,3,opt,name=identification,proto3" json:"identification,omitempty"`
	User                 *lib.User             `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	UserCollection       []*lib.User           `protobuf:"bytes,5,rep,name=user_collection,json=userCollection,proto3" json:"user_collection,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-" bson:"-"`
	XXX_unrecognized     []byte                `json:"-" bson:"-"`
	XXX_sizecache        int32                 `json:"-" bson:"-"`
}

func (m *UserResponse) Reset()         { *m = UserResponse{} }
func (m *UserResponse) String() string { return proto.CompactTextString(m) }
func (*UserResponse) ProtoMessage()    {}
func (*UserResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_6d3a4bbc0dc5f314, []int{1}
}

func (m *UserResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserResponse.Unmarshal(m, b)
}
func (m *UserResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserResponse.Marshal(b, m, deterministic)
}
func (m *UserResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserResponse.Merge(m, src)
}
func (m *UserResponse) XXX_Size() int {
	return xxx_messageInfo_UserResponse.Size(m)
}
func (m *UserResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UserResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UserResponse proto.InternalMessageInfo

type isUserResponse_Status interface {
	isUserResponse_Status()
}

type UserResponse_Code struct {
	Code uint32 `protobuf:"varint,1,opt,name=code,proto3,oneof"`
}

func (*UserResponse_Code) isUserResponse_Status() {}

func (m *UserResponse) GetStatus() isUserResponse_Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *UserResponse) GetCode() uint32 {
	if x, ok := m.GetStatus().(*UserResponse_Code); ok {
		return x.Code
	}
	return 0
}

func (m *UserResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *UserResponse) GetIdentification() *lib.Identification {
	if m != nil {
		return m.Identification
	}
	return nil
}

func (m *UserResponse) GetUser() *lib.User {
	if m != nil {
		return m.User
	}
	return nil
}

func (m *UserResponse) GetUserCollection() []*lib.User {
	if m != nil {
		return m.UserCollection
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*UserResponse) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*UserResponse_Code)(nil),
	}
}

func init() {
	proto.RegisterType((*UserRequest)(nil), "user.UserRequest")
	proto.RegisterType((*UserResponse)(nil), "user.UserResponse")
}

func init() {
	proto.RegisterFile("int/hwsc-user-svc/user/hwsc-user-svc.proto", fileDescriptor_6d3a4bbc0dc5f314)
}

var fileDescriptor_6d3a4bbc0dc5f314 = []byte{
	// 461 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x54, 0xcd, 0x6e, 0xd3, 0x40,
	0x10, 0xae, 0x89, 0xdb, 0xe2, 0x49, 0x1b, 0xca, 0x86, 0x43, 0x14, 0x09, 0x29, 0xca, 0x29, 0x42,
	0x8a, 0x23, 0x85, 0xf2, 0x23, 0xca, 0x85, 0xb6, 0x52, 0x40, 0x02, 0x0e, 0x4e, 0xcb, 0x81, 0x4b,
	0x64, 0xaf, 0xa7, 0xf1, 0x2a, 0x8e, 0xd7, 0xec, 0xce, 0xb6, 0xea, 0x2b, 0x21, 0x1e, 0x88, 0xc7,
	0x41, 0xbb, 0x06, 0xd4, 0xa0, 0x1c, 0xba, 0x9c, 0x3c, 0xf3, 0xcd, 0xf7, 0x79, 0xfe, 0x56, 0x03,
	0xcf, 0x44, 0x45, 0x93, 0xe2, 0x46, 0xf3, 0xb1, 0xd1, 0xa8, 0xc6, 0xfa, 0x9a, 0x4f, 0xac, 0xb1,
	0x09, 0xc5, 0xb5, 0x92, 0x24, 0x59, 0x68, 0xfd, 0x7e, 0xa7, 0x14, 0x99, 0xe3, 0x34, 0x68, 0xbf,
	0x6b, 0xfd, 0xd4, 0x50, 0x21, 0x95, 0xa0, 0xdb, 0x06, 0x1c, 0xfe, 0x08, 0xa0, 0x7d, 0xa9, 0x51,
	0x25, 0xf8, 0xcd, 0xa0, 0x26, 0x76, 0x02, 0x1d, 0x91, 0x63, 0x45, 0xe2, 0x4a, 0xf0, 0x94, 0x84,
	0xac, 0x7a, 0xc1, 0x20, 0x18, 0xb5, 0xa7, 0xdd, 0xb8, 0x14, 0x59, 0xfc, 0x61, 0x23, 0x94, 0xfc,
	0x43, 0x65, 0x4f, 0xc1, 0x65, 0xee, 0x3d, 0x70, 0x92, 0xc8, 0x49, 0xdc, 0xcf, 0x1d, 0xcc, 0x18,
	0x84, 0xb9, 0x11, 0x79, 0xaf, 0x35, 0x08, 0x46, 0x51, 0xe2, 0x6c, 0x36, 0x86, 0xae, 0x31, 0x22,
	0xd7, 0x0b, 0x92, 0x0b, 0x5d, 0xa4, 0x0a, 0x17, 0x8e, 0x12, 0x0e, 0x5a, 0xa3, 0x28, 0x39, 0x72,
	0xa1, 0x0b, 0x39, 0xb7, 0x81, 0x73, 0x23, 0xf2, 0xe1, 0xcf, 0x00, 0x0e, 0x9a, 0x72, 0x75, 0x2d,
	0x2b, 0x8d, 0xec, 0x09, 0x84, 0x5c, 0xe6, 0xe8, 0xaa, 0x3c, 0x7c, 0xbf, 0x93, 0x38, 0x8f, 0xf5,
	0x60, 0x7f, 0x8d, 0x5a, 0xa7, 0x4b, 0x74, 0xb5, 0x44, 0xc9, 0x1f, 0x77, 0x4b, 0x7f, 0x2d, 0xff,
	0xfe, 0xc2, 0xed, 0xfd, 0x4d, 0xe1, 0x91, 0xfd, 0x2e, 0xb8, 0x2c, 0x4b, 0xe4, 0xee, 0xe7, 0xbb,
	0x83, 0xd6, 0x26, 0xb3, 0x63, 0x19, 0x67, 0x7f, 0x09, 0xa7, 0x0f, 0x61, 0x4f, 0x53, 0x4a, 0x46,
	0x4f, 0xbf, 0xef, 0x36, 0x9b, 0x98, 0xa3, 0xba, 0x16, 0x1c, 0xd9, 0x31, 0x44, 0x33, 0xa4, 0xb9,
	0x0b, 0xb2, 0xc7, 0xb1, 0x5b, 0xe4, 0x9d, 0x4d, 0xf5, 0xd9, 0x5d, 0xa8, 0x99, 0xc6, 0x70, 0x87,
	0xbd, 0x00, 0x38, 0x53, 0x98, 0x12, 0x5a, 0xdc, 0x4b, 0x76, 0x8e, 0x25, 0xfe, 0x87, 0xec, 0xb2,
	0xce, 0xbd, 0xb3, 0x9d, 0xc0, 0xd1, 0x3b, 0x43, 0x85, 0x9d, 0x2d, 0xf7, 0x16, 0x1f, 0x43, 0xf4,
	0x51, 0x68, 0xb2, 0xa8, 0xc7, 0x5c, 0xa6, 0xb0, 0x3f, 0x43, 0xf2, 0xcb, 0xf4, 0x1a, 0x0e, 0x9b,
	0x97, 0x27, 0xb9, 0x59, 0x63, 0x45, 0xf7, 0x57, 0xbe, 0x82, 0x83, 0x19, 0x92, 0xed, 0xf1, 0x42,
	0xae, 0xb0, 0xba, 0xbf, 0xf0, 0x25, 0xb4, 0xbf, 0xa0, 0x12, 0x57, 0xb7, 0x9e, 0xba, 0xdf, 0x8f,
	0x05, 0xb9, 0x42, 0xf2, 0x6a, 0xf0, 0x53, 0xba, 0xc2, 0xcf, 0x78, 0xe3, 0xa9, 0x3c, 0x7d, 0xfb,
	0xf5, 0xcd, 0x52, 0x50, 0x61, 0xb2, 0x98, 0xcb, 0x75, 0x73, 0x83, 0xa4, 0x5a, 0x36, 0x46, 0x5a,
	0x8b, 0x71, 0x56, 0x4a, 0xbe, 0xd2, 0x93, 0xed, 0x37, 0x2b, 0xdb, 0x73, 0xb7, 0xe7, 0xf9, 0xaf,
	0x00, 0x00, 0x00, 0xff, 0xff, 0xe7, 0x01, 0xec, 0x24, 0xd4, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// UserServiceClient is the client API for UserService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type UserServiceClient interface {
	GetStatus(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	CreateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	DeleteUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	UpdateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	AuthenticateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	ListUsers(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	GetUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	ShareDocument(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	GetAuthToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	VerifyToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	GetSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// TODO add a REST endpoint later
	MakeNewSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
}

type userServiceClient struct {
	cc *grpc.ClientConn
}

func NewUserServiceClient(cc *grpc.ClientConn) UserServiceClient {
	return &userServiceClient{cc}
}

func (c *userServiceClient) GetStatus(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) CreateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/CreateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) DeleteUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/DeleteUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) UpdateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/UpdateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) AuthenticateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/AuthenticateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ListUsers(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/ListUsers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/GetUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ShareDocument(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/ShareDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetAuthToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/GetAuthToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) VerifyToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/VerifyToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/GetSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) MakeNewSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/user.UserService/MakeNewSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserServiceServer is the server API for UserService service.
type UserServiceServer interface {
	GetStatus(context.Context, *UserRequest) (*UserResponse, error)
	CreateUser(context.Context, *UserRequest) (*UserResponse, error)
	DeleteUser(context.Context, *UserRequest) (*UserResponse, error)
	UpdateUser(context.Context, *UserRequest) (*UserResponse, error)
	AuthenticateUser(context.Context, *UserRequest) (*UserResponse, error)
	ListUsers(context.Context, *UserRequest) (*UserResponse, error)
	GetUser(context.Context, *UserRequest) (*UserResponse, error)
	ShareDocument(context.Context, *UserRequest) (*UserResponse, error)
	GetAuthToken(context.Context, *UserRequest) (*UserResponse, error)
	VerifyToken(context.Context, *UserRequest) (*UserResponse, error)
	GetSecret(context.Context, *UserRequest) (*UserResponse, error)
	// TODO add a REST endpoint later
	MakeNewSecret(context.Context, *UserRequest) (*UserResponse, error)
}

func RegisterUserServiceServer(s *grpc.Server, srv UserServiceServer) {
	s.RegisterService(&_UserService_serviceDesc, srv)
}

func _UserService_GetStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetStatus(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/CreateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).CreateUser(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_DeleteUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).DeleteUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/DeleteUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).DeleteUser(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_UpdateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).UpdateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/UpdateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).UpdateUser(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_AuthenticateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).AuthenticateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/AuthenticateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).AuthenticateUser(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_ListUsers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).ListUsers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/ListUsers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ListUsers(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/GetUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetUser(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_ShareDocument_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).ShareDocument(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/ShareDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ShareDocument(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetAuthToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetAuthToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/GetAuthToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetAuthToken(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_VerifyToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).VerifyToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/VerifyToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).VerifyToken(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/GetSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetSecret(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_MakeNewSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).MakeNewSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/user.UserService/MakeNewSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).MakeNewSecret(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _UserService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "user.UserService",
	HandlerType: (*UserServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _UserService_GetStatus_Handler,
		},
		{
			MethodName: "CreateUser",
			Handler:    _UserService_CreateUser_Handler,
		},
		{
			MethodName: "DeleteUser",
			Handler:    _UserService_DeleteUser_Handler,
		},
		{
			MethodName: "UpdateUser",
			Handler:    _UserService_UpdateUser_Handler,
		},
		{
			MethodName: "AuthenticateUser",
			Handler:    _UserService_AuthenticateUser_Handler,
		},
		{
			MethodName: "ListUsers",
			Handler:    _UserService_ListUsers_Handler,
		},
		{
			MethodName: "GetUser",
			Handler:    _UserService_GetUser_Handler,
		},
		{
			MethodName: "ShareDocument",
			Handler:    _UserService_ShareDocument_Handler,
		},
		{
			MethodName: "GetAuthToken",
			Handler:    _UserService_GetAuthToken_Handler,
		},
		{
			MethodName: "VerifyToken",
			Handler:    _UserService_VerifyToken_Handler,
		},
		{
			MethodName: "GetSecret",
			Handler:    _UserService_GetSecret_Handler,
		},
		{
			MethodName: "MakeNewSecret",
			Handler:    _UserService_MakeNewSecret_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "int/hwsc-user-svc/user/hwsc-user-svc.proto",
}
