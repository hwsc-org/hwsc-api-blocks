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
//const fileName = 'dummy.txt';
//const fileName = 'dummy_img.jpg';
//const fileName = 'cat.mp3';
//const fileName = 'videoplayback.mp4';

function main() {
  index.hwscFileTransactionSvc.uploadFile(filePath, fileName, callback);
}

main();
