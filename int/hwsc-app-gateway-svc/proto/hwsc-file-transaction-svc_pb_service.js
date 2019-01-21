// package: hwscFileTransactionSvc
// file: hwsc-file-transaction-svc.proto

var hwsc_file_transaction_svc_pb = require("./hwsc-file-transaction-svc_pb");
var grpc = require("grpc-web-client").grpc;

var FileTransactionService = (function () {
  function FileTransactionService() {}
  FileTransactionService.serviceName = "hwscFileTransactionSvc.FileTransactionService";
  return FileTransactionService;
}());

FileTransactionService.GetStatus = {
  methodName: "GetStatus",
  service: FileTransactionService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_file_transaction_svc_pb.FileTransactionRequest,
  responseType: hwsc_file_transaction_svc_pb.FileTransactionResponse
};

FileTransactionService.UploadFile = {
  methodName: "UploadFile",
  service: FileTransactionService,
  requestStream: true,
  responseStream: false,
  requestType: hwsc_file_transaction_svc_pb.Chunk,
  responseType: hwsc_file_transaction_svc_pb.FileTransactionResponse
};

FileTransactionService.DownloadZippedFiles = {
  methodName: "DownloadZippedFiles",
  service: FileTransactionService,
  requestStream: false,
  responseStream: true,
  requestType: hwsc_file_transaction_svc_pb.FileTransactionRequest,
  responseType: hwsc_file_transaction_svc_pb.Chunk
};

FileTransactionService.CreateUserFolder = {
  methodName: "CreateUserFolder",
  service: FileTransactionService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_file_transaction_svc_pb.FileTransactionRequest,
  responseType: hwsc_file_transaction_svc_pb.FileTransactionResponse
};

exports.FileTransactionService = FileTransactionService;

function FileTransactionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FileTransactionServiceClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(FileTransactionService.GetStatus, {
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

FileTransactionServiceClient.prototype.uploadFile = function uploadFile(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(FileTransactionService.UploadFile, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.end.forEach(function (handler) {
      handler();
    });
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

FileTransactionServiceClient.prototype.downloadZippedFiles = function downloadZippedFiles(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(FileTransactionService.DownloadZippedFiles, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

FileTransactionServiceClient.prototype.createUserFolder = function createUserFolder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(FileTransactionService.CreateUserFolder, {
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

exports.FileTransactionServiceClient = FileTransactionServiceClient;

