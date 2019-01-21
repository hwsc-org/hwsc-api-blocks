const index = require('../index.js');

const users = [
  // valid user
  {
    user: {
      firstName: 'Lisa',
      lastName: 'Kim',
      email: 'lisakeem@outlook.com',
      password: '12345678',
      organization: 'uwb',
    },
  },
];

function callback(err, response) {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Response: ', response);
  }
}

function main() {
  index.hwscUserSvc.getStatus(callback);
  index.hwscUserSvc.createUser(users[0], callback);
}

main();
