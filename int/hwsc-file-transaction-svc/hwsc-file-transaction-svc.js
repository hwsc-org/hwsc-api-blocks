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

/* function uploadFile(callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }
  // 'utf8'
  fs.readFile('res/cat.jpg', 'binary', (errFile, contents) => {
    if (!errFile) {
      // grpc.closeClient(client);
    }
    var server = client.uploadFile((err, response) => {
      if (!err) {
        // grpc.closeClient(client);
      }
      callback(err, response);
    });
    var buf = Buffer.from(contents, 'binary');
    //console.log(buf);
    server.write({ buffer: buf });
    server.end();
  });
} */

function uploadFile(filePath, fileName, callback) {
  const fileLocation = path.dirname(filePath) + fileName;

  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }
  // create a connection from client in API-block to server in Pycharm
  const server = client.uploadFile((err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }
    callback(err, response);
  });

  const name = fileName;
  // client send the upload file name to server
  server.write({ fileName: name });
  server.end();

  // open the file, and read/pipe the first 1024 bytes of the file
  // const readStream = fs.createReadStream(fileLocation, { hightWaterMark: 1024 });
  //
  // // const readable = getReadableStreamSomehow();
  // readStream.on('readable', () => {
  //   let chunk;
  //   // set buffer = 1st 1024 bytes
  //   readStream.pipe(server);
  //   while ((chunk = readStream.read()) !== null) {
  //     // send the buffer
  //     server.write({ buffer: chunk });
  //     // Read/pipe and send the next 1024 bytes
  //     readStream.pipe(server);
  //   }
  // });
  //
  // readStream.on('end', () => {
  //   server.end();
  // });
  //
  // readStream.on('error', (err) => {
  //   console.error('Error!');
  //   server.end(err);
  // });
  //
  // readStream.on('cancel', (err) => {
  //   console.error('Cancel!');
  //   server.end(err);
  // });
}

module.exports = {
  getStatus,
  uploadFile,
};
