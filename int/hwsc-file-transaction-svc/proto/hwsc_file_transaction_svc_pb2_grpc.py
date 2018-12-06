# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import hwsc_file_transaction_svc_pb2 as hwsc__file__transaction__svc__pb2


class FileTransactionServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.getStatus = channel.unary_unary(
        '/hwscFileTransactionSvc.FileTransactionService/getStatus',
        request_serializer=hwsc__file__transaction__svc__pb2.FileTransactionRequest.SerializeToString,
        response_deserializer=hwsc__file__transaction__svc__pb2.FileTransactionResponse.FromString,
        )
    self.uploadFile = channel.stream_unary(
        '/hwscFileTransactionSvc.FileTransactionService/uploadFile',
        request_serializer=hwsc__file__transaction__svc__pb2.Chunk.SerializeToString,
        response_deserializer=hwsc__file__transaction__svc__pb2.FileTransactionResponse.FromString,
        )
    self.downloadZippedFiles = channel.unary_stream(
        '/hwscFileTransactionSvc.FileTransactionService/downloadZippedFiles',
        request_serializer=hwsc__file__transaction__svc__pb2.FileTransactionRequest.SerializeToString,
        response_deserializer=hwsc__file__transaction__svc__pb2.Chunk.FromString,
        )


class FileTransactionServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def getStatus(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def uploadFile(self, request_iterator, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def downloadZippedFiles(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_FileTransactionServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'getStatus': grpc.unary_unary_rpc_method_handler(
          servicer.getStatus,
          request_deserializer=hwsc__file__transaction__svc__pb2.FileTransactionRequest.FromString,
          response_serializer=hwsc__file__transaction__svc__pb2.FileTransactionResponse.SerializeToString,
      ),
      'uploadFile': grpc.stream_unary_rpc_method_handler(
          servicer.uploadFile,
          request_deserializer=hwsc__file__transaction__svc__pb2.Chunk.FromString,
          response_serializer=hwsc__file__transaction__svc__pb2.FileTransactionResponse.SerializeToString,
      ),
      'downloadZippedFiles': grpc.unary_stream_rpc_method_handler(
          servicer.downloadZippedFiles,
          request_deserializer=hwsc__file__transaction__svc__pb2.FileTransactionRequest.FromString,
          response_serializer=hwsc__file__transaction__svc__pb2.Chunk.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'hwscFileTransactionSvc.FileTransactionService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
