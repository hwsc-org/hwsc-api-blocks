#!/bin/bash

# generate protoc for our service
echo "Generating internal proto..."

echo "Generating grpc-sample.pb.go..."
protoc int/hwsc-grpc-sample/proto/grpc-sample.proto --go_out=plugins=grpc:.
