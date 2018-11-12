const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Response: ', response);
  }
}

function main() {
  console.log('in main');
  index.hwscUserSvc.getStatus(callback);
}

main();
