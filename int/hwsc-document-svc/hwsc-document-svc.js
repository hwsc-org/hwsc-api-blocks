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

function getStatus(callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  const client = new hwscDocumentSvcPbJs.DocumentService('localhost:50051',
    grpc.credentials.createInsecure());

  client.getStatus({}, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function createDocument(document, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  const client = new hwscDocumentSvcPbJs.DocumentService('localhost:50051',
    grpc.credentials.createInsecure());

  const request = {
    data: document,
  };

  client.createDocument(request, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function listUserDocumentCollection(document, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  const client = new hwscDocumentSvcPbJs.DocumentService('localhost:50051',
    grpc.credentials.createInsecure());

  const request = {
    data: document,
  };

  client.listUserDocumentCollection(request, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function updateDocument(document, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  const client = new hwscDocumentSvcPbJs.DocumentService('localhost:50051',
    grpc.credentials.createInsecure());

  const request = {
    data: document,
  };

  client.updateDocument(request, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function deleteDocument(document, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  const client = new hwscDocumentSvcPbJs.DocumentService('localhost:50051',
    grpc.credentials.createInsecure());

  const request = {
    data: document,
  };

  client.deleteDocument(request, (err, response) => {
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
};
