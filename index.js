
const demo = require("./int/demo/demo.js");
const hwscGrpcSampleSvc = require("./int/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js")


// function main() {
//     demo.printMsg();
//     hwscGrpcSampleSvc.sayHello();
// }


/* --------- hwsc-metadata-file-svc service definition --------- */
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const HWSC_METADATA_FILE_SVC_PROTO_PATH = __dirname + '/int/hwsc-metadata-file-svc/proto/hwsc-metadata-file-svc.proto';
const hwscGrpcSampleProtoPackageDefinition = protoLoader.loadSync(
    HWSC_METADATA_FILE_SVC_PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const sample_proto = grpc.loadPackageDefinition(hwscGrpcSampleProtoPackageDefinition).hwscMetadataFileSvc; // has to match grpc-sample-svc.proto line 3 package
/* --------- end of hwsc-metadata-file-svc definition --------- */

function main() {
    let client = new sample_proto.MetadataFileService('localhost:50051',
        grpc.credentials.createInsecure());

    client.CreateMetadataFile(
        {   LastName: "Ghadimi", 
            FirstName: "Pouria",
            CallTypeName: "some call type",
            GroundType: "some ground type",
            Region: "some region",
            Ocean: "some ocean",
            SensorType: "some sensor type",
            SensorName: "some sensor name",
            SampleRate: 1000,
            Latitude: 100.10,
            Longitude: 200.10, 
            ImageUrl: null,           
            AudioUrl: null,           
            VideoUrl: null,               
            FileUrl: null,    
            RecordTimestamp: null,
            CreateTimestamp: null,
            UpdateTimestamp: null            
        }, function(err, response) {
                console.log('Response:', response.message);
                grpc.closeClient(client);
    });
}

main();