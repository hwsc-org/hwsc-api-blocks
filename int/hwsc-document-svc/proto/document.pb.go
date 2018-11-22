// Code generated by protoc-gen-go. DO NOT EDIT.
// source: document.proto

package hwscDocumentSvcPb

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
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type FileType int32

const (
	FileType_FILE  FileType = 0
	FileType_AUDIO FileType = 1
	FileType_IMAGE FileType = 2
	FileType_VIDEO FileType = 3
)

var FileType_name = map[int32]string{
	0: "FILE",
	1: "AUDIO",
	2: "IMAGE",
	3: "VIDEO",
}

var FileType_value = map[string]int32{
	"FILE":  0,
	"AUDIO": 1,
	"IMAGE": 2,
	"VIDEO": 3,
}

func (x FileType) String() string {
	return proto.EnumName(FileType_name, int32(x))
}

func (FileType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_9d2790a4091b3173, []int{0}
}

type Publisher struct {
	// @inject_tag: bson:"lastName"
	LastName string `protobuf:"bytes,1,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty" bson:"lastName"`
	// @inject_tag: bson:"firstName"
	FirstName            string   `protobuf:"bytes,2,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty" bson:"firstName"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" bson:"-"`
	XXX_unrecognized     []byte   `json:"-" bson:"-"`
	XXX_sizecache        int32    `json:"-" bson:"-"`
}

func (m *Publisher) Reset()         { *m = Publisher{} }
func (m *Publisher) String() string { return proto.CompactTextString(m) }
func (*Publisher) ProtoMessage()    {}
func (*Publisher) Descriptor() ([]byte, []int) {
	return fileDescriptor_9d2790a4091b3173, []int{0}
}

func (m *Publisher) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Publisher.Unmarshal(m, b)
}
func (m *Publisher) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Publisher.Marshal(b, m, deterministic)
}
func (m *Publisher) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Publisher.Merge(m, src)
}
func (m *Publisher) XXX_Size() int {
	return xxx_messageInfo_Publisher.Size(m)
}
func (m *Publisher) XXX_DiscardUnknown() {
	xxx_messageInfo_Publisher.DiscardUnknown(m)
}

var xxx_messageInfo_Publisher proto.InternalMessageInfo

func (m *Publisher) GetLastName() string {
	if m != nil {
		return m.LastName
	}
	return ""
}

func (m *Publisher) GetFirstName() string {
	if m != nil {
		return m.FirstName
	}
	return ""
}

type StudySite struct {
	// @inject_tag: bson:"city"
	City string `protobuf:"bytes,1,opt,name=city,proto3" json:"city,omitempty" bson:"city"`
	// @inject_tag: bson:"state"
	State string `protobuf:"bytes,2,opt,name=state,proto3" json:"state,omitempty" bson:"state"`
	// @inject_tag: bson:"province"
	Province string `protobuf:"bytes,3,opt,name=province,proto3" json:"province,omitempty" bson:"province"`
	// @inject_tag: bson:"country"
	Country              string   `protobuf:"bytes,4,opt,name=country,proto3" json:"country,omitempty" bson:"country"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" bson:"-"`
	XXX_unrecognized     []byte   `json:"-" bson:"-"`
	XXX_sizecache        int32    `json:"-" bson:"-"`
}

func (m *StudySite) Reset()         { *m = StudySite{} }
func (m *StudySite) String() string { return proto.CompactTextString(m) }
func (*StudySite) ProtoMessage()    {}
func (*StudySite) Descriptor() ([]byte, []int) {
	return fileDescriptor_9d2790a4091b3173, []int{1}
}

func (m *StudySite) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StudySite.Unmarshal(m, b)
}
func (m *StudySite) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StudySite.Marshal(b, m, deterministic)
}
func (m *StudySite) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StudySite.Merge(m, src)
}
func (m *StudySite) XXX_Size() int {
	return xxx_messageInfo_StudySite.Size(m)
}
func (m *StudySite) XXX_DiscardUnknown() {
	xxx_messageInfo_StudySite.DiscardUnknown(m)
}

