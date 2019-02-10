// package: hwscAppGatewaySvc
// file: hwsc-app-gateway-svc.proto

import * as hwsc_app_gateway_svc_pb from "./hwsc-app-gateway-svc_pb";
import {grpc} from "grpc-web-client";

type AppGatewayServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceGetToken = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceCreateUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceDeleteUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceAuthenticateUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceListUsers = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceShareDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceCreateDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceListUserDocumentCollection = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceUpdateDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceDeleteDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceAddFile = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceDeleteFile = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceListDistinctFieldValues = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceQueryDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

export class AppGatewayService {
  static readonly serviceName: string;
  static readonly GetStatus: AppGatewayServiceGetStatus;
  static readonly GetToken: AppGatewayServiceGetToken;
  static readonly CreateUser: AppGatewayServiceCreateUser;
  static readonly DeleteUser: AppGatewayServiceDeleteUser;
  static readonly UpdateUser: AppGatewayServiceUpdateUser;
  static readonly AuthenticateUser: AppGatewayServiceAuthenticateUser;
  static readonly ListUsers: AppGatewayServiceListUsers;
  static readonly GetUser: AppGatewayServiceGetUser;
  static readonly ShareDocument: AppGatewayServiceShareDocument;
  static readonly CreateDocument: AppGatewayServiceCreateDocument;
  static readonly ListUserDocumentCollection: AppGatewayServiceListUserDocumentCollection;
  static readonly UpdateDocument: AppGatewayServiceUpdateDocument;
  static readonly DeleteDocument: AppGatewayServiceDeleteDocument;
  static readonly AddFile: AppGatewayServiceAddFile;
  static readonly DeleteFile: AppGatewayServiceDeleteFile;
  static readonly ListDistinctFieldValues: AppGatewayServiceListDistinctFieldValues;
  static readonly QueryDocument: AppGatewayServiceQueryDocument;
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

export class AppGatewayServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getStatus(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  getStatus(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  getToken(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  getToken(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  createUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  createUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  deleteUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  deleteUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  updateUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  updateUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  authenticateUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  authenticateUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  listUsers(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  listUsers(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  getUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  getUser(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  shareDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  shareDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  createDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  createDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  listUserDocumentCollection(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  listUserDocumentCollection(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  updateDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  updateDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  deleteDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  deleteDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  addFile(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  addFile(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  deleteFile(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  deleteFile(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  listDistinctFieldValues(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  listDistinctFieldValues(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  queryDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
  queryDocument(
    requestMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): void;
}

