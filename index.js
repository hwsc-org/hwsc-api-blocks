/* eslint max-len: ["error", { "code": 120 }] */
/* eslint-disable global-require */

module.exports = {
  demo: require('./int/demo/demo.js'),
  hwscGrpcSampleSvc: require('./int/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js'),
  hwscDocumentSvc: require('./int/hwsc-document-svc/hwsc-document-svc.js'),
  hwscUserSvc: require('./int/hwsc-user-svc/hwsc-user-svc.js'),
  hwscFileTransactionSvc: require('./int/hwsc-file-transaction-svc/hwsc-file-transaction-svc.js'),
  hwscAppGatewaySvc: require('./int/hwsc-app-gateway-svc/hwsc-app-gateway-svc.js'),
};

/* eslint-enable global-require */
