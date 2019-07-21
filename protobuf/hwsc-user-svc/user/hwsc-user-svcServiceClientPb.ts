/**
 * @fileoverview gRPC-Web generated client stub for user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as protobuf_lib_user_pb from '../../../protobuf/lib/user_pb';
import * as protobuf_lib_authority_pb from '../../../protobuf/lib/authority_pb';

import {
  UserRequest,
  UserResponse} from './hwsc-user-svc_pb';

export class UserServiceClient {
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
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  getStatus(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/GetStatus',
      request,
      metadata || {},
      this.methodInfoGetStatus,
      callback);
  }

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  createUser(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/CreateUser',
      request,
      metadata || {},
      this.methodInfoCreateUser,
      callback);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  deleteUser(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/DeleteUser',
      request,
      metadata || {},
      this.methodInfoDeleteUser,
      callback);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  updateUser(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/UpdateUser',
      request,
      metadata || {},
      this.methodInfoUpdateUser,
      callback);
  }

  methodInfoAuthenticateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  authenticateUser(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/AuthenticateUser',
      request,
      metadata || {},
      this.methodInfoAuthenticateUser,
      callback);
  }

  methodInfoListUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  listUsers(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/ListUsers',
      request,
      metadata || {},
      this.methodInfoListUsers,
      callback);
  }

  methodInfoGetUser = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  getUser(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/GetUser',
      request,
      metadata || {},
      this.methodInfoGetUser,
      callback);
  }

  methodInfoShareDocument = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  shareDocument(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/ShareDocument',
      request,
      metadata || {},
      this.methodInfoShareDocument,
      callback);
  }

  methodInfoGetNewAuthToken = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  getNewAuthToken(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/GetNewAuthToken',
      request,
      metadata || {},
      this.methodInfoGetNewAuthToken,
      callback);
  }

  methodInfoVerifyAuthToken = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  verifyAuthToken(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/VerifyAuthToken',
      request,
      metadata || {},
      this.methodInfoVerifyAuthToken,
      callback);
  }

  methodInfoVerifyEmailToken = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  verifyEmailToken(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/VerifyEmailToken',
      request,
      metadata || {},
      this.methodInfoVerifyEmailToken,
      callback);
  }

  methodInfoGetAuthSecret = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  getAuthSecret(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/GetAuthSecret',
      request,
      metadata || {},
      this.methodInfoGetAuthSecret,
      callback);
  }

  methodInfoMakeNewAuthSecret = new grpcWeb.AbstractClientBase.MethodInfo(
    UserResponse,
    (request: UserRequest) => {
      return request.serializeBinary();
    },
    UserResponse.deserializeBinary
  );

  makeNewAuthSecret(
    request: UserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UserResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/user.UserService/MakeNewAuthSecret',
      request,
      metadata || {},
      this.methodInfoMakeNewAuthSecret,
      callback);
  }

}

