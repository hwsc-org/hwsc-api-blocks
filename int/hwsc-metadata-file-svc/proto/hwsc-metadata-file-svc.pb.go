// Code generated by protoc-gen-go. DO NOT EDIT.
// source: int/hwsc-metadata-file-svc/proto/hwsc-metadata-file-svc.proto

package hwscMetadataFileSvcPb

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

type MetadataFile struct {
	// @inject_tag: bson:"uuid"
	Uuid string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty" bson:"uuid"`
	// @inject_tag: bson:"lastName"
	LastName string `protobuf:"bytes,2,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty" bson:"lastName"`
	// @inject_tag: bson:"firstName"
	FirstName string `protobuf:"bytes,3,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty" bson:"firstName"`
	// @inject_tag: bson:"callTypeName"
	CallTypeName string `protobuf:"bytes,4,opt,name=call_type_name,json=callTypeName,proto3" json:"call_type_name,omitempty" bson:"callTypeName"`
	// @inject_tag: bson:"groundType"
	GroundType string `protobuf:"bytes,5,opt,name=ground_type,json=groundType,proto3" json:"ground_type,omitempty" bson:"groundType"`
	// @inject_tag: bson:"region"
	Region string `protobuf:"bytes,6,opt,name=region,proto3" json:"region,omitempty" bson:"region"`
	// @inject_tag: bson:"ocean"
	Ocean string `protobuf:"bytes,7,opt,name=ocean,proto3" json:"ocean,omitempty" bson:"ocean"`
	// @inject_tag: bson:"sensorType"
	SensorType string `protobuf:"bytes,8,opt,name=sensor_type,json=sensorType,proto3" json:"sensor_type,omitempty" bson:"sensorType"`
	// @inject_tag: bson:"sensorName"
	SensorName string `protobuf:"bytes,9,opt,name=sensor_name,json=sensorName,proto3" json:"sensor_name,omitempty" bson:"sensorName"`
	// @inject_tag: bson:"sampleRate"
	SampleRate int32 `protobuf:"varint,10,opt,name=sample_rate,json=sampleRate,proto3" json:"sample_rate,omitempty" bson:"sampleRate"`
	// @inject_tag: bson:"latitude"
	Latitude float32 `protobuf:"fixed32,11,opt,name=latitude,proto3" json:"latitude,omitempty" bson:"latitude"`
	// @inject_tag: bson:"longitude"
	Longitude float32 `protobuf:"fixed32,12,opt,name=longitude,proto3" json:"longitude,omitempty" bson:"longitude"`
	// @inject_tag: bson:"imageUrl"
	ImageUrl []string `protobuf:"bytes,13,rep,name=image_url,json=imageUrl,proto3" json:"image_url,omitempty" bson:"imageUrl"`
	// @inject_tag: bson:"audioUrl"
	AudioUrl []string `protobuf:"bytes,14,rep,name=audio_url,json=audioUrl,proto3" json:"audio_url,omitempty" bson:"audioUrl"`
	// @inject_tag: bson:"videoUrl"
	VideoUrl []string `protobuf:"bytes,15,rep,name=video_url,json=videoUrl,proto3" json:"video_url,omitempty" bson:"videoUrl"`
	// @inject_tag: bson:"fileUrl"
	FileUrl []string `protobuf:"bytes,16,rep,name=file_url,json=fileUrl,proto3" json:"file_url,omitempty" bson:"fileUrl"`
	// @inject_tag: bson:"recordTimestamp"
	RecordTimestamp int64 `protobuf:"varint,17,opt,name=record_timestamp,json=recordTimestamp,proto3" json:"record_timestamp,omitempty" bson:"recordTimestamp"`
	// @inject_tag: bson:"createTimestamp"
	CreateTimestamp int64 `protobuf:"varint,18,opt,name=create_timestamp,json=createTimestamp,proto3" json:"create_timestamp,omitempty" bson:"createTimestamp"`
	// @inject_tag: bson:"updateTimestamp"
	UpdateTimestamp      int64    `protobuf:"varint,19,opt,name=update_timestamp,json=updateTimestamp,proto3" json:"update_timestamp,omitempty" bson:"updateTimestamp"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MetadataFile) Reset()         { *m = MetadataFile{} }
func (m *MetadataFile) String() string { return proto.CompactTextString(m) }
func (*MetadataFile) ProtoMessage()    {}
func (*MetadataFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_9f0b51bc49740371, []int{0}
}

func (m *MetadataFile) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MetadataFile.Unmarshal(m, b)
}
func (m *MetadataFile) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MetadataFile.Marshal(b, m, deterministic)
}
func (m *MetadataFile) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MetadataFile.Merge(m, src)
}
func (m *MetadataFile) XXX_Size() int {
	return xxx_messageInfo_MetadataFile.Size(m)
}
func (m *MetadataFile) XXX_DiscardUnknown() {
	xxx_messageInfo_MetadataFile.DiscardUnknown(m)
}

var xxx_messageInfo_MetadataFile proto.InternalMessageInfo

func (m *MetadataFile) GetUuid() string {
	if m != nil {
		return m.Uuid
	}
	return ""
}

func (m *MetadataFile) GetLastName() string {
	if m != nil {
		return m.LastName
	}
	return ""
}

func (m *MetadataFile) GetFirstName() string {
	if m != nil {
		return m.FirstName
	}
	return ""
}

func (m *MetadataFile) GetCallTypeName() string {
	if m != nil {
		return m.CallTypeName
	}
	return ""
}

func (m *MetadataFile) GetGroundType() string {
	if m != nil {
		return m.GroundType
	}
	return ""
}

func (m *MetadataFile) GetRegion() string {
	if m != nil {
		return m.Region
	}
	return ""
}

func (m *MetadataFile) GetOcean() string {
	if m != nil {
		return m.Ocean
	}
	return ""
}

func (m *MetadataFile) GetSensorType() string {
	if m != nil {
		return m.SensorType
	}
	return ""
}

func (m *MetadataFile) GetSensorName() string {
	if m != nil {
		return m.SensorName
	}
	return ""
}

func (m *MetadataFile) GetSampleRate() int32 {
	if m != nil {
		return m.SampleRate
	}
	return 0
}

func (m *MetadataFile) GetLatitude() float32 {
	if m != nil {
		return m.Latitude
	}
	return 0
}

func (m *MetadataFile) GetLongitude() float32 {
	if m != nil {
		return m.Longitude
	}
	return 0
}

func (m *MetadataFile) GetImageUrl() []string {
	if m != nil {
		return m.ImageUrl
	}
	return nil
}

func (m *MetadataFile) GetAudioUrl() []string {
	if m != nil {
		return m.AudioUrl
	}
	return nil
}

func (m *MetadataFile) GetVideoUrl() []string {
	if m != nil {
		return m.VideoUrl
	}
	return nil
}

func (m *MetadataFile) GetFileUrl() []string {
	if m != nil {
		return m.FileUrl
	}
	return nil
}

func (m *MetadataFile) GetRecordTimestamp() int64 {
	if m != nil {
		return m.RecordTimestamp
	}
	return 0
}

func (m *MetadataFile) GetCreateTimestamp() int64 {
	if m != nil {
		return m.CreateTimestamp
	}
	return 0
}

func (m *MetadataFile) GetUpdateTimestamp() int64 {
	if m != nil {
		return m.UpdateTimestamp
	}
	return 0
}

type MetadataFileRequest struct {
	Data                 *MetadataFile `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *MetadataFileRequest) Reset()         { *m = MetadataFileRequest{} }
