// package: hwscDocumentSvc
// file: hwsc-document-svc.proto

import * as jspb from "google-protobuf";
import * as document_pb from "./document_pb";
import * as authority_pb from "./authority_pb";

export class DocumentRequest extends jspb.Message {
  hasIdentification(): boolean;
  clearIdentification(): void;
  getIdentification(): authority_pb.Identification | undefined;
  setIdentification(value?: authority_pb.Identification): void;

  hasData(): boolean;
  clearData(): void;
  getData(): document_pb.Document | undefined;
  setData(value?: document_pb.Document): void;

  clearImageUrlsList(): void;
  getImageUrlsList(): Array<string>;
  setImageUrlsList(value: Array<string>): void;
  addImageUrls(value: string, index?: number): string;

  clearAudioUrlsList(): void;
  getAudioUrlsList(): Array<string>;
  setAudioUrlsList(value: Array<string>): void;
  addAudioUrls(value: string, index?: number): string;

  clearVideoUrlsList(): void;
  getVideoUrlsList(): Array<string>;
  setVideoUrlsList(value: Array<string>): void;
  addVideoUrls(value: string, index?: number): string;

  clearFileUrlsList(): void;
  getFileUrlsList(): Array<string>;
  setFileUrlsList(value: Array<string>): void;
  addFileUrls(value: string, index?: number): string;

  hasFilemetadataParameters(): boolean;
  clearFilemetadataParameters(): void;
  getFilemetadataParameters(): document_pb.FileMetadataTransaction | undefined;
  setFilemetadataParameters(value?: document_pb.FileMetadataTransaction): void;

  hasQueryParameters(): boolean;
  clearQueryParameters(): void;
  getQueryParameters(): document_pb.QueryTransaction | undefined;
  setQueryParameters(value?: document_pb.QueryTransaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentRequest): DocumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentRequest;
  static deserializeBinaryFromReader(message: DocumentRequest, reader: jspb.BinaryReader): DocumentRequest;
}

export namespace DocumentRequest {
  export type AsObject = {
    identification?: authority_pb.Identification.AsObject,
    data?: document_pb.Document.AsObject,
    imageUrlsList: Array<string>,
    audioUrlsList: Array<string>,
    videoUrlsList: Array<string>,
    fileUrlsList: Array<string>,
    filemetadataParameters?: document_pb.FileMetadataTransaction.AsObject,
    queryParameters?: document_pb.QueryTransaction.AsObject,
  }
}

export class DocumentResponse extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): document_pb.Document | undefined;
  setData(value?: document_pb.Document): void;

  clearDocumentCollectionList(): void;
  getDocumentCollectionList(): Array<document_pb.Document>;
  setDocumentCollectionList(value: Array<document_pb.Document>): void;
  addDocumentCollection(value?: document_pb.Document, index?: number): document_pb.Document;

  hasQueryResults(): boolean;
  clearQueryResults(): void;
  getQueryResults(): document_pb.QueryTransaction | undefined;
  setQueryResults(value?: document_pb.QueryTransaction): void;

  getStatusCase(): DocumentResponse.StatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentResponse): DocumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentResponse;
  static deserializeBinaryFromReader(message: DocumentResponse, reader: jspb.BinaryReader): DocumentResponse;
}

export namespace DocumentResponse {
  export type AsObject = {
    code: number,
    message: string,
    data?: document_pb.Document.AsObject,
    documentCollectionList: Array<document_pb.Document.AsObject>,
    queryResults?: document_pb.QueryTransaction.AsObject,
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

