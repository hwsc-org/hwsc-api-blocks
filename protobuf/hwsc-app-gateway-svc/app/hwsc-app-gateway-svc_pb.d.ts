import * as jspb from "google-protobuf"

import * as protobuf_hwsc$user$svc_user_hwsc$user$svc_pb from '../../../protobuf/hwsc-user-svc/user/hwsc-user-svc_pb';
import * as protobuf_lib_user_pb from '../../../protobuf/lib/user_pb';
import * as protobuf_hwsc$document$svc_document_hwsc$document$svc_pb from '../../../protobuf/hwsc-document-svc/document/hwsc-document-svc_pb';
import * as protobuf_lib_document_pb from '../../../protobuf/lib/document_pb';
import * as protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb from '../../../protobuf/hwsc-file-transaction-svc/file/hwsc-file-transaction-svc_pb';

export class AppGatewayServiceRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getUserRequest(): protobuf_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest | undefined;
  setUserRequest(value?: protobuf_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest): void;
  hasUserRequest(): boolean;
  clearUserRequest(): void;

  getDocumentRequest(): protobuf_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest | undefined;
  setDocumentRequest(value?: protobuf_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest): void;
  hasDocumentRequest(): boolean;
  clearDocumentRequest(): void;

  getFileTransactionRequest(): protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest | undefined;
  setFileTransactionRequest(value?: protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest): void;
  hasFileTransactionRequest(): boolean;
  clearFileTransactionRequest(): void;

  getChunk(): protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk | undefined;
  setChunk(value?: protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk): void;
  hasChunk(): boolean;
  clearChunk(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppGatewayServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppGatewayServiceRequest): AppGatewayServiceRequest.AsObject;
  static serializeBinaryToWriter(message: AppGatewayServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppGatewayServiceRequest;
  static deserializeBinaryFromReader(message: AppGatewayServiceRequest, reader: jspb.BinaryReader): AppGatewayServiceRequest;
}

export namespace AppGatewayServiceRequest {
  export type AsObject = {
    token: string,
    userRequest?: protobuf_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest.AsObject,
    documentRequest?: protobuf_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest.AsObject,
    fileTransactionRequest?: protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest.AsObject,
    chunk?: protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk.AsObject,
  }
}

export class AppGatewayServiceResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getUser(): protobuf_lib_user_pb.User | undefined;
  setUser(value?: protobuf_lib_user_pb.User): void;
  hasUser(): boolean;
  clearUser(): void;

  getUserCollectionList(): Array<protobuf_lib_user_pb.User>;
  setUserCollectionList(value: Array<protobuf_lib_user_pb.User>): void;
  clearUserCollectionList(): void;
  addUserCollection(value?: protobuf_lib_user_pb.User, index?: number): protobuf_lib_user_pb.User;

  getDocument(): protobuf_lib_document_pb.Document | undefined;
  setDocument(value?: protobuf_lib_document_pb.Document): void;
  hasDocument(): boolean;
  clearDocument(): void;

  getDocumentCollectionList(): Array<protobuf_lib_document_pb.Document>;
  setDocumentCollectionList(value: Array<protobuf_lib_document_pb.Document>): void;
  clearDocumentCollectionList(): void;
  addDocumentCollection(value?: protobuf_lib_document_pb.Document, index?: number): protobuf_lib_document_pb.Document;

  getQueryResults(): protobuf_lib_document_pb.QueryTransaction | undefined;
  setQueryResults(value?: protobuf_lib_document_pb.QueryTransaction): void;
  hasQueryResults(): boolean;
  clearQueryResults(): void;

  getStatusCase(): AppGatewayServiceResponse.StatusCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppGatewayServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppGatewayServiceResponse): AppGatewayServiceResponse.AsObject;
  static serializeBinaryToWriter(message: AppGatewayServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppGatewayServiceResponse;
  static deserializeBinaryFromReader(message: AppGatewayServiceResponse, reader: jspb.BinaryReader): AppGatewayServiceResponse;
}

export namespace AppGatewayServiceResponse {
  export type AsObject = {
    code: number,
    message: string,
    token: string,
    user?: protobuf_lib_user_pb.User.AsObject,
    userCollectionList: Array<protobuf_lib_user_pb.User.AsObject>,
    document?: protobuf_lib_document_pb.Document.AsObject,
    documentCollectionList: Array<protobuf_lib_document_pb.Document.AsObject>,
    queryResults?: protobuf_lib_document_pb.QueryTransaction.AsObject,
  }

  export enum StatusCase { 
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

