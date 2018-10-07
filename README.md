# hwsc-api-blocks

## Steps to Declare & Implement API Contract: 
##### *Example: [hwsc-file-svc](https://github.com/faraonc/hwsc-file-svc)*
1. Draft the contract in the service's repository README.md
2. Declare the operation
   * ##### ``Downloading File``
3. Declare the HTTP verb ([HTTP verb guideline](https://www.restapitutorial.com/lessons/httpmethods.html))
   * ##### ``GET``
4. Declare an endpoint ([naming guideline](https://restfulapi.net/resource-naming/))
   * ##### ``/api/file-management/file?loc={}``
5. Once the endpoint is implemented, add a folder in the [hwsc-api-blocks](https://github.com/faraonc/hwsc-api-blocks) "int" folder 
   * ##### ``int/hwsc-file-svc``
     <dl>
	    <dt>int</dt>
  		   <dd>internal or for developers only</dd>
       <dt>ext</dt>
  		   <dd>external or production only </dd>
    </dl>

6. Make a node js file in the folder "int/hwsc-file-svc" with a function that uses the service
   * ##### ``file-svc.js has a function download({params...})``
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