var xxx_messageInfo_StudySite proto.InternalMessageInfo

func (m *StudySite) GetCity() string {
	if m != nil {
		return m.City
	}
	return ""
}

func (m *StudySite) GetState() string {
	if m != nil {
		return m.State
	}
	return ""
}

func (m *StudySite) GetProvince() string {
	if m != nil {
		return m.Province
	}
	return ""
}

func (m *StudySite) GetCountry() string {
	if m != nil {
		return m.Country
	}
	return ""
}

// Request for AddFileMetadata & DeleteFileMetadata
type FileMetadataTransaction struct {
	Url                  string   `protobuf:"bytes,1,opt,name=url,proto3" json:"url,omitempty"`
	Fuid                 string   `protobuf:"bytes,2,opt,name=fuid,proto3" json:"fuid,omitempty"`
	Duid                 string   `protobuf:"bytes,3,opt,name=duid,proto3" json:"duid,omitempty"`
	Uuid                 string   `protobuf:"bytes,4,opt,name=uuid,proto3" json:"uuid,omitempty"`
	Media                FileType `protobuf:"varint,5,opt,name=media,proto3,enum=hwsc.FileType" json:"media,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" bson:"-"`
	XXX_unrecognized     []byte   `json:"-" bson:"-"`
	XXX_sizecache        int32    `json:"-" bson:"-"`
}

func (m *FileMetadataTransaction) Reset()         { *m = FileMetadataTransaction{} }
func (m *FileMetadataTransaction) String() string { return proto.CompactTextString(m) }
func (*FileMetadataTransaction) ProtoMessage()    {}
func (*FileMetadataTransaction) Descriptor() ([]byte, []int) {
	return fileDescriptor_9d2790a4091b3173, []int{2}
}

func (m *FileMetadataTransaction) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FileMetadataTransaction.Unmarshal(m, b)
}
func (m *FileMetadataTransaction) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FileMetadataTransaction.Marshal(b, m, deterministic)
}
func (m *FileMetadataTransaction) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FileMetadataTransaction.Merge(m, src)
}
func (m *FileMetadataTransaction) XXX_Size() int {
	return xxx_messageInfo_FileMetadataTransaction.Size(m)
}
func (m *FileMetadataTransaction) XXX_DiscardUnknown() {
	xxx_messageInfo_FileMetadataTransaction.DiscardUnknown(m)
}

var xxx_messageInfo_FileMetadataTransaction proto.InternalMessageInfo

func (m *FileMetadataTransaction) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

func (m *FileMetadataTransaction) GetFuid() string {
	if m != nil {
		return m.Fuid
	}
	return ""
}

func (m *FileMetadataTransaction) GetDuid() string {
	if m != nil {
		return m.Duid
	}
	return ""
}

func (m *FileMetadataTransaction) GetUuid() string {
	if m != nil {
		return m.Uuid
	}
	return ""
}

func (m *FileMetadataTransaction) GetMedia() FileType {
	if m != nil {
		return m.Media
	}
	return FileType_FILE
}

