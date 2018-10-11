const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const HWSC_GRPC_SAMPLE_SVC_PROTO_PATH = __dirname + "/proto/grpc-sample-svc.proto";
const options = {
    includeDirs: [
        HWSC_GRPC_SAMPLE_SVC_PROTO_PATH
    ]
};

const hwscGrpcSampleSvcProtoPkgDef = protoLoader.loadSync("", options);

const sample_proto = grpc.loadPackageDefinition(hwscGrpcSampleSvcProtoPkgDef).sample; // has to match grpc-sample-svc.proto line 3 package

function sayHello() {
    let client = new sample_proto.SampleService("localhost:50051",
        grpc.credentials.createInsecure());

    client.sayHello({firstName: world}, function(err, response) {
        console.log("Greeting:", response.message);
        grpc.closeClient(client);
    });
}

module.exports = {
    sayHello: sayHello
};

