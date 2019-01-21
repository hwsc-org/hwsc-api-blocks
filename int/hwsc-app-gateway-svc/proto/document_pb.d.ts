// package: hwsc
// file: document.proto

import * as jspb from "google-protobuf";

export class Publisher extends jspb.Message {
  getLastName(): string;
  setLastName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Publisher.AsObject;
  static toObject(includeInstance: boolean, msg: Publisher): Publisher.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Publisher, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Publisher;
  static deserializeBinaryFromReader(message: Publisher, reader: jspb.BinaryReader): Publisher;
}

export namespace Publisher {
  export type AsObject = {
    lastName: string,
    firstName: string,
  }
}

export class StudySite extends jspb.Message {
  getCity(): string;
  setCity(value: string): void;

  getState(): string;
  setState(value: string): void;

  getProvince(): string;
  setProvince(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudySite.AsObject;
  static toObject(includeInstance: boolean, msg: StudySite): StudySite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StudySite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudySite;
  static deserializeBinaryFromReader(message: StudySite, reader: jspb.BinaryReader): StudySite;
}

export namespace StudySite {
  export type AsObject = {
    city: string,
    state: string,
    province: string,
    country: string,
  }
}

export class FileMetadataTransaction extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  getFuid(): string;
  setFuid(value: string): void;

  getDuid(): string;
  setDuid(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getMedia(): FileType;
  setMedia(value: FileType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMetadataTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: FileMetadataTransaction): FileMetadataTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileMetadataTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMetadataTransaction;
  static deserializeBinaryFromReader(message: FileMetadataTransaction, reader: jspb.BinaryReader): FileMetadataTransaction;
}

export namespace FileMetadataTransaction {
  export type AsObject = {
    url: string,
    fuid: string,
    duid: string,
    uuid: string,
    media: FileType,
  }
}

export class QueryTransaction extends jspb.Message {
  clearPublishersList(): void;
  getPublishersList(): Array<Publisher>;
  setPublishersList(value: Array<Publisher>): void;
  addPublishers(value?: Publisher, index?: number): Publisher;

  clearStudySitesList(): void;
  getStudySitesList(): Array<StudySite>;
  setStudySitesList(value: Array<StudySite>): void;
  addStudySites(value?: StudySite, index?: number): StudySite;

  clearCallTypeNamesList(): void;
  getCallTypeNamesList(): Array<string>;
  setCallTypeNamesList(value: Array<string>): void;
  addCallTypeNames(value: string, index?: number): string;

  clearGroundTypesList(): void;
  getGroundTypesList(): Array<string>;
  setGroundTypesList(value: Array<string>): void;
  addGroundTypes(value: string, index?: number): string;

  clearSensorTypesList(): void;
  getSensorTypesList(): Array<string>;
  setSensorTypesList(value: Array<string>): void;
  addSensorTypes(value: string, index?: number): string;

  clearSensorNamesList(): void;
  getSensorNamesList(): Array<string>;
  setSensorNamesList(value: Array<string>): void;
  addSensorNames(value: string, index?: number): string;

  getMinRecordTimestamp(): number;
  setMinRecordTimestamp(value: number): void;

  getMaxRecordTimestamp(): number;
  setMaxRecordTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTransaction): QueryTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTransaction;
  static deserializeBinaryFromReader(message: QueryTransaction, reader: jspb.BinaryReader): QueryTransaction;
}

export namespace QueryTransaction {
  export type AsObject = {
    publishersList: Array<Publisher.AsObject>,
    studySitesList: Array<StudySite.AsObject>,
    callTypeNamesList: Array<string>,
    groundTypesList: Array<string>,
    sensorTypesList: Array<string>,
    sensorNamesList: Array<string>,
    minRecordTimestamp: number,
    maxRecordTimestamp: number,
  }
}

export class Document extends jspb.Message {
  getDuid(): string;
  setDuid(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  hasPublisherName(): boolean;
  clearPublisherName(): void;
  getPublisherName(): Publisher | undefined;
  setPublisherName(value?: Publisher): void;

  getCallTypeName(): string;
  setCallTypeName(value: string): void;

  getGroundType(): string;
  setGroundType(value: string): void;

  hasStudySite(): boolean;
  clearStudySite(): void;
  getStudySite(): StudySite | undefined;
  setStudySite(value?: StudySite): void;

  getOcean(): string;
  setOcean(value: string): void;

  getSensorType(): string;
  setSensorType(value: string): void;

  getSensorName(): string;
  setSensorName(value: string): void;

  getSamplingRate(): number;
  setSamplingRate(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getImageUrlsMapMap(): jspb.Map<string, string>;
  clearImageUrlsMapMap(): void;
  getAudioUrlsMapMap(): jspb.Map<string, string>;
  clearAudioUrlsMapMap(): void;
  getVideoUrlsMapMap(): jspb.Map<string, string>;
  clearVideoUrlsMapMap(): void;
  getFileUrlsMapMap(): jspb.Map<string, string>;
  clearFileUrlsMapMap(): void;
  getRecordTimestamp(): number;
  setRecordTimestamp(value: number): void;

  getCreateTimestamp(): number;
  setCreateTimestamp(value: number): void;

  getUpdateTimestamp(): number;
  setUpdateTimestamp(value: number): void;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    duid: string,
    uuid: string,
    publisherName?: Publisher.AsObject,
    callTypeName: string,
    groundType: string,
    studySite?: StudySite.AsObject,
    ocean: string,
    sensorType: string,
    sensorName: string,
    samplingRate: number,
    latitude: number,
    longitude: number,
    imageUrlsMapMap: Array<[string, string]>,
    audioUrlsMapMap: Array<[string, string]>,
    videoUrlsMapMap: Array<[string, string]>,
    fileUrlsMapMap: Array<[string, string]>,
    recordTimestamp: number,
    createTimestamp: number,
    updateTimestamp: number,
    isPublic: boolean,
  }
}

export enum FileType {
  FILE = 0,
  AUDIO = 1,
  IMAGE = 2,
  VIDEO = 3,
}

