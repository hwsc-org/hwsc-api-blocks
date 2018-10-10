const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const HWSC_GRPC_SAMPLE_SVC_PROTO_PATH = __dirname + "/proto/grpc-sample-svc.proto";
const hwscGrpcSampleSvcProtoPkgDef = protoLoader.loadSync(
    HWSC_GRPC_SAMPLE_SVC_PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const sample_proto = grpc.loadPackageDefinition(hwscGrpcSampleSvcProtoPkgDef).sample; // has to match grpc-sample-svc.proto line 3 package

function sayHello() {
    let client = new sample_proto.SampleService("localhost:50051",
        grpc.credentials.createInsecure());
    let user;
    if (process.argv.length >= 3) {
        user = process.argv[2];
    } else {
        user = "world";
    }
    client.sayHello({name: user}, function(err, response) {
        console.log("Greeting:", response.message);
        grpc.closeClient(client);
    });
}

module.exports = {
    sayHello: sayHello
};
