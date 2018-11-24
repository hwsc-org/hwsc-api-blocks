// provides factory to create new users

// sharedWith?: friend's uuid = boolean
class UserDocumentMetadata {
  constructor(isPublic, sharedWith) {
    this.userDocObject = {
      isPublic,
      sharedWidth: Object.assign({}, sharedWith),
    };
  }

  get getUserDocObject() {
    return this.userDocObject;
  }
}

class User {
  constructor() {
    this.user = {
      uuid: [],
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      organization: '',
      userDocuments: {}, // keys are duids
      sharedToMe: {}, // keys are friends uuid
    };
  }

  set setUuid(value) {
    this.user.uuid = value;
  }

  set setFirstName(firstName) {
    this.user.firstName = firstName;
  }

  set setLastName(lastName) {
    this.user.lastName = lastName;
  }

  set setEmail(email) {
    this.user.email = email;
  }

  set setPassword(password) {
    this.user.password = password;
  }

  set setOrganization(organization) {
    this.user.organization = organization;
  }

  set setUserDocuments(data) {
    // data has duid and userDocumentMetadata Object
    this.user.userDocuments[data.duid] = Object.assign({}, data.docMetadata);
  }

  set setSharedToMe(data) {
    this.user.sharedToMe[data.uuid] = {};
    data.duidList.forEach((duid) => {
      this.user.sharedToMe[data.uuid][duid] = false;
    });
  }

  get getUuid() {
    return this.user.uuid;
  }

  get getFirstName() {
    return this.user.firstName;
  }

  get getLastName() {
    return this.user.lastName;
  }

  get getEmail() {
    return this.user.email;
  }

  get getPassword() {
    return this.user.password;
  }

  get getOrganization() {
    return this.user.organization;
  }

  get getUserDocuments() {
    return this.user.userDocuments;
  }

  get getSharedToMe() {
    return this.user.sharedToMe;
  }

  get getUser() {
    return this.user;
  }
}

module.exports = {
  User,
  UserDocumentMetadata,
};
