const HWSC_FILE_TRANSACTION_SVC_PROTO_PATH = `${__dirname}/proto/hwsc-file-transaction-svc.proto`;
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');
const path = require('path');

const options = {
  includeDirs: [
    HWSC_FILE_TRANSACTION_SVC_PROTO_PATH,
  ],
};
const hwscFileTransactionSvcProtoPkgDef = protoLoader.loadSync('', options);
const hwscFileTransactionSvcPbJs = grpc.loadPackageDefinition(hwscFileTransactionSvcProtoPkgDef)
  .hwscFileTransactionSvc;

const client = new hwscFileTransactionSvcPbJs.FileTransactionService('localhost:50051',
  grpc.credentials.createInsecure());

function getStatus(callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }
  const request = {};
  client.getStatus(request, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }
    callback(err, response);
  });
}

function uploadFile(filePath, fileName, callback) {

  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  const fileLocation = filePath + '/' + fileName;

  // create a connection from client in API-block to server in Pycharm
  const server = client.uploadFile((err, response) => {
    if (!err) {
      // grpc.closeClient(client);
    }
    callback(err, response);
  });
  // client send the upload file name to server
  server.write({ fileName: fileName });

  // open the file, and read/pipe the first 1024 bytes of the file
  const readStream = fs.createReadStream(fileLocation, { hightWaterMark: 1024 });

  readStream.on('readable', () => {
    let chunk;
    while ((chunk = readStream.read()) !== null) {
      server.write({ buffer: chunk });
    }
  });
  readStream.on('end', () => {
    server.end();
    //   callback(err, response);
  });

  //TODO
  /*readStream.on('error', (err, response) => {
    server.end();
    callback(err, response);
    });

    readStream.on('cancel', (err) => {
    server.end(err);
    console.error('Cancel!');
    });*/
}

module.exports = {
  getStatus,
  uploadFile,
};
