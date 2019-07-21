# hwsc-api-blocks

### Steps to Declaring gRPC API Contract:
#### Protocol Buffers must be generated within `$GOPATH/src/github.com/hwsc-org/hwsc-api-blocks`
##### *Example: [hwsc-grpc-sample-svc](https://github.com/hwsc-org/hwsc-grpc-sample-svc)*
1. Read protocol buffer [guideline](https://developers.google.com/protocol-buffers/docs/proto3)
2. Read gRPC with [guideline](https://grpc.io/blog/coreos)
3. Once the endpoint is implemented, add a folder in the [hwsc-api-blocks](https://github.com/hwsc-org/hwsc-api-blocks) "protobuf" folder
4. Make and define proto file in the folder "protobuf/hwsc-file-svc" with a function that uses the service, [example](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/protobuf/hwsc-grpc-sample-svc/proto/grpc-sample-svc.proto)
5. Ensure [protoc 3.9.0](https://github.com/protocolbuffers/protobuf/releases) is installed
6. Ensure [protoc-gen-grpc-web-1.0.5](https://github.com/grpc/grpc-web#code-generator-plugin) is installed
7. Get the latest `go get -u google.golang.org/grpc` and `go get -u github.com/golang/protobuf/protoc-gen-go` as necessary if you get issue related to `proto.ProtoPackageIsVersion`
8. `npm install` as needed
9. Ensure Python 3 [gRPC tools](https://grpc.io/docs/quickstart/python.html) are installed `$ python3.7 -m pip install grpcio` or `$ pip3.7 install --upgrade grpcio`
10. To inject an additional tag like `bson`, install and include [protoc-go-inject-tag](https://github.com/favadi/protoc-go-inject-tag)
11. Modify bash [script](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/generate_proto.sh) for generating proto stub
12. Run the bash script to generate proto stub
13. Publish the npm package needed by `hwsc-frontend` using this [guide](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/protobuf/README.md)
14. Implement your gRPC service in the language you prefer, [example](https://github.com/hwsc-org/hwsc-grpc-sample-svc)
15. Implement a wrapper for the gRPC call, [example](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/protobuf/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js)
16. Test your function using [index.js](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/index.js)

### ESLinting

##### Set up JetBrains IDE to detect ESLint errors as you type:
```
After npm install

1. Go to IDE's Preferences
2. Type "eslint" in the search bar
3. Click on ESLint
4. Click on Enable box (You should see ESlint package pointing to node_modules/eslint)
5. Click Apply & OK
```

##### Keyboard shortcut to autofix ESlint errors on current file:

```
hit <b>alt + enter</b> on the ESLint warning, and hit <b>enter</b> 
again (or select <i>"Fix current file with ESLint"</i>)
```

##### Command line ESLinting:

###### Lint single file/s
`$ ./node_modules/.bin/eslint YOUR_FILE_NAME.js`

###### Lint directory
`$ ./node_modules/.bin/eslint --ext .js DIRECTORY_NAME/`
