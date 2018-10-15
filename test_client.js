const index = require("./index.js");
const moment = require("moment");

function callback(err, response) {
    if (err) {
        console.log("Error: ", err);
    } else {
        console.log("Response ", response)
    }
}

const data = {
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
        recordTimestamp: moment().utc().unix(),
        createTimestamp: moment().utc().unix(),
        updateTimestamp: 0
    };

function main() {
    index.demo.printMsg();
    index.hwscMetadataFileSvc.createMetadataFile(data, callback)
    index.hwscFileSvc.getStatus(callback);
}

main();



