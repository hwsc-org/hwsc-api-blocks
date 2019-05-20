#!/bin/bash

PROTOC_VERSION=$(protoc --version | sed 's/[^0-9.]//g')
CURRENT_VERSION="3.7.1"

if [ "$PROTOC_VERSION" != "$CURRENT_VERSION" ]; then
  echo "Please upgrade your protoc version to ${CURRENT_VERSION}"
  exit 1
fi

LIB_ROOT="./protobuf/lib/"
USER_ROOT="./protobuf/hwsc-user-svc/user/"
DOCUMENT_ROOT="./protobuf/hwsc-document-svc/document/"
FILE_ROOT="./protobuf/hwsc-file-transaction-svc/file/"
APP_ROOT="./protobuf/hwsc-app-gateway-svc/app/"

# generate protoc for our service
echo "Generating internal proto..."
echo

# LIB PACKAGE
echo "Generating LIB PACKAGE"
protoc -I ${LIB_ROOT} \
    --go_out=plugins=grpc:${GOPATH}/src \
    --js_out=import_style=commonjs:${LIB_ROOT} \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:${LIB_ROOT} \
    authority.proto document.proto user.proto
protoc-go-inject-tag -input=${LIB_ROOT}user.pb.go
protoc-go-inject-tag -input=${LIB_ROOT}document.pb.go
if [ "$(uname)" == "Darwin" ]; then
    echo -e "INFO: sed using MacOS"
    sed -i '' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${LIB_ROOT}*.pb.go
    # TODO https://github.com/hwsc-org/hwsc-api-blocks/issues/88
    sed -i '' -e 's/json:"is_public,omitempty" bson:"isPublic"/json:"is_public" bson:"isPublic"/g' ${LIB_ROOT}*.pb.go
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo -e "INFO: sed using Linux OS"
    find ${LIB_ROOT} -type f -print0 | xargs -0 sed -i 's/`json:"-"`/`json:"-" bson:"-"`/g'
    # TODO https://github.com/hwsc-org/hwsc-api-blocks/issues/88
    find ${LIB_ROOT} -type f -print0 | xargs -0 sed -i 's/json:"is_public,omitempty" bson:"isPublic"/json:"is_public" bson:"isPublic"/g'
fi
echo "Done generating LIB PACKAGE"
echo "------------------------------------------------------------"
echo

# SAMPLE SERVICE
echo "Generating SAMPLE SERVICE"
protoc protobuf/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto \
    --go_out=plugins=grpc:.
echo "Done generating SAMPLE SERVICE"
echo "------------------------------------------------------------"
echo

# USER SERVICE
echo "Generating USER SERVICE"
protoc -I . \
  --go_out=plugins=grpc:${GOPATH}/src \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:. \
  ${USER_ROOT}hwsc-user-svc.proto
protoc-go-inject-tag -input=${USER_ROOT}hwsc-user-svc.pb.go
if [ "$(uname)" == "Darwin" ]; then
    echo -e "INFO: sed using MacOS"
    sed -i '' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${USER_ROOT}*.pb.go
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo -e "INFO: sed using Linux OS"
    find ${USER_ROOT} -type f -print0 | xargs -0 sed -i 's/`json:"-"`/`json:"-" bson:"-"`/g'
fi
echo "Done generating USER SERVICE"
echo "------------------------------------------------------------"
echo

# DOCUMENT SERVICE
echo "Generating DOCUMENT SERVICE"
protoc -I . \
  --go_out=plugins=grpc:${GOPATH}/src \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:. \
  ${DOCUMENT_ROOT}hwsc-document-svc.proto
protoc-go-inject-tag -input=${DOCUMENT_ROOT}hwsc-document-svc.pb.go
if [ "$(uname)" == "Darwin" ]; then
    echo -e "INFO: sed using MacOS"
    sed -i '' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${DOCUMENT_ROOT}*.pb.go
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo -e "INFO: sed using Linux OS"
    find ${DOCUMENT_ROOT} -type f -print0 | xargs -0 sed -i 's/`json:"-"`/`json:"-" bson:"-"`/g'
fi
echo "Done generating DOCUMENT SERVICE"
echo "------------------------------------------------------------"
echo

# FILE TRANSACTION SERVICE
echo "Generating FILE TRANSACTION SERVICE"
cp ${LIB_ROOT}authority.proto ${FILE_ROOT}/protobuf/lib
python3.7 -m grpc_tools.protoc \
    -I ${FILE_ROOT} \
    --python_out=${FILE_ROOT} \
    --grpc_python_out=${FILE_ROOT} \
    protobuf/lib/authority.proto hwsc-file-transaction-svc.proto
protoc -I . \
    --go_out=plugins=grpc:${GOPATH}/src \
    --js_out=import_style=commonjs:. \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:. \
    ${FILE_ROOT}hwsc-file-transaction-svc.proto
echo "Done generating FILE TRANSACTION SERVICE"
echo "------------------------------------------------------------"
echo

# APP GATEWAY SERVICE
echo "Generating APP GATEWAY SERVICE"
protoc -I . \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  --go_out=plugins=grpc:${GOPATH}/src \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:. \
  ${APP_ROOT}hwsc-app-gateway-svc.proto
echo "Done generating APP GATEWAY SERVICE"
echo "------------------------------------------------------------"
echo
echo "DONE"
