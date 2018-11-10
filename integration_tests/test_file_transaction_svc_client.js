const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
  }
}


function main() {
  index.demo.printMsg();
  //index.hwscFileTransactionSvc.getStatus(callback);
}

main();
