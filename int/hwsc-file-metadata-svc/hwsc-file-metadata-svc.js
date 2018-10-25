const HWSC_FILE_METADATA_SVC_PROTO_PATH = __dirname + "/proto/hwsc-file-metadata-svc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");


const options = {
    includeDirs: [
        HWSC_FILE_METADATA_SVC_PROTO_PATH
    ]
};
const hwscFileMetadataSvcProtoPkgDef = protoLoader.loadSync("", options);
const hwscFileMetadataSvcPbJs = grpc.loadPackageDefinition(hwscFileMetadataSvcProtoPkgDef).hwscFileMetadataSvc;

function getStatus(callback) {
    if (typeof callback !== "function") {
        console.error("callback not a function");
        return;
    }

    const client = new hwscFileMetadataSvcPbJs.FileMetadataService("localhost:50051",
        grpc.credentials.createInsecure());

    client.getStatus({}, function (err, response) {
        if (!err) {
            grpc.closeClient(client);
        }

        callback(err, response);
    });
}

function createFileMetadata(fileMetadata, callback) {
    if (typeof callback !== "function") {
        console.error("callback not a function");
        return;
    }

    const client = new hwscFileMetadataSvcPbJs.FileMetadataService("localhost:50051",
        grpc.credentials.createInsecure());

    const request = {
        data: fileMetadata
    };

    client.createFileMetadata(request, function (err, response) {
        if (!err) {
            console.log(request);
            grpc.closeClient(client);
        }

        callback(err, response);
    });
}

function listFileMetadataCollection(fileMetadata, callback) {
    if (typeof callback !== "function") {
        console.error("callback not a function");
        return;
    }

    const client = new hwscFileMetadataSvcPbJs.FileMetadataService("localhost:50051",
        grpc.credentials.createInsecure());

    const request = {
        data: fileMetadata
    };

    client.listFileMetadataCollection(request, function (err, response) {
        if (!err) {
            console.log(request);
            grpc.closeClient(client);
        }

        callback(err, response);
    });
}

module.exports = {
    getStatus: getStatus,
    createFileMetadata: createFileMetadata,
    listFileMetadataCollection: listFileMetadataCollection
};
