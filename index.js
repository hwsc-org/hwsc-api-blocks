const demo = require("./int/demo/demo.js");
const hwscGrpcSampleSvc = require("./int/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js")
const hwscMetadataFileSvc = require("./int/hwsc-metadata-file-svc/hwsc-metadata-file-svc.js")

function callback(err, response){
    if(err){
        console.log("Error: ", err);
    }else{
        console.log("Response ", response)
    }
}


function main() {
    demo.printMsg();
    // hwscGrpcSampleSvc.sayHello(callback);
    hwscMetadataFileSvc.createMetadata(callback);
}


// TODO cleanup package.json
main();



