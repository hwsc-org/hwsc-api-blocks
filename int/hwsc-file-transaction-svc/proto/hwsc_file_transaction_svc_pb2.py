# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: hwsc-file-transaction-svc.proto

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
  name='hwsc-file-transaction-svc.proto',
  package='hwscFileTransactionSvc',
  syntax='proto3',
  serialized_options=_b('Z\030hwscFileTransactionSvcPb'),
  serialized_pb=_b('\n\x1fhwsc-file-transaction-svc.proto\x12\x16hwscFileTransactionSvc\")\n\x16\x46ileTransactionRequest\x12\x0f\n\x07message\x18\x01 \x01(\t\"G\n\x17\x46ileTransactionResponse\x12,\n\x05state\x18\x01 \x01(\x0e\x32\x1d.hwscFileTransactionSvc.State*>\n\x05State\x12\r\n\tAVAILABLE\x10\x00\x12\x0f\n\x0bUNAVAILABLE\x10\x01\x12\x0b\n\x07SUCCESS\x10\x02\x12\x08\n\x04\x46\x41IL\x10\x03\x32\x88\x01\n\x16\x46ileTransactionService\x12n\n\tGetStatus\x12..hwscFileTransactionSvc.FileTransactionRequest\x1a/.hwscFileTransactionSvc.FileTransactionResponse\"\x00\x42\x1aZ\x18hwscFileTransactionSvcPbb\x06proto3')
)

_STATE = _descriptor.EnumDescriptor(
  name='State',
  full_name='hwscFileTransactionSvc.State',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='AVAILABLE', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='UNAVAILABLE', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SUCCESS', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='FAIL', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=175,
  serialized_end=237,
)
_sym_db.RegisterEnumDescriptor(_STATE)

State = enum_type_wrapper.EnumTypeWrapper(_STATE)
AVAILABLE = 0
UNAVAILABLE = 1
SUCCESS = 2
FAIL = 3



_FILETRANSACTIONREQUEST = _descriptor.Descriptor(
  name='FileTransactionRequest',
  full_name='hwscFileTransactionSvc.FileTransactionRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message', full_name='hwscFileTransactionSvc.FileTransactionRequest.message', index=0,
      number=1, type=9, cpp_type=9, label=1,
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
  serialized_start=59,
  serialized_end=100,
)


_FILETRANSACTIONRESPONSE = _descriptor.Descriptor(
  name='FileTransactionResponse',
  full_name='hwscFileTransactionSvc.FileTransactionResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='state', full_name='hwscFileTransactionSvc.FileTransactionResponse.state', index=0,
      number=1, type=14, cpp_type=8, label=1,
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
  serialized_start=102,
  serialized_end=173,
)

_FILETRANSACTIONRESPONSE.fields_by_name['state'].enum_type = _STATE
DESCRIPTOR.message_types_by_name['FileTransactionRequest'] = _FILETRANSACTIONREQUEST
DESCRIPTOR.message_types_by_name['FileTransactionResponse'] = _FILETRANSACTIONRESPONSE
DESCRIPTOR.enum_types_by_name['State'] = _STATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

FileTransactionRequest = _reflection.GeneratedProtocolMessageType('FileTransactionRequest', (_message.Message,), dict(
  DESCRIPTOR = _FILETRANSACTIONREQUEST,
  __module__ = 'hwsc_file_transaction_svc_pb2'
  # @@protoc_insertion_point(class_scope:hwscFileTransactionSvc.FileTransactionRequest)
  ))
_sym_db.RegisterMessage(FileTransactionRequest)

FileTransactionResponse = _reflection.GeneratedProtocolMessageType('FileTransactionResponse', (_message.Message,), dict(
  DESCRIPTOR = _FILETRANSACTIONRESPONSE,
  __module__ = 'hwsc_file_transaction_svc_pb2'
  # @@protoc_insertion_point(class_scope:hwscFileTransactionSvc.FileTransactionResponse)
  ))
_sym_db.RegisterMessage(FileTransactionResponse)


DESCRIPTOR._options = None

_FILETRANSACTIONSERVICE = _descriptor.ServiceDescriptor(
  name='FileTransactionService',
  full_name='hwscFileTransactionSvc.FileTransactionService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=240,
  serialized_end=376,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetStatus',
    full_name='hwscFileTransactionSvc.FileTransactionService.GetStatus',
    index=0,
    containing_service=None,
    input_type=_FILETRANSACTIONREQUEST,
    output_type=_FILETRANSACTIONRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_FILETRANSACTIONSERVICE)

DESCRIPTOR.services_by_name['FileTransactionService'] = _FILETRANSACTIONSERVICE

# @@protoc_insertion_point(module_scope)
