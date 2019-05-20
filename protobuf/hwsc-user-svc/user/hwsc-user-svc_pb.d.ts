import * as jspb from "google-protobuf"

import * as protobuf_lib_user_pb from '../../../protobuf/lib/user_pb';
import * as protobuf_lib_authority_pb from '../../../protobuf/lib/authority_pb';

export class UserRequest extends jspb.Message {
  getIdentification(): protobuf_lib_authority_pb.Identification | undefined;
  setIdentification(value?: protobuf_lib_authority_pb.Identification): void;
  hasIdentification(): boolean;
  clearIdentification(): void;

  getUser(): protobuf_lib_user_pb.User | undefined;
  setUser(value?: protobuf_lib_user_pb.User): void;
  hasUser(): boolean;
  clearUser(): void;

  getDuid(): string;
  setDuid(value: string): void;

  getUuidsToShareDuidList(): Array<string>;
  setUuidsToShareDuidList(value: Array<string>): void;
  clearUuidsToShareDuidList(): void;
  addUuidsToShareDuid(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    identification?: protobuf_lib_authority_pb.Identification.AsObject,
    user?: protobuf_lib_user_pb.User.AsObject,
    duid: string,
    uuidsToShareDuidList: Array<string>,
  }
}

export class UserResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;
  hasCode(): boolean;

  getMessage(): string;
  setMessage(value: string): void;

  getIdentification(): protobuf_lib_authority_pb.Identification | undefined;
  setIdentification(value?: protobuf_lib_authority_pb.Identification): void;
  hasIdentification(): boolean;
  clearIdentification(): void;

  getUser(): protobuf_lib_user_pb.User | undefined;
  setUser(value?: protobuf_lib_user_pb.User): void;
  hasUser(): boolean;
  clearUser(): void;

  getUserCollectionList(): Array<protobuf_lib_user_pb.User>;
  setUserCollectionList(value: Array<protobuf_lib_user_pb.User>): void;
  clearUserCollectionList(): void;
  addUserCollection(value?: protobuf_lib_user_pb.User, index?: number): protobuf_lib_user_pb.User;

  getStatusCase(): UserResponse.StatusCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    code: number,
    message: string,
    identification?: protobuf_lib_authority_pb.Identification.AsObject,
    user?: protobuf_lib_user_pb.User.AsObject,
    userCollectionList: Array<protobuf_lib_user_pb.User.AsObject>,
  }

  export enum StatusCase { 
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

