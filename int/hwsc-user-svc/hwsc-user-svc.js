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
const client = new protoDescriptor.UserService('localhost:50052', grpc.credentials.createInsecure());

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

function createUser(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.createUser(userRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function getUser(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.getUser(userRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function deleteUser(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.deleteUser(userRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function updateUser(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.updateUser(userRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

module.exports = {
  getStatus,
  createUser,
  getUser,
  deleteUser,
  updateUser,
};
