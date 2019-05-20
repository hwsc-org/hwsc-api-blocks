#!/usr/bin/env bash

# publishes client js/ts proto stubs for hwsc-frontend
# script required to adhere to directory structure

mkdir tmpDir
cp -r protobuf/ tmpDir/protobuf/
cd tmpDir

mv protobuf/.npmignore .
mv protobuf/package.json .
mv protobuf/README.md .

npm publish --access public

cd ..
rm -rf tmpDir

