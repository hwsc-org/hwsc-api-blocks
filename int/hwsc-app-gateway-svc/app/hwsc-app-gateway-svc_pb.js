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

var int_hwsc$user$svc_user_hwsc$user$svc_pb = require('../../../int/hwsc-user-svc/user/hwsc-user-svc_pb.js');
goog.object.extend(proto, int_hwsc$user$svc_user_hwsc$user$svc_pb);
var int_lib_user_pb = require('../../../int/lib/user_pb.js');
goog.object.extend(proto, int_lib_user_pb);
var int_hwsc$document$svc_document_hwsc$document$svc_pb = require('../../../int/hwsc-document-svc/document/hwsc-document-svc_pb.js');
goog.object.extend(proto, int_hwsc$document$svc_document_hwsc$document$svc_pb);
var int_lib_document_pb = require('../../../int/lib/document_pb.js');
goog.object.extend(proto, int_lib_document_pb);
var int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb = require('../../../int/hwsc-file-transaction-svc/file/hwsc-file-transaction-svc_pb.js');
goog.object.extend(proto, int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb);
goog.exportSymbol('proto.app.AppGatewayServiceRequest', null, global);
goog.exportSymbol('proto.app.AppGatewayServiceResponse', null, global);
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
proto.app.AppGatewayServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.app.AppGatewayServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.app.AppGatewayServiceRequest.displayName = 'proto.app.AppGatewayServiceRequest';
}
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
proto.app.AppGatewayServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.app.AppGatewayServiceResponse.repeatedFields_, proto.app.AppGatewayServiceResponse.oneofGroups_);
};
goog.inherits(proto.app.AppGatewayServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.app.AppGatewayServiceResponse.displayName = 'proto.app.AppGatewayServiceResponse';
}



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
proto.app.AppGatewayServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.app.AppGatewayServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.app.AppGatewayServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.AppGatewayServiceRequest.toObject = function(includeInstance, msg) {
  var obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userRequest: (f = msg.getUserRequest()) && int_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest.toObject(includeInstance, f),
    documentRequest: (f = msg.getDocumentRequest()) && int_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest.toObject(includeInstance, f),
    fileTransactionRequest: (f = msg.getFileTransactionRequest()) && int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest.toObject(includeInstance, f),
    chunk: (f = msg.getChunk()) && int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk.toObject(includeInstance, f)
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
 * @return {!proto.app.AppGatewayServiceRequest}
 */
proto.app.AppGatewayServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.app.AppGatewayServiceRequest;
  return proto.app.AppGatewayServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.app.AppGatewayServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.app.AppGatewayServiceRequest}
 */
proto.app.AppGatewayServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = new int_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest;
      reader.readMessage(value,int_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest.deserializeBinaryFromReader);
      msg.setUserRequest(value);
      break;
    case 3:
      var value = new int_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest;
      reader.readMessage(value,int_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest.deserializeBinaryFromReader);
      msg.setDocumentRequest(value);
      break;
    case 4:
      var value = new int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest;
      reader.readMessage(value,int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest.deserializeBinaryFromReader);
      msg.setFileTransactionRequest(value);
      break;
    case 5:
      var value = new int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk;
      reader.readMessage(value,int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk.deserializeBinaryFromReader);
      msg.setChunk(value);
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
proto.app.AppGatewayServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.app.AppGatewayServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.app.AppGatewayServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.AppGatewayServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      int_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest.serializeBinaryToWriter
    );
  }
  f = message.getDocumentRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      int_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest.serializeBinaryToWriter
    );
  }
  f = message.getFileTransactionRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest.serializeBinaryToWriter
    );
  }
  f = message.getChunk();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk.serializeBinaryToWriter
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.app.AppGatewayServiceRequest.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.app.AppGatewayServiceRequest.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional user.UserRequest user_request = 2;
 * @return {?proto.user.UserRequest}
 */
proto.app.AppGatewayServiceRequest.prototype.getUserRequest = function() {
  return /** @type{?proto.user.UserRequest} */ (
    jspb.Message.getWrapperField(this, int_hwsc$user$svc_user_hwsc$user$svc_pb.UserRequest, 2));
};


