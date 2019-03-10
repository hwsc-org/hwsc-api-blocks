
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../..`;


const fs = require('fs');
const path = require('path');

const options = {
  includeDirs: [PROTO_PATH],
};

const packageDefinition = protoLoader
  .loadSync('protobuf/hwsc-file-transaction-svc/file/hwsc-file-transaction-svc.proto', options);

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).file;

const client = new protoDescriptor.FileTransactionService('localhost:50053', grpc.credentials.createInsecure());

const callbackErr = () => console.error('callback not a function');

function getStatus(callback) {
  if (typeof callback !== 'function') {
    callbackErr();
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

function createUserFolder(uuid, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }
  const id = uuid;
  console.log(id);
  const request = {};
  request.uuid = uuid;
  client.createUserFolder(request, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }
    callback(err, response);
  });
}

function uploadFile(filePath, fileName, uuid, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }
  const id = uuid;
  const fileLocation = filePath + '/' + fileName;
  // create a connection from client in API-block to server in Pycharm
  const server = client.uploadFile((err, response) => {
    if (!err) {
    // grpc.closeClient(client);
    }
    callback(err, response);
    console.log(err);
  });
  // client send the upload file name to server
  server.write({ fileName });
  server.write({ uuid });
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

  // TODO
  /* readStream.on('error', (err, response) => {
    server.end();
    callback(err, response);
    });
    readStream.on('cancel', (err) => {
    server.end(err);
    console.error('Cancel!');
    }); */
}

module.exports = {
  getStatus,
  uploadFile,
  createUserFolder,
};
