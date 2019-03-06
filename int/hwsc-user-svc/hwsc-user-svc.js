const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../..`;

const options = {
  includeDirs: [PROTO_PATH],
};

// load the .proto files
const packageDefinition = protoLoader
  .loadSync('int/hwsc-user-svc/user/hwsc-user-svc.proto', options);

// used to create a server stub
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition).user;

// to call service methods, create a stub
const client = new protoDescriptor.UserService('localhost:50052', grpc.credentials.createInsecure());

const callbackErr = () => console.error('callback not a function');

const closeClient = () => {
  grpc.closeClient(client);
};

const setRequestObject = (request) => {
  if (request != null) {
    return request;
  }
  return {};
};

// close connection when script is about to exit or on ctrc+c event
process.on('exit', closeClient);
process.on('SIGINT', () => process.exit(0));

function getStatus(svcInfo) {
  return new Promise((resolve) => {
    client.getStatus({}, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function createUser(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.createUser(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function getUser(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.getUser(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function deleteUser(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.deleteUser(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function updateUser(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.updateUser(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function authenticateUser(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.authenticateUser(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function makeNewSecret(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.makeNewSecret(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function getSecret(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.getSecret(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function getAuthToken(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.getAuthToken(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function verifyAuthToken(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.verifyAuthToken(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

function verifyEmailToken(request, svcInfo) {
  const userRequest = setRequestObject(request);

  return new Promise((resolve) => {
    client.verifyEmailToken(userRequest, (err, res) => resolve({
      err,
      res,
      svcInfo,
    }));
  });
}

module.exports = {
  getStatus,
  createUser,
  getUser,
  deleteUser,
  updateUser,
  authenticateUser,
  makeNewSecret,
  getSecret,
  getAuthToken,
  verifyAuthToken,
  verifyEmailToken,
};
