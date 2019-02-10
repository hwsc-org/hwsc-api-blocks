// package: hwscFileTransactionSvc
// file: hwsc-file-transaction-svc.proto

import * as jspb from "google-protobuf";
import * as token_pb from "./token_pb";
import * as secret_pb from "./secret_pb";

export class FileTransactionRequest extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): secret_pb.Secret | undefined;
  setSecret(value?: secret_pb.Secret): void;

  getMessage(): string;
  setMessage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  clearUrlsList(): void;
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  addUrls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileTransactionRequest): FileTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTransactionRequest;
  static deserializeBinaryFromReader(message: FileTransactionRequest, reader: jspb.BinaryReader): FileTransactionRequest;
}

export namespace FileTransactionRequest {
  export type AsObject = {
    token?: token_pb.Token.AsObject,
    secret?: secret_pb.Secret.AsObject,
    message: string,
    name: string,
    uuid: string,
    urlsList: Array<string>,
  }
}

export class FileTransactionResponse extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getStatusCase(): FileTransactionResponse.StatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileTransactionResponse): FileTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTransactionResponse;
  static deserializeBinaryFromReader(message: FileTransactionResponse, reader: jspb.BinaryReader): FileTransactionResponse;
}

export namespace FileTransactionResponse {
  export type AsObject = {
    code: number,
    message: string,
    url: string,
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

export class Chunk extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): secret_pb.Secret | undefined;
  setSecret(value?: secret_pb.Secret): void;

  hasBuffer(): boolean;
  clearBuffer(): void;
  getBuffer(): Uint8Array | string;
  getBuffer_asU8(): Uint8Array;
  getBuffer_asB64(): string;
  setBuffer(value: Uint8Array | string): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): number;
  setLength(value: number): void;

  hasFileName(): boolean;
  clearFileName(): void;
  getFileName(): string;
  setFileName(value: string): void;

  hasUuid(): boolean;
  clearUuid(): void;
  getUuid(): string;
  setUuid(value: string): void;

  getTestOneofCase(): Chunk.TestOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    token?: token_pb.Token.AsObject,
    secret?: secret_pb.Secret.AsObject,
    buffer: Uint8Array | string,
    length: number,
    fileName: string,
    uuid: string,
  }

  export enum TestOneofCase {
    TEST_ONEOF_NOT_SET = 0,
    TOKEN = 1,
    SECRET = 2,
    BUFFER = 3,
    LENGTH = 4,
    FILE_NAME = 5,
    UUID = 6,
  }
}

