const grpc = require('grpc');
const demo = require('./int/demo/demo.js');
demo.printMsg();

/* --------- hwsc-grpc-sample --------- */
const PROTO_PATH = __dirname + '/int/hwsc-grpc-sample/go-proto/grpc-sample.go-proto';
const protoLoader = require('@grpc/proto-loader');
//TODO not sure how to handle additional go-proto
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const sample_proto = grpc.loadPackageDefinition(packageDefinition).sample; // has to match grpc-sample.go-proto line 3 package
/* --------- hwsc-grpc-sample --------- */

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