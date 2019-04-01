const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const moment = require('moment');

const PROTO_PATH = `${__dirname}/../..`;

const options = {
  includeDirs: [PROTO_PATH],
};

const hwscGrpcSampleSvcProtoPkgDef = protoLoader
  .loadSync('protobuf/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto', options);
const hwscGrpcSampleSvcPbJs = grpc.loadPackageDefinition(hwscGrpcSampleSvcProtoPkgDef)
  .hwscGrpcSampleSvc;

function sayHello(callback) {
  if (typeof callback !== 'function') {
    console.error('callback not a function');
    return;
  }

  const client = new hwscGrpcSampleSvcPbJs.SampleService('localhost:50051',
    grpc.credentials.createInsecure());

  const now = moment().utc();
  console.log('Sending request with UTC unix:', now.unix());
  console.log('Sending request with UTC date:', now.format());

  const request = {
    firstName: 'Lisa',
    createTimestamp: now.unix(),
  };

  client.sayHello(request, (err, response) => {
    if (!err) {
      const dateString = moment.unix(response.responseTimestamp).utc().format();
      console.log('Receiving response.msg:', response.message);
      console.log('Receiving UTC date:', dateString);
      grpc.closeClient(client);
    }

    callback(err, response);
  });
}

module.exports = {
  sayHello,
};
