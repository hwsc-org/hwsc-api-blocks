// package: hwscAppGatewaySvc
// file: hwsc-app-gateway-svc.proto

import * as jspb from "google-protobuf";
import * as hwsc_user_svc_pb from "./hwsc-user-svc_pb";
import * as user_pb from "./user_pb";
import * as hwsc_document_svc_pb from "./hwsc-document-svc_pb";
import * as document_pb from "./document_pb";
import * as hwsc_file_transaction_svc_pb from "./hwsc-file-transaction-svc_pb";
import * as token_pb from "./token_pb";

export class AppGatewayServiceRequest extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): void;

  hasUserRequest(): boolean;
  clearUserRequest(): void;
  getUserRequest(): hwsc_user_svc_pb.UserRequest | undefined;
  setUserRequest(value?: hwsc_user_svc_pb.UserRequest): void;

  hasDocumentRequest(): boolean;
  clearDocumentRequest(): void;
  getDocumentRequest(): hwsc_document_svc_pb.DocumentRequest | undefined;
  setDocumentRequest(value?: hwsc_document_svc_pb.DocumentRequest): void;

  hasChunk(): boolean;
  clearChunk(): void;
  getChunk(): hwsc_file_transaction_svc_pb.Chunk | undefined;
  setChunk(value?: hwsc_file_transaction_svc_pb.Chunk): void;

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
    token?: token_pb.Token.AsObject,
    userRequest?: hwsc_user_svc_pb.UserRequest.AsObject,
    documentRequest?: hwsc_document_svc_pb.DocumentRequest.AsObject,
    chunk?: hwsc_file_transaction_svc_pb.Chunk.AsObject,
  }
}

export class AppGatewayServiceResponse extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): void;

  clearUserCollectionList(): void;
  getUserCollectionList(): Array<user_pb.User>;
  setUserCollectionList(value: Array<user_pb.User>): void;
  addUserCollection(value?: user_pb.User, index?: number): user_pb.User;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): document_pb.Document | undefined;
  setDocument(value?: document_pb.Document): void;

  clearDocumentCollectionList(): void;
  getDocumentCollectionList(): Array<document_pb.Document>;
  setDocumentCollectionList(value: Array<document_pb.Document>): void;
  addDocumentCollection(value?: document_pb.Document, index?: number): document_pb.Document;

  hasQueryResults(): boolean;
  clearQueryResults(): void;
  getQueryResults(): document_pb.QueryTransaction | undefined;
  setQueryResults(value?: document_pb.QueryTransaction): void;

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
    token?: token_pb.Token.AsObject,
    user?: user_pb.User.AsObject,
    userCollectionList: Array<user_pb.User.AsObject>,
    document?: document_pb.Document.AsObject,
    documentCollectionList: Array<document_pb.Document.AsObject>,
    queryResults?: document_pb.QueryTransaction.AsObject,
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