// Response for ListDistinctFieldValues
// Request for QueryDocument
type QueryTransaction struct {
	// @inject_tag: bson:"publishers"
	Publishers []*Publisher `protobuf:"bytes,1,rep,name=publishers,proto3" json:"publishers,omitempty" bson:"publishers"`
	// @inject_tag: bson:"studySites"
	StudySites []*StudySite `protobuf:"bytes,2,rep,name=study_sites,json=studySites,proto3" json:"study_sites,omitempty" bson:"studySites"`
	// @inject_tag: bson:"callTypeNames"
	CallTypeNames []string `protobuf:"bytes,3,rep,name=call_type_names,json=callTypeNames,proto3" json:"call_type_names,omitempty" bson:"callTypeNames"`
	// @inject_tag: bson:"groundTypes"
	GroundTypes []string `protobuf:"bytes,4,rep,name=ground_types,json=groundTypes,proto3" json:"ground_types,omitempty" bson:"groundTypes"`
	// @inject_tag: bson:"sensorTypes"
	SensorTypes []string `protobuf:"bytes,5,rep,name=sensor_types,json=sensorTypes,proto3" json:"sensor_types,omitempty" bson:"sensorTypes"`
	// @inject_tag: bson:"sensorNames"
	SensorNames []string `protobuf:"bytes,6,rep,name=sensor_names,json=sensorNames,proto3" json:"sensor_names,omitempty" bson:"sensorNames"`
	// @inject_tag: bson:"minRecordTimestamp"
	MinRecordTimestamp int64 `protobuf:"varint,7,opt,name=min_record_timestamp,json=minRecordTimestamp,proto3" json:"min_record_timestamp,omitempty" bson:"minRecordTimestamp"`
	// @inject_tag: bson:"maxRecordTimestamp"
	MaxRecordTimestamp   int64    `protobuf:"varint,8,opt,name=max_record_timestamp,json=maxRecordTimestamp,proto3" json:"max_record_timestamp,omitempty" bson:"maxRecordTimestamp"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" bson:"-"`
	XXX_unrecognized     []byte   `json:"-" bson:"-"`
	XXX_sizecache        int32    `json:"-" bson:"-"`
}

func (m *QueryTransaction) Reset()         { *m = QueryTransaction{} }
func (m *QueryTransaction) String() string { return proto.CompactTextString(m) }
func (*QueryTransaction) ProtoMessage()    {}
func (*QueryTransaction) Descriptor() ([]byte, []int) {
	return fileDescriptor_9d2790a4091b3173, []int{3}
}

func (m *QueryTransaction) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_QueryTransaction.Unmarshal(m, b)
}
func (m *QueryTransaction) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_QueryTransaction.Marshal(b, m, deterministic)
}
func (m *QueryTransaction) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryTransaction.Merge(m, src)
}
func (m *QueryTransaction) XXX_Size() int {
	return xxx_messageInfo_QueryTransaction.Size(m)
}
func (m *QueryTransaction) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryTransaction.DiscardUnknown(m)
}

var xxx_messageInfo_QueryTransaction proto.InternalMessageInfo

func (m *QueryTransaction) GetPublishers() []*Publisher {
	if m != nil {
		return m.Publishers
	}
	return nil
}

func (m *QueryTransaction) GetStudySites() []*StudySite {
	if m != nil {
		return m.StudySites
	}
	return nil
}

func (m *QueryTransaction) GetCallTypeNames() []string {
	if m != nil {
		return m.CallTypeNames
	}
	return nil
}

func (m *QueryTransaction) GetGroundTypes() []string {
	if m != nil {
		return m.GroundTypes
	}
	return nil
}

func (m *QueryTransaction) GetSensorTypes() []string {
	if m != nil {
		return m.SensorTypes
	}
	return nil
}

func (m *QueryTransaction) GetSensorNames() []string {
	if m != nil {
		return m.SensorNames
	}
	return nil
}

func (m *QueryTransaction) GetMinRecordTimestamp() int64 {
	if m != nil {
		return m.MinRecordTimestamp
	}
	return 0
}

func (m *QueryTransaction) GetMaxRecordTimestamp() int64 {
	if m != nil {
		return m.MaxRecordTimestamp
	}
	return 0
}

