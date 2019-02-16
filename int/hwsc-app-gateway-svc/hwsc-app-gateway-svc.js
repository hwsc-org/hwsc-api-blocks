const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../..`;

const options = {
  includeDirs: [PROTO_PATH],
};

// runtime dynamic compialation proto file, creates pb file dynamically
const packageDefinition = protoLoader
  .loadSync('int/hwsc-app-gateway-svc/app/hwsc-app-gateway-svc.proto', options);

// pointing to pb file in memory
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).app;

const client = new protoDescriptor.AppGatewayService('localhost: 50055', grpc.credentials.createInsecure());

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

module.exports = {
  getStatus,
};
