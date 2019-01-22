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

var document_pb = require('./document_pb.js');
goog.exportSymbol('proto.hwscDocumentSvc.DocumentRequest', null, global);
goog.exportSymbol('proto.hwscDocumentSvc.DocumentResponse', null, global);

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
proto.hwscDocumentSvc.DocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hwscDocumentSvc.DocumentRequest.repeatedFields_, null);
};
goog.inherits(proto.hwscDocumentSvc.DocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hwscDocumentSvc.DocumentRequest.displayName = 'proto.hwscDocumentSvc.DocumentRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hwscDocumentSvc.DocumentRequest.repeatedFields_ = [2,3,4,5];



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
proto.hwscDocumentSvc.DocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.hwscDocumentSvc.DocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hwscDocumentSvc.DocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscDocumentSvc.DocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && document_pb.Document.toObject(includeInstance, f),
    imageUrlsList: jspb.Message.getRepeatedField(msg, 2),
    audioUrlsList: jspb.Message.getRepeatedField(msg, 3),
    videoUrlsList: jspb.Message.getRepeatedField(msg, 4),
    fileUrlsList: jspb.Message.getRepeatedField(msg, 5),
    filemetadataParameters: (f = msg.getFilemetadataParameters()) && document_pb.FileMetadataTransaction.toObject(includeInstance, f),
    queryParameters: (f = msg.getQueryParameters()) && document_pb.QueryTransaction.toObject(includeInstance, f)
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
 * @return {!proto.hwscDocumentSvc.DocumentRequest}
 */
proto.hwscDocumentSvc.DocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hwscDocumentSvc.DocumentRequest;
  return proto.hwscDocumentSvc.DocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hwscDocumentSvc.DocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hwscDocumentSvc.DocumentRequest}
 */
proto.hwscDocumentSvc.DocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new document_pb.Document;
      reader.readMessage(value,document_pb.Document.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addImageUrls(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudioUrls(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addVideoUrls(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileUrls(value);
      break;
    case 6:
      var value = new document_pb.FileMetadataTransaction;
      reader.readMessage(value,document_pb.FileMetadataTransaction.deserializeBinaryFromReader);
      msg.setFilemetadataParameters(value);
      break;
    case 7:
      var value = new document_pb.QueryTransaction;
      reader.readMessage(value,document_pb.QueryTransaction.deserializeBinaryFromReader);
      msg.setQueryParameters(value);
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
proto.hwscDocumentSvc.DocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hwscDocumentSvc.DocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hwscDocumentSvc.DocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscDocumentSvc.DocumentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getImageUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAudioUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getVideoUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFileUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getFilemetadataParameters();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      document_pb.FileMetadataTransaction.serializeBinaryToWriter
    );
  }
  f = message.getQueryParameters();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      document_pb.QueryTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional hwsc.Document data = 1;
 * @return {?proto.hwsc.Document}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.getData = function() {
  return /** @type{?proto.hwsc.Document} */ (
    jspb.Message.getWrapperField(this, document_pb.Document, 1));
};


/** @param {?proto.hwsc.Document|undefined} value */
proto.hwscDocumentSvc.DocumentRequest.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.hwscDocumentSvc.DocumentRequest.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string image_urls = 2;
 * @return {!Array<string>}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.getImageUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.hwscDocumentSvc.DocumentRequest.prototype.setImageUrlsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.addImageUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.hwscDocumentSvc.DocumentRequest.prototype.clearImageUrlsList = function() {
  this.setImageUrlsList([]);
};


/**
 * repeated string audio_urls = 3;
 * @return {!Array<string>}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.getAudioUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.hwscDocumentSvc.DocumentRequest.prototype.setAudioUrlsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.addAudioUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.hwscDocumentSvc.DocumentRequest.prototype.clearAudioUrlsList = function() {
  this.setAudioUrlsList([]);
};


/**
 * repeated string video_urls = 4;
 * @return {!Array<string>}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.getVideoUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.hwscDocumentSvc.DocumentRequest.prototype.setVideoUrlsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.addVideoUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.hwscDocumentSvc.DocumentRequest.prototype.clearVideoUrlsList = function() {
  this.setVideoUrlsList([]);
};


/**
 * repeated string file_urls = 5;
 * @return {!Array<string>}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.getFileUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.hwscDocumentSvc.DocumentRequest.prototype.setFileUrlsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.addFileUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.hwscDocumentSvc.DocumentRequest.prototype.clearFileUrlsList = function() {
  this.setFileUrlsList([]);
};


/**
 * optional hwsc.FileMetadataTransaction fileMetadata_parameters = 6;
 * @return {?proto.hwsc.FileMetadataTransaction}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.getFilemetadataParameters = function() {
  return /** @type{?proto.hwsc.FileMetadataTransaction} */ (
    jspb.Message.getWrapperField(this, document_pb.FileMetadataTransaction, 6));
};


/** @param {?proto.hwsc.FileMetadataTransaction|undefined} value */
proto.hwscDocumentSvc.DocumentRequest.prototype.setFilemetadataParameters = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.hwscDocumentSvc.DocumentRequest.prototype.clearFilemetadataParameters = function() {
  this.setFilemetadataParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.hasFilemetadataParameters = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional hwsc.QueryTransaction query_parameters = 7;
 * @return {?proto.hwsc.QueryTransaction}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.getQueryParameters = function() {
  return /** @type{?proto.hwsc.QueryTransaction} */ (
    jspb.Message.getWrapperField(this, document_pb.QueryTransaction, 7));
};


/** @param {?proto.hwsc.QueryTransaction|undefined} value */
proto.hwscDocumentSvc.DocumentRequest.prototype.setQueryParameters = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.hwscDocumentSvc.DocumentRequest.prototype.clearQueryParameters = function() {
  this.setQueryParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscDocumentSvc.DocumentRequest.prototype.hasQueryParameters = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.hwscDocumentSvc.DocumentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hwscDocumentSvc.DocumentResponse.repeatedFields_, proto.hwscDocumentSvc.DocumentResponse.oneofGroups_);
};
goog.inherits(proto.hwscDocumentSvc.DocumentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hwscDocumentSvc.DocumentResponse.displayName = 'proto.hwscDocumentSvc.DocumentResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hwscDocumentSvc.DocumentResponse.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.hwscDocumentSvc.DocumentResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.hwscDocumentSvc.DocumentResponse.StatusCase = {
  STATUS_NOT_SET: 0,
  CODE: 1
};

/**
 * @return {proto.hwscDocumentSvc.DocumentResponse.StatusCase}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.getStatusCase = function() {
  return /** @type {proto.hwscDocumentSvc.DocumentResponse.StatusCase} */(jspb.Message.computeOneofCase(this, proto.hwscDocumentSvc.DocumentResponse.oneofGroups_[0]));
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
proto.hwscDocumentSvc.DocumentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.hwscDocumentSvc.DocumentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hwscDocumentSvc.DocumentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscDocumentSvc.DocumentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && document_pb.Document.toObject(includeInstance, f),
    documentCollectionList: jspb.Message.toObjectList(msg.getDocumentCollectionList(),
    document_pb.Document.toObject, includeInstance),
    queryResults: (f = msg.getQueryResults()) && document_pb.QueryTransaction.toObject(includeInstance, f)
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
 * @return {!proto.hwscDocumentSvc.DocumentResponse}
 */
proto.hwscDocumentSvc.DocumentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hwscDocumentSvc.DocumentResponse;
  return proto.hwscDocumentSvc.DocumentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hwscDocumentSvc.DocumentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hwscDocumentSvc.DocumentResponse}
 */
