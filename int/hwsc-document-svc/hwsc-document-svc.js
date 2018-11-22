const HWSC_DOCUMENT_PROTO_PATH = '../lib/';
const HWSC_DOCUMENT_SVC_PROTO_PATH = `${__dirname}/proto/`;
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const options = {
  includeDirs: [
    HWSC_DOCUMENT_PROTO_PATH,
    HWSC_DOCUMENT_SVC_PROTO_PATH,
  ],
};
const hwscDocumentSvcProtoPkgDef = protoLoader.loadSync('hwsc-document-svc.proto', options);
const hwscDocumentSvcPbJs = grpc.loadPackageDefinition(hwscDocumentSvcProtoPkgDef)
  .hwscDocumentSvc;
const client = new hwscDocumentSvcPbJs.DocumentService('localhost:50051',
  grpc.credentials.createInsecure());

function getStatus(callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  client.getStatus({}, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function createDocument(documentRequest, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }
  if (documentRequest === null) {
    documentRequest = {};
  }

  client.createDocument(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function listUserDocumentCollection(documentRequest, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  client.listUserDocumentCollection(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function updateDocument(documentRequest, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  client.updateDocument(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function deleteDocument(documentRequest, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  client.deleteDocument(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function queryDocument(documentRequest, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  client.queryDocument(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

module.exports = {
  getStatus,
  createDocument,
  listUserDocumentCollection,
  updateDocument,
  deleteDocument,
  queryDocument,
};
