const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
  }
}

const dataSet = [
  {
    fileName: 'cat.jpg',
    filePath: '/res',
    image: 'cat',
  }
]

function main() {
  index.hwscFileTransactionSvc.uploadFile(filePath, fileName, callback);
}

main();
