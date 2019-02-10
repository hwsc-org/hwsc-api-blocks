/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var user_pb = require('./user_pb.js');
var token_pb = require('./token_pb.js');
goog.exportSymbol('proto.hwscUserSvc.UserRequest', null, global);
goog.exportSymbol('proto.hwscUserSvc.UserResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hwscUserSvc.UserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hwscUserSvc.UserRequest.repeatedFields_, null);
};
goog.inherits(proto.hwscUserSvc.UserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hwscUserSvc.UserRequest.displayName = 'proto.hwscUserSvc.UserRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hwscUserSvc.UserRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hwscUserSvc.UserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.hwscUserSvc.UserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hwscUserSvc.UserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscUserSvc.UserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = msg.getToken()) && token_pb.Token.toObject(includeInstance, f),
    user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f),
    duid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uuidsToShareDuidList: jspb.Message.getRepeatedField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hwscUserSvc.UserRequest}
 */
proto.hwscUserSvc.UserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hwscUserSvc.UserRequest;
  return proto.hwscUserSvc.UserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hwscUserSvc.UserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hwscUserSvc.UserRequest}
 */
proto.hwscUserSvc.UserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new token_pb.Token;
      reader.readMessage(value,token_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 2:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addUuidsToShareDuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hwscUserSvc.UserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hwscUserSvc.UserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hwscUserSvc.UserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscUserSvc.UserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      token_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getDuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUuidsToShareDuidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional hwsc.Token token = 1;
 * @return {?proto.hwsc.Token}
 */
proto.hwscUserSvc.UserRequest.prototype.getToken = function() {
  return /** @type{?proto.hwsc.Token} */ (
    jspb.Message.getWrapperField(this, token_pb.Token, 1));
};


/** @param {?proto.hwsc.Token|undefined} value */
proto.hwscUserSvc.UserRequest.prototype.setToken = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hwscUserSvc.UserRequest.prototype.clearToken = function() {
  this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscUserSvc.UserRequest.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional hwsc.User user = 2;
 * @return {?proto.hwsc.User}
 */
proto.hwscUserSvc.UserRequest.prototype.getUser = function() {
  return /** @type{?proto.hwsc.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 2));
};


/** @param {?proto.hwsc.User|undefined} value */
proto.hwscUserSvc.UserRequest.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.hwscUserSvc.UserRequest.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscUserSvc.UserRequest.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string duid = 3;
 * @return {string}
 */
proto.hwscUserSvc.UserRequest.prototype.getDuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.hwscUserSvc.UserRequest.prototype.setDuid = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string uuids_to_share_duid = 4;
 * @return {!Array<string>}
 */
proto.hwscUserSvc.UserRequest.prototype.getUuidsToShareDuidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.hwscUserSvc.UserRequest.prototype.setUuidsToShareDuidList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.hwscUserSvc.UserRequest.prototype.addUuidsToShareDuid = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.hwscUserSvc.UserRequest.prototype.clearUuidsToShareDuidList = function() {
  this.setUuidsToShareDuidList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hwscUserSvc.UserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hwscUserSvc.UserResponse.repeatedFields_, proto.hwscUserSvc.UserResponse.oneofGroups_);
};
goog.inherits(proto.hwscUserSvc.UserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hwscUserSvc.UserResponse.displayName = 'proto.hwscUserSvc.UserResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hwscUserSvc.UserResponse.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.hwscUserSvc.UserResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.hwscUserSvc.UserResponse.StatusCase = {
  STATUS_NOT_SET: 0,
  CODE: 1
};

/**
 * @return {proto.hwscUserSvc.UserResponse.StatusCase}
 */
proto.hwscUserSvc.UserResponse.prototype.getStatusCase = function() {
  return /** @type {proto.hwscUserSvc.UserResponse.StatusCase} */(jspb.Message.computeOneofCase(this, proto.hwscUserSvc.UserResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hwscUserSvc.UserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.hwscUserSvc.UserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hwscUserSvc.UserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscUserSvc.UserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: (f = msg.getToken()) && token_pb.Token.toObject(includeInstance, f),
    user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f),
    userCollectionList: jspb.Message.toObjectList(msg.getUserCollectionList(),
    user_pb.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hwscUserSvc.UserResponse}
 */
proto.hwscUserSvc.UserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hwscUserSvc.UserResponse;
  return proto.hwscUserSvc.UserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hwscUserSvc.UserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hwscUserSvc.UserResponse}
 */
proto.hwscUserSvc.UserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new token_pb.Token;
      reader.readMessage(value,token_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 4:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 5:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.addUserCollection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hwscUserSvc.UserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hwscUserSvc.UserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hwscUserSvc.UserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscUserSvc.UserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      token_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUserCollectionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.hwscUserSvc.UserResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.hwscUserSvc.UserResponse.prototype.setCode = function(value) {
  jspb.Message.setOneofField(this, 1, proto.hwscUserSvc.UserResponse.oneofGroups_[0], value);
};


proto.hwscUserSvc.UserResponse.prototype.clearCode = function() {
  jspb.Message.setOneofField(this, 1, proto.hwscUserSvc.UserResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscUserSvc.UserResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.hwscUserSvc.UserResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hwscUserSvc.UserResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hwsc.Token token = 3;
 * @return {?proto.hwsc.Token}
 */
proto.hwscUserSvc.UserResponse.prototype.getToken = function() {
  return /** @type{?proto.hwsc.Token} */ (
    jspb.Message.getWrapperField(this, token_pb.Token, 3));
};


/** @param {?proto.hwsc.Token|undefined} value */
proto.hwscUserSvc.UserResponse.prototype.setToken = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hwscUserSvc.UserResponse.prototype.clearToken = function() {
  this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscUserSvc.UserResponse.prototype.hasToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional hwsc.User user = 4;
 * @return {?proto.hwsc.User}
 */
proto.hwscUserSvc.UserResponse.prototype.getUser = function() {
  return /** @type{?proto.hwsc.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 4));
};


/** @param {?proto.hwsc.User|undefined} value */
proto.hwscUserSvc.UserResponse.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.hwscUserSvc.UserResponse.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscUserSvc.UserResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated hwsc.User user_collection = 5;
 * @return {!Array<!proto.hwsc.User>}
 */
proto.hwscUserSvc.UserResponse.prototype.getUserCollectionList = function() {
  return /** @type{!Array<!proto.hwsc.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, user_pb.User, 5));
};


/** @param {!Array<!proto.hwsc.User>} value */
proto.hwscUserSvc.UserResponse.prototype.setUserCollectionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.hwsc.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hwsc.User}
 */
proto.hwscUserSvc.UserResponse.prototype.addUserCollection = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.hwsc.User, opt_index);
};


proto.hwscUserSvc.UserResponse.prototype.clearUserCollectionList = function() {
  this.setUserCollectionList([]);
};


goog.object.extend(exports, proto.hwscUserSvc);
