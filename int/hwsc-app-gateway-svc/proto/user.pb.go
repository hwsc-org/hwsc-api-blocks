// Code generated by protoc-gen-go. DO NOT EDIT.
// source: user.proto

package hwsc

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

// map:
// key = friend's uuid
// value = this can be anything, helps O(1) lookup time for deletion and updating
type UserDocumentMetadata struct {
	// @inject_tag: bson:"isPublic"
	IsPublic bool `protobuf:"varint,1,opt,name=is_public,json=isPublic,proto3" json:"is_public,omitempty"`
	// @inject_tag: bson:"sharedWith"
	SharedWith           map[string]bool `protobuf:"bytes,2,rep,name=shared_with,json=sharedWith,proto3" json:"shared_with,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"varint,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *UserDocumentMetadata) Reset()         { *m = UserDocumentMetadata{} }
func (m *UserDocumentMetadata) String() string { return proto.CompactTextString(m) }
func (*UserDocumentMetadata) ProtoMessage()    {}
func (*UserDocumentMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_116e343673f7ffaf, []int{0}
}

func (m *UserDocumentMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserDocumentMetadata.Unmarshal(m, b)
}
func (m *UserDocumentMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserDocumentMetadata.Marshal(b, m, deterministic)
}
func (m *UserDocumentMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserDocumentMetadata.Merge(m, src)
}
func (m *UserDocumentMetadata) XXX_Size() int {
	return xxx_messageInfo_UserDocumentMetadata.Size(m)
}
func (m *UserDocumentMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_UserDocumentMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_UserDocumentMetadata proto.InternalMessageInfo

func (m *UserDocumentMetadata) GetIsPublic() bool {
	if m != nil {
		return m.IsPublic
	}
	return false
}

func (m *UserDocumentMetadata) GetSharedWith() map[string]bool {
	if m != nil {
		return m.SharedWith
	}
	return nil
}

// map:
// key = friend's duid
// value = this can be anything, helps O(1) lookup time for deletion and updating
type UserFriendMetadata struct {
	// @inject_tag: bson:"sharedDuidToMe"
	SharedDuidToMe       map[string]bool `protobuf:"bytes,1,rep,name=shared_duid_to_me,json=sharedDuidToMe,proto3" json:"shared_duid_to_me,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"varint,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *UserFriendMetadata) Reset()         { *m = UserFriendMetadata{} }
func (m *UserFriendMetadata) String() string { return proto.CompactTextString(m) }
func (*UserFriendMetadata) ProtoMessage()    {}
func (*UserFriendMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_116e343673f7ffaf, []int{1}
}

func (m *UserFriendMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFriendMetadata.Unmarshal(m, b)
}
func (m *UserFriendMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFriendMetadata.Marshal(b, m, deterministic)
}
func (m *UserFriendMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFriendMetadata.Merge(m, src)
}
func (m *UserFriendMetadata) XXX_Size() int {
	return xxx_messageInfo_UserFriendMetadata.Size(m)
}
func (m *UserFriendMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFriendMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_UserFriendMetadata proto.InternalMessageInfo

func (m *UserFriendMetadata) GetSharedDuidToMe() map[string]bool {
	if m != nil {
		return m.SharedDuidToMe
	}
	return nil
}

type User struct {
	// @inject_tag: bson:"uuid"
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// @inject_tag: bson:"firstName"
	FirstName string `protobuf:"bytes,2,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	// @inject_tag: bson:"lastName"
	LastName string `protobuf:"bytes,3,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty"`
	// @inject_tag: bson:"email"
	Email string `protobuf:"bytes,4,opt,name=email,proto3" json:"email,omitempty"`
	// @inject_tag: bson:"password"
	Password string `protobuf:"bytes,5,opt,name=password,proto3" json:"password,omitempty"`
	// @inject_tag: bson:"organization"
	Organization string `protobuf:"bytes,6,opt,name=organization,proto3" json:"organization,omitempty"`
	// @inject_tag: bson:"userDocuments"
	UserDocuments map[string]*UserDocumentMetadata `protobuf:"bytes,7,rep,name=user_documents,json=userDocuments,proto3" json:"user_documents,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// @inject_tag: bson:"sharedToMe"
	SharedToMe map[string]*UserFriendMetadata `protobuf:"bytes,8,rep,name=shared_to_me,json=sharedToMe,proto3" json:"shared_to_me,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// @inject_tag: bson:"createdDate"
	CreatedDate int64 `protobuf:"varint,9,opt,name=created_date,json=createdDate,proto3" json:"created_date,omitempty"`
	// @inject_tag: bson:"isVerified"
	IsVerified           bool     `protobuf:"varint,10,opt,name=is_verified,json=isVerified,proto3" json:"is_verified,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *User) Reset()         { *m = User{} }
func (m *User) String() string { return proto.CompactTextString(m) }
func (*User) ProtoMessage()    {}
func (*User) Descriptor() ([]byte, []int) {
	return fileDescriptor_116e343673f7ffaf, []int{2}
}

func (m *User) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_User.Unmarshal(m, b)
}
func (m *User) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_User.Marshal(b, m, deterministic)
}
func (m *User) XXX_Merge(src proto.Message) {
	xxx_messageInfo_User.Merge(m, src)
}
func (m *User) XXX_Size() int {
	return xxx_messageInfo_User.Size(m)
}
func (m *User) XXX_DiscardUnknown() {
	xxx_messageInfo_User.DiscardUnknown(m)
}

