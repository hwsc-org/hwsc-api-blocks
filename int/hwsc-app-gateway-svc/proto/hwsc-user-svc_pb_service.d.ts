// package: hwscUserSvc
// file: hwsc-user-svc.proto

import * as hwsc_user_svc_pb from "./hwsc-user-svc_pb";
import {grpc} from "grpc-web-client";

type UserServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceCreateUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceDeleteUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceAuthenticateUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceListUsers = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceShareDocument = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceGetToken = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceVerifyToken = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceGetSecret = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

type UserServiceNewSecret = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_user_svc_pb.UserRequest;
  readonly responseType: typeof hwsc_user_svc_pb.UserResponse;
};

export class UserService {
  static readonly serviceName: string;
  static readonly GetStatus: UserServiceGetStatus;
  static readonly CreateUser: UserServiceCreateUser;
  static readonly DeleteUser: UserServiceDeleteUser;
  static readonly UpdateUser: UserServiceUpdateUser;
  static readonly AuthenticateUser: UserServiceAuthenticateUser;
  static readonly ListUsers: UserServiceListUsers;
  static readonly GetUser: UserServiceGetUser;
  static readonly ShareDocument: UserServiceShareDocument;
  static readonly GetToken: UserServiceGetToken;
  static readonly VerifyToken: UserServiceVerifyToken;
  static readonly GetSecret: UserServiceGetSecret;
  static readonly NewSecret: UserServiceNewSecret;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<T> {
  write(message: T): BidirectionalStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): BidirectionalStream<T>;
  on(type: 'end', handler: () => void): BidirectionalStream<T>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<T>;
}

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getStatus(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  getStatus(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  createUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  createUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  deleteUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  deleteUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  updateUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  updateUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  authenticateUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  authenticateUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  listUsers(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  listUsers(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  getUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  getUser(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  shareDocument(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  shareDocument(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  getToken(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  getToken(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  verifyToken(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  verifyToken(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  getSecret(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  getSecret(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  newSecret(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
  newSecret(
    requestMessage: hwsc_user_svc_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_user_svc_pb.UserResponse|null) => void
  ): void;
}

