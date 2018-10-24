const index = require("./index.js");

// const moment = require("moment");

function callback(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log("Response ", response)
    }
}


const dataSet = [
    // valid
    {
        uuid: "4ff30392-8ec8-45a4-ba94-5e22c4a686de",
        lastName: "Kim",
        firstName: "Lisa",
        callTypeName: "some call type name",
        groundType: "some ground type",
        region: "some region",
        ocean: "Pacific Ocean",
        sensorType: "some sensor type",
        sensorName: "some sensor name",
        sampleRate: 100,
        latitude: 89.123,
        longitude: -100.123,
        imageUrl: ["https://hwssappstorage.blob.core.windows.net/image/hulkgif.png",
            "https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif"],
        audioUrl: ["https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav",
            "https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3"],
        videoUrl: ["https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv",
            "https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4"],
        fileUrl: ["https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv",
            "https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4"],
        recordTimestamp: 1514764800,
        createTimestamp: 0,
        updateTimestamp: 0
    },
    {
        uuid: "6ff30392-8ec8-45a4-ba94-5e22c4a686dc",
        lastName: "Faraon",
        firstName: "Conard",
        callTypeName: "some call type name",
        groundType: "some ground type",
        region: "some region",
        ocean: "Pacific Ocean",
        sensorType: "some sensor type",
        sensorName: "some sensor name",
        sampleRate: 100,
        latitude: 89.123,
        longitude: -100.123,
        imageUrl: ["https://hwssappstorage.blob.core.windows.net/image/hulkgif.png",
            "https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif"],
        audioUrl: ["https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav",
            "https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3"],
        videoUrl: ["https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv",
            "https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4"],
        fileUrl: ["https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv",
            "https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4"],
        recordTimestamp: 1514764800,
        createTimestamp: 0,
        updateTimestamp: 0
    },
    // null
    null,
    {
        uuid: "garbage",
        lastName: "Faraon",
        firstName: "Conard",
        callTypeName: "some call type name",
        groundType: "some ground type",
        region: "some region",
        ocean: "Pacific Ocean",
        sensorType: "some sensor type",
        sensorName: "some sensor name",
        sampleRate: 100,
        latitude: 89.123,
        longitude: -100.123,
        imageUrl: ["https://hwssappstorage.blob.core.windows.net/image/hulkgif.png",
            "https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif"],
        audioUrl: ["https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav",
            "https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3"],
        videoUrl: ["https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv",
            "https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4"],
        fileUrl: ["https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv",
            "https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4"],
        recordTimestamp: 1514764800,
        createTimestamp: 0,
        updateTimestamp: 0
    },
    {
        uuid: "4ff30392-8ec8-45a4-ba94-5e22c4a686de"
    },
    {
        uuid: "6ff30392-8ec8-45a4-ba94-5e22c4a686dc"
    },
    {
        uuid: "garbage-8ec8-45a4-ba94-5e22c4a686dc"
    }
    // no need to test further, unit test covers hwsc-file-metadata-svc
];


function main() {
    // index.hwscFileMetadataSvc.getStatus(callback)
    // index.hwscFileMetadataSvc.createFileMetadata(dataSet[parseInt(process.argv[2])], callback)
    index.hwscFileMetadataSvc.listFileMetadataCollection(dataSet[parseInt(process.argv[2])], callback)
}

main();