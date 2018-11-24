/* eslint no-underscore-dangle: 0 */

// provides factory to create new users

class UserDocumentMetadata {
  constructor(isPublic, sharedWith) {
    this._myDocumentMetadata = {
      isPublic,
      sharedWith: Object.assign({}, sharedWith),
    };
  }

  get myDocumentMetadata() {
    return this._myDocumentMetadata;
  }
}

class User {
  constructor() {
    this._user = {
      uuid: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      organization: '',
      myDocuments: {}, // keys are duids
      sharedToMe: {}, // keys are friends uuid
    };
  }

  set uuid(value) {
    this._user.uuid = value;
  }

  set firstName(firstName) {
    this._user.firstName = firstName;
  }

  set lastName(lastName) {
    this._user.lastName = lastName;
  }

  set email(email) {
    this._user.email = email;
  }

  set password(password) {
    this._user.password = password;
  }

  set organization(organization) {
    this._user.organization = organization;
  }

  set myDocuments(data) {
    // data has duid and userDocumentMetadata Object
    this._user.myDocuments[data.duid] = Object.assign({}, data.myDocumentMetadata);
  }

  set sharedToMe(data) {
    this._user.sharedToMe[data.uuid] = {};
    data.duidList.forEach((duid) => {
      this._user.sharedToMe[data.uuid][duid] = true;
    });
  }

  get user() {
    return this._user;
  }
}

module.exports = {
  User,
  UserDocumentMetadata,
};


// EXAMPLE USE CASES


// my_documents: {
//   duid: {
//     is_public: true,
//       shared_with: {
//       uuid: true,
//         uuid: true
//     }
//   },
//   duid: {
//     is_public: true,
//       shared_width: {
//       uuid: true,
//         uuid: true,
//     }
//   }
// }


// shared_to_me: {
//   uuid: {
//     duid: true,
//       duid: true,
//       duid: true,
//   },
//   uuid: {
//     duid: true,
//   }
// }
