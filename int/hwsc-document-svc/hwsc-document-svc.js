/* eslint no-param-reassign: "error" */

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../..`;

const options = {
  includeDirs: [PROTO_PATH],
};

const packageDefinition = protoLoader
  .loadSync('int/hwsc-document-svc/document/hwsc-document-svc.proto', options);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).document;

const client = new protoDescriptor.DocumentService('localhost:50051', grpc.credentials.createInsecure());

const callbackErr = () => console.error('callback not a function');

function getStatus(callback) {
  if (typeof callback !== 'function') {
    callbackErr();
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
    callbackErr();
    return;
  }
  if (documentRequest === null) {
    /* eslint-disable */
    documentRequest = {};
    /* eslint-enable */
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
    callbackErr();
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
    callbackErr();
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
    callbackErr();
    return;
  }

  client.deleteDocument(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function addFileMetadata(documentRequest, media, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  switch (media) {
    case '0':
      documentRequest.fileMetadataParameters.media = 0;
      break;
    case '1':
      documentRequest.fileMetadataParameters.media = 1;
      break;
    case '2':
      documentRequest.fileMetadataParameters.media = 2;
      break;
    case '3':
      documentRequest.fileMetadataParameters.media = 3;
      break;
    default:
      console.error('unsupported media type');
      return;
  }

  client.addFileMetadata(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response,
      documentRequest.fileMetadataParameters.url,
      documentRequest.fileMetadataParameters.media.toString());
  });
}

function deleteFileMetadata(documentRequest, media, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  switch (media) {
    case '0':
      documentRequest.fileMetadataParameters.media = 0;
      break;
    case '1':
      documentRequest.fileMetadataParameters.media = 1;
      break;
    case '2':
      documentRequest.fileMetadataParameters.media = 2;
      break;
    case '3':
      documentRequest.fileMetadataParameters.media = 3;
      break;
    default:
      console.error('unsupported media type');
      return;
  }

  client.deleteFileMetadata(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function listDistinctFieldValues(documentRequest, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  client.listDistinctFieldValues(documentRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function queryDocument(documentRequest, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
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
  addFileMetadata,
  deleteFileMetadata,
  listDistinctFieldValues,
  queryDocument,
};
