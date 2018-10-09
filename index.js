const demo = require('./int/demo/demo.js');
demo.printMsg();


const PROTO_PATH = __dirname + '/int/hwsc-grpc-sample/proto/grpc-sample.proto';
console.log(PROTO_PATH)

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const hello_proto = grpc.loadPackageDefinition(packageDefinition).sample; // has to much grpc-sample.proto line 3 package

function main() {
    let client = new hello_proto.Greeter('localhost:50051',
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