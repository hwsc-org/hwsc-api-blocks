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

module.exports = {
  User,
  SvcInfo,
  state,
};
