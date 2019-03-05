const index = require('../index.js');
const objects = require('../objects');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response: ', response);
  }
}

function main() {
  index.hwscAppGatewaySvc.getStatus(callback);
  // TODO
  // const promises = [];
  //
  // (async () => {
  //   for (let i = 0, len = tests.length; i < len; i += 1) {
  //     const test = tests[i];
  //     if (Number.isNaN(test)) {
  //       continue;
  //     }
  //
  //     const userRequest = { user: testCases[test].user };
  //
  //     switch (test) {
  //       case 0:
  //         promises.push(index.hwscAppGatewaySvc.getStatus(callback));
  //         break;
  //       case 1:
  //       default:
  //         console.log('invalid test number');
  //     }
  //   } // end of for loop
  //
  //   // wait for all async's to finish and display each response
  //   const responses = await Promise.all(promises);
  //   responses.forEach((response) => {
  //     processResult(response.err, response.res, response.svcInfo, displayResponse);
  //   });
  // })();
}

main();
