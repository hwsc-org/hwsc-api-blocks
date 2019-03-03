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
if [ "$(uname)" == "Darwin" ]; then
    echo -e "😃 sed using MacOS"
    sed -i '' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${LIB_ROOT}*.pb.go
    sed -i '' -e 's/json:"is_public,omitempty" bson:"isPublic"/json:"is_public" bson:"isPublic"/g' ${LIB_ROOT}*.pb.go
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo -e "😃 sed using Linux OS"
    find ${LIB_ROOT} -type f -print0 | xargs -0 sed -i 's/`json:"-"`/`json:"-" bson:"-"`/g'
    find ${LIB_ROOT} -type f -print0 | xargs -0 sed -i 's/json:"is_public,omitempty" bson:"isPublic"/json:"is_public" bson:"isPublic"/g'
fi
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
protoc -I . \
    --go_out=plugins=grpc:${GOPATH}/src \
    ${USER_ROOT}hwsc-user-svc.proto
protoc-go-inject-tag -input=${USER_ROOT}hwsc-user-svc.pb.go
if [ "$(uname)" == "Darwin" ]; then
    echo -e "😃 sed using MacOS"
    sed -i '' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${USER_ROOT}*.pb.go
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo -e "😃 sed using Linux OS"
    find ${USER_ROOT} -type f -print0 | xargs -0 sed -i 's/`json:"-"`/`json:"-" bson:"-"`/g'
fi
echo "Done generating USER SERVICE"
echo "------------------------------------------------------------"
echo

# DOCUMENT SERVICE
echo "Generating DOCUMENT SERVICE"
protoc -I . \
    --go_out=plugins=grpc:${GOPATH}/src \
    ${DOCUMENT_ROOT}hwsc-document-svc.proto
protoc-go-inject-tag -input=${DOCUMENT_ROOT}hwsc-document-svc.pb.go
if [ "$(uname)" == "Darwin" ]; then
    echo -e "😃 sed using MacOS"
    sed -i '' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${DOCUMENT_ROOT}*.pb.go
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo -e "😃 sed using Linux OS"
    find ${DOCUMENT_ROOT} -type f -print0 | xargs -0 sed -i 's/`json:"-"`/`json:"-" bson:"-"`/g'
fi
echo "Done generating DOCUMENT SERVICE"
echo "------------------------------------------------------------"
echo

# FILE TRANSACTION SERVICE
echo "Generating FILE TRANSACTION SERVICE"
cp ${LIB_ROOT}authority.proto ${FILE_ROOT}/lib
python3.7 -m grpc_tools.protoc \
    -I ${FILE_ROOT} \
    --python_out=${FILE_ROOT} \
    --grpc_python_out=${FILE_ROOT} \
    lib/authority.proto hwsc-file-transaction-svc.proto
protoc -I . \
    --go_out=plugins=grpc:${GOPATH}/src \
    ${FILE_ROOT}hwsc-file-transaction-svc.proto
echo "Done generating FILE TRANSACTION SERVICE"
echo "------------------------------------------------------------"
echo

# APP GATEWAY SERVICE
echo "Generating APP GATEWAY SERVICE"
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  -I . \
  --js_out=import_style=commonjs,binary:${GOPATH}/src/github.com/hwsc-org/hwsc-api-blocks \
  --go_out=plugins=grpc:${GOPATH}/src \
  --ts_out=service=true:${GOPATH}/src/github.com/hwsc-org/hwsc-api-blocks \
  ${APP_ROOT}hwsc-app-gateway-svc.proto
echo "Done generating APP GATEWAY SERVICE"
echo "------------------------------------------------------------"
echo
echo "DONE"
