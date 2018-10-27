// package: hwscAppGatewaySvc
// file: hwsc-app-gateway-svc.proto

var hwsc_app_gateway_svc_pb = require("./hwsc-app-gateway-svc_pb");
var grpc = require("grpc-web-client").grpc;

var AppGatewayService = (function () {
  function AppGatewayService() {}
  AppGatewayService.serviceName = "hwscAppGatewaySvc.AppGatewayService";
  return AppGatewayService;
}());

AppGatewayService.GetStatus = {
  methodName: "GetStatus",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

exports.AppGatewayService = AppGatewayService;

function AppGatewayServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AppGatewayServiceClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(AppGatewayService.GetStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.AppGatewayServiceClient = AppGatewayServiceClient;

