// package: app
// file: int/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc.proto

import * as jspb from "google-protobuf";
import * as int_hwsc_user_svc_user_hwsc_user_svc_pb from "../../../int/hwsc-user-svc/user/hwsc-user-svc_pb";
import * as int_lib_user_pb from "../../../int/lib/user_pb";
import * as int_hwsc_document_svc_document_hwsc_document_svc_pb from "../../../int/hwsc-document-svc/document/hwsc-document-svc_pb";
import * as int_lib_document_pb from "../../../int/lib/document_pb";
import * as int_hwsc_file_transaction_svc_file_hwsc_file_transaction_svc_pb from "../../../int/hwsc-file-transaction-svc/file/hwsc-file-transaction-svc_pb";

export class AppGatewayServiceRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasUserRequest(): boolean;
  clearUserRequest(): void;
  getUserRequest(): int_hwsc_user_svc_user_hwsc_user_svc_pb.UserRequest | undefined;
  setUserRequest(value?: int_hwsc_user_svc_user_hwsc_user_svc_pb.UserRequest): void;

  hasDocumentRequest(): boolean;
  clearDocumentRequest(): void;
  getDocumentRequest(): int_hwsc_document_svc_document_hwsc_document_svc_pb.DocumentRequest | undefined;
  setDocumentRequest(value?: int_hwsc_document_svc_document_hwsc_document_svc_pb.DocumentRequest): void;

  hasFileTransactionRequest(): boolean;
  clearFileTransactionRequest(): void;
  getFileTransactionRequest(): int_hwsc_file_transaction_svc_file_hwsc_file_transaction_svc_pb.FileTransactionRequest | undefined;
  setFileTransactionRequest(value?: int_hwsc_file_transaction_svc_file_hwsc_file_transaction_svc_pb.FileTransactionRequest): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): int_hwsc_file_transaction_svc_file_hwsc_file_transaction_svc_pb.Chunk | undefined;
  setChunk(value?: int_hwsc_file_transaction_svc_file_hwsc_file_transaction_svc_pb.Chunk): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppGatewayServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppGatewayServiceRequest): AppGatewayServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppGatewayServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppGatewayServiceRequest;
  static deserializeBinaryFromReader(message: AppGatewayServiceRequest, reader: jspb.BinaryReader): AppGatewayServiceRequest;
}

export namespace AppGatewayServiceRequest {
  export type AsObject = {
    token: string,
    userRequest?: int_hwsc_user_svc_user_hwsc_user_svc_pb.UserRequest.AsObject,
    documentRequest?: int_hwsc_document_svc_document_hwsc_document_svc_pb.DocumentRequest.AsObject,
    fileTransactionRequest?: int_hwsc_file_transaction_svc_file_hwsc_file_transaction_svc_pb.FileTransactionRequest.AsObject,
    chunk?: int_hwsc_file_transaction_svc_file_hwsc_file_transaction_svc_pb.Chunk.AsObject,
  }
}

export class AppGatewayServiceResponse extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): int_lib_user_pb.User | undefined;
  setUser(value?: int_lib_user_pb.User): void;

  clearUserCollectionList(): void;
  getUserCollectionList(): Array<int_lib_user_pb.User>;
  setUserCollectionList(value: Array<int_lib_user_pb.User>): void;
  addUserCollection(value?: int_lib_user_pb.User, index?: number): int_lib_user_pb.User;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): int_lib_document_pb.Document | undefined;
  setDocument(value?: int_lib_document_pb.Document): void;

  clearDocumentCollectionList(): void;
  getDocumentCollectionList(): Array<int_lib_document_pb.Document>;
  setDocumentCollectionList(value: Array<int_lib_document_pb.Document>): void;
  addDocumentCollection(value?: int_lib_document_pb.Document, index?: number): int_lib_document_pb.Document;

  hasQueryResults(): boolean;
  clearQueryResults(): void;
  getQueryResults(): int_lib_document_pb.QueryTransaction | undefined;
  setQueryResults(value?: int_lib_document_pb.QueryTransaction): void;

  getStatusCase(): AppGatewayServiceResponse.StatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppGatewayServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppGatewayServiceResponse): AppGatewayServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppGatewayServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppGatewayServiceResponse;
  static deserializeBinaryFromReader(message: AppGatewayServiceResponse, reader: jspb.BinaryReader): AppGatewayServiceResponse;
}

export namespace AppGatewayServiceResponse {
  export type AsObject = {
    code: number,
    message: string,
    token: string,
    user?: int_lib_user_pb.User.AsObject,
    userCollectionList: Array<int_lib_user_pb.User.AsObject>,
    document?: int_lib_document_pb.Document.AsObject,
    documentCollectionList: Array<int_lib_document_pb.Document.AsObject>,
    queryResults?: int_lib_document_pb.QueryTransaction.AsObject,
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

