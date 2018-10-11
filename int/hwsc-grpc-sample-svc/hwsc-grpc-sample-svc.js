const HWSC_GRPC_SAMPLE_SVC_PROTO_PATH = __dirname + "/proto/hwsc-grpc-sample-svc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const options = {
    includeDirs: [
        HWSC_GRPC_SAMPLE_SVC_PROTO_PATH
    ]
};
const hwscGrpcSampleSvcProtoPkgDef = protoLoader.loadSync("", options);
const hwscGrpcSampleSvcPbJs = grpc.loadPackageDefinition(hwscGrpcSampleSvcProtoPkgDef).hwscGrpcSampleSvc;

function sayHello(callback) {
    const client = new hwscGrpcSampleSvcPbJs.SampleService("localhost:50051",
        grpc.credentials.createInsecure());

    const request = {
        firstName: "beautiful world",
        createTimestamp: {
            seconds: 100,
            nanos: 0
        }
    }

    client.sayHello(request, function (err, response) {
        if (!err) {
            console.log("Greeting:", response.message.firstName);
            console.log(response.message.responseTimestamp);
            grpc.closeClient(client);
        }

        callback(err, response);
    });
}

module.exports = {
    sayHello: sayHello
};

