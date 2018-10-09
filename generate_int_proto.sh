#!/bin/bash

# generate protoc for our service
echo "Generating internal go-proto..."

echo "Generating grpc-sample.pb.go..."
protoc --proto_path=int/proto --go_out=plugins=grpc=whizz/ponycopter,binary:int/hwsc-grpc-sample/go-proto int/proto/grpc-sample.proto

