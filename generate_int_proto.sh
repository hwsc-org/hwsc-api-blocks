#!/bin/bash

LIB_ROOT="./lib/"
USER_ROOT="./int/hwsc-user-svc/user/"
DOCUMENT_ROOT="./int/hwsc-document-svc/document/"
FILE_ROOT="./int/hwsc-file-transaction-svc/file/"
APP_ROOT="./int/hwsc-app-gateway-svc/app/"

# generate protoc for our service
echo "Generating internal proto..."
echo

# LIB PACKAGE
echo "Generating LIB PACKAGE"
protoc -I ${LIB_ROOT} \
    --go_out=plugins=grpc:${GOPATH}/src \
    authority.proto document.proto user.proto
protoc-go-inject-tag -input=${LIB_ROOT}user.pb.go
protoc-go-inject-tag -input=${LIB_ROOT}document.pb.go
sed -i -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${LIB_ROOT}*.pb.go
echo "Done generating LIB PACKAGE"
echo "------------------------------------------------------------"

# SAMPLE SERVICE
echo "Generating SAMPLE SERVICE"
protoc int/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto \
    --go_out=plugins=grpc:.
echo "Done generating SAMPLE SERVICE"
echo "------------------------------------------------------------"
echo

# USER SERVICE
echo "Generating USER SERVICE"
protoc -I ${USER_ROOT} \
    --go_out=plugins=grpc:${GOPATH}/src \
    hwsc-user-svc.proto
protoc-go-inject-tag -input=${USER_ROOT}*.pb.go
sed -i -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${USER_ROOT}*.pb.go
echo "Done generating USER SERVICE"
echo "------------------------------------------------------------"
echo

# DOCUMENT SERVICE
echo "Generating DOCUMENT SERVICE"
protoc -I ${DOCUMENT_ROOT} \
    --go_out=plugins=grpc:${GOPATH}/src \
    hwsc-document-svc.proto
protoc-go-inject-tag -input=${DOCUMENT_ROOT}*.pb.go
sed -i -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${DOCUMENT_ROOT}*.pb.go
sed -i -e 's/json:"is_public,omitempty" bson:"isPublic"/json:"is_public" bson:"isPublic"/g' ${DOCUMENT_ROOT}*.pb.go
echo "Done generating DOCUMENT SERVICE"
echo "------------------------------------------------------------"
echo

# FILE TRANSACTION SERVICE
echo "Generating FILE TRANSACTION SERVICE"
python3.7 -m grpc_tools.protoc \
    -I ${LIB_ROOT} \
    -I ${FILE_ROOT} \
    --python_out=${FILE_ROOT} \
    --grpc_python_out=${FILE_ROOT} \
    hwsc-file-transaction-svc.proto authority.proto
protoc -I ${FILE_ROOT} \
    --go_out=plugins=grpc:${GOPATH}/src \
    hwsc-file-transaction-svc.proto
echo "Done generating FILE TRANSACTION SERVICE"
echo "------------------------------------------------------------"
echo

# APP GATEWAY SERVICE
echo "Generating APP GATEWAY SERVICE"
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  -I ${APP_ROOT} \
  --js_out=import_style=commonjs,binary:${GOPATH}/src \
  --go_out=plugins=grpc:${GOPATH}/src \
  --ts_out=service=true:${GOPATH}/src \
  hwsc-app-gateway-svc.proto
echo "Done generating APP GATEWAY SERVICE"
echo "------------------------------------------------------------"
echo
echo "DONE"