type Document struct {
	// @inject_tag: bson:"duid"
	Duid string `protobuf:"bytes,1,opt,name=duid,proto3" json:"duid,omitempty" bson:"duid"`
	// @inject_tag: bson:"uuid"
	Uuid string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty" bson:"uuid"`
	// @inject_tag: bson:"publisherName"
	PublisherName *Publisher `protobuf:"bytes,3,opt,name=publisher_name,json=publisherName,proto3" json:"publisher_name,omitempty" bson:"publisherName"`
	// @inject_tag: bson:"callTypeName"
	CallTypeName string `protobuf:"bytes,4,opt,name=call_type_name,json=callTypeName,proto3" json:"call_type_name,omitempty" bson:"callTypeName"`
	// @inject_tag: bson:"groundType"
	GroundType string `protobuf:"bytes,5,opt,name=ground_type,json=groundType,proto3" json:"ground_type,omitempty" bson:"groundType"`
	// @inject_tag: bson:"studySite"
	StudySite *StudySite `protobuf:"bytes,6,opt,name=study_site,json=studySite,proto3" json:"study_site,omitempty" bson:"studySite"`
	// @inject_tag: bson:"ocean"
	Ocean string `protobuf:"bytes,7,opt,name=ocean,proto3" json:"ocean,omitempty" bson:"ocean"`
	// @inject_tag: bson:"sensorType"
	SensorType string `protobuf:"bytes,8,opt,name=sensor_type,json=sensorType,proto3" json:"sensor_type,omitempty" bson:"sensorType"`
	// @inject_tag: bson:"sensorName"
	SensorName string `protobuf:"bytes,9,opt,name=sensor_name,json=sensorName,proto3" json:"sensor_name,omitempty" bson:"sensorName"`
	// @inject_tag: bson:"samplingRate"
	SamplingRate uint32 `protobuf:"varint,10,opt,name=sampling_rate,json=samplingRate,proto3" json:"sampling_rate,omitempty" bson:"samplingRate"`
	// @inject_tag: bson:"latitude"
	Latitude float32 `protobuf:"fixed32,11,opt,name=latitude,proto3" json:"latitude,omitempty" bson:"latitude"`
	// @inject_tag: bson:"longitude"
	Longitude float32 `protobuf:"fixed32,12,opt,name=longitude,proto3" json:"longitude,omitempty" bson:"longitude"`
	// @inject_tag: bson:"imageUrlsMap"
	ImageUrlsMap map[string]string `protobuf:"bytes,13,rep,name=image_urls_map,json=imageUrlsMap,proto3" json:"image_urls_map,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3" bson:"imageUrlsMap"`
	// @inject_tag: bson:"audioUrlsMap"
	AudioUrlsMap map[string]string `protobuf:"bytes,14,rep,name=audio_urls_map,json=audioUrlsMap,proto3" json:"audio_urls_map,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3" bson:"audioUrlsMap"`
	// @inject_tag: bson:"videoUrlsMap"
	VideoUrlsMap map[string]string `protobuf:"bytes,15,rep,name=video_urls_map,json=videoUrlsMap,proto3" json:"video_urls_map,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3" bson:"videoUrlsMap"`
	// @inject_tag: bson:"fileUrlsMap"
	FileUrlsMap map[string]string `protobuf:"bytes,16,rep,name=file_urls_map,json=fileUrlsMap,proto3" json:"file_urls_map,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3" bson:"fileUrlsMap"`
	// @inject_tag: bson:"recordTimestamp"
	RecordTimestamp int64 `protobuf:"varint,17,opt,name=record_timestamp,json=recordTimestamp,proto3" json:"record_timestamp,omitempty" bson:"recordTimestamp"`
	// @inject_tag: bson:"createTimestamp"
	CreateTimestamp int64 `protobuf:"varint,18,opt,name=create_timestamp,json=createTimestamp,proto3" json:"create_timestamp,omitempty" bson:"createTimestamp"`
	// @inject_tag: bson:"updateTimestamp"
	UpdateTimestamp int64 `protobuf:"varint,19,opt,name=update_timestamp,json=updateTimestamp,proto3" json:"update_timestamp,omitempty" bson:"updateTimestamp"`
	// @inject_tag: bson:"isPublic"
	IsPublic             bool     `protobuf:"varint,20,opt,name=is_public,json=isPublic,proto3" json:"is_public,omitempty" bson:"isPublic"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" bson:"-"`
	XXX_unrecognized     []byte   `json:"-" bson:"-"`
	XXX_sizecache        int32    `json:"-" bson:"-"`
}

