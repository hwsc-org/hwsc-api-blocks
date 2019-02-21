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

1 - valid createUser
2 - invalid createUser - test null user
3 - invalid createUser - test empty user

4 - valid getUser
5 - invalid getUser - test non existent uuid

6 - valid deleteUser
7 - valid deleteUser - test non existent uuid

8 - valid updateUser
9 - invalid updateUser - test non existent uuid

10 - valid authenticateUser - authenticate firstName:
11 - invalid authenticateUser - test invalid UUID

12 - valid newSecret - generating new secret

13 - valid getSecret - retrieve active key

14 - valid getToken - retrieve token for user with no token in table
15 - valid getToken - retrieve unexpired token for same user (shouldn't insert new token in table)

16 - valid verifyToken - retrieve token paired with secret
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

const generateRandomEmail = () => {
  const randomText = Math.random().toString(36).substr(2, 5);
  return `hwsc.test+user_${randomText}@gmail.com`;
};

const testCases = [
  { // 0
    svcInfo: new SvcInfo('GetStatus', 'valid', state.OK),
  },
  { // 1
    svcInfo: new SvcInfo('CreateUser', 'valid', state.OK),
    user: new User(null, 'IntegrateTest', 'CreateUser-One', generateRandomEmail(), 'testingPassword', 'uwb'),
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
    user: new User(null, 'IntegrateTest', 'GetUser-One', generateRandomEmail(), 'testingPassword', 'uwb'),
  },
  { // 5
    // TODO err code needs to change in hwsc-user-svc to NOT_FOUND
    svcInfo: new SvcInfo('GetUser', 'test non existent uuid', state.INTERNAL),
    user: new User('0000xsnjg0mqjhbf4qx1efd6ya'),
  },
  { // 6
    svcInfo: new SvcInfo('DeleteUser', 'valid, delete existing user', state.OK),
    user: new User(null, 'IntegrateTest', 'DeleteUser', generateRandomEmail(), 'testingPassword', 'uwb'),
  },
  { // 7
    svcInfo: new SvcInfo('DeleteUser', 'test non existent uuid', state.OK),
    user: new User('0000xsnjg0mqjhbf4qx1efd6ya'),
  },
  { // 8
    svcInfo: new SvcInfo('UpdateUser', 'valid', state.OK),
    user: new User(null, 'IntegrateTest', 'UpdateUser', generateRandomEmail(), 'testingPassword', 'uwb'),
  },
  { // 9
    // TODO err code needs to change in hwsc-user-svc to NOT_FOUND
    svcInfo: new SvcInfo('UpdateUser', 'test non existent uuid', state.INTERNAL),
    user: new User('0000xsnjg0mqjhbf4qx1efd6ya', 'Update User Test'),
  },
  {
    // 10
    svcInfo: new SvcInfo('AuthenticateUser', 'valid', state.OK),
    user: new User(null, 'IntegrateTest', 'AuthenticateUser', generateRandomEmail(), 'testingPassword', 'uwb'),
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
  {
    // 14
    svcInfo: new SvcInfo('GetToken', 'get token for user with no previous token', state.OK),
    user: new User(null, 'IntegrateTest', 'GetToken-NewUser', generateRandomEmail(), 'testingPassword', 'uwb'),
  },
  {
    // 15
    svcInfo: new SvcInfo('GetToken', 'get same/unexpired token for same user', state.OK),
    user: new User(null, 'IntegrateTest', 'GetToken-SameUser', generateRandomEmail(), 'testingPassword', 'uwb'),
  },
  {
    // 16
    svcInfo: new SvcInfo('VerifyToken', 'get existing token paired with secret', state.OK),
    user: new User(null, 'IntegrateTest', 'VerifyToken', generateRandomEmail(), 'testingPassword', 'uwb'),
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

async function getTokenForNewUser(userRequest, svcInfo) {
  const newUserData = await index.hwscUserSvc.createUser(userRequest, svcInfo);
  if (newUserData.err != null) {
    return Promise.resolve({
      err: newUserData.err, res: newUserData.res, svcInfo,
    });
  }

  const { uuid, email } = newUserData.res.user;
  const newUserRequest = { user: new User(uuid, null, null, email, userRequest.user.password) };
  const tokenData = await index.hwscUserSvc.getToken(newUserRequest, svcInfo);

  return Promise.resolve({
    err: tokenData.err, res: tokenData.res, svcInfo, createdUser: newUserRequest,
  });
}

function main() {
  // process command line args
  if (process.argv[2] == null) {
    console.log('[FATAL] Missing type of test to run (3rd command line argument)');
    process.exit();
  }

  let tests = process.argv[2].split(',');
  if (tests.length === 1 && tests[0].toLowerCase() === 'all') {
    tests = [...Array(testCases.length).keys()];
  } else {
    tests = tests.map(Number); // convert each element to a Number type
  }

  const displayResponse = process.argv[3] === 't' || process.argv[3] === 'true';
  const promises = [];

  (async () => {
    for (let i = 0, len = tests.length; i < len; i += 1) {
      const test = tests[i];
      if (Number.isNaN(test)) {
        continue;
      }

      const { svcInfo } = testCases[test];
      const userRequest = { user: testCases[test].user };

      switch (test) {
        case 0:
          promises.push(index.hwscUserSvc.getStatus(svcInfo));
          break;
        case 1:
        case 2:
        case 3: {
          promises.push(index.hwscUserSvc.createUser(userRequest, svcInfo));
          break;
        }
        case 4: {
          const validGetUserProcess = async () => {
            let data = await index.hwscUserSvc.createUser(userRequest, svcInfo);
            if (data.err != null) {
              return Promise.resolve(data);
            }
            const newUserRequest = { user: { uuid: data.res.user.uuid } };
            data = await index.hwscUserSvc.getUser(newUserRequest, svcInfo);
            return Promise.resolve(data);
          };
          promises.push(validGetUserProcess());
          break;
        }
        case 5: {
          promises.push(index.hwscUserSvc.getUser(userRequest, svcInfo));
          break;
        }
        case 6: {
          const validDeleteUserProcess = async () => {
            let data = await index.hwscUserSvc.createUser(userRequest, svcInfo);
            if (data.err != null) {
              return Promise.resolve(data);
            }
            const newUserRequest = { user: { uuid: data.res.user.uuid } };
            data = await index.hwscUserSvc.deleteUser(newUserRequest, svcInfo);
            return Promise.resolve(data);
          };
          promises.push(validDeleteUserProcess());
          break;
        }
        case 7:
          promises.push(index.hwscUserSvc.deleteUser(userRequest, svcInfo));
          break;
        case 8: {
          const validUpdateUserProcess = async () => {
            let data = await index.hwscUserSvc.createUser(userRequest, svcInfo);
            if (data.err != null) {
              return Promise.resolve(data);
            }
            const newUserRequest = {
              user: {
                uuid: data.res.user.uuid,
                lastName: 'UPDATED',
                organization: 'UPDATED',
              },
            };
            data = await index.hwscUserSvc.updateUser(newUserRequest, svcInfo);
            return Promise.resolve(data);
          };
          promises.push(validUpdateUserProcess());
          break;
        }
        case 9:
          promises.push(index.hwscUserSvc.updateUser(userRequest, svcInfo));
          break;
        case 10: {
          const validAuthenticationProcess = async () => {
            let data = await index.hwscUserSvc.createUser(userRequest, svcInfo);
            if (data.err != null) {
              return Promise.resolve(data);
            }

            const { uuid, email } = data.res.user;
            const { password } = userRequest.user;
            const newUserRequest = { user: new User(uuid, null, null, email, password) };
            data = await index.hwscUserSvc.authenticateUser(newUserRequest, svcInfo);
            return Promise.resolve(data);
          };
          promises.push(validAuthenticationProcess());
          break;
        }
        case 11:
          promises.push(index.hwscUserSvc.authenticateUser(userRequest, svcInfo));
          break;
        case 12:
          promises.push(index.hwscUserSvc.newSecret(userRequest, svcInfo));
          break;
        case 13:
          promises.push(index.hwscUserSvc.getSecret(userRequest, svcInfo));
          break;
        case 14:
          promises.push(getTokenForNewUser(userRequest, svcInfo));
          break;
        case 15: {
          const validGetTokenProcessForSameUser = async () => {
            const data = await getTokenForNewUser(userRequest, svcInfo);
            if (data.err != null) {
              return Promise.resolve(data);
            }

            return Promise.resolve(await index.hwscUserSvc.getToken(data.createdUser, svcInfo));
          };
          promises.push(validGetTokenProcessForSameUser());
          break;
        }
        case 16: {
          const validVerifyToken = async () => {
            const tokenData = await getTokenForNewUser(userRequest, svcInfo);
            const { token } = tokenData.res.identification;
            const identity = { identification: { token } };

            return Promise.resolve(await index.hwscUserSvc.verifyToken(identity, svcInfo));
          };
          promises.push(validVerifyToken());
          break;
        }
        default:
          console.log('invalid test number');
      }
    } // end of for loop

    // wait for all async's to finish and display each response
    const responses = await Promise.all(promises);
    responses.forEach((response) => {
      processResult(response.err, response.res, response.svcInfo, displayResponse);
    });
  })();
}

main();
