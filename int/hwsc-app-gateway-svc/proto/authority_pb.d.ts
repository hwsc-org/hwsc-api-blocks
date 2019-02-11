// package: hwsc
// file: authority.proto

import * as jspb from "google-protobuf";

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

export class Authority extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authority.AsObject;
  static toObject(includeInstance: boolean, msg: Authority): Authority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Authority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authority;
  static deserializeBinaryFromReader(message: Authority, reader: jspb.BinaryReader): Authority;
}

export namespace Authority {
  export type AsObject = {
    token: string,
    secret?: Secret.AsObject,
  }
}