func (m *Document) Reset()         { *m = Document{} }
func (m *Document) String() string { return proto.CompactTextString(m) }
func (*Document) ProtoMessage()    {}
func (*Document) Descriptor() ([]byte, []int) {
	return fileDescriptor_9d2790a4091b3173, []int{4}
}

func (m *Document) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Document.Unmarshal(m, b)
}
func (m *Document) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Document.Marshal(b, m, deterministic)
}
func (m *Document) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Document.Merge(m, src)
}
func (m *Document) XXX_Size() int {
	return xxx_messageInfo_Document.Size(m)
}
func (m *Document) XXX_DiscardUnknown() {
	xxx_messageInfo_Document.DiscardUnknown(m)
}

var xxx_messageInfo_Document proto.InternalMessageInfo

func (m *Document) GetDuid() string {
	if m != nil {
		return m.Duid
	}
	return ""
}

func (m *Document) GetUuid() string {
	if m != nil {
		return m.Uuid
	}
	return ""
}

func (m *Document) GetPublisherName() *Publisher {
	if m != nil {
		return m.PublisherName
	}
	return nil
}

func (m *Document) GetCallTypeName() string {
	if m != nil {
		return m.CallTypeName
	}
	return ""
}

func (m *Document) GetGroundType() string {
	if m != nil {
		return m.GroundType
	}
	return ""
}

func (m *Document) GetStudySite() *StudySite {
	if m != nil {
		return m.StudySite
	}
	return nil
}

func (m *Document) GetOcean() string {
	if m != nil {
		return m.Ocean
	}
	return ""
}

func (m *Document) GetSensorType() string {
	if m != nil {
		return m.SensorType
	}
	return ""
}

func (m *Document) GetSensorName() string {
	if m != nil {
		return m.SensorName
	}
	return ""
}

func (m *Document) GetSamplingRate() uint32 {
	if m != nil {
		return m.SamplingRate
	}
	return 0
}

func (m *Document) GetLatitude() float32 {
	if m != nil {
		return m.Latitude
	}
	return 0
}

func (m *Document) GetLongitude() float32 {
	if m != nil {
		return m.Longitude
	}
	return 0
}

func (m *Document) GetImageUrlsMap() map[string]string {
	if m != nil {
		return m.ImageUrlsMap
	}
	return nil
}

func (m *Document) GetAudioUrlsMap() map[string]string {
	if m != nil {
		return m.AudioUrlsMap
	}
	return nil
}

func (m *Document) GetVideoUrlsMap() map[string]string {
	if m != nil {
		return m.VideoUrlsMap
	}
	return nil
}

func (m *Document) GetFileUrlsMap() map[string]string {
	if m != nil {
		return m.FileUrlsMap
	}
	return nil
}

func (m *Document) GetRecordTimestamp() int64 {
	if m != nil {
		return m.RecordTimestamp
	}
	return 0
}

func (m *Document) GetCreateTimestamp() int64 {
	if m != nil {
		return m.CreateTimestamp
	}
	return 0
}

func (m *Document) GetUpdateTimestamp() int64 {
	if m != nil {
		return m.UpdateTimestamp
	}
	return 0
}

func (m *Document) GetIsPublic() bool {
	if m != nil {
		return m.IsPublic
	}
	return false
}

func init() {
	proto.RegisterEnum("hwsc.FileType", FileType_name, FileType_value)
	proto.RegisterType((*Publisher)(nil), "hwsc.Publisher")
	proto.RegisterType((*StudySite)(nil), "hwsc.StudySite")
	proto.RegisterType((*FileMetadataTransaction)(nil), "hwsc.FileMetadataTransaction")
	proto.RegisterType((*QueryTransaction)(nil), "hwsc.QueryTransaction")
	proto.RegisterType((*Document)(nil), "hwsc.Document")
	proto.RegisterMapType((map[string]string)(nil), "hwsc.Document.AudioUrlsMapEntry")
	proto.RegisterMapType((map[string]string)(nil), "hwsc.Document.FileUrlsMapEntry")
	proto.RegisterMapType((map[string]string)(nil), "hwsc.Document.ImageUrlsMapEntry")
	proto.RegisterMapType((map[string]string)(nil), "hwsc.Document.VideoUrlsMapEntry")
}

