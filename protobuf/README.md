# @hwsc/hwsc-api-blocks
An npm package that contains proto client stubs for all services for `hwsc-frontend`

## Installation
1. `$ npm i @hwsc/hwsc-api-blocks-lisa-test`

## Requirement
1. Create an account with [www.npmjs.com](https://www.npmjs.com/signup)
1. Get an admin to add you to `hwsc` npm organization
1. Login to your account and follow prompt through your CLI: `$npm login`
 
## Update npm package
1. Make sure you `npm login` to your account
1. Increment version* number in `package.json` located in `hwsc-api-blocks/protobuf/`
1. At root of `hwsc-api-blocks` run the script `npm_package_protos.sh`

* Version has to be incremented to push an updated package to npm, because the same `package name + version`
cannot be reused.


## Resources
[Creating and publishing an Org scoped package](https://docs.npmjs.com/creating-and-publishing-an-org-scoped-package)
