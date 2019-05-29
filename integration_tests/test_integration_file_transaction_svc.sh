#!/bin/bash

# Signal to specify test
GET_STATUS_SIGNAL=0
UPLOAD_FILE_SIGNAL=1
CREATE_USER_FOLDER_SIGNAL=2

# Test variables for CreateUserFolder
VALID_UUID=0
INVALID_UUID=1

echo "💩 Integration Test for file-transaction-svc 💩"

echo "Test GetStatus"
node test_file_transaction_svc_client.js $GET_STATUS_SIGNAL | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] GetStatus"
else
    echo -e "👻 [FAILURE] GetStatus"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test CreateUserFolder"
node test_file_transaction_svc_client.js $CREATE_USER_FOLDER_SIGNAL $VALID_UUID | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Handled Valid UUID User Folder Creation"
else
    echo -e "👻 [FAILURE] HHandled Valid UUID User Folder Creation"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_transaction_svc_client.js $CREATE_USER_FOLDER_SIGNAL $VALID_UUID | grep 'code: 2,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Handled Duplicate UUID User Folder Creation"
else
    echo -e "👻 [FAILURE] Handled Duplicate UUID User Folder Creation"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_transaction_svc_client.js $CREATE_USER_FOLDER_SIGNAL $INVALID_UUID | grep 'code: 2,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Handled Invalid UUID User Folder Creation"
else
    echo -e "👻 [FAILURE] Handled Invalid UUID User Folder Creation"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
echo "💩 ---------- Success Exit ---------- 💩"
exit 0
