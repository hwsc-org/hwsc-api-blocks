const HWSC_METADATA_FILE_SVC_PROTO_PATH = __dirname + "/proto/hwsc-metadata-file-svc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const moment = require("moment");

const options = {
    includeDirs: [
        HWSC_METADATA_FILE_SVC_PROTO_PATH
    ]
};
const hwscMetadataFileSvcProtoPkgDef = protoLoader.loadSync("", options);
const hwscMetadataFileSvcPbJs = grpc.loadPackageDefinition(hwscMetadataFileSvcProtoPkgDef).hwscMetadataFileSvc;

function createMetadataFile(data) {
    if (data.keys(obj).length !== 18){
        return "Invalid number of metadata file fields", null;
    }
    if(data.hasOwnProperty('field'))
    {
        // Do something
    }

}

function postMetadataFile(metadataFile, callback) {
    const client = new hwscMetadataFileSvcPbJs.MetadataFileService("localhost:50051",
        grpc.credentials.createInsecure());

    const request = {
        data: metadataFile
    };

    client.postMetadataFile(request, function (err, response) {
        if (!err) {
            console.log(request);
            grpc.closeClient(client);
        }

        callback(err, response);
    });
}

module.exports = {
    MetadataFile: MetadataFile,
    postMetadataFile: postMetadataFile
};
