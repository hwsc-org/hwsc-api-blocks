#!/bin/bash

# generate protoc for our service
echo "Generating internal proto..."

echo "Generating hwsc-grpc-sample-svc.pb.go..."
protoc int/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto --go_out=plugins=grpc:.

echo "Generating hwsc-file-metadata-svc.pb.go..."
protoc int/hwsc-file-metadata-svc/proto/hwsc-file-metadata-svc.proto --go_out=plugins=grpc:.
protoc-go-inject-tag -input=./int/hwsc-file-metadata-svc/proto/hwsc-file-metadata-svc.pb.go
echo "Generating mock-hwsc-file-metadata-svc.pb.go..."
mockgen -source=./int/hwsc-file-metadata-svc/proto/hwsc-file-metadata-svc.pb.go -destination=./int/hwsc-file-metadata-svc/mock/mock-hwsc-file-metadata-svc.pb.go


echo "Generating hwsc-file-transaction-svc.pb2.py, hwsc-file-transaction-svc.pb2_grpc.py..."
python3 -m grpc_tools.protoc -I./int/hwsc-file-transaction-svc/proto --python_out=./int/hwsc-file-transaction-svc/proto/ --grpc_python_out=./int/hwsc-file-transaction-svc/proto/ ./int/hwsc-file-transaction-svc/proto/hwsc-file-transaction-svc.proto


echo "Generating hwsc-app-gateway .ts, .js, .pb"
OUTPUT_ROOT="./int/hwsc-app-gateway-svc/proto/"

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  -I ${OUTPUT_ROOT} \
  --js_out=import_style=commonjs,binary:${OUTPUT_ROOT} \
  --go_out=plugins=grpc:${OUTPUT_ROOT} \
  --ts_out=service=true:${OUTPUT_ROOT} \
  ${OUTPUT_ROOT}hwsc-app-gateway-svc.proto


# path example
# protoc --proto_path=int/proto --go_out=plugins=grpc:int/hwsc-grpc-sample-svc/go-proto int/proto/hwsc-grpc-sample-svc.proto
# protoc -I./int/hwsc-file-metadata-svc/proto/golang/protobuf/ptypes/timestamp -I./int/hwsc-file-metadata-svc/proto --js_out=./int/hwsc-file-metadata-svc/proto  hwsc-file-metadata-svc.proto
# pbjs -t json hwsc-file-metadata-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto  > hwsc-file-metadata-svc.pb.json
# pbjs -t json hwsc-file-metadata-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto  > hwsc-file-metadata-svc.pb.json
# pbjs -t static-module -w commonjs -o hwsc-file-metadata-svc.pb.js hwsc-file-metadata-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto
# pbjs -t proto3 hwsc-file-metadata-svc.proto golang/protobuf/ptypes/timestamp/timestamp.proto  > hwsc-file-metadata-svc.pb.js.proto
# protoc -I./int/hwsc-file-metadata-svc/proto/golang/protobuf/ptypes/timestamp -I./int/hwsc-file-metadata-svc/proto --go_out=plugins=grpc:./int/hwsc-file-metadata-svc/proto  hwsc-file-metadata-svc.proto
# protoc int/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto --js_out=.
