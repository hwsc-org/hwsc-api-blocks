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

var protobuf_lib_document_pb = require('../../../protobuf/lib/document_pb.js');
goog.object.extend(proto, protobuf_lib_document_pb);
var protobuf_lib_authority_pb = require('../../../protobuf/lib/authority_pb.js');
goog.object.extend(proto, protobuf_lib_authority_pb);
goog.exportSymbol('proto.document.DocumentRequest', null, global);
goog.exportSymbol('proto.document.DocumentResponse', null, global);
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
proto.document.DocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.document.DocumentRequest.repeatedFields_, null);
};
goog.inherits(proto.document.DocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.document.DocumentRequest.displayName = 'proto.document.DocumentRequest';
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
proto.document.DocumentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.document.DocumentResponse.repeatedFields_, proto.document.DocumentResponse.oneofGroups_);
};
goog.inherits(proto.document.DocumentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.document.DocumentResponse.displayName = 'proto.document.DocumentResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.document.DocumentRequest.repeatedFields_ = [3,4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.document.DocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.document.DocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.document.DocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.DocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identification: (f = msg.getIdentification()) && protobuf_lib_authority_pb.Identification.toObject(includeInstance, f),
    data: (f = msg.getData()) && protobuf_lib_document_pb.Document.toObject(includeInstance, f),
    imageUrlsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    audioUrlsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    videoUrlsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    fileUrlsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    filemetadataParameters: (f = msg.getFilemetadataParameters()) && protobuf_lib_document_pb.FileMetadataTransaction.toObject(includeInstance, f),
    queryParameters: (f = msg.getQueryParameters()) && protobuf_lib_document_pb.QueryTransaction.toObject(includeInstance, f)
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
 * @return {!proto.document.DocumentRequest}
 */
proto.document.DocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.document.DocumentRequest;
  return proto.document.DocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.document.DocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.document.DocumentRequest}
 */
