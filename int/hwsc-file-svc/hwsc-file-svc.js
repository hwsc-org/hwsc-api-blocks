const HWSC_GRPC_SAMPLE_SVC_PROTO_PATH = __dirname + "/proto/hwsc-file-svc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const moment = require("moment");

const options = {
    includeDirs: [
        HWSC_GRPC_SAMPLE_SVC_PROTO_PATH
    ]
};
const hwscGrpcSampleSvcProtoPkgDef = protoLoader.loadSync("", options);
const hwscGrpcSampleSvcPbJs = grpc.loadPackageDefinition(hwscGrpcSampleSvcProtoPkgDef).hwscFileSvc;

function getStatus(callback) {
    const client = new hwscGrpcSampleSvcPbJs.FileService("localhost:50051",
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

