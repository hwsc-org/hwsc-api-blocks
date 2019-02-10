// package: hwsc
// file: token.proto

import * as jspb from "google-protobuf";

export class Token extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getTokenString(): string;
  setTokenString(value: string): void;

  getPermissionLevel(): Permission;
  setPermissionLevel(value: Permission): void;

  getExpirationTimestamp(): number;
  setExpirationTimestamp(value: number): void;

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
    uuid: string,
    tokenString: string,
    permissionLevel: Permission,
    expirationTimestamp: number,
  }
}

export enum Permission {
  ADMIN = 0,
  USER = 1,
}

