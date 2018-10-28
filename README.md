# hwsc-api-blocks

### Steps to Declaring gRPC API Contract:
##### *Example: [hwsc-grpc-sample-svc](https://github.com/faraonc/hwsc-grpc-sample-svc)*
1. Read protocol buffer [guideline](https://developers.google.com/protocol-buffers/docs/proto3)
2. Read gRPC with [guideline](https://grpc.io/blog/coreos)
3. Once the endpoint is implemented, add a folder in the [hwsc-api-blocks](https://github.com/faraonc/hwsc-api-blocks) "int" folder
     <dl>
	    <dt>int</dt>
  		   <dd>internal or for developers only</dd>
       <dt>ext</dt>
  		   <dd>external or production only </dd>
    </dl>
4. Make and define proto file in the folder "int/hwsc-file-svc" with a function that uses the service, [example](https://github.com/faraonc/hwsc-api-blocks/blob/master/int/hwsc-grpc-sample-svc/proto/grpc-sample-svc.proto)
5. Ensure [protocol buffers 3.6.1](https://github.com/protocolbuffers/protobuf/releases) is installed
6. Ensure Python 3 [gRPC tools](https://grpc.io/docs/quickstart/python.html) are installed ``$ python3 -m pip install grpcio``
7. To inject an additional tag like ``bson``, install and include [protoc-go-inject-tag](https://github.com/favadi/protoc-go-inject-tag)
8. To unit test service in GoLang, install and use [gRPC mocking service](https://github.com/grpc/grpc-go/blob/master/Documentation/gomock-example.md)
9. Modify bash [script](https://github.com/faraonc/hwsc-api-blocks/blob/master/generate_int_proto.sh) for generating proto stub
10. Run the bash script to generate proto stub
11. Implement your gRPC service in the language you prefer, [example](https://github.com/faraonc/hwsc-grpc-sample-svc)
12. Implement a wrapper for the gRPC call, [example](https://github.com/faraonc/hwsc-api-blocks/blob/master/int/hwsc-grpc-sample-svc/hwsc-grpc-sample-svc.js)
13. Test your function using [index.js](https://github.com/faraonc/hwsc-api-blocks/blob/master/index.js)

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
