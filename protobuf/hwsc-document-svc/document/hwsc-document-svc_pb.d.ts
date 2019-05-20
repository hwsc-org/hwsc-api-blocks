import * as jspb from "google-protobuf"

import * as protobuf_lib_document_pb from '../../../protobuf/lib/document_pb';
import * as protobuf_lib_authority_pb from '../../../protobuf/lib/authority_pb';

export class DocumentRequest extends jspb.Message {
  getIdentification(): protobuf_lib_authority_pb.Identification | undefined;
  setIdentification(value?: protobuf_lib_authority_pb.Identification): void;
  hasIdentification(): boolean;
  clearIdentification(): void;

  getData(): protobuf_lib_document_pb.Document | undefined;
  setData(value?: protobuf_lib_document_pb.Document): void;
  hasData(): boolean;
  clearData(): void;

  getImageUrlsList(): Array<string>;
  setImageUrlsList(value: Array<string>): void;
  clearImageUrlsList(): void;
  addImageUrls(value: string, index?: number): void;

  getAudioUrlsList(): Array<string>;
  setAudioUrlsList(value: Array<string>): void;
  clearAudioUrlsList(): void;
  addAudioUrls(value: string, index?: number): void;

  getVideoUrlsList(): Array<string>;
  setVideoUrlsList(value: Array<string>): void;
  clearVideoUrlsList(): void;
  addVideoUrls(value: string, index?: number): void;

  getFileUrlsList(): Array<string>;
  setFileUrlsList(value: Array<string>): void;
  clearFileUrlsList(): void;
  addFileUrls(value: string, index?: number): void;

  getFilemetadataParameters(): protobuf_lib_document_pb.FileMetadataTransaction | undefined;
  setFilemetadataParameters(value?: protobuf_lib_document_pb.FileMetadataTransaction): void;
  hasFilemetadataParameters(): boolean;
  clearFilemetadataParameters(): void;

  getQueryParameters(): protobuf_lib_document_pb.QueryTransaction | undefined;
  setQueryParameters(value?: protobuf_lib_document_pb.QueryTransaction): void;
  hasQueryParameters(): boolean;
  clearQueryParameters(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentRequest): DocumentRequest.AsObject;
  static serializeBinaryToWriter(message: DocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentRequest;
  static deserializeBinaryFromReader(message: DocumentRequest, reader: jspb.BinaryReader): DocumentRequest;
}

export namespace DocumentRequest {
  export type AsObject = {
    identification?: protobuf_lib_authority_pb.Identification.AsObject,
    data?: protobuf_lib_document_pb.Document.AsObject,
    imageUrlsList: Array<string>,
    audioUrlsList: Array<string>,
    videoUrlsList: Array<string>,
    fileUrlsList: Array<string>,
    filemetadataParameters?: protobuf_lib_document_pb.FileMetadataTransaction.AsObject,
    queryParameters?: protobuf_lib_document_pb.QueryTransaction.AsObject,
  }
}

export class DocumentResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;
  hasCode(): boolean;

  getMessage(): string;
  setMessage(value: string): void;

  getData(): protobuf_lib_document_pb.Document | undefined;
  setData(value?: protobuf_lib_document_pb.Document): void;
  hasData(): boolean;
  clearData(): void;

  getDocumentCollectionList(): Array<protobuf_lib_document_pb.Document>;
  setDocumentCollectionList(value: Array<protobuf_lib_document_pb.Document>): void;
  clearDocumentCollectionList(): void;
  addDocumentCollection(value?: protobuf_lib_document_pb.Document, index?: number): protobuf_lib_document_pb.Document;

  getQueryResults(): protobuf_lib_document_pb.QueryTransaction | undefined;
  setQueryResults(value?: protobuf_lib_document_pb.QueryTransaction): void;
  hasQueryResults(): boolean;
  clearQueryResults(): void;

  getStatusCase(): DocumentResponse.StatusCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentResponse): DocumentResponse.AsObject;
  static serializeBinaryToWriter(message: DocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentResponse;
  static deserializeBinaryFromReader(message: DocumentResponse, reader: jspb.BinaryReader): DocumentResponse;
}

export namespace DocumentResponse {
  export type AsObject = {
    code: number,
    message: string,
    data?: protobuf_lib_document_pb.Document.AsObject,
    documentCollectionList: Array<protobuf_lib_document_pb.Document.AsObject>,
    queryResults?: protobuf_lib_document_pb.QueryTransaction.AsObject,
  }

  export enum StatusCase { 
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

