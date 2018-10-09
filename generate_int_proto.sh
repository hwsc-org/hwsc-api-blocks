#!/bin/bash

# generate protoc for our service
echo "Generating internal proto..."

echo "Generating grpc-sample.pb.go..."
protoc int/hwsc-grpc-sample/proto/grpc-sample.proto --go_out=plugins=grpc:.

# path example
#protoc --proto_path=int/proto --go_out=plugins=grpc:int/hwsc-grpc-sample/go-proto int/proto/grpc-sample.proto

