#!/bin/bash

# generate protoc for our service
echo "Generating internal proto..."

echo "Generating hwsc-grpc-sample-svc.pb.go..."
protoc int/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto \
    --go_out=plugins=grpc:.

echo "Generating hwsc-document-svc.pb.go, document.pb.go..."
OUTPUT_ROOT="./int/hwsc-document-svc/proto/"
protoc \
    -I ./lib/ \
    -I ${OUTPUT_ROOT} \
    --go_out=plugins=grpc:${OUTPUT_ROOT} \
    document.proto hwsc-document-svc.proto

protoc-go-inject-tag -input=./int/hwsc-document-svc/proto/hwsc-document-svc.pb.go
protoc-go-inject-tag -input=./int/hwsc-document-svc/proto/document.pb.go
sed -i'.orig' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' int/hwsc-document-svc/proto/*.pb.go


echo "Generating hwsc-file-transaction-svc.pb2.py, hwsc-file-transaction-svc.pb2_grpc.py..."
python3 -m grpc_tools.protoc \
    -I./int/hwsc-file-transaction-svc/proto \
    --python_out=./int/hwsc-file-transaction-svc/proto/ \
    --grpc_python_out=./int/hwsc-file-transaction-svc/proto/ \
    ./int/hwsc-file-transaction-svc/proto/hwsc-file-transaction-svc.proto


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
