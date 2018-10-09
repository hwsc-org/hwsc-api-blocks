const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const demo = require('./int/demo/demo.js');
demo.printMsg();

/* --------- hwsc-grpc-sample service definition --------- */
const HWSC_GRPC_SAMPLE_PROTO_PATH = __dirname + '/int/hwsc-grpc-sample/proto/grpc-sample.proto';
//TODO not sure how to handle additional proto
const hwscGrpcSampleProtoPackageDefinition = protoLoader.loadSync(
    HWSC_GRPC_SAMPLE_PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const sample_proto = grpc.loadPackageDefinition(hwscGrpcSampleProtoPackageDefinition).sample; // has to match grpc-sample.proto line 3 package
/* --------- end of hwsc-grpc-sample definition --------- */

function main() {
    let client = new sample_proto.SampleService('localhost:50051',
        grpc.credentials.createInsecure());
    let user;
    if (process.argv.length >= 3) {
        user = process.argv[2];
    } else {
        user = 'world';
    }
    client.sayHello({name: user}, function(err, response) {
        console.log('Greeting:', response.message);
    });
}

main();