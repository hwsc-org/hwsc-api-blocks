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

function authenticateUser(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.authenticateUser(userRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function newSecret(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.newSecret(userRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function getSecret(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.getSecret(userRequest, (err, response) => {
    if (!err) {
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

function getToken(request, callback) {
  if (typeof callback !== 'function') {
    callbackErr();
    return;
  }

  let userRequest = request;
  if (userRequest == null) {
    userRequest = {};
  }

  client.getToken(userRequest, (err, response) => {
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
  authenticateUser,
  newSecret,
  getSecret,
  getToken,
};