/** @param {?proto.user.UserRequest|undefined} value */
proto.app.AppGatewayServiceRequest.prototype.setUserRequest = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.app.AppGatewayServiceRequest.prototype.clearUserRequest = function() {
  this.setUserRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceRequest.prototype.hasUserRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional document.DocumentRequest document_request = 3;
 * @return {?proto.document.DocumentRequest}
 */
proto.app.AppGatewayServiceRequest.prototype.getDocumentRequest = function() {
  return /** @type{?proto.document.DocumentRequest} */ (
    jspb.Message.getWrapperField(this, int_hwsc$document$svc_document_hwsc$document$svc_pb.DocumentRequest, 3));
};


/** @param {?proto.document.DocumentRequest|undefined} value */
proto.app.AppGatewayServiceRequest.prototype.setDocumentRequest = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.app.AppGatewayServiceRequest.prototype.clearDocumentRequest = function() {
  this.setDocumentRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceRequest.prototype.hasDocumentRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional file.FileTransactionRequest file_transaction_request = 4;
 * @return {?proto.file.FileTransactionRequest}
 */
proto.app.AppGatewayServiceRequest.prototype.getFileTransactionRequest = function() {
  return /** @type{?proto.file.FileTransactionRequest} */ (
    jspb.Message.getWrapperField(this, int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.FileTransactionRequest, 4));
};


/** @param {?proto.file.FileTransactionRequest|undefined} value */
proto.app.AppGatewayServiceRequest.prototype.setFileTransactionRequest = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.app.AppGatewayServiceRequest.prototype.clearFileTransactionRequest = function() {
  this.setFileTransactionRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceRequest.prototype.hasFileTransactionRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional file.Chunk chunk = 5;
 * @return {?proto.file.Chunk}
 */
proto.app.AppGatewayServiceRequest.prototype.getChunk = function() {
  return /** @type{?proto.file.Chunk} */ (
    jspb.Message.getWrapperField(this, int_hwsc$file$transaction$svc_file_hwsc$file$transaction$svc_pb.Chunk, 5));
};


/** @param {?proto.file.Chunk|undefined} value */
proto.app.AppGatewayServiceRequest.prototype.setChunk = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.app.AppGatewayServiceRequest.prototype.clearChunk = function() {
  this.setChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceRequest.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.app.AppGatewayServiceResponse.repeatedFields_ = [5,7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.app.AppGatewayServiceResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.app.AppGatewayServiceResponse.StatusCase = {
  STATUS_NOT_SET: 0,
  CODE: 1
};

/**
 * @return {proto.app.AppGatewayServiceResponse.StatusCase}
 */
proto.app.AppGatewayServiceResponse.prototype.getStatusCase = function() {
  return /** @type {proto.app.AppGatewayServiceResponse.StatusCase} */(jspb.Message.computeOneofCase(this, proto.app.AppGatewayServiceResponse.oneofGroups_[0]));
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
proto.app.AppGatewayServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.app.AppGatewayServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.app.AppGatewayServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.AppGatewayServiceResponse.toObject = function(includeInstance, msg) {
  var obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: (f = msg.getUser()) && int_lib_user_pb.User.toObject(includeInstance, f),
    userCollectionList: jspb.Message.toObjectList(msg.getUserCollectionList(),
    int_lib_user_pb.User.toObject, includeInstance),
    document: (f = msg.getDocument()) && int_lib_document_pb.Document.toObject(includeInstance, f),
    documentCollectionList: jspb.Message.toObjectList(msg.getDocumentCollectionList(),
    int_lib_document_pb.Document.toObject, includeInstance),
    queryResults: (f = msg.getQueryResults()) && int_lib_document_pb.QueryTransaction.toObject(includeInstance, f)
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
 * @return {!proto.app.AppGatewayServiceResponse}
 */
proto.app.AppGatewayServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.app.AppGatewayServiceResponse;
  return proto.app.AppGatewayServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.app.AppGatewayServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.app.AppGatewayServiceResponse}
 */
proto.app.AppGatewayServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 4:
      var value = new int_lib_user_pb.User;
      reader.readMessage(value,int_lib_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 5:
      var value = new int_lib_user_pb.User;
      reader.readMessage(value,int_lib_user_pb.User.deserializeBinaryFromReader);
      msg.addUserCollection(value);
      break;
    case 6:
      var value = new int_lib_document_pb.Document;
      reader.readMessage(value,int_lib_document_pb.Document.deserializeBinaryFromReader);
      msg.setDocument(value);
      break;
    case 7:
      var value = new int_lib_document_pb.Document;
      reader.readMessage(value,int_lib_document_pb.Document.deserializeBinaryFromReader);
      msg.addDocumentCollection(value);
      break;
    case 8:
      var value = new int_lib_document_pb.QueryTransaction;
      reader.readMessage(value,int_lib_document_pb.QueryTransaction.deserializeBinaryFromReader);
      msg.setQueryResults(value);
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
proto.app.AppGatewayServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.app.AppGatewayServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.app.AppGatewayServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.app.AppGatewayServiceResponse.serializeBinaryToWriter = function(message, writer) {
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
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      int_lib_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getUserCollectionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      int_lib_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getDocument();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      int_lib_document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getDocumentCollectionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      int_lib_document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getQueryResults();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      int_lib_document_pb.QueryTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.app.AppGatewayServiceResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.app.AppGatewayServiceResponse.prototype.setCode = function(value) {
  jspb.Message.setOneofField(this, 1, proto.app.AppGatewayServiceResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.app.AppGatewayServiceResponse.prototype.clearCode = function() {
  jspb.Message.setOneofField(this, 1, proto.app.AppGatewayServiceResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.app.AppGatewayServiceResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.app.AppGatewayServiceResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.app.AppGatewayServiceResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.app.AppGatewayServiceResponse.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional lib.User user = 4;
 * @return {?proto.lib.User}
 */
proto.app.AppGatewayServiceResponse.prototype.getUser = function() {
  return /** @type{?proto.lib.User} */ (
    jspb.Message.getWrapperField(this, int_lib_user_pb.User, 4));
};


/** @param {?proto.lib.User|undefined} value */
proto.app.AppGatewayServiceResponse.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.app.AppGatewayServiceResponse.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceResponse.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated lib.User user_collection = 5;
 * @return {!Array<!proto.lib.User>}
 */
proto.app.AppGatewayServiceResponse.prototype.getUserCollectionList = function() {
  return /** @type{!Array<!proto.lib.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, int_lib_user_pb.User, 5));
};


/** @param {!Array<!proto.lib.User>} value */
proto.app.AppGatewayServiceResponse.prototype.setUserCollectionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.lib.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lib.User}
 */
proto.app.AppGatewayServiceResponse.prototype.addUserCollection = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.lib.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.app.AppGatewayServiceResponse.prototype.clearUserCollectionList = function() {
  this.setUserCollectionList([]);
};


/**
 * optional lib.Document document = 6;
 * @return {?proto.lib.Document}
 */
proto.app.AppGatewayServiceResponse.prototype.getDocument = function() {
  return /** @type{?proto.lib.Document} */ (
    jspb.Message.getWrapperField(this, int_lib_document_pb.Document, 6));
};


/** @param {?proto.lib.Document|undefined} value */
proto.app.AppGatewayServiceResponse.prototype.setDocument = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.app.AppGatewayServiceResponse.prototype.clearDocument = function() {
  this.setDocument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceResponse.prototype.hasDocument = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated lib.Document document_collection = 7;
 * @return {!Array<!proto.lib.Document>}
 */
proto.app.AppGatewayServiceResponse.prototype.getDocumentCollectionList = function() {
  return /** @type{!Array<!proto.lib.Document>} */ (
    jspb.Message.getRepeatedWrapperField(this, int_lib_document_pb.Document, 7));
};


/** @param {!Array<!proto.lib.Document>} value */
proto.app.AppGatewayServiceResponse.prototype.setDocumentCollectionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.lib.Document=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lib.Document}
 */
proto.app.AppGatewayServiceResponse.prototype.addDocumentCollection = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.lib.Document, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.app.AppGatewayServiceResponse.prototype.clearDocumentCollectionList = function() {
  this.setDocumentCollectionList([]);
};


/**
 * optional lib.QueryTransaction query_results = 8;
 * @return {?proto.lib.QueryTransaction}
 */
proto.app.AppGatewayServiceResponse.prototype.getQueryResults = function() {
  return /** @type{?proto.lib.QueryTransaction} */ (
    jspb.Message.getWrapperField(this, int_lib_document_pb.QueryTransaction, 8));
};


/** @param {?proto.lib.QueryTransaction|undefined} value */
proto.app.AppGatewayServiceResponse.prototype.setQueryResults = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.app.AppGatewayServiceResponse.prototype.clearQueryResults = function() {
  this.setQueryResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.app.AppGatewayServiceResponse.prototype.hasQueryResults = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.app);
