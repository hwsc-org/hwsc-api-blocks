// package: app
// file: int/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc.proto

var int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb = require("../../../int/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc_pb");
var grpc = require("grpc-web-client").grpc;

var AppGatewayService = (function () {
  function AppGatewayService() {}
  AppGatewayService.serviceName = "app.AppGatewayService";
  return AppGatewayService;
}());

AppGatewayService.GetStatus = {
  methodName: "GetStatus",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.GetToken = {
  methodName: "GetToken",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.CreateUser = {
  methodName: "CreateUser",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.DeleteUser = {
  methodName: "DeleteUser",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.UpdateUser = {
  methodName: "UpdateUser",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.AuthenticateUser = {
  methodName: "AuthenticateUser",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.ListUsers = {
  methodName: "ListUsers",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.GetUser = {
  methodName: "GetUser",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.ShareDocument = {
  methodName: "ShareDocument",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.CreateDocument = {
  methodName: "CreateDocument",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.ListUserDocumentCollection = {
  methodName: "ListUserDocumentCollection",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.UpdateDocument = {
  methodName: "UpdateDocument",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.DeleteDocument = {
  methodName: "DeleteDocument",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.AddFile = {
  methodName: "AddFile",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.DeleteFile = {
  methodName: "DeleteFile",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.ListDistinctFieldValues = {
  methodName: "ListDistinctFieldValues",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
};

AppGatewayService.QueryDocument = {
  methodName: "QueryDocument",
  service: AppGatewayService,
  requestStream: false,
  responseStream: false,
  requestType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceRequest,
  responseType: int_hwsc_app_gateway_svc_app_hwsc_app_gateway_svc_pb.AppGatewayServiceResponse
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
  var client = grpc.unary(AppGatewayService.GetStatus, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.getToken = function getToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.GetToken, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.createUser = function createUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.CreateUser, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.deleteUser = function deleteUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.DeleteUser, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.updateUser = function updateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.UpdateUser, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.authenticateUser = function authenticateUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.AuthenticateUser, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.listUsers = function listUsers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.ListUsers, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.GetUser, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.shareDocument = function shareDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.ShareDocument, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.createDocument = function createDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.CreateDocument, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.listUserDocumentCollection = function listUserDocumentCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.ListUserDocumentCollection, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.updateDocument = function updateDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.UpdateDocument, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.deleteDocument = function deleteDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.DeleteDocument, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.addFile = function addFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.AddFile, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.deleteFile = function deleteFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.DeleteFile, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.listDistinctFieldValues = function listDistinctFieldValues(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.ListDistinctFieldValues, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AppGatewayServiceClient.prototype.queryDocument = function queryDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AppGatewayService.QueryDocument, {
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
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AppGatewayServiceClient = AppGatewayServiceClient;

