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

export class AppGatewayService {
  static readonly serviceName: string;
  static readonly GetStatus: AppGatewayServiceGetStatus;
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
}

