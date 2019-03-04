// package: app
// file: int/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc.proto

import * as int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb from "../../../int/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AppGatewayServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceGetAuthToken = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceVerifyEmailToken = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceCreateUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceDeleteUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceUpdateUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceAuthenticateUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceListUsers = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceShareDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceCreateDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceListUserDocumentCollection = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceUpdateDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceDeleteDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceAddFile = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceDeleteFile = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceListDistinctFieldValues = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

type AppGatewayServiceQueryDocument = {
  readonly methodName: string;
  readonly service: typeof AppGatewayService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest;
  readonly responseType: typeof int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse;
};

export class AppGatewayService {
  static readonly serviceName: string;
  static readonly GetStatus: AppGatewayServiceGetStatus;
  static readonly GetAuthToken: AppGatewayServiceGetAuthToken;
  static readonly VerifyEmailToken: AppGatewayServiceVerifyEmailToken;
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

interface UnaryResponse {
  cancel(): void;
}
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
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AppGatewayServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getStatus(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  getAuthToken(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  getAuthToken(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  verifyEmailToken(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  verifyEmailToken(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  createUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  deleteUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  updateUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  authenticateUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  authenticateUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  listUsers(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  listUsers(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  shareDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  shareDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  createDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  createDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  listUserDocumentCollection(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  listUserDocumentCollection(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  updateDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  updateDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  deleteDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  deleteDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  addFile(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  addFile(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  deleteFile(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  deleteFile(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  listDistinctFieldValues(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  listDistinctFieldValues(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  queryDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
  queryDocument(
    requestMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
    callback: (error: ServiceError|null, responseMessage: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse|null) => void
  ): UnaryResponse;
}

