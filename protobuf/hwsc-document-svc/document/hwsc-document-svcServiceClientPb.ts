/**
 * @fileoverview gRPC-Web generated client stub for document
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as protobuf_lib_document_pb from '../../../protobuf/lib/document_pb';
import * as protobuf_lib_authority_pb from '../../../protobuf/lib/authority_pb';

import {
  DocumentRequest,
  DocumentResponse} from './hwsc-document-svc_pb';

export class DocumentServiceClient {
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
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  getStatus(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/GetStatus',
      request,
      metadata || {},
      this.methodInfoGetStatus,
      callback);
  }

  methodInfoCreateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  createDocument(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/CreateDocument',
      request,
      metadata || {},
      this.methodInfoCreateDocument,
      callback);
  }

  methodInfoListUserDocumentCollection = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  listUserDocumentCollection(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/ListUserDocumentCollection',
      request,
      metadata || {},
      this.methodInfoListUserDocumentCollection,
      callback);
  }

  methodInfoUpdateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  updateDocument(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/UpdateDocument',
      request,
      metadata || {},
      this.methodInfoUpdateDocument,
      callback);
  }

  methodInfoDeleteDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  deleteDocument(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/DeleteDocument',
      request,
      metadata || {},
      this.methodInfoDeleteDocument,
      callback);
  }

  methodInfoAddFileMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  addFileMetadata(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/AddFileMetadata',
      request,
      metadata || {},
      this.methodInfoAddFileMetadata,
      callback);
  }

  methodInfoDeleteFileMetadata = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  deleteFileMetadata(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/DeleteFileMetadata',
      request,
      metadata || {},
      this.methodInfoDeleteFileMetadata,
      callback);
  }

  methodInfoListDistinctFieldValues = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  listDistinctFieldValues(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/ListDistinctFieldValues',
      request,
      metadata || {},
      this.methodInfoListDistinctFieldValues,
      callback);
  }

  methodInfoQueryDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    DocumentResponse,
    (request: DocumentRequest) => {
      return request.serializeBinary();
    },
    DocumentResponse.deserializeBinary
  );

  queryDocument(
    request: DocumentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DocumentResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/document.DocumentService/QueryDocument',
      request,
      metadata || {},
      this.methodInfoQueryDocument,
      callback);
  }

}

