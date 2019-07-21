import * as jspb from "google-protobuf"

import * as protobuf_lib_authority_pb from '../../../protobuf/lib/authority_pb';

export class FileTransactionRequest extends jspb.Message {
  getIdentification(): protobuf_lib_authority_pb.Identification | undefined;
  setIdentification(value?: protobuf_lib_authority_pb.Identification): void;
  hasIdentification(): boolean;
  clearIdentification(): void;

  getMessage(): string;
  setMessage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  clearUrlsList(): void;
  addUrls(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileTransactionRequest): FileTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: FileTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTransactionRequest;
  static deserializeBinaryFromReader(message: FileTransactionRequest, reader: jspb.BinaryReader): FileTransactionRequest;
}

export namespace FileTransactionRequest {
  export type AsObject = {
    identification?: protobuf_lib_authority_pb.Identification.AsObject,
    message: string,
    name: string,
    uuid: string,
    urlsList: Array<string>,
  }
}

export class FileTransactionResponse extends jspb.Message {
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
  getIdentification(): protobuf_lib_authority_pb.Identification | undefined;
  setIdentification(value?: protobuf_lib_authority_pb.Identification): void;
  hasIdentification(): boolean;
  clearIdentification(): void;

  getBuffer(): Uint8Array | string;
  getBuffer_asU8(): Uint8Array;
  getBuffer_asB64(): string;
  setBuffer(value: Uint8Array | string): void;

  getLength(): number;
  setLength(value: number): void;

  getFileName(): string;
  setFileName(value: string): void;

  getUuid(): string;
  setUuid(value: string): void;

  getIsOneOfCase(): Chunk.IsOneOfCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chunk.AsObject;
  static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
  static serializeBinaryToWriter(message: Chunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chunk;
  static deserializeBinaryFromReader(message: Chunk, reader: jspb.BinaryReader): Chunk;
}

export namespace Chunk {
  export type AsObject = {
    identification?: protobuf_lib_authority_pb.Identification.AsObject,
    buffer: Uint8Array | string,
    length: number,
    fileName: string,
    uuid: string,
  }

  export enum IsOneOfCase { 
    IS_ONE_OF_NOT_SET = 0,
    IDENTIFICATION = 1,
    BUFFER = 2,
    LENGTH = 3,
    FILE_NAME = 4,
    UUID = 5,
  }
}

