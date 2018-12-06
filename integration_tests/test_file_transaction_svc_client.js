const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
  }
}
const filePath = './res';
const fileName = 'cat.jpg';

function main() {
  index.hwscFileTransactionSvc.uploadFile(filePath, fileName, callback);
}

main();
