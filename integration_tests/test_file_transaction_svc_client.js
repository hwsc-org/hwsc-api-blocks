const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
  }
}

const fileName = '/cat.jpg';
const filePath = './res';

function main() {
  //index.hwscFileTransactionSvc.getStatus(callback);
  index.hwscFileTransactionSvc.uploadFile(filePath, fileName, callback);
  //index.hwscFileTransactionSvc.uploadFile(callback);
}

main();
