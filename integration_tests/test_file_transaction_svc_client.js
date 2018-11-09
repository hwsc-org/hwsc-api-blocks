const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
  }
}

const fileName = 'cat.jpg';
const filePath = '/res';

function main() {
  index.hwscFileTransactionSvc.uploadFile(filePath, fileName, callback);
}

main();
