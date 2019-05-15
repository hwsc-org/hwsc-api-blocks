/* eslint max-len: ["error", { "code": 120 }] */
/* eslint-disable global-require */

module.exports = {
  hwscGrpcSampleSvc: require('./protobuf/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js'),
  hwscDocumentSvc: require('./protobuf/hwsc-document-svc/hwsc-document-svc.js'),
  hwscUserSvc: require('./protobuf/hwsc-user-svc/hwsc-user-svc.js'),
  hwscFileTransactionSvc: require('./protobuf/hwsc-file-transaction-svc/hwsc-file-transaction-svc.js'),
  hwscAppGatewaySvc: require('./protobuf/hwsc-app-gateway-svc/hwsc-app-gateway-svc.js'),
};

/* eslint-enable global-require */
