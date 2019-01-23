const index = require('../index.js');

const dataSet = [
  // createUser - 0
  {
    user: {
      firstName: 'Lisa',
      lastName: 'Kim',
      email: 'lisakeem@outlook.com',
      password: '12345678',
      organization: 'uwb',
    },
  },
  // getUser - 1
  {
    user: {
      uuid: '0000xsnjg0mqjhbf4qx1efd6y5',
    },
  },
  // deleteUser - 2
  {
    user: {
      uuid: '1000xsnjg0mqjhbf4qx1efd6y7',
    },
  },
  // updateUser - 3
  {
    user: {
      uuid: '0000xsnjg0mqjhbf4qx1efd6y3',
      firstName: 'NEW Lisa',
    },
  },
  // updateUser - 4
  {
    user: {
      uuid: '0000xsnjg0mqjhbf4qx1efd6y4',
      email: 'new@new.new',
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
  index.hwscUserSvc.createUser(dataSet[0], callback);
  index.hwscUserSvc.getUser(dataSet[1], callback);
  index.hwscUserSvc.deleteUser(dataSet[2], callback);
  index.hwscUserSvc.updateUser(dataSet[3], callback);
  index.hwscUserSvc.updateUser(dataSet[4], callback);
}

main();
