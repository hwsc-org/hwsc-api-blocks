// package: hwsc
// file: authority.proto

import * as jspb from "google-protobuf";

export class Header extends jspb.Message {
  getAlg(): Algorithm;
  setAlg(value: Algorithm): void;

  getTyp(): Type;
  setTyp(value: Type): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    alg: Algorithm,
    typ: Type,
  }
}

export class Secret extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getCreatedTimestamp(): number;
  setCreatedTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    key: string,
    createdTimestamp: number,
  }
}

export class Identification extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getToken(): string;
  setToken(value: string): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identification.AsObject;
  static toObject(includeInstance: boolean, msg: Identification): Identification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identification;
  static deserializeBinaryFromReader(message: Identification, reader: jspb.BinaryReader): Identification;
}

export namespace Identification {
  export type AsObject = {
    header?: Header.AsObject,
    token: string,
    secret?: Secret.AsObject,
  }
}

export class Payload extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payload;
  static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
  export type AsObject = {
    header?: Header.AsObject,
    token: string,
  }
}

export enum Algorithm {
  NO_ALG = 0,
  HS256 = 1,
  HS512 = 2,
}

export enum Type {
  NO_TYPE = 0,
  JWT = 1,
}