proto.hwscDocumentSvc.DocumentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new document_pb.Document;
      reader.readMessage(value,document_pb.Document.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new document_pb.Document;
      reader.readMessage(value,document_pb.Document.deserializeBinaryFromReader);
      msg.addDocumentCollection(value);
      break;
    case 5:
      var value = new document_pb.QueryTransaction;
      reader.readMessage(value,document_pb.QueryTransaction.deserializeBinaryFromReader);
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
proto.hwscDocumentSvc.DocumentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hwscDocumentSvc.DocumentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hwscDocumentSvc.DocumentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscDocumentSvc.DocumentResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getDocumentCollectionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getQueryResults();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      document_pb.QueryTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.hwscDocumentSvc.DocumentResponse.prototype.setCode = function(value) {
  jspb.Message.setOneofField(this, 1, proto.hwscDocumentSvc.DocumentResponse.oneofGroups_[0], value);
};


proto.hwscDocumentSvc.DocumentResponse.prototype.clearCode = function() {
  jspb.Message.setOneofField(this, 1, proto.hwscDocumentSvc.DocumentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hwscDocumentSvc.DocumentResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional hwsc.Document data = 3;
 * @return {?proto.hwsc.Document}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.getData = function() {
  return /** @type{?proto.hwsc.Document} */ (
    jspb.Message.getWrapperField(this, document_pb.Document, 3));
};


/** @param {?proto.hwsc.Document|undefined} value */
proto.hwscDocumentSvc.DocumentResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.hwscDocumentSvc.DocumentResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated hwsc.Document document_collection = 4;
 * @return {!Array<!proto.hwsc.Document>}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.getDocumentCollectionList = function() {
  return /** @type{!Array<!proto.hwsc.Document>} */ (
    jspb.Message.getRepeatedWrapperField(this, document_pb.Document, 4));
};


/** @param {!Array<!proto.hwsc.Document>} value */
proto.hwscDocumentSvc.DocumentResponse.prototype.setDocumentCollectionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.hwsc.Document=} opt_value
 * @param {number=} opt_index
 * @return {!proto.hwsc.Document}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.addDocumentCollection = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.hwsc.Document, opt_index);
};


proto.hwscDocumentSvc.DocumentResponse.prototype.clearDocumentCollectionList = function() {
  this.setDocumentCollectionList([]);
};


/**
 * optional hwsc.QueryTransaction query_results = 5;
 * @return {?proto.hwsc.QueryTransaction}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.getQueryResults = function() {
  return /** @type{?proto.hwsc.QueryTransaction} */ (
    jspb.Message.getWrapperField(this, document_pb.QueryTransaction, 5));
};


/** @param {?proto.hwsc.QueryTransaction|undefined} value */
proto.hwscDocumentSvc.DocumentResponse.prototype.setQueryResults = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.hwscDocumentSvc.DocumentResponse.prototype.clearQueryResults = function() {
  this.setQueryResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscDocumentSvc.DocumentResponse.prototype.hasQueryResults = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.hwscDocumentSvc);