func init() { proto.RegisterFile("document.proto", fileDescriptor_9d2790a4091b3173) }

var fileDescriptor_9d2790a4091b3173 = []byte{
	// 812 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x55, 0xdb, 0x6e, 0xdc, 0x36,
	0x10, 0xad, 0xf6, 0xe2, 0x48, 0xb3, 0x17, 0x2b, 0xac, 0x81, 0x0a, 0x49, 0x8b, 0xa8, 0xdb, 0xa0,
	0x50, 0xfa, 0xb0, 0x0d, 0x52, 0xb4, 0x28, 0xfa, 0xd0, 0xc2, 0xa8, 0xed, 0x60, 0x81, 0xba, 0x69,
	0x15, 0x27, 0xaf, 0x02, 0x23, 0xd1, 0x0e, 0x11, 0xdd, 0x40, 0x52, 0x6e, 0xf6, 0x23, 0xfa, 0x7b,
	0xfd, 0x88, 0x7e, 0x45, 0x30, 0xa4, 0x2e, 0xdc, 0x5d, 0xbf, 0xf8, 0x6d, 0x78, 0xe6, 0xcc, 0x19,
	0xed, 0x9c, 0x21, 0x17, 0x96, 0x59, 0x95, 0x36, 0x05, 0x2b, 0xd5, 0xba, 0x16, 0x95, 0xaa, 0xc8,
	0xe4, 0xfd, 0x3f, 0x32, 0x5d, 0xbd, 0x04, 0xef, 0xaf, 0xe6, 0x5d, 0xce, 0xe5, 0x7b, 0x26, 0xc8,
	0x63, 0xf0, 0x72, 0x2a, 0x55, 0x52, 0xd2, 0x82, 0x05, 0x4e, 0xe8, 0x44, 0x5e, 0xec, 0x22, 0xf0,
	0x27, 0x2d, 0x18, 0xf9, 0x0a, 0xe0, 0x9a, 0x8b, 0x2e, 0x3b, 0xd2, 0x59, 0x4f, 0x23, 0x98, 0x5e,
	0x7d, 0x00, 0xef, 0xb5, 0x6a, 0xb2, 0xed, 0x6b, 0xae, 0x18, 0x21, 0x30, 0x49, 0xb9, 0xda, 0xb6,
	0x1a, 0x3a, 0x26, 0x27, 0x30, 0x95, 0x8a, 0xaa, 0xae, 0xd4, 0x1c, 0xc8, 0x23, 0x70, 0x6b, 0x51,
	0xdd, 0xf2, 0x32, 0x65, 0xc1, 0xd8, 0x74, 0xec, 0xce, 0x24, 0x80, 0x07, 0x69, 0xd5, 0x94, 0x4a,
	0x6c, 0x83, 0x89, 0x4e, 0x75, 0xc7, 0xd5, 0xbf, 0x0e, 0x7c, 0x71, 0xc1, 0x73, 0x76, 0xc9, 0x14,
	0xcd, 0xa8, 0xa2, 0x57, 0x82, 0x96, 0x92, 0xa6, 0x8a, 0x57, 0x25, 0xf1, 0x61, 0xdc, 0x88, 0xbc,
	0x6d, 0x8d, 0x21, 0x7e, 0xcd, 0x75, 0xc3, 0xb3, 0xb6, 0xb1, 0x8e, 0x11, 0xcb, 0x10, 0x33, 0x3d,
	0x75, 0x8c, 0x58, 0x83, 0x98, 0x69, 0xa6, 0x63, 0xf2, 0x14, 0xa6, 0x05, 0xcb, 0x38, 0x0d, 0xa6,
	0xa1, 0x13, 0x2d, 0x5f, 0x2c, 0xd7, 0x38, 0xb5, 0x35, 0xf6, 0xbe, 0xda, 0xd6, 0x2c, 0x36, 0xc9,
	0xd5, 0xff, 0x23, 0xf0, 0xff, 0x6e, 0x98, 0xd8, 0xda, 0x1f, 0xf2, 0x3d, 0x40, 0xdd, 0x8d, 0x56,
	0x06, 0x4e, 0x38, 0x8e, 0x66, 0x2f, 0x8e, 0x4d, 0x7d, 0x3f, 0xf2, 0xd8, 0xa2, 0x90, 0xe7, 0x30,
	0x93, 0x38, 0xc2, 0x44, 0x72, 0xc5, 0x64, 0x30, 0xb2, 0x2b, 0xfa, 0xd9, 0xc6, 0x20, 0xbb, 0x50,
	0x92, 0x6f, 0xe1, 0x38, 0xa5, 0x79, 0x9e, 0xa8, 0x6d, 0xcd, 0xb4, 0x2f, 0x32, 0x18, 0x87, 0xe3,
	0xc8, 0x8b, 0x17, 0x08, 0xe3, 0x17, 0xa2, 0x37, 0x92, 0x7c, 0x0d, 0xf3, 0x1b, 0x51, 0x35, 0x65,
	0xa6, 0x99, 0x32, 0x98, 0x68, 0xd2, 0xcc, 0x60, 0x48, 0xd3, 0x14, 0xc9, 0x4a, 0x59, 0x89, 0x96,
	0x32, 0x35, 0x14, 0x83, 0xed, 0x53, 0x4c, 0xab, 0x23, 0x9b, 0x62, 0x1a, 0x3d, 0x87, 0x93, 0x82,
	0x97, 0x89, 0x60, 0x69, 0x25, 0xb2, 0x44, 0xf1, 0x82, 0x49, 0x45, 0x8b, 0x3a, 0x78, 0x10, 0x3a,
	0xd1, 0x38, 0x26, 0x05, 0x2f, 0x63, 0x9d, 0xba, 0xea, 0x32, 0xba, 0x82, 0x7e, 0x3c, 0xac, 0x70,
	0xdb, 0x0a, 0xfa, 0x71, 0xaf, 0x62, 0xf5, 0x9f, 0x0b, 0xee, 0x59, 0xbb, 0xcb, 0xbd, 0x8f, 0xce,
	0x1d, 0x3e, 0x8e, 0x2c, 0x1f, 0x7f, 0x82, 0x65, 0x3f, 0x69, 0xb3, 0xc1, 0xe8, 0xfc, 0x1d, 0x86,
	0x2c, 0x7a, 0x9a, 0xde, 0xfa, 0xa7, 0xb0, 0xdc, 0x9d, 0x70, 0xbb, 0x1d, 0x73, 0x7b, 0xc0, 0xe4,
	0x09, 0xcc, 0xac, 0xf9, 0xea, 0x5d, 0xf1, 0x62, 0x18, 0xc6, 0x4b, 0xd6, 0x00, 0x83, 0xb5, 0xc1,
	0x91, 0xdd, 0x7a, 0x70, 0xd6, 0xeb, 0x9d, 0xc5, 0xcb, 0x52, 0xa5, 0x8c, 0x96, 0x7a, 0x70, 0x5e,
	0x6c, 0x0e, 0xd8, 0xc6, 0xf2, 0x48, 0x8f, 0xc8, 0x8b, 0x61, 0xb0, 0xc8, 0x22, 0xe8, 0x4f, 0xf5,
	0x6c, 0x82, 0xfe, 0xd0, 0x6f, 0x60, 0x21, 0x69, 0x51, 0xe7, 0xbc, 0xbc, 0x49, 0x04, 0x5e, 0x46,
	0x08, 0x9d, 0x68, 0x11, 0xcf, 0x3b, 0x30, 0x6e, 0xef, 0x64, 0x4e, 0x15, 0x57, 0x4d, 0xc6, 0x82,
	0x59, 0xe8, 0x44, 0xa3, 0xb8, 0x3f, 0x93, 0x2f, 0xc1, 0xcb, 0xab, 0xf2, 0xc6, 0x24, 0xe7, 0x3a,
	0x39, 0x00, 0xe4, 0x02, 0x96, 0xbc, 0xa0, 0x37, 0x2c, 0x69, 0x44, 0x2e, 0x93, 0x82, 0xd6, 0xc1,
	0x42, 0x2f, 0x71, 0x68, 0x7e, 0x6a, 0xe7, 0xda, 0x7a, 0x83, 0xa4, 0x37, 0x22, 0x97, 0x97, 0xb4,
	0x3e, 0xc7, 0x1b, 0x1d, 0xcf, 0xb9, 0x05, 0xa1, 0x0e, 0x6d, 0x32, 0x5e, 0x0d, 0x3a, 0xcb, 0x3b,
	0x75, 0x4e, 0x91, 0xb4, 0xab, 0x43, 0x2d, 0x08, 0x75, 0x6e, 0x79, 0xc6, 0x2c, 0x9d, 0xe3, 0x3b,
	0x75, 0xde, 0x22, 0x69, 0x57, 0xe7, 0xd6, 0x82, 0xc8, 0xef, 0xb0, 0xb8, 0xe6, 0xb9, 0xf5, 0xb3,
	0x7c, 0x2d, 0xf3, 0x64, 0x4f, 0x06, 0x9f, 0x85, 0x1d, 0x95, 0xd9, 0xf5, 0x80, 0x90, 0x67, 0xe0,
	0x1f, 0x6c, 0xf9, 0x43, 0xbd, 0xe5, 0xc7, 0x62, 0xef, 0x52, 0x3c, 0x03, 0x3f, 0x15, 0x8c, 0x2a,
	0x66, 0x51, 0x89, 0xa1, 0x1a, 0x7c, 0x87, 0xda, 0xd4, 0xd9, 0x2e, 0xf5, 0x73, 0x43, 0x35, 0xf8,
	0x40, 0x7d, 0x0c, 0x1e, 0x97, 0x89, 0xde, 0xef, 0x34, 0x38, 0x09, 0x9d, 0xc8, 0x8d, 0x5d, 0x2e,
	0xf5, 0xea, 0xa7, 0x8f, 0x7e, 0x83, 0x87, 0x07, 0xae, 0xe0, 0x5b, 0xfa, 0x81, 0x75, 0xcf, 0x38,
	0x86, 0xb8, 0x98, 0xb7, 0x34, 0x6f, 0xfa, 0x57, 0x5c, 0x1f, 0x7e, 0x19, 0xfd, 0xec, 0xa0, 0xc0,
	0x81, 0x1d, 0xf7, 0x15, 0x38, 0xf0, 0xe1, 0x5e, 0x02, 0xbf, 0x82, 0xbf, 0xef, 0xc0, 0x7d, 0xea,
	0xbf, 0xfb, 0x11, 0xdc, 0xee, 0x61, 0x27, 0x2e, 0x4c, 0x2e, 0x36, 0x7f, 0x9c, 0xfb, 0x9f, 0x11,
	0x0f, 0xa6, 0xa7, 0x6f, 0xce, 0x36, 0xaf, 0x7c, 0x07, 0xc3, 0xcd, 0xe5, 0xe9, 0xcb, 0x73, 0x7f,
	0x84, 0xe1, 0xdb, 0xcd, 0xd9, 0xf9, 0x2b, 0x7f, 0xfc, 0xee, 0x48, 0xff, 0x9f, 0xfe, 0xf0, 0x29,
	0x00, 0x00, 0xff, 0xff, 0x81, 0x63, 0x72, 0x6c, 0x61, 0x07, 0x00, 0x00,
}