var xxx_messageInfo_User proto.InternalMessageInfo

func (m *User) GetUuid() string {
	if m != nil {
		return m.Uuid
	}
	return ""
}

func (m *User) GetFirstName() string {
	if m != nil {
		return m.FirstName
	}
	return ""
}

func (m *User) GetLastName() string {
	if m != nil {
		return m.LastName
	}
	return ""
}

func (m *User) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *User) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *User) GetOrganization() string {
	if m != nil {
		return m.Organization
	}
	return ""
}

func (m *User) GetUserDocuments() map[string]*UserDocumentMetadata {
	if m != nil {
		return m.UserDocuments
	}
	return nil
}

func (m *User) GetSharedToMe() map[string]*UserFriendMetadata {
	if m != nil {
		return m.SharedToMe
	}
	return nil
}

func (m *User) GetCreatedDate() int64 {
	if m != nil {
		return m.CreatedDate
	}
	return 0
}

func (m *User) GetIsVerified() bool {
	if m != nil {
		return m.IsVerified
	}
	return false
}

func init() {
	proto.RegisterType((*UserDocumentMetadata)(nil), "hwsc.UserDocumentMetadata")
	proto.RegisterMapType((map[string]bool)(nil), "hwsc.UserDocumentMetadata.SharedWithEntry")
	proto.RegisterType((*UserFriendMetadata)(nil), "hwsc.UserFriendMetadata")
	proto.RegisterMapType((map[string]bool)(nil), "hwsc.UserFriendMetadata.SharedDuidToMeEntry")
	proto.RegisterType((*User)(nil), "hwsc.User")
	proto.RegisterMapType((map[string]*UserFriendMetadata)(nil), "hwsc.User.SharedToMeEntry")
	proto.RegisterMapType((map[string]*UserDocumentMetadata)(nil), "hwsc.User.UserDocumentsEntry")
}

func init() { proto.RegisterFile("user.proto", fileDescriptor_116e343673f7ffaf) }

