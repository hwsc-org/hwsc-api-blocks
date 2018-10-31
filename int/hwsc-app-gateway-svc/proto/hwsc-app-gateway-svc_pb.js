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

goog.exportSymbol('proto.hwscAppGatewaySvc.AppGatewayServiceRequest', null, global);
goog.exportSymbol('proto.hwscAppGatewaySvc.AppGatewayServiceResponse', null, global);

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
proto.hwscAppGatewaySvc.AppGatewayServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hwscAppGatewaySvc.AppGatewayServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hwscAppGatewaySvc.AppGatewayServiceRequest.displayName = 'proto.hwscAppGatewaySvc.AppGatewayServiceRequest';
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
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.hwscAppGatewaySvc.AppGatewayServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hwscAppGatewaySvc.AppGatewayServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.hwscAppGatewaySvc.AppGatewayServiceRequest}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hwscAppGatewaySvc.AppGatewayServiceRequest;
  return proto.hwscAppGatewaySvc.AppGatewayServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hwscAppGatewaySvc.AppGatewayServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hwscAppGatewaySvc.AppGatewayServiceRequest}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hwscAppGatewaySvc.AppGatewayServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hwscAppGatewaySvc.AppGatewayServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.hwscAppGatewaySvc.AppGatewayServiceRequest.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.hwscAppGatewaySvc.AppGatewayServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.hwscAppGatewaySvc.AppGatewayServiceResponse.oneofGroups_);
};
goog.inherits(proto.hwscAppGatewaySvc.AppGatewayServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.hwscAppGatewaySvc.AppGatewayServiceResponse.displayName = 'proto.hwscAppGatewaySvc.AppGatewayServiceResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.StatusCase = {
  STATUS_NOT_SET: 0,
  CODE: 1
};

/**
 * @return {proto.hwscAppGatewaySvc.AppGatewayServiceResponse.StatusCase}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.getStatusCase = function() {
  return /** @type {proto.hwscAppGatewaySvc.AppGatewayServiceResponse.StatusCase} */(jspb.Message.computeOneofCase(this, proto.hwscAppGatewaySvc.AppGatewayServiceResponse.oneofGroups_[0]));
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
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.hwscAppGatewaySvc.AppGatewayServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hwscAppGatewaySvc.AppGatewayServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.hwscAppGatewaySvc.AppGatewayServiceResponse}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hwscAppGatewaySvc.AppGatewayServiceResponse;
  return proto.hwscAppGatewaySvc.AppGatewayServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hwscAppGatewaySvc.AppGatewayServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hwscAppGatewaySvc.AppGatewayServiceResponse}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hwscAppGatewaySvc.AppGatewayServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hwscAppGatewaySvc.AppGatewayServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional uint32 code = 1;
 * @return {number}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.setCode = function(value) {
  jspb.Message.setOneofField(this, 1, proto.hwscAppGatewaySvc.AppGatewayServiceResponse.oneofGroups_[0], value);
};


proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.clearCode = function() {
  jspb.Message.setOneofField(this, 1, proto.hwscAppGatewaySvc.AppGatewayServiceResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.hwscAppGatewaySvc.AppGatewayServiceResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.hwscAppGatewaySvc);