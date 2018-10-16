const index = require("./index.js");
const moment = require("moment");

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
        lastName: "Kim",
        firstName: "Lisa",
        callTypeName: "some call type name",
        groundType: "some ground type",
        region: "some region",
        ocean: "some ocean",
        sensorType: "some sensor type",
        sensorName: "some sensor name",
        sampleRate: 1000,
        latitude: 100.123,
        longitude: -100.123,
        imageUrl: ["google.com", "bing.com"],
        audioUrl: ["google.com", "bing.com"],
        videoUrl: ["google.com", "bing.com"],
        fileUrl: ["google.com", "bing.com", "yahoo.com"],
        recordTimestamp: moment().utc().unix(),
        createTimestamp: 0,
        updateTimestamp: 0
    },
    // null
    null,
    // invalid lastName
    {
        lastName: "",
        firstName: "Lisa",
        callTypeName: "some call type name",
        groundType: "some ground type",
        region: "some region",
        ocean: "some ocean",
        sensorType: "some sensor type",
        sensorName: "some sensor name",
        sampleRate: 1000,
        latitude: 100.123,
        longitude: -100.123,
        imageUrl: ["google.com", "bing.com"],
        audioUrl: ["google.com", "bing.com"],
        videoUrl: ["google.com", "bing.com"],
        fileUrl: ["google.com", "bing.com", "yahoo.com"],
        recordTimestamp: moment().utc().unix(),
        createTimestamp: 0,
        updateTimestamp: 0
    }
]


function main() {
    index.hwscMetadataFileSvc.createMetadataFile(dataSet[1], callback)
}

main();



