/* eslint no-continue: 0 */

const index = require('../index.js');

/*
--------------------------------------------------------------------------
Command line arg template:
--------------------------------------------------------------------------
$ node <string> <REQUIRED: type of test/s> <OPT: output service response>

process.argv[0] = always node
process.argv[1] = name of the js file that has all the tests
process.argv[2] = [REQUIRED] type of tests to run
  - singular: state a specific test to run
      ie: node <name of file> 2

  - multiple: state multiple tests to run, comma separated
      ie: node <name of file> 0,3,5

  - all: run all tests, use keyword "all"
      ie: node <name of file> all


process.argv[3] = [OPTIONAL] output service response to command line
  - use "t" or "true" for true, display response
      ie: node <name of file> <type of tests> t

  - default false, omit this argument or use "f"
      ie: node <name of file> <type of test> f

--------------------------------------------------------------------------
Numeric Test Options for process.argv[2]
--------------------------------------------------------------------------

0 - valid getStatus

1 - valid createUser - firstName: Integrate, lastName: Test One
2 - invalid createUser - test null user
3 - invalid createUser - test empty user

4 - valid getUser - firstName: Integrate Test, lastName: GetUser
5 - invalid getUser - test non existent uuid

6 - valid deleteUser - firstName: Test Delete, lastName: Delete
7 - valid deleteUser - test non existent uuid

8 - valid updateUser - update firstName to: Update User Test
9 - invalid updateUser - test non existent uuid

10 - valid authenticateUser - authenticate firstName:
11 - invalid authenticateUser - test invalid UUID

12 - valid newSecret - generating new secret

13 - valid getSecret - retrieve active key
*/

class User {
  constructor(uuid, firstName, lastName, email, password, organization) {
    this.uuid = uuid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.organization = organization;
  }
}

class SvcInfo {
  constructor(svcType, testType, code) {
    this.svcType = svcType;
    this.testType = testType;
    this.code = code;
  }
}

const state = {
  OK: 0,
  INVALID_ARGUMENT: 3,
  NOT_FOUND: 5,
  INTERNAL: 13,
};

const dataSet = [
  { // 0
    svcInfo: new SvcInfo('GetStatus', 'valid', state.OK),
  },
  { // 1
    svcInfo: new SvcInfo('CreateUser', 'valid', state.OK),
    user: new User(null, 'Integrate Test', 'CreateUser', 'lisakeem@outlook.com', '12345678', 'uwb'),
  },
  { // 2
    svcInfo: new SvcInfo('CreateUser', 'test null user', state.INVALID_ARGUMENT),
    user: null,
  },
  { // 3
    // TODO err code needs to change in hwsc-user-svc to INVALID_ARGUMENT
    svcInfo: new SvcInfo('CreateUser', 'test empty user', state.INTERNAL),
    user: new User(),
  },
  { // 4
    svcInfo: new SvcInfo('GetUser', 'valid', state.OK),
    user: new User('0000xsnjg0mqjhbf4qx1efd6y5'),
  },
  { // 5
    // TODO err code needs to change in hwsc-user-svc to NOT_FOUND
    svcInfo: new SvcInfo('GetUser', 'test non existent uuid', state.INTERNAL),
    user: new User('0000xsnjg0mqjhbf4qx1efd6ya'),
  },
  { // 6
    svcInfo: new SvcInfo('DeleteUser', 'valid', state.OK),
    user: new User('1000xsnjg0mqjhbf4qx1efd6y7'),
  },
  { // 7
    svcInfo: new SvcInfo('DeleteUser', 'test non existent uuid', state.OK),
    user: new User('0000xsnjg0mqjhbf4qx1efd6ya'),
  },
  { // 8
    svcInfo: new SvcInfo('UpdateUser', 'valid - update firstname', state.OK),
    user: new User('0000xsnjg0mqjhbf4qx1efd6y3', 'Update User Test'),
  },
  { // 9
    // TODO err code needs to change in hwsc-user-svc to NOT_FOUND
    svcInfo: new SvcInfo('UpdateUser', 'test non existent uuid', state.INTERNAL),
    user: new User('0000xsnjg0mqjhbf4qx1efd6ya', 'Update User Test'),
  },
  {
    // 10
    svcInfo: new SvcInfo('AuthenticateUser', 'valid', state.OK),
    user: new User('0000xsnjg0mqjhbf4qx1efd6y3', null, null, 'integrate@update.com', 'testingPassword'),
  },
  {
    // 11
    svcInfo: new SvcInfo('AuthenticateUser', 'test invalid UUID', state.INVALID_ARGUMENT),
    user: new User('0000xsnjg0mq'),
  },
  {
    // 12
    svcInfo: new SvcInfo('NewSecret', 'test generating new secret', state.OK),
    user: new User(),
  },
  {
    // 13
    svcInfo: new SvcInfo('GetSecret', 'test retrieve active secret', state.OK),
    user: new User(),
  },
];

const processResult = (err, response, svcInfo, displayResponse) => {
  if (err === null && response != null && response.code === svcInfo.code) {
    console.log(`[SUCCESS] ${svcInfo.svcType} - ${svcInfo.testType}`);
  } else if (response == null && err != null && err.code === svcInfo.code) {
    console.log(`[SUCCESS] ${svcInfo.svcType} - ${svcInfo.testType}`);
  } else {
    console.log(`[FAILED] ${svcInfo.svcType} - ${svcInfo.testType}`);
  }
  if (displayResponse) {
    console.log('\n[RESPONSE ERROR]', err);
    console.log('[RESPONSE USER]', response);
    console.log('--------------------------------------------------');
  }
};

function main() {
  // process command line args
  if (process.argv[2] == null) {
    console.log('[FATAL] Missing type of test to run (3rd command line argument)');
    process.exit();
  }

  let tests = process.argv[2].split(',');
  if (tests.length === 1 && tests[0].toLowerCase() === 'all') {
    tests = [...Array(dataSet.length).keys()];
  } else {
    tests = tests.map(Number); // convert each element to a Number type
  }

  const displayResponse = process.argv[3] === 't' || process.argv[3] === 'true';

  for (let i = 0, len = tests.length; i < len; i += 1) {
    const test = tests[i];
    if (Number.isNaN(test)) {
      continue;
    }

    switch (test) {
      case 0:
        index.hwscUserSvc.getStatus((err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      case 1:
      case 2:
      case 3:
        index.hwscUserSvc.createUser(dataSet[test], (err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      case 4:
      case 5:
        index.hwscUserSvc.getUser(dataSet[test], (err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      case 6:
      case 7:
        index.hwscUserSvc.deleteUser(dataSet[test], (err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      case 8:
      case 9:
        index.hwscUserSvc.updateUser(dataSet[test], (err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      case 10:
      case 11:
        index.hwscUserSvc.authenticateUser(dataSet[test], (err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      case 12:
        index.hwscUserSvc.newSecret(dataSet[test], (err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      case 13:
        index.hwscUserSvc.getSecret(dataSet[test], (err, response) => {
          processResult(err, response, dataSet[test].svcInfo, displayResponse);
        });
        break;
      default:
        console.log('invalid test number');
    }
  }
}

main();
