#!/bin/bash

# Signal to specify test
GET_STATUS_SIGNAL=0
CREATE_FILE_SIGNAL=1
LIST_FILES_SIGNAL=2
DEL_FILE_SIGNAL=3

# Test variables for CreateFileMetadata
VALID_A=0
VALID_B=1
NULL=2
GARBAGE_UUID=3

# Test variables for ListFileMetadataCollection
VALID_UUID_A=4
VALID_UUID_B=5
INVALID_UUID=6
NON_EXISTENT_UUID=7

# Test variables for DeleteFileMetadataCollection
# INITIALIZE FIRST
DEL_UUID="6ff30392-8ec8-45a4-ba94-5e22c4a686dc"
DEL_FUID="5bcfa7cf667e56a778387a1c"

echo "Integration Test for hwsc-file-metadata-svc"

if [ "$DEL_UUID" = "" ] || [ "$DEL_FUID" = "" ]; then
    echo "[FAILURE] Uninitialized variables: DEL_UUID || DEL_FUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test GetStatus"
node test_file_metadata_svc_client.js $GET_STATUS_SIGNAL | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] GetStatus"
else
    echo "[FAILURE] GetStatus"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test CreateFileMetadata"
node test_file_metadata_svc_client.js $CREATE_FILE_SIGNAL $VALID_A | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid A"
else
    echo "[FAILURE] Inserted Valid A"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_metadata_svc_client.js $CREATE_FILE_SIGNAL $VALID_B | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid B"
else
    echo "[FAILURE] Inserted Valid B"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_metadata_svc_client.js $CREATE_FILE_SIGNAL $NULL | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Null"
else
    echo "[FAILURE] Handled Null"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_metadata_svc_client.js $CREATE_FILE_SIGNAL $GARBAGE_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Garbage UUID"
else
    echo "[FAILURE] Handled Garbage UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test ListFileMetadataCollection"
node test_file_metadata_svc_client.js $LIST_FILES_SIGNAL $VALID_UUID_A | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid UUID A"
else
    echo "[FAILURE] Inserted Valid UUID A"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_metadata_svc_client.js $LIST_FILES_SIGNAL $VALID_UUID_B | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid UUID B"
else
    echo "[FAILURE] Inserted Valid UUID B"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_metadata_svc_client.js $LIST_FILES_SIGNAL $INVALID_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Invalid UUID"
else
    echo "[FAILURE] Handled Invalid UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_metadata_svc_client.js $LIST_FILES_SIGNAL $NON_EXISTENT_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Non-Existent UUID"
else
    echo "[FAILURE] Handled Non-Existent UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test DeleteFileMetadata"
node test_file_metadata_svc_client.js $DEL_FILE_SIGNAL $DEL_UUID $DEL_FUID | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] DeleteFileMetadata"
else
    echo "[FAILURE] DeleteFileMetadata"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_file_metadata_svc_client.js $DEL_FILE_SIGNAL $DEL_UUID $DEL_FUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] DeleteFileMetadata non-existing FUID"
else
    echo "[FAILURE] DeleteFileMetadata non-existing FUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi


echo "---------- Success Exit ----------"
exit 0
