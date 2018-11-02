#!/bin/bash

# Signal to specify test
GET_STATUS_SIGNAL=0
CREATE_DOC_SIGNAL=1
LIST_DOCS_SIGNAL=2
UPDATE_DOC_SIGNAL=3
DELETE_DOC_SIGNAL=4

# Test variables for CreateDocument
VALID_A=0
VALID_B=1
NULL=2
GARBAGE_UUID=3

# Test variables for ListUserDocumentCollection
VALID_UUID_A=4
VALID_UUID_B=5
INVALID_UUID=6
NON_EXISTENT_UUID=7

# Test variables for UpdateDocument
VALID_UPDATE=8
INVALID_UPDATE=9

# Test variables for DeleteDocument
DEL_UUID="0000XSNJG0MQJHBF4QX1EFD6Y3"
DEL_DUID=""

echo "Integration Test for hwsc-document-svc"

echo "Test GetStatus"
node test_document_svc_client.js $GET_STATUS_SIGNAL | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] GetStatus"
else
    echo "[FAILURE] GetStatus"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test CreateDocument"
node test_document_svc_client.js $CREATE_DOC_SIGNAL $VALID_A | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid A"
else
    echo "[FAILURE] Inserted Valid A"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $CREATE_DOC_SIGNAL $VALID_B | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid B"
else
    echo "[FAILURE] Inserted Valid B"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $CREATE_DOC_SIGNAL $NULL | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Null"
else
    echo "[FAILURE] Handled Null"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $CREATE_DOC_SIGNAL $GARBAGE_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Garbage UUID"
else
    echo "[FAILURE] Handled Garbage UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test ListUserDocumentCollection"
node test_document_svc_client.js $LIST_DOCS_SIGNAL $VALID_UUID_A | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid UUID A"
else
    echo "[FAILURE] Inserted Valid UUID A"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $LIST_DOCS_SIGNAL $VALID_UUID_B | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Inserted Valid UUID B"
else
    echo "[FAILURE] Inserted Valid UUID B"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $LIST_DOCS_SIGNAL $INVALID_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Invalid UUID"
else
    echo "[FAILURE] Handled Invalid UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $LIST_DOCS_SIGNAL $NON_EXISTENT_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Non-Existent UUID"
else
    echo "[FAILURE] Handled Non-Existent UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test UpdateDocument"
node test_document_svc_client.js $UPDATE_DOC_SIGNAL $VALID_UPDATE | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Valid Update Document"
else
    echo "[FAILURE] Valid Update Document"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $UPDATE_DOC_SIGNAL $INVALID_UPDATE | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Invalid Update Document"
else
    echo "[FAILURE] Invalid Update Document"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Extracting DUID for DeleteDocument"
DEL_DUID=$(node test_document_svc_client.js $CREATE_DOC_SIGNAL $VALID_A | grep -o 'duid: .*' | grep -o "\'.*\'" | sed "s/'//g")
if [ "$DEL_DUID" = "" ]; then
    echo "[FAILURE] Uninitialized variable DEL_DUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test DeleteDocument"
node test_document_svc_client.js $DELETE_DOC_SIGNAL $DEL_DUID $DEL_UUID | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] DeleteDocument"
else
    echo "[FAILURE] DeleteDocument"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

node test_document_svc_client.js $DELETE_DOC_SIGNAL $DEL_DUID $DEL_UUID| grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] DeleteDocument non-existing DUID"
else
    echo "[FAILURE] DeleteDocument non-existing DUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi


echo "---------- Success Exit ----------"
exit 0
