// Code generated by protoc-gen-go. DO NOT EDIT.
// source: hwsc-user-svc.proto

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

type UserRequest struct {
	Identification       *Identification `protobuf:"bytes,1,opt,name=identification,proto3" json:"identification,omitempty"`
	User                 *User           `protobuf:"bytes,2,opt,name=user,proto3" json:"user,omitempty"`
	Duid                 string          `protobuf:"bytes,3,opt,name=duid,proto3" json:"duid,omitempty"`
	UuidsToShareDuid     []string        `protobuf:"bytes,4,rep,name=uuids_to_share_duid,json=uuidsToShareDuid,proto3" json:"uuids_to_share_duid,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *UserRequest) Reset()         { *m = UserRequest{} }
func (m *UserRequest) String() string { return proto.CompactTextString(m) }
func (*UserRequest) ProtoMessage()    {}
func (*UserRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc3f735c05652365, []int{0}
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

func (m *UserRequest) GetIdentification() *Identification {
	if m != nil {
		return m.Identification
	}
	return nil
}

func (m *UserRequest) GetUser() *User {
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
	Identification       *Identification       `protobuf:"bytes,3,opt,name=identification,proto3" json:"identification,omitempty"`
	User                 *User                 `protobuf:"bytes,4,opt,name=user,proto3" json:"user,omitempty"`
	UserCollection       []*User               `protobuf:"bytes,5,rep,name=user_collection,json=userCollection,proto3" json:"user_collection,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *UserResponse) Reset()         { *m = UserResponse{} }
func (m *UserResponse) String() string { return proto.CompactTextString(m) }
func (*UserResponse) ProtoMessage()    {}
func (*UserResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dc3f735c05652365, []int{1}
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

func (m *UserResponse) GetIdentification() *Identification {
	if m != nil {
		return m.Identification
	}
	return nil
}

func (m *UserResponse) GetUser() *User {
	if m != nil {
		return m.User
	}
	return nil
}

func (m *UserResponse) GetUserCollection() []*User {
	if m != nil {
		return m.UserCollection
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*UserResponse) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _UserResponse_OneofMarshaler, _UserResponse_OneofUnmarshaler, _UserResponse_OneofSizer, []interface{}{
		(*UserResponse_Code)(nil),
	}
}

func _UserResponse_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*UserResponse)
	// status
	switch x := m.Status.(type) {
	case *UserResponse_Code:
		b.EncodeVarint(1<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.Code))
	case nil:
	default:
		return fmt.Errorf("UserResponse.Status has unexpected type %T", x)
	}
	return nil
}

func _UserResponse_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*UserResponse)
	switch tag {
	case 1: // status.code
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Status = &UserResponse_Code{uint32(x)}
		return true, err
	default:
		return false, nil
	}
}

func _UserResponse_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*UserResponse)
	// status
	switch x := m.Status.(type) {
	case *UserResponse_Code:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(x.Code))
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

func init() {
	proto.RegisterType((*UserRequest)(nil), "hwscUserSvc.UserRequest")
	proto.RegisterType((*UserResponse)(nil), "hwscUserSvc.UserResponse")
}

func init() { proto.RegisterFile("hwsc-user-svc.proto", fileDescriptor_dc3f735c05652365) }

