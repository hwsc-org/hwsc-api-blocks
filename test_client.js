const index = require("./index.js");
const moment = require("moment");

function callback(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log("Response ", response)
    }
}

// Valid
// const data = {
//         lastName: "Kim",
//         firstName: "Lisa",
//         callTypeName: "some call type name",
//         groundType: "some ground type",
//         region: "some region",
//         ocean: "some ocean",
//         sensorType: "some sensor type",
//         sensorName: "some sensor name",
//         sampleRate: 1000,
//         latitude: 100.123,
//         longitude: -100.123,
//         imageUrl: ["google.com", "bing.com"],
//         audioUrl: ["google.com", "bing.com"],
//         videoUrl: ["google.com", "bing.com"],
//         fileUrl: ["google.com", "bing.com", "yahoo.com"],
//         recordTimestamp: moment().utc().unix(),
//         createTimestamp: 0,
//         updateTimestamp: 0
//     };

// Nil
const data = null;

// Invalid lastName
// const data = {
//     lastName: "",
//     firstName: "Lisa",
//     callTypeName: "some call type name",
//     groundType: "some ground type",
//     region: "some region",
//     ocean: "some ocean",
//     sensorType: "some sensor type",
//     sensorName: "some sensor name",
//     sampleRate: 1000,
//     latitude: 100.123,
//     longitude: -100.123,
//     imageUrl: ["google.com", "bing.com"],
//     audioUrl: ["google.com", "bing.com"],
//     videoUrl: ["google.com", "bing.com"],
//     fileUrl: ["google.com", "bing.com", "yahoo.com"],
//     recordTimestamp: moment().utc().unix(),
//     createTimestamp: 0,
//     updateTimestamp: 0
// };

function main() {
    index.demo.printMsg();
    index.hwscMetadataFileSvc.createMetadataFile(data, callback)
    // index.hwscFileSvc.getStatus(callback);
}

main();



