// package: hwsc
// file: token.proto

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

export class Payload extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getPermissionLevel(): Permission;
  setPermissionLevel(value: Permission): void;

  getExpirationTimestamp(): number;
  setExpirationTimestamp(value: number): void;

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
    uuid: string,
    permissionLevel: Permission,
    expirationTimestamp: number,
  }
}

export class Token extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Header | undefined;
  setHeader(value?: Header): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Payload | undefined;
  setPayload(value?: Payload): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    header?: Header.AsObject,
    payload?: Payload.AsObject,
    signature: string,
  }
}

export enum Permission {
  NO_PERM = 0,
  USER = 1,
  ADMIN = 2,
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

