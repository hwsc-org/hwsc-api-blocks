const HWSC_METADATA_FILE_SVC_PROTO_PATH = __dirname + "/proto/hwsc-metadata-file-svc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const options = {
    includeDirs: [
        HWSC_METADATA_FILE_SVC_PROTO_PATH
    ]
};
const hwscMetadataFileSvcProtoPkgDef = protoLoader.loadSync("", options);
const hwscMetadataFileSvcPbJs = grpc.loadPackageDefinition(hwscMetadataFileSvcProtoPkgDef).hwscMetadataFileSvc;

function createMetadata(callback) {
    const client = new hwscMetadataFileSvcPbJs.MetadataFileService("localhost:50051",
        grpc.credentials.createInsecure());

    const request = {
        firstName: "Lisa",
        lastName: "Kim",
        callTypeName: "some call type name",
        groundType: "some ground type",
        region: "some region",
        ocean: "some ocean",
        sensorType: "some sensor type",
        sensorName: "some sensor name",
        sampleRate: 1000,
        latitude: 100.123,
        longitude: -100.123,
        imageUrl: [],
        audioUrl: [],
        videoUrl: [],
        fileUrl: [],
        recordTimestamp: {
            seconds: Math.round((new Date()).getTime() / 1000),
            nanos: 0
        },
        createTimestamp: {
            seconds: Math.round((new Date()).getTime() / 1000),
            nanos: 0
        },
        updateTimestamp: null
    };

    client.CreateMetadata(request, function (err, response) {
        if (!err) {
            console.log(request);
            grpc.closeClient(client);
        }

        callback(err, response);
    });
}

module.exports = {
    createMetadata: createMetadata
};