func (m *MetadataFileRequest) String() string { return proto.CompactTextString(m) }
func (*MetadataFileRequest) ProtoMessage()    {}
func (*MetadataFileRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_9f0b51bc49740371, []int{1}
}

func (m *MetadataFileRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MetadataFileRequest.Unmarshal(m, b)
}
func (m *MetadataFileRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MetadataFileRequest.Marshal(b, m, deterministic)
}
func (m *MetadataFileRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MetadataFileRequest.Merge(m, src)
}
func (m *MetadataFileRequest) XXX_Size() int {
	return xxx_messageInfo_MetadataFileRequest.Size(m)
}
func (m *MetadataFileRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_MetadataFileRequest.DiscardUnknown(m)
}

var xxx_messageInfo_MetadataFileRequest proto.InternalMessageInfo

func (m *MetadataFileRequest) GetData() *MetadataFile {
	if m != nil {
		return m.Data
	}
	return nil
}

type MetadataFileResponse struct {
	Message              string   `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MetadataFileResponse) Reset()         { *m = MetadataFileResponse{} }
func (m *MetadataFileResponse) String() string { return proto.CompactTextString(m) }
func (*MetadataFileResponse) ProtoMessage()    {}
func (*MetadataFileResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_9f0b51bc49740371, []int{2}
}

func (m *MetadataFileResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MetadataFileResponse.Unmarshal(m, b)
}
func (m *MetadataFileResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MetadataFileResponse.Marshal(b, m, deterministic)
}
func (m *MetadataFileResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MetadataFileResponse.Merge(m, src)
}
func (m *MetadataFileResponse) XXX_Size() int {
	return xxx_messageInfo_MetadataFileResponse.Size(m)
}
func (m *MetadataFileResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MetadataFileResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MetadataFileResponse proto.InternalMessageInfo

func (m *MetadataFileResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*MetadataFile)(nil), "hwscMetadataFileSvc.MetadataFile")
	proto.RegisterType((*MetadataFileRequest)(nil), "hwscMetadataFileSvc.MetadataFileRequest")
	proto.RegisterType((*MetadataFileResponse)(nil), "hwscMetadataFileSvc.MetadataFileResponse")
}

func init() {
	proto.RegisterFile("int/hwsc-metadata-file-svc/proto/hwsc-metadata-file-svc.proto", fileDescriptor_9f0b51bc49740371)
}

var fileDescriptor_9f0b51bc49740371 = []byte{
	// 482 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0xcf, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0xc9, 0xd6, 0x9f, 0xaf, 0x65, 0x1b, 0xee, 0x00, 0x33, 0x40, 0x84, 0x8a, 0x43, 0x76,
	0x68, 0x87, 0x86, 0x38, 0x72, 0x01, 0x89, 0x13, 0x20, 0x94, 0x8d, 0x0b, 0x97, 0xc8, 0x4b, 0xde,
	0x82, 0x85, 0x13, 0x07, 0xdb, 0x29, 0xda, 0x95, 0x7f, 0x95, 0x7f, 0x04, 0xf9, 0xb9, 0xdd, 0x1a,
	0x69, 0x08, 0x6e, 0x7d, 0xdf, 0xcf, 0xa7, 0x4f, 0xcf, 0xce, 0x33, 0xbc, 0x91, 0xb5, 0x3b, 0xf9,
	0xf6, 0xd3, 0xe6, 0x8b, 0x0a, 0x9d, 0x28, 0x84, 0x13, 0x8b, 0x4b, 0xa9, 0x70, 0x61, 0x57, 0xf9,
	0x49, 0x63, 0xb4, 0xd3, 0x7f, 0x81, 0x4b, 0x82, 0x6c, 0xe6, 0xe9, 0xc7, 0x35, 0x7c, 0x2f, 0x15,
	0x9e, 0xad, 0xf2, 0xf9, 0xef, 0x1e, 0x4c, 0xb7, 0x33, 0xc6, 0xa0, 0xd7, 0xb6, 0xb2, 0xe0, 0x51,
	0x1c, 0x25, 0xe3, 0x94, 0x7e, 0xb3, 0xc7, 0x30, 0x56, 0xc2, 0xba, 0xac, 0x16, 0x15, 0xf2, 0x1d,
	0x02, 0x23, 0x1f, 0x7c, 0x12, 0x15, 0xb2, 0xa7, 0x00, 0x97, 0xd2, 0x6c, 0xe8, 0x2e, 0xd1, 0x31,
	0x25, 0x84, 0x5f, 0xc0, 0x5e, 0x2e, 0x94, 0xca, 0xdc, 0x55, 0x83, 0x41, 0xe9, 0x91, 0x32, 0xf5,
	0xe9, 0xf9, 0x55, 0x83, 0x64, 0x3d, 0x83, 0x49, 0x69, 0x74, 0x5b, 0x17, 0xe4, 0xf1, 0x3e, 0x29,
	0x10, 0x22, 0x2f, 0xb1, 0x07, 0x30, 0x30, 0x58, 0x4a, 0x5d, 0xf3, 0x01, 0xb1, 0x75, 0xc5, 0x0e,
	0xa1, 0xaf, 0x73, 0x14, 0x35, 0x1f, 0x52, 0x1c, 0x0a, 0xdf, 0xce, 0x62, 0x6d, 0xb5, 0x09, 0xed,
	0x46, 0xa1, 0x5d, 0x88, 0xa8, 0xdd, 0x8d, 0x40, 0x23, 0x8d, 0xb7, 0x85, 0xcd, 0x40, 0x56, 0x54,
	0x8d, 0xc2, 0xcc, 0x08, 0x87, 0x1c, 0xe2, 0x28, 0xe9, 0xa7, 0x10, 0xa2, 0x54, 0x38, 0x64, 0x47,
	0x30, 0x52, 0xc2, 0x49, 0xd7, 0x16, 0xc8, 0x27, 0x71, 0x94, 0xec, 0xa4, 0xd7, 0x35, 0x7b, 0x02,
	0x63, 0xa5, 0xeb, 0x32, 0xc0, 0x29, 0xc1, 0x9b, 0xc0, 0xdf, 0xa6, 0xac, 0x44, 0x89, 0x59, 0x6b,
	0x14, 0xbf, 0x1b, 0xef, 0xfa, 0xdb, 0xa4, 0xe0, 0x8b, 0x51, 0x1e, 0x8a, 0xb6, 0x90, 0x9a, 0xe0,
	0x5e, 0x80, 0x14, 0xac, 0xe1, 0x4a, 0x16, 0x18, 0xe0, 0x7e, 0x80, 0x14, 0x78, 0xf8, 0x08, 0x46,
	0xfe, 0x83, 0x13, 0x3b, 0x20, 0x36, 0xf4, 0xb5, 0x47, 0xc7, 0x70, 0x60, 0x30, 0xd7, 0xa6, 0xc8,
	0x9c, 0xac, 0xd0, 0x3a, 0x51, 0x35, 0xfc, 0x5e, 0x1c, 0x25, 0xbb, 0xe9, 0x7e, 0xc8, 0xcf, 0x37,
	0xb1, 0x57, 0x73, 0x83, 0xc2, 0xe1, 0x96, 0xca, 0x82, 0x1a, 0xf2, 0x8e, 0xda, 0x36, 0x45, 0x57,
	0x9d, 0x05, 0x35, 0xe4, 0xd7, 0xea, 0xfc, 0x03, 0xcc, 0xb6, 0x97, 0x2c, 0xc5, 0x1f, 0x2d, 0x5a,
	0xc7, 0x5e, 0x43, 0xcf, 0x47, 0xb4, 0x6b, 0x93, 0xd3, 0xe7, 0xcb, 0x5b, 0x16, 0x74, 0xd9, 0xf9,
	0x1f, 0xe9, 0xf3, 0x97, 0x70, 0xd8, 0xed, 0x66, 0x1b, 0x5d, 0x5b, 0x64, 0x1c, 0x86, 0x15, 0x5a,
	0x2b, 0x4a, 0x5c, 0x6f, 0xef, 0xa6, 0x3c, 0xfd, 0x15, 0x75, 0x07, 0x38, 0x43, 0xb3, 0x92, 0x39,
	0xb2, 0xef, 0xc0, 0xde, 0xd1, 0xa9, 0x3a, 0x4f, 0x20, 0xf9, 0xf7, 0x20, 0xe1, 0x00, 0x47, 0xc7,
	0xff, 0x61, 0x86, 0xe1, 0xe6, 0x77, 0xde, 0x3e, 0xfc, 0x7a, 0xff, 0x16, 0xfb, 0xf3, 0xc5, 0xc5,
	0x80, 0xde, 0xe7, 0xab, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xc0, 0x2a, 0xb7, 0x54, 0xe0, 0x03,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MetadataFileServiceClient is the client API for MetadataFileService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MetadataFileServiceClient interface {
	CreateMetadataFile(ctx context.Context, in *MetadataFileRequest, opts ...grpc.CallOption) (*MetadataFileResponse, error)
}

type metadataFileServiceClient struct {
	cc *grpc.ClientConn
}

func NewMetadataFileServiceClient(cc *grpc.ClientConn) MetadataFileServiceClient {
	return &metadataFileServiceClient{cc}
}

func (c *metadataFileServiceClient) CreateMetadataFile(ctx context.Context, in *MetadataFileRequest, opts ...grpc.CallOption) (*MetadataFileResponse, error) {
	out := new(MetadataFileResponse)
	err := c.cc.Invoke(ctx, "/hwscMetadataFileSvc.MetadataFileService/CreateMetadataFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MetadataFileServiceServer is the server API for MetadataFileService service.
type MetadataFileServiceServer interface {
	CreateMetadataFile(context.Context, *MetadataFileRequest) (*MetadataFileResponse, error)
}

func RegisterMetadataFileServiceServer(s *grpc.Server, srv MetadataFileServiceServer) {
	s.RegisterService(&_MetadataFileService_serviceDesc, srv)
}

func _MetadataFileService_CreateMetadataFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MetadataFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MetadataFileServiceServer).CreateMetadataFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/hwscMetadataFileSvc.MetadataFileService/CreateMetadataFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MetadataFileServiceServer).CreateMetadataFile(ctx, req.(*MetadataFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MetadataFileService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hwscMetadataFileSvc.MetadataFileService",
	HandlerType: (*MetadataFileServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateMetadataFile",
			Handler:    _MetadataFileService_CreateMetadataFile_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "int/hwsc-metadata-file-svc/proto/hwsc-metadata-file-svc.proto",
}
