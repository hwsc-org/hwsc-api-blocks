// package: hwsc
// file: user.proto

import * as jspb from "google-protobuf";

export class UserDocumentMetadata extends jspb.Message {
  getIsPublic(): boolean;
  setIsPublic(value: boolean): void;

  getSharedWithMap(): jspb.Map<string, boolean>;
  clearSharedWithMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDocumentMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UserDocumentMetadata): UserDocumentMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDocumentMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDocumentMetadata;
  static deserializeBinaryFromReader(message: UserDocumentMetadata, reader: jspb.BinaryReader): UserDocumentMetadata;
}

export namespace UserDocumentMetadata {
  export type AsObject = {
    isPublic: boolean,
    sharedWithMap: Array<[string, boolean]>,
  }
}

export class UserFriendMetadata extends jspb.Message {
  getSharedDuidToMeMap(): jspb.Map<string, boolean>;
  clearSharedDuidToMeMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFriendMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: UserFriendMetadata): UserFriendMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFriendMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFriendMetadata;
  static deserializeBinaryFromReader(message: UserFriendMetadata, reader: jspb.BinaryReader): UserFriendMetadata;
}

export namespace UserFriendMetadata {
  export type AsObject = {
    sharedDuidToMeMap: Array<[string, boolean]>,
  }
}

export class User extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getOrganization(): string;
  setOrganization(value: string): void;

  getUserDocumentsMap(): jspb.Map<string, UserDocumentMetadata>;
  clearUserDocumentsMap(): void;
  getSharedToMeMap(): jspb.Map<string, UserFriendMetadata>;
  clearSharedToMeMap(): void;
  getCreatedDate(): number;
  setCreatedDate(value: number): void;

  getIsVerified(): boolean;
  setIsVerified(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    uuid: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    organization: string,
    userDocumentsMap: Array<[string, UserDocumentMetadata.AsObject]>,
    sharedToMeMap: Array<[string, UserFriendMetadata.AsObject]>,
    createdDate: number,
    isVerified: boolean,
  }
}

