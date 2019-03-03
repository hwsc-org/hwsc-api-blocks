# hwsc-api-blocks

### Steps to Declaring gRPC API Contract:
##### *Example: [hwsc-grpc-sample-svc](https://github.com/hwsc-org/hwsc-grpc-sample-svc)*
1. Read protocol buffer [guideline](https://developers.google.com/protocol-buffers/docs/proto3)
2. Read gRPC with [guideline](https://grpc.io/blog/coreos)
3. Once the endpoint is implemented, add a folder in the [hwsc-api-blocks](https://github.com/hwsc-org/hwsc-api-blocks) "int" folder
     <dl>
	    <dt>int</dt>
  		   <dd>internal or for developers only</dd>
       <dt>ext</dt>
  		   <dd>external or production only </dd>
    </dl>
4. Make and define proto file in the folder "int/hwsc-file-svc" with a function that uses the service, [example](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/int/hwsc-grpc-sample-svc/proto/grpc-sample-svc.proto)
5. Ensure [protoc 3.7.0](https://github.com/protocolbuffers/protobuf/releases) is installed
6. Get the latest `go get -u google.golang.org/grpc` and `go get -u github.com/golang/protobuf/protoc-gen-go` as necessary if you get issue related to `proto.ProtoPackageIsVersion`
7. Update `package.json` or get [npm grpc 1.18.0](https://www.npmjs.com/package/grpc) as dev dependency
8. Update `package.json` or get [npm ts-protoc-gen 0.9.0](https://www.npmjs.com/package/ts-protoc-gen) as dev dependency
9. Update `package.json` or get [npm grpc/proto-loader 0.4.0](https://www.npmjs.com/package/@grpc/proto-loader) as dev dependency
10. Update `package.json` or get [npm google-protobuf 3.7.0](https://www.npmjs.com/package/google-protobuf) as dev dependency
11. `npm install` as needed
12. Ensure Python 3 [gRPC tools](https://grpc.io/docs/quickstart/python.html) are installed `$ python3 -m pip install grpcio`
13. To inject an additional tag like `bson`, install and include [protoc-go-inject-tag](https://github.com/favadi/protoc-go-inject-tag)
14. To unit test service in GoLang, install and use [gRPC mocking service](https://github.com/grpc/grpc-go/blob/master/Documentation/gomock-example.md)
15. Modify bash [script](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/generate_int_proto.sh) for generating proto stub
16. Run the bash script to generate proto stub
17. Implement your gRPC service in the language you prefer, [example](https://github.com/hwsc-org/hwsc-grpc-sample-svc)
18. Implement a wrapper for the gRPC call, [example](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/int/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js)
19. Test your function using [index.js](https://github.com/hwsc-org/hwsc-api-blocks/blob/master/index.js)

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