proto.document.DocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new protobuf_lib_authority_pb.Identification;
      reader.readMessage(value,protobuf_lib_authority_pb.Identification.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    case 2:
      var value = new protobuf_lib_document_pb.Document;
      reader.readMessage(value,protobuf_lib_document_pb.Document.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addImageUrls(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudioUrls(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addVideoUrls(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileUrls(value);
      break;
    case 7:
      var value = new protobuf_lib_document_pb.FileMetadataTransaction;
      reader.readMessage(value,protobuf_lib_document_pb.FileMetadataTransaction.deserializeBinaryFromReader);
      msg.setFilemetadataParameters(value);
      break;
    case 8:
      var value = new protobuf_lib_document_pb.QueryTransaction;
      reader.readMessage(value,protobuf_lib_document_pb.QueryTransaction.deserializeBinaryFromReader);
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
proto.document.DocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.document.DocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.document.DocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.DocumentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      protobuf_lib_authority_pb.Identification.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      protobuf_lib_document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getImageUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getAudioUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getVideoUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getFileUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getFilemetadataParameters();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      protobuf_lib_document_pb.FileMetadataTransaction.serializeBinaryToWriter
    );
  }
  f = message.getQueryParameters();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      protobuf_lib_document_pb.QueryTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional lib.Identification identification = 1;
 * @return {?proto.lib.Identification}
 */
proto.document.DocumentRequest.prototype.getIdentification = function() {
  return /** @type{?proto.lib.Identification} */ (
    jspb.Message.getWrapperField(this, protobuf_lib_authority_pb.Identification, 1));
};


/** @param {?proto.lib.Identification|undefined} value */
proto.document.DocumentRequest.prototype.setIdentification = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.document.DocumentRequest.prototype.clearIdentification = function() {
  this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.DocumentRequest.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional lib.Document data = 2;
 * @return {?proto.lib.Document}
 */
proto.document.DocumentRequest.prototype.getData = function() {
  return /** @type{?proto.lib.Document} */ (
    jspb.Message.getWrapperField(this, protobuf_lib_document_pb.Document, 2));
};


/** @param {?proto.lib.Document|undefined} value */
proto.document.DocumentRequest.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.document.DocumentRequest.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.DocumentRequest.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string image_urls = 3;
 * @return {!Array<string>}
 */
proto.document.DocumentRequest.prototype.getImageUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.document.DocumentRequest.prototype.setImageUrlsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.document.DocumentRequest.prototype.addImageUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.document.DocumentRequest.prototype.clearImageUrlsList = function() {
  this.setImageUrlsList([]);
};


/**
 * repeated string audio_urls = 4;
 * @return {!Array<string>}
 */
proto.document.DocumentRequest.prototype.getAudioUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.document.DocumentRequest.prototype.setAudioUrlsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.document.DocumentRequest.prototype.addAudioUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.document.DocumentRequest.prototype.clearAudioUrlsList = function() {
  this.setAudioUrlsList([]);
};


/**
 * repeated string video_urls = 5;
 * @return {!Array<string>}
 */
proto.document.DocumentRequest.prototype.getVideoUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.document.DocumentRequest.prototype.setVideoUrlsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.document.DocumentRequest.prototype.addVideoUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.document.DocumentRequest.prototype.clearVideoUrlsList = function() {
  this.setVideoUrlsList([]);
};


/**
 * repeated string file_urls = 6;
 * @return {!Array<string>}
 */
proto.document.DocumentRequest.prototype.getFileUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.document.DocumentRequest.prototype.setFileUrlsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.document.DocumentRequest.prototype.addFileUrls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.document.DocumentRequest.prototype.clearFileUrlsList = function() {
  this.setFileUrlsList([]);
};


/**
 * optional lib.FileMetadataTransaction fileMetadata_parameters = 7;
 * @return {?proto.lib.FileMetadataTransaction}
 */
proto.document.DocumentRequest.prototype.getFilemetadataParameters = function() {
  return /** @type{?proto.lib.FileMetadataTransaction} */ (
    jspb.Message.getWrapperField(this, protobuf_lib_document_pb.FileMetadataTransaction, 7));
};


/** @param {?proto.lib.FileMetadataTransaction|undefined} value */
proto.document.DocumentRequest.prototype.setFilemetadataParameters = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.document.DocumentRequest.prototype.clearFilemetadataParameters = function() {
  this.setFilemetadataParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.DocumentRequest.prototype.hasFilemetadataParameters = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional lib.QueryTransaction query_parameters = 8;
 * @return {?proto.lib.QueryTransaction}
 */
proto.document.DocumentRequest.prototype.getQueryParameters = function() {
  return /** @type{?proto.lib.QueryTransaction} */ (
    jspb.Message.getWrapperField(this, protobuf_lib_document_pb.QueryTransaction, 8));
};


/** @param {?proto.lib.QueryTransaction|undefined} value */
proto.document.DocumentRequest.prototype.setQueryParameters = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.document.DocumentRequest.prototype.clearQueryParameters = function() {
  this.setQueryParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.DocumentRequest.prototype.hasQueryParameters = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.document.DocumentResponse.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.document.DocumentResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.document.DocumentResponse.StatusCase = {
  STATUS_NOT_SET: 0,
  CODE: 1
};

/**
 * @return {proto.document.DocumentResponse.StatusCase}
 */
proto.document.DocumentResponse.prototype.getStatusCase = function() {
  return /** @type {proto.document.DocumentResponse.StatusCase} */(jspb.Message.computeOneofCase(this, proto.document.DocumentResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.document.DocumentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.document.DocumentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.document.DocumentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.DocumentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && protobuf_lib_document_pb.Document.toObject(includeInstance, f),
    documentCollectionList: jspb.Message.toObjectList(msg.getDocumentCollectionList(),
    protobuf_lib_document_pb.Document.toObject, includeInstance),
    queryResults: (f = msg.getQueryResults()) && protobuf_lib_document_pb.QueryTransaction.toObject(includeInstance, f)
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
 * @return {!proto.document.DocumentResponse}
 */
proto.document.DocumentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.document.DocumentResponse;
  return proto.document.DocumentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.document.DocumentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.document.DocumentResponse}
 */
proto.document.DocumentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new protobuf_lib_document_pb.Document;
      reader.readMessage(value,protobuf_lib_document_pb.Document.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new protobuf_lib_document_pb.Document;
      reader.readMessage(value,protobuf_lib_document_pb.Document.deserializeBinaryFromReader);
      msg.addDocumentCollection(value);
      break;
    case 5:
      var value = new protobuf_lib_document_pb.QueryTransaction;
      reader.readMessage(value,protobuf_lib_document_pb.QueryTransaction.deserializeBinaryFromReader);
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
proto.document.DocumentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.document.DocumentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.document.DocumentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.document.DocumentResponse.serializeBinaryToWriter = function(message, writer) {
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
      protobuf_lib_document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getDocumentCollectionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      protobuf_lib_document_pb.Document.serializeBinaryToWriter
    );
  }
  f = message.getQueryResults();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      protobuf_lib_document_pb.QueryTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.document.DocumentResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.document.DocumentResponse.prototype.setCode = function(value) {
  jspb.Message.setOneofField(this, 1, proto.document.DocumentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.document.DocumentResponse.prototype.clearCode = function() {
  jspb.Message.setOneofField(this, 1, proto.document.DocumentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.DocumentResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.document.DocumentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.document.DocumentResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional lib.Document data = 3;
 * @return {?proto.lib.Document}
 */
proto.document.DocumentResponse.prototype.getData = function() {
  return /** @type{?proto.lib.Document} */ (
    jspb.Message.getWrapperField(this, protobuf_lib_document_pb.Document, 3));
};


/** @param {?proto.lib.Document|undefined} value */
proto.document.DocumentResponse.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.document.DocumentResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.DocumentResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated lib.Document document_collection = 4;
 * @return {!Array<!proto.lib.Document>}
 */
proto.document.DocumentResponse.prototype.getDocumentCollectionList = function() {
  return /** @type{!Array<!proto.lib.Document>} */ (
    jspb.Message.getRepeatedWrapperField(this, protobuf_lib_document_pb.Document, 4));
};


/** @param {!Array<!proto.lib.Document>} value */
proto.document.DocumentResponse.prototype.setDocumentCollectionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.lib.Document=} opt_value
 * @param {number=} opt_index
 * @return {!proto.lib.Document}
 */
proto.document.DocumentResponse.prototype.addDocumentCollection = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.lib.Document, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.document.DocumentResponse.prototype.clearDocumentCollectionList = function() {
  this.setDocumentCollectionList([]);
};


/**
 * optional lib.QueryTransaction query_results = 5;
 * @return {?proto.lib.QueryTransaction}
 */
proto.document.DocumentResponse.prototype.getQueryResults = function() {
  return /** @type{?proto.lib.QueryTransaction} */ (
    jspb.Message.getWrapperField(this, protobuf_lib_document_pb.QueryTransaction, 5));
};


/** @param {?proto.lib.QueryTransaction|undefined} value */
proto.document.DocumentResponse.prototype.setQueryResults = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.document.DocumentResponse.prototype.clearQueryResults = function() {
  this.setQueryResults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.document.DocumentResponse.prototype.hasQueryResults = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.document);
