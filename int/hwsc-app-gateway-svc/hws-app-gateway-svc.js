const HWSC_APP_GATEWAY_SVC_PROTO_PATH = __dirname + "/proto/hwsc-app-gateway-svc.proto";
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const options = {
  includeDirs: [
    HWSC_APP_GATEWAY_SVC_PROTO_PATH,
  ]

};

// runtime dynamic compialation proto file, creates pb file dynamically
const hwscAppGatewaySvcProtoPkgDef = protoLoader.loadSync("", options);

// pointing to pb file in memory
const hwscAppGatewaySvcPbJs = grpc.loadPackageDefinition(hwscAppGatewaySvcProtoPkgDef).hwscAppGatewaySvc;

function getStatus(callback) {
  if (typeof callback !== "function") {
    console.error("callback is not a function");
    return;
  }

  const client = new hwscAppGatewaySvcPbJs.AppGatewayService("localhost: 50051",
    grpc.credentials.createInsecure());

  client.getStatus({message: "hello pusheen"}, function (err, response) {
    if (!err) {
      grpc.closeClient(client);
    }
    callback(err, response);
  });
}

module.exports = {
  getStatus: getStatus
};


