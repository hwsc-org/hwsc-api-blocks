// package: hwscFileTransactionSvc
// file: hwsc-file-transaction-svc.proto

import * as hwsc_file_transaction_svc_pb from "./hwsc-file-transaction-svc_pb";
import {grpc} from "grpc-web-client";

type FileTransactionServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof FileTransactionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_file_transaction_svc_pb.FileTransactionRequest;
  readonly responseType: typeof hwsc_file_transaction_svc_pb.FileTransactionResponse;
};

type FileTransactionServiceUploadFile = {
  readonly methodName: string;
  readonly service: typeof FileTransactionService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_file_transaction_svc_pb.Chunk;
  readonly responseType: typeof hwsc_file_transaction_svc_pb.FileTransactionResponse;
};

type FileTransactionServiceDownloadZippedFiles = {
  readonly methodName: string;
  readonly service: typeof FileTransactionService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof hwsc_file_transaction_svc_pb.FileTransactionRequest;
  readonly responseType: typeof hwsc_file_transaction_svc_pb.Chunk;
};

type FileTransactionServiceCreateUserFolder = {
  readonly methodName: string;
  readonly service: typeof FileTransactionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hwsc_file_transaction_svc_pb.FileTransactionRequest;
  readonly responseType: typeof hwsc_file_transaction_svc_pb.FileTransactionResponse;
};

export class FileTransactionService {
  static readonly serviceName: string;
  static readonly GetStatus: FileTransactionServiceGetStatus;
  static readonly UploadFile: FileTransactionServiceUploadFile;
  static readonly DownloadZippedFiles: FileTransactionServiceDownloadZippedFiles;
  static readonly CreateUserFolder: FileTransactionServiceCreateUserFolder;
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

export class FileTransactionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getStatus(
    requestMessage: hwsc_file_transaction_svc_pb.FileTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_file_transaction_svc_pb.FileTransactionResponse|null) => void
  ): void;
  getStatus(
    requestMessage: hwsc_file_transaction_svc_pb.FileTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_file_transaction_svc_pb.FileTransactionResponse|null) => void
  ): void;
  uploadFile(metadata?: grpc.Metadata): RequestStream<hwsc_file_transaction_svc_pb.FileTransactionResponse>;
  downloadZippedFiles(requestMessage: hwsc_file_transaction_svc_pb.FileTransactionRequest, metadata?: grpc.Metadata): ResponseStream<hwsc_file_transaction_svc_pb.Chunk>;
  createUserFolder(
    requestMessage: hwsc_file_transaction_svc_pb.FileTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hwsc_file_transaction_svc_pb.FileTransactionResponse|null) => void
  ): void;
  createUserFolder(
    requestMessage: hwsc_file_transaction_svc_pb.FileTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: hwsc_file_transaction_svc_pb.FileTransactionResponse|null) => void
  ): void;
}

