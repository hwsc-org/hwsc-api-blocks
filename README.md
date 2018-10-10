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
6. Modify bash [script](https://github.com/faraonc/hwsc-api-blocks/blob/master/generate_int_proto.sh) for generating proto stub
7. Run the bash script to generate proto stub

7. Import the function using module.exports
   ``` js
   function download(req, res){
    //call hwsc-file-svc
   	err, result = callFileSvcDownload(req)
    //handle appropriately
   }

   module.exports = {
   	download : download
   }; 
   ```

8. hwsc-gateway-svc can now consume the downloading file service of hwsc-file-svc through hwsc-api-blocks
