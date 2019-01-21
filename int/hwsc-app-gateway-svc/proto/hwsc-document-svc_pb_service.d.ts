// package: hwscDocumentSvc
// file: hwsc-document-svc.proto

import * as hwsc_document_svc_pb from "./hwsc-document-svc_pb";
import {grpc} from "grpc-web-client";

type DocumentServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceCreateDocument = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceListUserDocumentCollection = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceUpdateDocument = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceDeleteDocument = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceAddFileMetadata = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceDeleteFileMetadata = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceListDistinctFieldValues = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

type DocumentServiceQueryDocument = {
  readonly methodName: string;
  readonly service: typeof DocumentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_document_svc_pb.DocumentRequest;
  readonly responseType: typeof hwsc_document_svc_pb.DocumentResponse;
};

export class DocumentService {
  static readonly serviceName: string;
  static readonly GetStatus: DocumentServiceGetStatus;
  static readonly CreateDocument: DocumentServiceCreateDocument;
  static readonly ListUserDocumentCollection: DocumentServiceListUserDocumentCollection;
  static readonly UpdateDocument: DocumentServiceUpdateDocument;
  static readonly DeleteDocument: DocumentServiceDeleteDocument;
  static readonly AddFileMetadata: DocumentServiceAddFileMetadata;
  static readonly DeleteFileMetadata: DocumentServiceDeleteFileMetadata;
  static readonly ListDistinctFieldValues: DocumentServiceListDistinctFieldValues;
  static readonly QueryDocument: DocumentServiceQueryDocument;
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

export class DocumentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getStatus(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  getStatus(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  createDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  createDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  listUserDocumentCollection(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  listUserDocumentCollection(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  updateDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  updateDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  deleteDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  deleteDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  addFileMetadata(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  addFileMetadata(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  deleteFileMetadata(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  deleteFileMetadata(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  listDistinctFieldValues(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  listDistinctFieldValues(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  queryDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
  queryDocument(
    requestMessage: hwsc_document_svc_pb.DocumentRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_document_svc_pb.DocumentResponse|null) => void
  ): void;
}

