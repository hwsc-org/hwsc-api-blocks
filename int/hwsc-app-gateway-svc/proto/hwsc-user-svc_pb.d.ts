// package: hwscUserSvc
// file: hwsc-user-svc.proto

import * as jspb from "google-protobuf";
import * as user_pb from "./user_pb";
import * as authority_pb from "./authority_pb";

export class UserRequest extends jspb.Message {
  hasIdentification(): boolean;
  clearIdentification(): void;
  getIdentification(): authority_pb.Identification | undefined;
  setIdentification(value?: authority_pb.Identification): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): void;

  getDuid(): string;
  setDuid(value: string): void;

  clearUuidsToShareDuidList(): void;
  getUuidsToShareDuidList(): Array<string>;
  setUuidsToShareDuidList(value: Array<string>): void;
  addUuidsToShareDuid(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    identification?: authority_pb.Identification.AsObject,
    user?: user_pb.User.AsObject,
    duid: string,
    uuidsToShareDuidList: Array<string>,
  }
}

export class UserResponse extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasIdentification(): boolean;
  clearIdentification(): void;
  getIdentification(): authority_pb.Identification | undefined;
  setIdentification(value?: authority_pb.Identification): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): void;

  clearUserCollectionList(): void;
  getUserCollectionList(): Array<user_pb.User>;
  setUserCollectionList(value: Array<user_pb.User>): void;
  addUserCollection(value?: user_pb.User, index?: number): user_pb.User;

  getStatusCase(): UserResponse.StatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    code: number,
    message: string,
    identification?: authority_pb.Identification.AsObject,
    user?: user_pb.User.AsObject,
    userCollectionList: Array<user_pb.User.AsObject>,
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

