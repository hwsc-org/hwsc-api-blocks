#!/bin/bash


LIB_ROOT="./lib/"
USER_ROOT="./int/hwsc-user-svc/proto/"
DOCUMENT_ROOT="./int/hwsc-document-svc/proto/"
FILE_ROOT="./int/hwsc-file-transaction-svc/proto/"
APP_ROOT="./int/hwsc-app-gateway-svc/proto/"

# generate protoc for our service
echo "Generating internal proto..."


# SAMPLE SERVICE
echo "Generating hwsc-grpc-sample-svc.pb.go..."
protoc int/hwsc-grpc-sample-svc/proto/hwsc-grpc-sample-svc.proto \
    --go_out=plugins=grpc:.
echo "Done generating SAMPLE SERVICE"
echo "------------------------------------------------------------"

# USER SERVICE
echo "Generating hwsc-user-svc.pb.go, user.pb.go..."
protoc \
    -I ${LIB_ROOT} \
    -I ${USER_ROOT} \
    --go_out=plugins=grpc:${USER_ROOT} \
    user.proto hwsc-user-svc.proto token.proto

protoc-go-inject-tag -input=${USER_ROOT}hwsc-user-svc.pb.go
protoc-go-inject-tag -input=${USER_ROOT}user.pb.go
sed -i'.orig' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' ${USER_ROOT}*.pb.go
echo "Done generating USER SERVICE"
echo "------------------------------------------------------------"

# DOCUMENT SERVICE
echo "Generating hwsc-document-svc.pb.go, document.pb.go..."
protoc \
    -I ${LIB_ROOT} \
    -I ${DOCUMENT_ROOT} \
    --go_out=plugins=grpc:${DOCUMENT_ROOT} \
    document.proto hwsc-document-svc.proto token.proto

protoc-go-inject-tag -input=${DOCUMENT_ROOT}hwsc-document-svc.pb.go
protoc-go-inject-tag -input=${DOCUMENT_ROOT}document.pb.go
sed -i'.orig' -e 's/`json:"-"`/`json:"-" bson:"-"`/g' int/hwsc-document-svc/proto/*.pb.go
sed -i'.orig' -e 's/json:"is_public,omitempty" bson:"isPublic"/json:"is_public" bson:"isPublic"/g' int/hwsc-document-svc/proto/*.pb.go
echo "Done geenerating DOCUMENT SERVICE"
echo "------------------------------------------------------------"

# FILE TRANSACTION SERVICE
echo "Generating hwsc-file-transaction-svc.pb2.py, hwsc-file-transaction-svc.pb2_grpc.py..."
python3.7 -m grpc_tools.protoc \
    -I ${LIB_ROOT} \
    -I ${FILE_ROOT} \
    --python_out=${FILE_ROOT} \
    --grpc_python_out=${FILE_ROOT} \
    hwsc-file-transaction-svc.proto token.proto
echo "Done generating FILE TRANSACTION SERVICE"
echo "------------------------------------------------------------"

# APP GATEWAY SERVICE
echo "Generating hwsc-app-gateway .ts, .js, .pb"
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  -I ${LIB_ROOT} \
  -I ${USER_ROOT} \
  -I ${DOCUMENT_ROOT} \
  -I ${FILE_ROOT} \
  -I ${APP_ROOT} \
  --js_out=import_style=commonjs,binary:${APP_ROOT} \
  --go_out=plugins=grpc:${APP_ROOT} \
  --ts_out=service=true:${APP_ROOT} \
  hwsc-app-gateway-svc.proto document.proto hwsc-document-svc.proto user.proto hwsc-user-svc.proto \
  hwsc-file-transaction-svc.proto token.proto
echo "Done generating APP GATEWAY SERVICE"
echo "------------------------------------------------------------"
