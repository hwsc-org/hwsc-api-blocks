const HWSC_FILE_TRANSACTION_SVC_PROTO_PATH = `${__dirname}/proto/hwsc-file-transaction-svc.proto`;
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');

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

/*function uploadFile(callback) {
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

}*/

function uploadFile(filePath, fileName, callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }
  // create a pointer from client in API-block to server in Pycharm
  const server = client.uploadFile((err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }
    callback(err, response);
  });

  var fileName = path.dirname(filePath)+fileName;

  // client send the upload path to server
  server.send({filePath : filePath})

  // client send the upload file name to server
  server.send({fileName : fileName})

  // read the upload file to stream
  const readStream = fs.createReadStream(fileName);

  // THE FOLLOWING CODES JUST A FRAME
  // TO-DO
  readStream.on('readable',function(){
    let chunk;
    while(null !== (chunk = readStream.read())){
      server.send({buffer : chunk})
    }
  })

  readStream.on('end', function(){
    server.write({ buffer: buf });
    server.end();
  })

  readStream.on('error', function(err){
    server.end(err);
  })
}

module.exports = {
  getStatus,
  uploadFile,
};
