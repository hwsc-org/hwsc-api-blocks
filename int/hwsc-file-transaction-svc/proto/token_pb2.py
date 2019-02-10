# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: token.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='token.proto',
  package='hwsc',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x0btoken.proto\x12\x04hwsc\"?\n\x06Header\x12\x1c\n\x03\x61lg\x18\x01 \x01(\x0e\x32\x0f.hwsc.Algorithm\x12\x17\n\x03typ\x18\x02 \x01(\x0e\x32\n.hwsc.Type\"a\n\x07Payload\x12\x0c\n\x04uuid\x18\x01 \x01(\t\x12*\n\x10permission_level\x18\x02 \x01(\x0e\x32\x10.hwsc.Permission\x12\x1c\n\x14\x65xpiration_timestamp\x18\x03 \x01(\x03\"X\n\x05Token\x12\x1c\n\x06header\x18\x01 \x01(\x0b\x32\x0c.hwsc.Header\x12\x1e\n\x07payload\x18\x02 \x01(\x0b\x32\r.hwsc.Payload\x12\x11\n\tsignature\x18\x03 \x01(\t*.\n\nPermission\x12\x0b\n\x07NO_PERM\x10\x00\x12\x08\n\x04USER\x10\x01\x12\t\n\x05\x41\x44MIN\x10\x02*-\n\tAlgorithm\x12\n\n\x06NO_ALG\x10\x00\x12\t\n\x05HS256\x10\x01\x12\t\n\x05HS512\x10\x02*\x1c\n\x04Type\x12\x0b\n\x07NO_TYPE\x10\x00\x12\x07\n\x03JWT\x10\x01\x62\x06proto3')
)

_PERMISSION = _descriptor.EnumDescriptor(
  name='Permission',
  full_name='hwsc.Permission',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='NO_PERM', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='USER', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ADMIN', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=275,
  serialized_end=321,
)
_sym_db.RegisterEnumDescriptor(_PERMISSION)

Permission = enum_type_wrapper.EnumTypeWrapper(_PERMISSION)
_ALGORITHM = _descriptor.EnumDescriptor(
  name='Algorithm',
  full_name='hwsc.Algorithm',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='NO_ALG', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HS256', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HS512', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=323,
  serialized_end=368,
)
_sym_db.RegisterEnumDescriptor(_ALGORITHM)

Algorithm = enum_type_wrapper.EnumTypeWrapper(_ALGORITHM)
_TYPE = _descriptor.EnumDescriptor(
  name='Type',
  full_name='hwsc.Type',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='NO_TYPE', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='JWT', index=1, number=1,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=370,
  serialized_end=398,
)
_sym_db.RegisterEnumDescriptor(_TYPE)

Type = enum_type_wrapper.EnumTypeWrapper(_TYPE)
NO_PERM = 0
USER = 1
ADMIN = 2
NO_ALG = 0
HS256 = 1
HS512 = 2
NO_TYPE = 0
JWT = 1



_HEADER = _descriptor.Descriptor(
  name='Header',
  full_name='hwsc.Header',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='alg', full_name='hwsc.Header.alg', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='typ', full_name='hwsc.Header.typ', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=21,
  serialized_end=84,
)


_PAYLOAD = _descriptor.Descriptor(
  name='Payload',
  full_name='hwsc.Payload',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='uuid', full_name='hwsc.Payload.uuid', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='permission_level', full_name='hwsc.Payload.permission_level', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expiration_timestamp', full_name='hwsc.Payload.expiration_timestamp', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=86,
  serialized_end=183,
)


_TOKEN = _descriptor.Descriptor(
  name='Token',
  full_name='hwsc.Token',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='header', full_name='hwsc.Token.header', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payload', full_name='hwsc.Token.payload', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signature', full_name='hwsc.Token.signature', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=185,
  serialized_end=273,
)

_HEADER.fields_by_name['alg'].enum_type = _ALGORITHM
_HEADER.fields_by_name['typ'].enum_type = _TYPE
_PAYLOAD.fields_by_name['permission_level'].enum_type = _PERMISSION
_TOKEN.fields_by_name['header'].message_type = _HEADER
_TOKEN.fields_by_name['payload'].message_type = _PAYLOAD
DESCRIPTOR.message_types_by_name['Header'] = _HEADER
DESCRIPTOR.message_types_by_name['Payload'] = _PAYLOAD
DESCRIPTOR.message_types_by_name['Token'] = _TOKEN
DESCRIPTOR.enum_types_by_name['Permission'] = _PERMISSION
DESCRIPTOR.enum_types_by_name['Algorithm'] = _ALGORITHM
DESCRIPTOR.enum_types_by_name['Type'] = _TYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Header = _reflection.GeneratedProtocolMessageType('Header', (_message.Message,), dict(
  DESCRIPTOR = _HEADER,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hwsc.Header)
  ))
_sym_db.RegisterMessage(Header)

Payload = _reflection.GeneratedProtocolMessageType('Payload', (_message.Message,), dict(
  DESCRIPTOR = _PAYLOAD,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hwsc.Payload)
  ))
_sym_db.RegisterMessage(Payload)

Token = _reflection.GeneratedProtocolMessageType('Token', (_message.Message,), dict(
  DESCRIPTOR = _TOKEN,
  __module__ = 'token_pb2'
  # @@protoc_insertion_point(class_scope:hwsc.Token)
  ))
_sym_db.RegisterMessage(Token)


# @@protoc_insertion_point(module_scope)
