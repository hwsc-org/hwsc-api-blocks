
const demo = require("./int/demo/demo.js");
const hwscGrpcSampleSvc = require("./int/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js")


function main() {
    demo.printMsg();
    hwscGrpcSampleSvc.sayHello();
}

main();

// /* --------- hwsc-metadata-file-svc service definition --------- */
// const HWSC_METADATA_FILE_SVC_PROTO_PATH = __dirname + '/int/hwsc-metadata-file-svc/proto/hwsc-metadata-file-svc.proto';
// const hwscGrpcSampleProtoPackageDefinition = protoLoader.loadSync(
//     HWSC_METADATA_FILE_SVC_PROTO_PATH,
//     {keepCase: true,
//         longs: String,
//         enums: String,
//         defaults: true,
//         oneofs: true
//     });
// const sample_proto = grpc.loadPackageDefinition(hwscGrpcSampleProtoPackageDefinition).hwscMetadataFileSvc; // has to match grpc-sample-svc.proto line 3 package
// /* --------- end of hwsc-metadata-file-svc definition --------- */
//
// function main() {
//     let client = new sample_proto.MetadataFileService('localhost:50051',
//         grpc.credentials.createInsecure());
//
//     client.CreateMetadata({first: "Lisa", last: "Kim", url: "url"}, function(err, response) {
//         console.log('Response:', response.message);
//     });
// }

