// Code generated by protoc-gen-go. DO NOT EDIT.
// source: int/hwsc-file-metadata-svc/proto/hwsc-file-metadata-svc.proto

package hwscFileMetadataSvcPb

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

type FileMetadata struct {
	// @inject_tag: bson:"fuid"
	Fuid string `protobuf:"bytes,1,opt,name=fuid,proto3" json:"fuid,omitempty"`
	// @inject_tag: bson:"uuid"
	Uuid string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
	// @inject_tag: bson:"lastName"
	LastName string `protobuf:"bytes,3,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty"`
	// @inject_tag: bson:"firstName"
	FirstName string `protobuf:"bytes,4,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	// @inject_tag: bson:"callTypeName"
	CallTypeName string `protobuf:"bytes,5,opt,name=call_type_name,json=callTypeName,proto3" json:"call_type_name,omitempty"`
	// @inject_tag: bson:"groundType"
	GroundType string `protobuf:"bytes,6,opt,name=ground_type,json=groundType,proto3" json:"ground_type,omitempty"`
	// @inject_tag: bson:"region"
	Region string `protobuf:"bytes,7,opt,name=region,proto3" json:"region,omitempty"`
	// @inject_tag: bson:"ocean"
	Ocean string `protobuf:"bytes,8,opt,name=ocean,proto3" json:"ocean,omitempty"`
	// @inject_tag: bson:"sensorType"
	SensorType string `protobuf:"bytes,9,opt,name=sensor_type,json=sensorType,proto3" json:"sensor_type,omitempty"`
	// @inject_tag: bson:"sensorName"
	SensorName string `protobuf:"bytes,10,opt,name=sensor_name,json=sensorName,proto3" json:"sensor_name,omitempty"`
	// @inject_tag: bson:"sampleRate"
	SampleRate uint32 `protobuf:"varint,11,opt,name=sample_rate,json=sampleRate,proto3" json:"sample_rate,omitempty"`
	// @inject_tag: bson:"latitude"
	Latitude float32 `protobuf:"fixed32,12,opt,name=latitude,proto3" json:"latitude,omitempty"`
	// @inject_tag: bson:"longitude"
	Longitude float32 `protobuf:"fixed32,13,opt,name=longitude,proto3" json:"longitude,omitempty"`
	// @inject_tag: bson:"imageUrl"
	ImageUrl []string `protobuf:"bytes,14,rep,name=image_url,json=imageUrl,proto3" json:"image_url,omitempty"`
	// @inject_tag: bson:"audioUrl"
	AudioUrl []string `protobuf:"bytes,15,rep,name=audio_url,json=audioUrl,proto3" json:"audio_url,omitempty"`
	// @inject_tag: bson:"videoUrl"
	VideoUrl []string `protobuf:"bytes,16,rep,name=video_url,json=videoUrl,proto3" json:"video_url,omitempty"`
	// @inject_tag: bson:"fileUrl"
	FileUrl []string `protobuf:"bytes,17,rep,name=file_url,json=fileUrl,proto3" json:"file_url,omitempty"`
	// @inject_tag: bson:"recordTimestamp"
	RecordTimestamp int64 `protobuf:"varint,18,opt,name=record_timestamp,json=recordTimestamp,proto3" json:"record_timestamp,omitempty"`
	// @inject_tag: bson:"createTimestamp"
	CreateTimestamp int64 `protobuf:"varint,19,opt,name=create_timestamp,json=createTimestamp,proto3" json:"create_timestamp,omitempty"`
	// @inject_tag: bson:"updateTimestamp"
	UpdateTimestamp      int64    `protobuf:"varint,20,opt,name=update_timestamp,json=updateTimestamp,proto3" json:"update_timestamp,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *FileMetadata) Reset()         { *m = FileMetadata{} }
func (m *FileMetadata) String() string { return proto.CompactTextString(m) }
func (*FileMetadata) ProtoMessage()    {}
func (*FileMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_5573547149af4b96, []int{0}
}

func (m *FileMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FileMetadata.Unmarshal(m, b)
}
func (m *FileMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FileMetadata.Marshal(b, m, deterministic)
}
func (m *FileMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FileMetadata.Merge(m, src)
}
func (m *FileMetadata) XXX_Size() int {
	return xxx_messageInfo_FileMetadata.Size(m)
}
func (m *FileMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_FileMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_FileMetadata proto.InternalMessageInfo

func (m *FileMetadata) GetFuid() string {
	if m != nil {
		return m.Fuid
	}
	return ""
}

func (m *FileMetadata) GetUuid() string {
	if m != nil {
		return m.Uuid
	}
	return ""
}

func (m *FileMetadata) GetLastName() string {
	if m != nil {
		return m.LastName
	}
	return ""
}

func (m *FileMetadata) GetFirstName() string {
	if m != nil {
		return m.FirstName
	}
	return ""
}

func (m *FileMetadata) GetCallTypeName() string {
	if m != nil {
		return m.CallTypeName
	}
	return ""
}

func (m *FileMetadata) GetGroundType() string {
	if m != nil {
		return m.GroundType
	}
	return ""
}

func (m *FileMetadata) GetRegion() string {
	if m != nil {
		return m.Region
	}
	return ""
}

func (m *FileMetadata) GetOcean() string {
	if m != nil {
		return m.Ocean
	}
	return ""
}

func (m *FileMetadata) GetSensorType() string {
	if m != nil {
		return m.SensorType
	}
	return ""
}

func (m *FileMetadata) GetSensorName() string {
	if m != nil {
		return m.SensorName
	}
	return ""
}

func (m *FileMetadata) GetSampleRate() uint32 {
	if m != nil {
		return m.SampleRate
	}
	return 0
}

func (m *FileMetadata) GetLatitude() float32 {
	if m != nil {
		return m.Latitude
	}
	return 0
}

func (m *FileMetadata) GetLongitude() float32 {
	if m != nil {
		return m.Longitude
	}
	return 0
}

func (m *FileMetadata) GetImageUrl() []string {
	if m != nil {
		return m.ImageUrl
	}
	return nil
}

func (m *FileMetadata) GetAudioUrl() []string {
	if m != nil {
		return m.AudioUrl
	}
	return nil
}

func (m *FileMetadata) GetVideoUrl() []string {
	if m != nil {
		return m.VideoUrl
	}
	return nil
}

func (m *FileMetadata) GetFileUrl() []string {
	if m != nil {
		return m.FileUrl
	}
	return nil
}

func (m *FileMetadata) GetRecordTimestamp() int64 {
	if m != nil {
		return m.RecordTimestamp
	}
	return 0
}

func (m *FileMetadata) GetCreateTimestamp() int64 {
	if m != nil {
		return m.CreateTimestamp
	}
	return 0
}

func (m *FileMetadata) GetUpdateTimestamp() int64 {
	if m != nil {
		return m.UpdateTimestamp
	}
	return 0
}

type FileMetadataRequest struct {
	Data *FileMetadata `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	// @inject_tag: bson:"uuid"
	Uuid                 string   `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *FileMetadataRequest) Reset()         { *m = FileMetadataRequest{} }
func (m *FileMetadataRequest) String() string { return proto.CompactTextString(m) }
func (*FileMetadataRequest) ProtoMessage()    {}
func (*FileMetadataRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_5573547149af4b96, []int{1}
}

func (m *FileMetadataRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FileMetadataRequest.Unmarshal(m, b)
}
func (m *FileMetadataRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FileMetadataRequest.Marshal(b, m, deterministic)
}
func (m *FileMetadataRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FileMetadataRequest.Merge(m, src)
}
func (m *FileMetadataRequest) XXX_Size() int {
	return xxx_messageInfo_FileMetadataRequest.Size(m)
}
func (m *FileMetadataRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_FileMetadataRequest.DiscardUnknown(m)
}

var xxx_messageInfo_FileMetadataRequest proto.InternalMessageInfo

func (m *FileMetadataRequest) GetData() *FileMetadata {
	if m != nil {
		return m.Data
	}
	return nil
}

func (m *FileMetadataRequest) GetUuid() string {
	if m != nil {
		return m.Uuid
	}
	return ""
}

type FileMetadataResponse struct {
	// Types that are valid to be assigned to Status:
	//	*FileMetadataResponse_Code
	Status                 isFileMetadataResponse_Status `protobuf_oneof:"status"`
	Message                string                        `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	FileMetadataCollection []*FileMetadata               `protobuf:"bytes,3,rep,name=file_metadata_collection,json=fileMetadataCollection,proto3" json:"file_metadata_collection,omitempty"`
	XXX_NoUnkeyedLiteral   struct{}                      `json:"-"`
	XXX_unrecognized       []byte                        `json:"-"`
	XXX_sizecache          int32                         `json:"-"`
}

func (m *FileMetadataResponse) Reset()         { *m = FileMetadataResponse{} }
func (m *FileMetadataResponse) String() string { return proto.CompactTextString(m) }
func (*FileMetadataResponse) ProtoMessage()    {}
func (*FileMetadataResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_5573547149af4b96, []int{2}
}

func (m *FileMetadataResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FileMetadataResponse.Unmarshal(m, b)
}
func (m *FileMetadataResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FileMetadataResponse.Marshal(b, m, deterministic)
}
func (m *FileMetadataResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FileMetadataResponse.Merge(m, src)
}
func (m *FileMetadataResponse) XXX_Size() int {
	return xxx_messageInfo_FileMetadataResponse.Size(m)
}
func (m *FileMetadataResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_FileMetadataResponse.DiscardUnknown(m)
}

var xxx_messageInfo_FileMetadataResponse proto.InternalMessageInfo

type isFileMetadataResponse_Status interface {
	isFileMetadataResponse_Status()
}

type FileMetadataResponse_Code struct {
	Code uint32 `protobuf:"varint,1,opt,name=code,proto3,oneof"`
}

func (*FileMetadataResponse_Code) isFileMetadataResponse_Status() {}

func (m *FileMetadataResponse) GetStatus() isFileMetadataResponse_Status {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *FileMetadataResponse) GetCode() uint32 {
	if x, ok := m.GetStatus().(*FileMetadataResponse_Code); ok {
		return x.Code
	}
	return 0
}

func (m *FileMetadataResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *FileMetadataResponse) GetFileMetadataCollection() []*FileMetadata {
	if m != nil {
		return m.FileMetadataCollection
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*FileMetadataResponse) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _FileMetadataResponse_OneofMarshaler, _FileMetadataResponse_OneofUnmarshaler, _FileMetadataResponse_OneofSizer, []interface{}{
		(*FileMetadataResponse_Code)(nil),
	}
}

func _FileMetadataResponse_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*FileMetadataResponse)
	// status
	switch x := m.Status.(type) {
	case *FileMetadataResponse_Code:
		b.EncodeVarint(1<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.Code))
	case nil:
	default:
		return fmt.Errorf("FileMetadataResponse.Status has unexpected type %T", x)
	}
	return nil
}

func _FileMetadataResponse_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*FileMetadataResponse)
	switch tag {
	case 1: // status.code
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Status = &FileMetadataResponse_Code{uint32(x)}
		return true, err
	default:
		return false, nil
	}
}

func _FileMetadataResponse_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*FileMetadataResponse)
	// status
	switch x := m.Status.(type) {
	case *FileMetadataResponse_Code:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(x.Code))
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

func init() {
	proto.RegisterType((*FileMetadata)(nil), "hwscFileMetadataSvc.FileMetadata")
	proto.RegisterType((*FileMetadataRequest)(nil), "hwscFileMetadataSvc.FileMetadataRequest")
	proto.RegisterType((*FileMetadataResponse)(nil), "hwscFileMetadataSvc.FileMetadataResponse")
}

func init() {
	proto.RegisterFile("int/hwsc-file-metadata-svc/proto/hwsc-file-metadata-svc.proto", fileDescriptor_5573547149af4b96)
}

var fileDescriptor_5573547149af4b96 = []byte{
	// 571 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x94, 0xcf, 0x6e, 0xd3, 0x40,
	0x10, 0x87, 0x9b, 0xc6, 0x4d, 0xe3, 0xe9, 0x5f, 0xb6, 0xa1, 0x98, 0x02, 0xc2, 0x44, 0x1c, 0xd2,
	0x43, 0x5b, 0xa9, 0x88, 0x23, 0x97, 0x56, 0x2a, 0x1c, 0x00, 0x21, 0xb7, 0x5c, 0xe0, 0x60, 0xb6,
	0xf6, 0x24, 0xac, 0x58, 0x7b, 0xcd, 0xee, 0x3a, 0xa8, 0x0f, 0xc5, 0x13, 0xf1, 0x20, 0x5c, 0xd1,
	0xce, 0xc6, 0x6d, 0x8c, 0x82, 0xe8, 0xa5, 0x37, 0xcf, 0xf7, 0xfd, 0x32, 0xbb, 0x9a, 0x8c, 0x0d,
	0xaf, 0x44, 0x69, 0x8f, 0xbe, 0xfe, 0x30, 0xd9, 0xc1, 0x58, 0x48, 0x3c, 0x28, 0xd0, 0xf2, 0x9c,
	0x5b, 0x7e, 0x60, 0xa6, 0xd9, 0x51, 0xa5, 0x95, 0x55, 0xff, 0x90, 0x87, 0x24, 0xd9, 0x8e, 0xb3,
	0x67, 0x42, 0xe2, 0xbb, 0x99, 0x3b, 0x9f, 0x66, 0xc3, 0xdf, 0x01, 0xac, 0xcf, 0x33, 0xc6, 0x20,
	0x18, 0xd7, 0x22, 0x8f, 0x3a, 0x71, 0x67, 0x14, 0x26, 0xf4, 0xec, 0x58, 0xed, 0xd8, 0xb2, 0x67,
	0xee, 0x99, 0x3d, 0x82, 0x50, 0x72, 0x63, 0xd3, 0x92, 0x17, 0x18, 0x75, 0x49, 0xf4, 0x1d, 0x78,
	0xcf, 0x0b, 0x64, 0x4f, 0x00, 0xc6, 0x42, 0x37, 0x36, 0x20, 0x1b, 0x12, 0x21, 0xfd, 0x1c, 0x36,
	0x33, 0x2e, 0x65, 0x6a, 0xaf, 0x2a, 0xf4, 0x91, 0x15, 0x8a, 0xac, 0x3b, 0x7a, 0x71, 0x55, 0x21,
	0xa5, 0x9e, 0xc2, 0xda, 0x44, 0xab, 0xba, 0xcc, 0x29, 0x17, 0xf5, 0x28, 0x02, 0x1e, 0xb9, 0x10,
	0xdb, 0x85, 0x9e, 0xc6, 0x89, 0x50, 0x65, 0xb4, 0x4a, 0x6e, 0x56, 0xb1, 0x01, 0xac, 0xa8, 0x0c,
	0x79, 0x19, 0xf5, 0x09, 0xfb, 0xc2, 0xb5, 0x33, 0x58, 0x1a, 0xa5, 0x7d, 0xbb, 0xd0, 0xb7, 0xf3,
	0x88, 0xda, 0xdd, 0x04, 0xe8, 0x4a, 0x30, 0x1f, 0x68, 0x2e, 0x64, 0x78, 0x51, 0x49, 0x4c, 0x35,
	0xb7, 0x18, 0xad, 0xc5, 0x9d, 0xd1, 0x46, 0x02, 0x1e, 0x25, 0xdc, 0x22, 0xdb, 0x83, 0xbe, 0xe4,
	0x56, 0xd8, 0x3a, 0xc7, 0x68, 0x3d, 0xee, 0x8c, 0x96, 0x93, 0xeb, 0x9a, 0x3d, 0x86, 0x50, 0xaa,
	0x72, 0xe2, 0xe5, 0x06, 0xc9, 0x1b, 0xe0, 0xa6, 0x29, 0x0a, 0x3e, 0xc1, 0xb4, 0xd6, 0x32, 0xda,
	0x8c, 0xbb, 0x6e, 0x9a, 0x04, 0x3e, 0x6a, 0xe9, 0x24, 0xaf, 0x73, 0xa1, 0x48, 0x6e, 0x79, 0x49,
	0x60, 0x26, 0xa7, 0x22, 0x47, 0x2f, 0xb7, 0xbd, 0x24, 0xe0, 0xe4, 0x43, 0xe8, 0xbb, 0x6d, 0x20,
	0x77, 0x8f, 0xdc, 0xaa, 0xab, 0x9d, 0xda, 0x87, 0x6d, 0x8d, 0x99, 0xd2, 0x79, 0x6a, 0x45, 0x81,
	0xc6, 0xf2, 0xa2, 0x8a, 0x58, 0xdc, 0x19, 0x75, 0x93, 0x2d, 0xcf, 0x2f, 0x1a, 0xec, 0xa2, 0x99,
	0x46, 0x6e, 0x71, 0x2e, 0xba, 0xe3, 0xa3, 0x9e, 0xb7, 0xa2, 0x75, 0x95, 0xb7, 0xa3, 0x03, 0x1f,
	0xf5, 0xfc, 0x3a, 0x3a, 0xfc, 0x02, 0x3b, 0xf3, 0x8b, 0x97, 0xe0, 0xf7, 0x1a, 0x8d, 0x65, 0x2f,
	0x21, 0x70, 0x25, 0xed, 0xdf, 0xda, 0xf1, 0xb3, 0xc3, 0x05, 0x4b, 0x7b, 0xd8, 0xfa, 0x5d, 0xd0,
	0xac, 0xed, 0xdf, 0x2b, 0x3a, 0xfc, 0xd9, 0x81, 0x41, 0xfb, 0x08, 0x53, 0xa9, 0xd2, 0x20, 0x1b,
	0x40, 0x90, 0xa9, 0x1c, 0xe9, 0x8c, 0x8d, 0x37, 0x4b, 0x09, 0x55, 0x2c, 0x82, 0xd5, 0x02, 0x8d,
	0xe1, 0x13, 0x9c, 0x75, 0x69, 0x4a, 0xf6, 0x19, 0x22, 0x1a, 0x63, 0xf3, 0x52, 0xa5, 0x99, 0x92,
	0x12, 0x33, 0xeb, 0x56, 0xaf, 0x1b, 0x77, 0x6f, 0x77, 0xcf, 0xdd, 0xf1, 0x5c, 0x75, 0x7a, 0xdd,
	0xe0, 0xa4, 0x0f, 0x3d, 0x63, 0xb9, 0xad, 0xcd, 0xf1, 0xaf, 0xe5, 0xf6, 0x48, 0xce, 0x51, 0x4f,
	0x45, 0x86, 0xec, 0x12, 0xc2, 0xd7, 0x68, 0xcf, 0x29, 0xc4, 0x46, 0xff, 0x3f, 0xc9, 0x4f, 0x72,
	0x6f, 0xff, 0x16, 0x49, 0x3f, 0x90, 0xe1, 0x12, 0xfb, 0x06, 0xec, 0x94, 0xfe, 0xcb, 0xd6, 0xc7,
	0xe0, 0x8e, 0x0e, 0x33, 0xb0, 0xf7, 0x56, 0x18, 0x7b, 0xb6, 0x70, 0x20, 0x77, 0x74, 0xe8, 0xc9,
	0x83, 0x4f, 0xf7, 0x17, 0xa4, 0x3f, 0x5c, 0x5e, 0xf6, 0xe8, 0xf3, 0xf8, 0xe2, 0x4f, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x74, 0x22, 0x1b, 0x48, 0x5f, 0x05, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// FileMetadataServiceClient is the client API for FileMetadataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FileMetadataServiceClient interface {
	GetStatus(ctx context.Context, in *FileMetadataRequest, opts ...grpc.CallOption) (*FileMetadataResponse, error)
	CreateFileMetadata(ctx context.Context, in *FileMetadataRequest, opts ...grpc.CallOption) (*FileMetadataResponse, error)
	ListFileMetadataCollection(ctx context.Context, in *FileMetadataRequest, opts ...grpc.CallOption) (*FileMetadataResponse, error)
}

type fileMetadataServiceClient struct {
	cc *grpc.ClientConn
}

func NewFileMetadataServiceClient(cc *grpc.ClientConn) FileMetadataServiceClient {
	return &fileMetadataServiceClient{cc}
}

func (c *fileMetadataServiceClient) GetStatus(ctx context.Context, in *FileMetadataRequest, opts ...grpc.CallOption) (*FileMetadataResponse, error) {
	out := new(FileMetadataResponse)
	err := c.cc.Invoke(ctx, "/hwscFileMetadataSvc.FileMetadataService/GetStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileMetadataServiceClient) CreateFileMetadata(ctx context.Context, in *FileMetadataRequest, opts ...grpc.CallOption) (*FileMetadataResponse, error) {
	out := new(FileMetadataResponse)
	err := c.cc.Invoke(ctx, "/hwscFileMetadataSvc.FileMetadataService/CreateFileMetadata", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileMetadataServiceClient) ListFileMetadataCollection(ctx context.Context, in *FileMetadataRequest, opts ...grpc.CallOption) (*FileMetadataResponse, error) {
	out := new(FileMetadataResponse)
	err := c.cc.Invoke(ctx, "/hwscFileMetadataSvc.FileMetadataService/ListFileMetadataCollection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileMetadataServiceServer is the server API for FileMetadataService service.
type FileMetadataServiceServer interface {
	GetStatus(context.Context, *FileMetadataRequest) (*FileMetadataResponse, error)
	CreateFileMetadata(context.Context, *FileMetadataRequest) (*FileMetadataResponse, error)
	ListFileMetadataCollection(context.Context, *FileMetadataRequest) (*FileMetadataResponse, error)
}

func RegisterFileMetadataServiceServer(s *grpc.Server, srv FileMetadataServiceServer) {
	s.RegisterService(&_FileMetadataService_serviceDesc, srv)
}

func _FileMetadataService_GetStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileMetadataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileMetadataServiceServer).GetStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscFileMetadataSvc.FileMetadataService/GetStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileMetadataServiceServer).GetStatus(ctx, req.(*FileMetadataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileMetadataService_CreateFileMetadata_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileMetadataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileMetadataServiceServer).CreateFileMetadata(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscFileMetadataSvc.FileMetadataService/CreateFileMetadata",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileMetadataServiceServer).CreateFileMetadata(ctx, req.(*FileMetadataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileMetadataService_ListFileMetadataCollection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileMetadataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileMetadataServiceServer).ListFileMetadataCollection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscFileMetadataSvc.FileMetadataService/ListFileMetadataCollection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileMetadataServiceServer).ListFileMetadataCollection(ctx, req.(*FileMetadataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _FileMetadataService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hwscFileMetadataSvc.FileMetadataService",
	HandlerType: (*FileMetadataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetStatus",
			Handler:    _FileMetadataService_GetStatus_Handler,
		},
		{
			MethodName: "CreateFileMetadata",
			Handler:    _FileMetadataService_CreateFileMetadata_Handler,
		},
		{
			MethodName: "ListFileMetadataCollection",
			Handler:    _FileMetadataService_ListFileMetadataCollection_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "int/hwsc-file-metadata-svc/proto/hwsc-file-metadata-svc.proto",
}
