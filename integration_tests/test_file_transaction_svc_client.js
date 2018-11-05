const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
  }
}

function fileName(err, gotName) {
  if (err) {
    console.log(err);
  } else {
    console.log('FileName ', gotName);
  }
}

function main() {
  index.hwscFileTransactionSvc.uploadFile(callback, fileName);
}

main();
