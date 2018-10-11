const demo = require("./int/demo/demo.js");
const hwscGrpcSampleSvc = require("./int/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js")


function main() {
    demo.printMsg();

    hwscGrpcSampleSvc.sayHello(function(err,response){
        if(err){
            console.log("Error: ", err);
        }else{
            console.log("Response ", response)
        }
    });

}

/* --------- hwsc-metadata-file-svc service definition --------- */
// const grpc = require("grpc");
// const protoLoader = require("@grpc/proto-loader");
// const HWSC_METADATA_FILE_SVC_PROTO_PATH = __dirname + "/int/hwsc-metadata-file-svc/proto/hwsc-metadata-file-svc.pb.js.proto";
// const options = {
//     includeDirs: [
//         HWSC_METADATA_FILE_SVC_PROTO_PATH
//     ]
// };
// const hwscGrpcSampleProtoPackageDefinition = protoLoader.loadSync("", options);
// console.log(hwscGrpcSampleProtoPackageDefinition);
// const sample_proto = grpc.loadPackageDefinition(hwscGrpcSampleProtoPackageDefinition).hwscMetadataFileSvc;
// console.log(sample_proto)
// /* --------- end of hwsc-metadata-file-svc definition --------- */
//
// function main() {
//     let client = new sample_proto.MetadataFileService('localhost:50051',
//         grpc.credentials.createInsecure());
//
//     client.CreateMetadata({FirstName: "Lisa"}, function(err, response) {
//         console.log('Response:', response.message);
//     });
// }

// TODO cleanup package.json
main();



