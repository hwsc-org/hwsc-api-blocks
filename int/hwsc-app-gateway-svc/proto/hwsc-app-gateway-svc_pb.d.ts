// package: hwscAppGatewaySvc
// file: hwsc-app-gateway-svc.proto

import * as jspb from "google-protobuf";

export class AppGatewayServiceRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppGatewayServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppGatewayServiceRequest): AppGatewayServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppGatewayServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppGatewayServiceRequest;
  static deserializeBinaryFromReader(message: AppGatewayServiceRequest, reader: jspb.BinaryReader): AppGatewayServiceRequest;
}

export namespace AppGatewayServiceRequest {
  export type AsObject = {
    message: string,
  }
}

export class AppGatewayServiceResponse extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getStatusCase(): AppGatewayServiceResponse.StatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppGatewayServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppGatewayServiceResponse): AppGatewayServiceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppGatewayServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppGatewayServiceResponse;
  static deserializeBinaryFromReader(message: AppGatewayServiceResponse, reader: jspb.BinaryReader): AppGatewayServiceResponse;
}

export namespace AppGatewayServiceResponse {
  export type AsObject = {
    code: number,
    message: string,
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    CODE = 1,
  }
}

