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

const uuids = [
  '1234abcd5454efef8842ll3faq',
  '1234abcd5454efef8842ll3fa', // invalid uuid
];

function main() {
  switch (process.argv[2]) {
    case '0':
      index.hwscFileTransactionSvc
        .getStatus(callback);
      break;
    case '1':
      index.hwscFileTransactionSvc
        .uploadFile(process.argv[3], process.argv[4], process.argv[5], callback);
      break;
    case '2':
      index.hwscFileTransactionSvc
        .createUserFolder(uuids[parseInt(process.argv[3])], callback);
      break;
    default:
      console.error('invalid arg');
  }
}

main();
