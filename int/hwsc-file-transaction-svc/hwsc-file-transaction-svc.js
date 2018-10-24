const HWSC_FILE_TRANSACTION_SVC_PROTO_PATH = __dirname + "/proto/hwsc-file-transaction-svc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const options = {
    includeDirs: [
        HWSC_FILE_TRANSACTION_SVC_PROTO_PATH
    ]
};
const hwscFileTransactionSvcProtoPkgDef = protoLoader.loadSync("", options);
const hwscFileTransactionSvcPbJs = grpc.loadPackageDefinition(hwscFileTransactionSvcProtoPkgDef).hwscFileTransactionSvc;

function getStatus(callback) {
    const client = new hwscFileTransactionSvcPbJs.FileTransactionService("localhost:50051",
        grpc.credentials.createInsecure());

    const request = {
    };

    client.getStatus(request, function (err, response) {
        if (!err) {
            grpc.closeClient(client);
        }

        callback(err, response);
    });
}

module.exports = {
    getStatus: getStatus
};
