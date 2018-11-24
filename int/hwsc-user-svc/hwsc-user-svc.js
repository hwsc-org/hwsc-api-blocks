const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const HWSC_USER_PROTO_PATH = '../lib/';
const HWSC_USER_SVC_PROTO_PATH = `${__dirname}/proto/`;

const options = {
  includeDirs: [
    HWSC_USER_PROTO_PATH,
    HWSC_USER_SVC_PROTO_PATH,
  ],
};

// load the .proto files
const packageDefinition = protoLoader.loadSync('hwsc-user-svc.proto', options);

// used to create a server stub
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).hwscUserSvc;

// to call service methods, create a stub
const client = new protoDescriptor.UserService('localhost:50051', grpc.credentials.createInsecure());

function getStatus(callback) {
  console.log('at clients getStatus');
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

module.exports = {
  getStatus,
};
