// package: hwscDocumentSvc
// file: hwsc-document-svc.proto

var hwsc_document_svc_pb = require("./hwsc-document-svc_pb");
var grpc = require("grpc-web-client").grpc;

var DocumentService = (function () {
  function DocumentService() {}
  DocumentService.serviceName = "hwscDocumentSvc.DocumentService";
  return DocumentService;
}());

DocumentService.GetStatus = {
  methodName: "GetStatus",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.CreateDocument = {
  methodName: "CreateDocument",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.ListUserDocumentCollection = {
  methodName: "ListUserDocumentCollection",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.UpdateDocument = {
  methodName: "UpdateDocument",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.DeleteDocument = {
  methodName: "DeleteDocument",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.AddFileMetadata = {
  methodName: "AddFileMetadata",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.DeleteFileMetadata = {
  methodName: "DeleteFileMetadata",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.ListDistinctFieldValues = {
  methodName: "ListDistinctFieldValues",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

DocumentService.QueryDocument = {
  methodName: "QueryDocument",
  service: DocumentService,
  requestStream: false,
  responseStream: false,
  requestType: hwsc_document_svc_pb.DocumentRequest,
  responseType: hwsc_document_svc_pb.DocumentResponse
};

exports.DocumentService = DocumentService;

function DocumentServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DocumentServiceClient.prototype.getStatus = function getStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.GetStatus, {
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

DocumentServiceClient.prototype.createDocument = function createDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.CreateDocument, {
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

DocumentServiceClient.prototype.listUserDocumentCollection = function listUserDocumentCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.ListUserDocumentCollection, {
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

DocumentServiceClient.prototype.updateDocument = function updateDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.UpdateDocument, {
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

DocumentServiceClient.prototype.deleteDocument = function deleteDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.DeleteDocument, {
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

DocumentServiceClient.prototype.addFileMetadata = function addFileMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.AddFileMetadata, {
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

DocumentServiceClient.prototype.deleteFileMetadata = function deleteFileMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.DeleteFileMetadata, {
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

DocumentServiceClient.prototype.listDistinctFieldValues = function listDistinctFieldValues(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.ListDistinctFieldValues, {
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

DocumentServiceClient.prototype.queryDocument = function queryDocument(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(DocumentService.QueryDocument, {
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

exports.DocumentServiceClient = DocumentServiceClient;

