#!/bin/bash

# generate protoc for our service
echo "Generating internal proto..."

echo "Generating hwsc-grpc-sample-svc.pb.go..."
protoc int/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto --go_out=plugins=grpc:.
#protoc -I./int/hwsc-grpc-sample-svc/proto/golang/protobuf/ptypes/timestamp -I./int/hwsc-grpc-sample-svc/proto --go_out=plugins=grpc:./int/hwsc-grpc-sample-svc/proto  hwsc-grpc-sample-svc.proto

#protoc int/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto --js_out=.
echo "Generating hwsc-metadata-file-svc.pb.go..."
protoc -I./int/hwsc-metadata-file-svc/proto/golang/protobuf/ptypes/timestamp -I./int/hwsc-metadata-file-svc/proto --go_out=plugins=grpc:./int/hwsc-metadata-file-svc/proto  hwsc-metadata-file-svc.proto


# path example
#protoc --proto_path=int/proto --go_out=plugins=grpc:int/hwsc-grpc-sample-svc/go-proto int/proto/hwsc-grpc-sample-svc.proto
#protoc -I./int/hwsc-metadata-file-svc/proto/golang/protobuf/ptypes/timestamp -I./int/hwsc-metadata-file-svc/proto --js_out=./int/hwsc-metadata-file-svc/proto  hwsc-metadata-file-svc.proto
#pbjs -t json hwsc-metadata-file-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto  > hwsc-metadata-file-svc.pb.json

#pbjs -t json hwsc-metadata-file-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto  > hwsc-metadata-file-svc.pb.json
#pbjs -t static-module -w commonjs -o hwsc-metadata-file-svc.pb.js hwsc-metadata-file-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto
#pbjs -t proto3 hwsc-metadata-file-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto  > hwsc-metadata-file-svc.pb.js.proto