var fileDescriptor_116e343673f7ffaf = []byte{
	// 465 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x53, 0x5d, 0x8b, 0xd3, 0x40,
	0x14, 0x25, 0x6d, 0xba, 0x26, 0xb7, 0x75, 0xd5, 0xb1, 0x0f, 0x43, 0x64, 0xb1, 0xf6, 0xa9, 0x88,
	0x04, 0xd1, 0x17, 0x11, 0x7d, 0x10, 0xaa, 0x2f, 0xb2, 0x22, 0xf1, 0xa3, 0x2f, 0x42, 0x98, 0xed,
	0xdc, 0xb5, 0x17, 0x9b, 0xa4, 0xcc, 0x4c, 0xb6, 0xac, 0x7f, 0xc9, 0x17, 0xff, 0x81, 0x7f, 0x4d,
	0x66, 0x26, 0xdd, 0x26, 0x4b, 0x15, 0xf6, 0x2d, 0xf7, 0xdc, 0xb9, 0xf7, 0x1e, 0xce, 0x39, 0x01,
	0xa8, 0x35, 0xaa, 0x74, 0xa3, 0x2a, 0x53, 0xb1, 0x70, 0xb5, 0xd5, 0xcb, 0xe9, 0x9f, 0x00, 0xc6,
	0x5f, 0x34, 0xaa, 0x79, 0xb5, 0xac, 0x0b, 0x2c, 0xcd, 0x29, 0x1a, 0x21, 0x85, 0x11, 0xec, 0x01,
	0xc4, 0xa4, 0xf3, 0x4d, 0x7d, 0xb6, 0xa6, 0x25, 0x0f, 0x26, 0xc1, 0x2c, 0xca, 0x22, 0xd2, 0x1f,
	0x5d, 0xcd, 0xde, 0xc3, 0x50, 0xaf, 0x84, 0x42, 0x99, 0x6f, 0xc9, 0xac, 0x78, 0x6f, 0xd2, 0x9f,
	0x0d, 0x9f, 0x3d, 0x4e, 0xed, 0xc6, 0xf4, 0xd0, 0xb6, 0xf4, 0x93, 0x7b, 0xbd, 0x20, 0xb3, 0x7a,
	0x5b, 0x1a, 0x75, 0x99, 0x81, 0xbe, 0x02, 0x92, 0xd7, 0x70, 0xe7, 0x5a, 0x9b, 0xdd, 0x85, 0xfe,
	0x0f, 0xbc, 0x74, 0x67, 0xe3, 0xcc, 0x7e, 0xb2, 0x31, 0x0c, 0x2e, 0xc4, 0xba, 0x46, 0xde, 0x73,
	0x54, 0x7c, 0xf1, 0xb2, 0xf7, 0x22, 0x98, 0xfe, 0x0e, 0x80, 0xd9, 0x9b, 0xef, 0x14, 0x61, 0x29,
	0xaf, 0xf8, 0x2f, 0xe0, 0x5e, 0x43, 0x51, 0xd6, 0x24, 0x73, 0x53, 0xe5, 0x05, 0xf2, 0xc0, 0x11,
	0x7d, 0xb2, 0x27, 0xda, 0x1d, 0x6a, 0x68, 0xce, 0x6b, 0x92, 0x9f, 0xab, 0x53, 0xf4, 0x54, 0x8f,
	0x75, 0x07, 0x4c, 0xde, 0xc0, 0xfd, 0x03, 0xcf, 0x6e, 0x44, 0xf9, 0x57, 0x08, 0xa1, 0xbd, 0xce,
	0x18, 0x84, 0x75, 0x4d, 0xb2, 0x99, 0x72, 0xdf, 0xec, 0x04, 0xe0, 0x9c, 0x94, 0x36, 0x79, 0x29,
	0x0a, 0x3f, 0x1b, 0x67, 0xb1, 0x43, 0x3e, 0x88, 0x02, 0xad, 0x2f, 0x6b, 0xb1, 0xeb, 0xf6, 0x5d,
	0x37, 0xb2, 0x80, 0x6b, 0x8e, 0x61, 0x80, 0x85, 0xa0, 0x35, 0x0f, 0x5d, 0xc3, 0x17, 0x2c, 0x81,
	0x68, 0x23, 0xb4, 0xde, 0x56, 0x4a, 0xf2, 0x81, 0x9f, 0xd8, 0xd5, 0x6c, 0x0a, 0xa3, 0x4a, 0x7d,
	0x17, 0x25, 0xfd, 0x14, 0x86, 0xaa, 0x92, 0x1f, 0xb9, 0x7e, 0x07, 0x63, 0x73, 0x38, 0xb6, 0xb9,
	0xc9, 0x65, 0xe3, 0xaa, 0xe6, 0xb7, 0x9c, 0x8e, 0x27, 0x7b, 0x1d, 0x3b, 0xae, 0x6b, 0x2f, 0xdc,
	0xed, 0xba, 0x8d, 0xb1, 0x57, 0x30, 0x6a, 0x0c, 0xf1, 0x5e, 0x44, 0x6e, 0x47, 0xd2, 0xda, 0xe1,
	0x65, 0xdd, 0x2b, 0xdf, 0x84, 0xc4, 0x02, 0xec, 0x11, 0x8c, 0x96, 0x0a, 0x85, 0xb1, 0x7e, 0x0a,
	0x83, 0x3c, 0x9e, 0x04, 0xb3, 0x7e, 0x36, 0x6c, 0xb0, 0xb9, 0x30, 0xc8, 0x1e, 0xc2, 0x90, 0x74,
	0x7e, 0x81, 0x8a, 0xce, 0x09, 0x25, 0x07, 0xa7, 0x3a, 0x90, 0xfe, 0xda, 0x20, 0xc9, 0x37, 0x1f,
	0x94, 0x2e, 0xcd, 0x03, 0xc6, 0x3d, 0x6d, 0x1b, 0xd7, 0xa1, 0x78, 0x3d, 0xd7, 0x2d, 0x53, 0x93,
	0xc5, 0x2e, 0xc6, 0xff, 0xcb, 0x44, 0xda, 0x5d, 0xcd, 0xff, 0x95, 0xc4, 0xd6, 0xe2, 0xb3, 0x23,
	0xf7, 0xbf, 0x3e, 0xff, 0x1b, 0x00, 0x00, 0xff, 0xff, 0xb4, 0x8b, 0xdc, 0x60, 0xbd, 0x03, 0x00,
	0x00,
}
