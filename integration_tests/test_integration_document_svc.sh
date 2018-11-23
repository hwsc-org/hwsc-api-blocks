#!/bin/bash

# Signal to specify test
GET_STATUS_SIGNAL=0
CREATE_DOC_SIGNAL=1
LIST_DOCS_SIGNAL=2
UPDATE_DOC_SIGNAL=3
DELETE_DOC_SIGNAL=4
QUERY_DOC_SIGNAL=5

# Test variables for CreateDocument
VALID_DOC_REQ=0
NULL=1
INVALID_DOC_REQ=2

# Test variables for ListUserDocumentCollection
VALID_UUID_A=3
VALID_UUID_B=4
INVALID_UUID=5
NON_EXISTENT_UUID=6

# Test variables for UpdateDocument
VALID_UPDATE=7
INVALID_UPDATE=8

# Test variables for QueryDocument
ALL_DOC=9
SEGER_WOOKIE=10

# Test variables for DeleteDocument
DEL_UUID="abcfXSNJG0MQJHBF4QX1EFD443"

# Test variable for UpdateDocument and DeleteDocument
DUID=""

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
node test_document_svc_client.js $CREATE_DOC_SIGNAL $NULL | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Null Document Request"
else
    echo "[FAILURE] Handled Null Document Request"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $CREATE_DOC_SIGNAL $INVALID_DOC_REQ | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Handled Document Request with Garbage UUID"
else
    echo "[FAILURE] Handled Document Request with Garbage UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Extracting DUID for DeleteDocument & UpdateDocument Using CreateDocument"
DUID=$(node test_document_svc_client.js $CREATE_DOC_SIGNAL $VALID_DOC_REQ| grep -o 'duid: .*' | grep -o "\'.*\'" | sed "s/'//g")
if ! [[ $DUID =~ ^[0-9A-Za-z]{27}$ ]]; then
    echo "[FAILURE] Uninitialized variable DEL_DUID Using CreateDocument"
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
node test_document_svc_client.js $UPDATE_DOC_SIGNAL $VALID_UPDATE $DUID | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Valid Update Document"
else
    echo "[FAILURE] Valid Update Document"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $UPDATE_DOC_SIGNAL $INVALID_UPDATE 'garbage-duid' | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] Invalid Update Document"
else
    echo "[FAILURE] Invalid Update Document"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test DeleteDocument"
node test_document_svc_client.js $DELETE_DOC_SIGNAL $DUID $DEL_UUID | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] DeleteDocument"
else
    echo "[FAILURE] DeleteDocument"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

node test_document_svc_client.js $DELETE_DOC_SIGNAL $DUID $DEL_UUID| grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo "[SUCCESS] DeleteDocument non-existing DUID"
else
    echo "[FAILURE] DeleteDocument non-existing DUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test QueryDocument"
ALL=$(node test_document_svc_client.js $QUERY_DOC_SIGNAL $ALL_DOC | grep 'duid' | wc -l)
if [ $ALL == 32  ]; then
   echo "[SUCCESS] QueryDocument All"
else
    echo "[FAILURE] QueryDocument All"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
WOOKIE=$(node test_document_svc_client.js $QUERY_DOC_SIGNAL $SEGER_WOOKIE | grep 'Wookie' | wc -l)
if [ $WOOKIE == 2  ]; then
   echo "[SUCCESS] QueryDocument Wookie"
else
    echo "[FAILURE] QueryDocument Wookie"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "---------- Success Exit ----------"
exit 0
