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
//const uuid = '1234abcd5454efef8842ll3faq';
//const uuid = '21111abcd22222abcd33333abc';
const uuid = '31111abcd22222abcd33333abc';

function main() {
  index.hwscFileTransactionSvc.uploadFile(filePath, fileName, uuid, callback);
  index.hwscFileTransactionSvc.createUserFolder(uuid, callback);
  index.hwscFileTransactionSvc.getStatus(callback);
}

main();
