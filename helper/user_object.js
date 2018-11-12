const UserDocumentMetadata = {
  is_public: false,
  shared_with: {
    uuid: false,
  },
};

const UserFriendMetadata = {
  shared_duid_to_me: {
    duid: false,
  },
};

const User = {
  uuid: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  organization: '',
  user_documents: {
    duid: UserDocumentMetadata,
  },
  shared_to_me: {
    uuid: UserFriendMetadata,
  },
};

export default User;
