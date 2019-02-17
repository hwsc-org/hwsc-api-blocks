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
const uuid = '1234abcd5454efef8842ll3faq';

function main() {
  index.hwscFileTransactionSvc.getStatus(callback);
  // index.hwscFileTransactionSvc.uploadFile(filePath, fileName, uuid, callback);
  // index.hwscFileTransactionSvc.createUserFolder(uuid, callback);
}

main();
