import * as jspb from "google-protobuf"

export class Secret extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getCreatedTimestamp(): number;
  setCreatedTimestamp(value: number): void;

  getExpirationTimestamp(): number;
  setExpirationTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    key: string,
    createdTimestamp: number,
    expirationTimestamp: number,
  }
}

export class Identification extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getSecret(): Secret | undefined;
  setSecret(value?: Secret): void;
  hasSecret(): boolean;
  clearSecret(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identification.AsObject;
  static toObject(includeInstance: boolean, msg: Identification): Identification.AsObject;
  static serializeBinaryToWriter(message: Identification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identification;
  static deserializeBinaryFromReader(message: Identification, reader: jspb.BinaryReader): Identification;
}

export namespace Identification {
  export type AsObject = {
    token: string,
    secret?: Secret.AsObject,
  }
}