var fileDescriptor_dc3f735c05652365 = []byte{
	// 425 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x94, 0xcf, 0x6e, 0xd4, 0x30,
	0x10, 0xc6, 0x1b, 0x36, 0x6c, 0x9b, 0x09, 0xfd, 0x23, 0xb7, 0x87, 0xb0, 0x07, 0x14, 0xed, 0x69,
	0x2f, 0x9b, 0x43, 0x7b, 0xe5, 0x40, 0xb3, 0x2b, 0x96, 0x4a, 0x88, 0x43, 0xd2, 0x72, 0xe0, 0x12,
	0x05, 0x67, 0x4a, 0x2c, 0xb6, 0xf1, 0x62, 0x8f, 0xb7, 0xea, 0x4b, 0xf1, 0x20, 0xbc, 0x02, 0x2f,
	0x83, 0xec, 0x00, 0x2a, 0xd5, 0x72, 0x89, 0x4f, 0x89, 0xe7, 0xfb, 0xfc, 0xcb, 0x37, 0x1e, 0x2b,
	0x70, 0xda, 0xde, 0x6b, 0x3e, 0x37, 0x1a, 0xd5, 0x5c, 0x6f, 0x79, 0xb6, 0x51, 0x92, 0x24, 0x8b,
	0x6d, 0xf1, 0x46, 0xa3, 0x2a, 0xb7, 0x7c, 0x02, 0x56, 0xec, 0x85, 0xc9, 0x71, 0x6d, 0xa8, 0x95,
	0x4a, 0xd0, 0x43, 0x5f, 0x98, 0x7e, 0x0f, 0x20, 0xb6, 0xc6, 0x02, 0xbf, 0x19, 0xd4, 0xc4, 0x5e,
	0xc3, 0x91, 0x68, 0xb0, 0x23, 0x71, 0x2b, 0x78, 0x4d, 0x42, 0x76, 0x49, 0x90, 0x06, 0xb3, 0xf8,
	0xfc, 0x2c, 0xb3, 0xc8, 0xec, 0xea, 0x1f, 0xad, 0x78, 0xe2, 0x65, 0xaf, 0x20, 0xb4, 0x1f, 0x4b,
	0x9e, 0xb9, 0x3d, 0xd0, 0xef, 0x71, 0x78, 0x57, 0x67, 0x0c, 0xc2, 0xc6, 0x88, 0x26, 0x19, 0xa5,
	0xc1, 0x2c, 0x2a, 0xdc, 0x3b, 0x9b, 0xc3, 0xa9, 0x31, 0xa2, 0xd1, 0x15, 0xc9, 0x4a, 0xb7, 0xb5,
	0xc2, 0xca, 0x59, 0xc2, 0x74, 0x34, 0x8b, 0x8a, 0x13, 0x27, 0x5d, 0xcb, 0xd2, 0x0a, 0x4b, 0x23,
	0x9a, 0xe9, 0xcf, 0x00, 0x5e, 0xf4, 0x81, 0xf5, 0x46, 0x76, 0x1a, 0xd9, 0x19, 0x84, 0x5c, 0x36,
	0xe8, 0x72, 0x1e, 0xbe, 0xdb, 0x2b, 0xdc, 0x8a, 0x25, 0xb0, 0x7f, 0x87, 0x5a, 0xd7, 0x5f, 0xd0,
	0x85, 0x89, 0x8a, 0x3f, 0xcb, 0x1d, 0x1d, 0x8e, 0x06, 0x74, 0x18, 0xfe, 0xa7, 0xc3, 0x0b, 0x38,
	0xb6, 0xcf, 0x8a, 0xcb, 0xf5, 0x1a, 0xb9, 0xc3, 0x3f, 0x4f, 0x47, 0x4f, 0xac, 0x47, 0xd6, 0xb2,
	0xf8, 0xeb, 0xc8, 0x0f, 0x60, 0xac, 0xa9, 0x26, 0xa3, 0xcf, 0x7f, 0x8c, 0xfb, 0x71, 0x94, 0xa8,
	0xb6, 0x82, 0x23, 0xcb, 0x21, 0x5a, 0x21, 0x95, 0x4e, 0x64, 0x49, 0xf6, 0x68, 0xac, 0xd9, 0xa3,
	0xa9, 0x4d, 0x5e, 0xee, 0x50, 0xfa, 0xe3, 0x99, 0xee, 0xb1, 0x05, 0xc0, 0x42, 0x61, 0x4d, 0x68,
	0xeb, 0x1e, 0x90, 0x25, 0xae, 0xd1, 0x1b, 0x72, 0xb3, 0x69, 0x3c, 0x93, 0x5c, 0xc1, 0xc9, 0xa5,
	0xa1, 0xd6, 0x4e, 0x85, 0x7b, 0xa2, 0x72, 0x88, 0xde, 0x0b, 0x4d, 0xb6, 0x3a, 0xf8, 0x74, 0xdf,
	0xc0, 0xfe, 0x0a, 0xc9, 0x27, 0xc5, 0x5b, 0x38, 0xec, 0xaf, 0xb7, 0xe4, 0xe6, 0x0e, 0x3b, 0x1a,
	0xca, 0xb9, 0x84, 0x83, 0x15, 0xd2, 0xb5, 0xfc, 0x8a, 0xdd, 0x50, 0xc4, 0x12, 0xe2, 0x8f, 0xa8,
	0xc4, 0xed, 0x83, 0x17, 0xe5, 0xf7, 0xa5, 0x45, 0xae, 0x90, 0x3c, 0x18, 0x1f, 0xf0, 0xde, 0x8b,
	0x91, 0x8f, 0x3f, 0x85, 0x56, 0xfd, 0x3c, 0x76, 0xbf, 0xba, 0x8b, 0x5f, 0x01, 0x00, 0x00, 0xff,
	0xff, 0x8c, 0xde, 0x0d, 0x3b, 0x2b, 0x05, 0x00, 0x00,
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
	// if OK, chrome stores User object, and redirects to search page
	// else, chrome stays on registration page and display error msg
	CreateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// if OK, chrome redirects to login page
	// else, chrome stays on user profile page and displays error msg
	DeleteUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// if OK, chrome sets offical User object with copy User object, displays success msg to user
	// else, chrome will display error msg
	UpdateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// if OK, chrome will store user object and whatever token?, redirect to search page
	// else, chrome will display error msg
	AuthenticateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// get list of all users in user collection
	ListUsers(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// if OK, chrome will display Users first and last name and ask for confirmation?
	//      || display list of matched names and corresponding emails and ask user to select correct one
	//   Once user selects or confirms, chrome will store the matched users object under friends object
	// else, chrome will display not found msg or error msg
	GetUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// chrome makes request to share documents with found user
	// gateway passes
	//    1) request makers User object
	//    2) a list of DUIDS to share with
	//    3) found User object
	// svc will...
	ShareDocument(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	GetToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	VerifyToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	GetSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
	// TODO add a REST endpoint later
	NewSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error)
}

type userServiceClient struct {
	cc *grpc.ClientConn
}

func NewUserServiceClient(cc *grpc.ClientConn) UserServiceClient {
	return &userServiceClient{cc}
}

func (c *userServiceClient) GetStatus(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) CreateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/CreateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) DeleteUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/DeleteUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) UpdateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/UpdateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) AuthenticateUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/AuthenticateUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ListUsers(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/ListUsers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetUser(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/GetUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) ShareDocument(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/ShareDocument", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/GetToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) VerifyToken(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/VerifyToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) GetSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/GetSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userServiceClient) NewSecret(ctx context.Context, in *UserRequest, opts ...grpc.CallOption) (*UserResponse, error) {
	out := new(UserResponse)
	err := c.cc.Invoke(ctx, "/hwscUserSvc.UserService/NewSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserServiceServer is the server API for UserService service.
type UserServiceServer interface {
	GetStatus(context.Context, *UserRequest) (*UserResponse, error)
	// if OK, chrome stores User object, and redirects to search page
	// else, chrome stays on registration page and display error msg
	CreateUser(context.Context, *UserRequest) (*UserResponse, error)
	// if OK, chrome redirects to login page
	// else, chrome stays on user profile page and displays error msg
	DeleteUser(context.Context, *UserRequest) (*UserResponse, error)
	// if OK, chrome sets offical User object with copy User object, displays success msg to user
	// else, chrome will display error msg
	UpdateUser(context.Context, *UserRequest) (*UserResponse, error)
	// if OK, chrome will store user object and whatever token?, redirect to search page
	// else, chrome will display error msg
	AuthenticateUser(context.Context, *UserRequest) (*UserResponse, error)
	// get list of all users in user collection
	ListUsers(context.Context, *UserRequest) (*UserResponse, error)
	// if OK, chrome will display Users first and last name and ask for confirmation?
	//      || display list of matched names and corresponding emails and ask user to select correct one
	//   Once user selects or confirms, chrome will store the matched users object under friends object
	// else, chrome will display not found msg or error msg
	GetUser(context.Context, *UserRequest) (*UserResponse, error)
	// chrome makes request to share documents with found user
	// gateway passes
	//    1) request makers User object
	//    2) a list of DUIDS to share with
	//    3) found User object
	// svc will...
	ShareDocument(context.Context, *UserRequest) (*UserResponse, error)
	GetToken(context.Context, *UserRequest) (*UserResponse, error)
	VerifyToken(context.Context, *UserRequest) (*UserResponse, error)
	GetSecret(context.Context, *UserRequest) (*UserResponse, error)
	// TODO add a REST endpoint later
	NewSecret(context.Context, *UserRequest) (*UserResponse, error)
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
		FullMethod: "/hwscUserSvc.UserService/GetStatus",
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
		FullMethod: "/hwscUserSvc.UserService/CreateUser",
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
		FullMethod: "/hwscUserSvc.UserService/DeleteUser",
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
		FullMethod: "/hwscUserSvc.UserService/UpdateUser",
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
		FullMethod: "/hwscUserSvc.UserService/AuthenticateUser",
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
		FullMethod: "/hwscUserSvc.UserService/ListUsers",
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
		FullMethod: "/hwscUserSvc.UserService/GetUser",
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
		FullMethod: "/hwscUserSvc.UserService/ShareDocument",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).ShareDocument(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_GetToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).GetToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscUserSvc.UserService/GetToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetToken(ctx, req.(*UserRequest))
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
		FullMethod: "/hwscUserSvc.UserService/VerifyToken",
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
		FullMethod: "/hwscUserSvc.UserService/GetSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).GetSecret(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserService_NewSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServiceServer).NewSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscUserSvc.UserService/NewSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServiceServer).NewSecret(ctx, req.(*UserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _UserService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hwscUserSvc.UserService",
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
			MethodName: "GetToken",
			Handler:    _UserService_GetToken_Handler,
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
			MethodName: "NewSecret",
			Handler:    _UserService_NewSecret_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "hwsc-user-svc.proto",
}
