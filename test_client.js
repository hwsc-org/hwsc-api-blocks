const index = require("./index.js");
const moment = require("moment");

function callback(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log("Response ", response)
    }
}



function main() {
    index.demo.printMsg();
    // index.hwscMetadataFileSvc.createMetadataFile(data, callback)
    // index.hwscFileSvc.getStatus(callback);
}

main();



