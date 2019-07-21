/**
 * @fileoverview gRPC-Web generated client stub for app
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as protobuf_hwsc$user$svc_user_hwsc$user$svc_pb from '../../../protobuf/hwsc-user-svc/user/hwsc-user-svc_pb';
import * as protobuf_lib_user_pb from '../../../protobuf/lib/user_pb';
import * as protobuf_hwsc$document$svc_document_hwsc$document$svc_pb from '../../../protobuf/hwsc-document-svc/document/hwsc-document-svc_pb';
import * as protobuf_lib_document_pb from '../../../protobuf/lib/document_pb';
import * as protobuf_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb from '../../../protobuf/hwsc-file-transaction-svc/file/hwsc-file-transaction-svc_pb';

import {
  AppGatewayServiceRequest,
  AppGatewayServiceResponse} from './hwsc-app-gateway-svc_pb';

export class AppGatewayServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  getStatus(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/GetStatus',
      request,
      metadata || {},
      this.methodInfoGetStatus,
      callback);
  }

  methodInfoGetNewAuthToken = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  getNewAuthToken(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/GetNewAuthToken',
      request,
      metadata || {},
      this.methodInfoGetNewAuthToken,
      callback);
  }

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  createUser(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/CreateUser',
      request,
      metadata || {},
      this.methodInfoCreateUser,
      callback);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  deleteUser(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/DeleteUser',
      request,
      metadata || {},
      this.methodInfoDeleteUser,
      callback);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  updateUser(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/UpdateUser',
      request,
      metadata || {},
      this.methodInfoUpdateUser,
      callback);
  }

  methodInfoListUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  listUsers(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/ListUsers',
      request,
      metadata || {},
      this.methodInfoListUsers,
      callback);
  }

  methodInfoGetUser = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  getUser(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/GetUser',
      request,
      metadata || {},
      this.methodInfoGetUser,
      callback);
  }

  methodInfoShareDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  shareDocument(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/ShareDocument',
      request,
      metadata || {},
      this.methodInfoShareDocument,
      callback);
  }

  methodInfoCreateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  createDocument(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/CreateDocument',
      request,
      metadata || {},
      this.methodInfoCreateDocument,
      callback);
  }

  methodInfoListUserDocumentCollection = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  listUserDocumentCollection(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/ListUserDocumentCollection',
      request,
      metadata || {},
      this.methodInfoListUserDocumentCollection,
      callback);
  }

  methodInfoUpdateDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  updateDocument(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/UpdateDocument',
      request,
      metadata || {},
      this.methodInfoUpdateDocument,
      callback);
  }

  methodInfoDeleteDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  deleteDocument(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/DeleteDocument',
      request,
      metadata || {},
      this.methodInfoDeleteDocument,
      callback);
  }

  methodInfoAddFile = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  addFile(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/AddFile',
      request,
      metadata || {},
      this.methodInfoAddFile,
      callback);
  }

  methodInfoDeleteFile = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  deleteFile(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/DeleteFile',
      request,
      metadata || {},
      this.methodInfoDeleteFile,
      callback);
  }

  methodInfoListDistinctFieldValues = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  listDistinctFieldValues(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/ListDistinctFieldValues',
      request,
      metadata || {},
      this.methodInfoListDistinctFieldValues,
      callback);
  }

  methodInfoQueryDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    AppGatewayServiceResponse,
    (request: AppGatewayServiceRequest) => {
      return request.serializeBinary();
    },
    AppGatewayServiceResponse.deserializeBinary
  );

  queryDocument(
    request: AppGatewayServiceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AppGatewayServiceResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/app.AppGatewayService/QueryDocument',
      request,
      metadata || {},
      this.methodInfoQueryDocument,
      callback);
  }

}

