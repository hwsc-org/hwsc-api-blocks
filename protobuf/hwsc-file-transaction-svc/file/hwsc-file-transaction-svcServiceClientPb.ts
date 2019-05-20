/**
 * @fileoverview gRPC-Web generated client stub for file
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as protobuf_lib_authority_pb from '../../../protobuf/lib/authority_pb';

import {
  Chunk,
  FileTransactionRequest,
  FileTransactionResponse} from './hwsc-file-transaction-svc_pb';

export class FileTransactionServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    FileTransactionResponse,
    (request: FileTransactionRequest) => {
      return request.serializeBinary();
    },
    FileTransactionResponse.deserializeBinary
  );

  getStatus(
    request: FileTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FileTransactionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/file.FileTransactionService/GetStatus',
      request,
      metadata || {},
      this.methodInfoGetStatus,
      callback);
  }

  methodInfoDownloadZippedFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    Chunk,
    (request: FileTransactionRequest) => {
      return request.serializeBinary();
    },
    Chunk.deserializeBinary
  );

  downloadZippedFiles(
    request: FileTransactionRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/file.FileTransactionService/DownloadZippedFiles',
      request,
      metadata || {},
      this.methodInfoDownloadZippedFiles);
  }

  methodInfoCreateUserFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    FileTransactionResponse,
    (request: FileTransactionRequest) => {
      return request.serializeBinary();
    },
    FileTransactionResponse.deserializeBinary
  );

  createUserFolder(
    request: FileTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FileTransactionResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/file.FileTransactionService/CreateUserFolder',
      request,
      metadata || {},
      this.methodInfoCreateUserFolder,
      callback);
  }

}

