const index = require("./index.js");

function callback(err, response) {
    if (err) {
        console.log("Error: ", err);
    } else {
        console.log("Response ", response)
    }
}


function main() {
    index.demo.printMsg();
    index.hwscFileSvc.getStatus(callback);
}

main();



