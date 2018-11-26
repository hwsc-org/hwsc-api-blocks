#!/bin/bash

# Signal to specify test
GET_STATUS_SIGNAL=0
CREATE_DOC_SIGNAL=1
LIST_DOCS_SIGNAL=2
UPDATE_DOC_SIGNAL=3
DELETE_DOC_SIGNAL=4
QUERY_DOC_SIGNAL=5
DISTINCT_DOC_SIGNAL=6
ADD_FM_SIGNAL=7
DEL_FM_SIGNAL=8

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
TIME_CONSTRAINT=11
TIME_ISSUE=12

# Test variables for DeleteDocument
DEL_UUID="abcfXSNJG0MQJHBF4QX1EFD443"

# Test variable for UpdateDocument and DeleteDocument
DUID=""

# Test variable for AddFileMetadata and DeleteFileMetadata
FM_DUID="1ChHfmKs8GX7D1XVf61lwVdisWf"
FM_UUID="0XXXXSNJG0MQJHBF4QX1EFD6Y3"
FM_URL="https://hwscdevstorage.blob.core.windows.net/images/pusheen.jpg"
FM_FUID=""

FM_FILE="0"
FM_AUDIO="1"
FM_IMAGE="2"
FM_VIDEO="3"

echo "💩 Integration Test for hwsc-document-svc 💩"

echo "Test GetStatus"
node test_document_svc_client.js $GET_STATUS_SIGNAL | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] GetStatus"
else
    echo -e "👻 [FAILURE] GetStatus"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test CreateDocument"
node test_document_svc_client.js $CREATE_DOC_SIGNAL $NULL | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Handled Null Document Request"
else
    echo -e "👻 [FAILURE] Handled Null Document Request"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $CREATE_DOC_SIGNAL $INVALID_DOC_REQ | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Handled Document Request with Garbage UUID"
else
    echo -e "👻 [FAILURE] Handled Document Request with Garbage UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Extracting DUID for DeleteDocument & UpdateDocument Using CreateDocument"
DUID=$(node test_document_svc_client.js $CREATE_DOC_SIGNAL $VALID_DOC_REQ| grep -o 'duid: .*' | grep -o "\'.*\'" | sed "s/'//g")
if ! [[ $DUID =~ ^[0-9A-Za-z]{27}$ ]]; then
    echo -e "👻 [FAILURE] Uninitialized variable DEL_DUID Using CreateDocument"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test ListUserDocumentCollection"
node test_document_svc_client.js $LIST_DOCS_SIGNAL $VALID_UUID_A | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Inserted Valid UUID A"
else
    echo -e "👻 [FAILURE] Inserted Valid UUID A"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $LIST_DOCS_SIGNAL $VALID_UUID_B | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Inserted Valid UUID B"
else
    echo -e "👻 [FAILURE] Inserted Valid UUID B"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $LIST_DOCS_SIGNAL $INVALID_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Handled Invalid UUID"
else
    echo -e "👻 [FAILURE] Handled Invalid UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $LIST_DOCS_SIGNAL $NON_EXISTENT_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Handled Non-Existent UUID"
else
    echo -e "👻 [FAILURE] Handled Non-Existent UUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test UpdateDocument"
node test_document_svc_client.js $UPDATE_DOC_SIGNAL $VALID_UPDATE $DUID | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Valid Update Document"
else
    echo -e "👻[FAILURE] Valid Update Document"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $UPDATE_DOC_SIGNAL $INVALID_UPDATE 'garbage-duid' | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] Invalid Update Document"
else
    echo -e "👻 [FAILURE] Invalid Update Document"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test DeleteDocument"
node test_document_svc_client.js $DELETE_DOC_SIGNAL $DUID $DEL_UUID | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] DeleteDocument"
else
    echo -e "👻 [FAILURE] DeleteDocument"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

node test_document_svc_client.js $DELETE_DOC_SIGNAL $DUID $DEL_UUID | grep 'code: 3,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] DeleteDocument non-existing DUID"
else
    echo -e "👻 [FAILURE] DeleteDocument non-existing DUID"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test QueryDocument"
ALL=$(node test_document_svc_client.js $QUERY_DOC_SIGNAL $ALL_DOC | grep 'duid' | wc -l)
if [ $ALL == 32  ]; then
   echo -e  "😃 [SUCCESS] QueryDocument All"
else
    echo -e "👻 [FAILURE] QueryDocument All"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
WOOKIE=$(node test_document_svc_client.js $QUERY_DOC_SIGNAL $SEGER_WOOKIE | grep 'Wookie' | wc -l)
if [ $WOOKIE == 2  ]; then
   echo -e  "😃 [SUCCESS] QueryDocument Wookie"
else
    echo -e "👻 [FAILURE] QueryDocument Wookie"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
TC=$(node test_document_svc_client.js $QUERY_DOC_SIGNAL $TIME_CONSTRAINT | grep 'duid' | wc -l)
if [ $TC == 12  ]; then
   echo -e  "😃 [SUCCESS] QueryDocument Time Constraint"
else
    echo -e "👻 [FAILURE] QueryDocument Time Constraint"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $QUERY_DOC_SIGNAL $TIME_ISSUE | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] QueryDocument Time Issue"
else
    echo -e "👻 [FAILURE] QueryDocument Time Issue"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test ListDistinctFieldValues"
node test_document_svc_client.js $DISTINCT_DOC_SIGNAL | grep 'Distinct length 67' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] ListDistinctFieldValues"
else
    echo -e "👻 [FAILURE] ListDistinctFieldValues"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test AddFileMetadata"
FM_FUID=$(node test_document_svc_client.js $ADD_FM_SIGNAL $FM_DUID $FM_UUID $FM_URL $FM_IMAGE)
if [[ $FM_FUID =~ ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ ]]; then
   echo -e  "😃 [SUCCESS] AddFileMetadata"
else
    echo -e "👻 [FAILURE] AddFileMetadata"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $ADD_FM_SIGNAL $FM_DUID $FM_UUID $FM_URL $FM_AUDIO | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] AddFileMetadata with invalid type"
else
    echo -e "👻 [FAILURE] AddFileMetadata with invalid type"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $ADD_FM_SIGNAL garbage $FM_UUID $FM_URL $FM_AUDIO | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] AddFileMetadata with invalid duid"
else
    echo -e "👻 [FAILURE] AddFileMetadata with invalid duid"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $ADD_FM_SIGNAL $FM_DUID garbage $FM_URL $FM_AUDIO | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] AddFileMetadata with invalid uuid"
else
    echo -e "👻 [FAILURE] AddFileMetadata with invalid uuid"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $ADD_FM_SIGNAL $FM_DUID $FM_UUID garbage $FM_AUDIO | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] AddFileMetadata with invalid url"
else
    echo -e "👻 [FAILURE] AddFileMetadata with invalid url"
    echo "---------- Fatal Exit ----------"
    exit 1
fi

echo "Test DeleteFileMetadata"
node test_document_svc_client.js $DEL_FM_SIGNAL $FM_DUID $FM_UUID $FM_FUID $FM_IMAGE | grep 'code: 0,' &> /dev/null
if [ $? == 0 ]; then
   echo -e  "😃 [SUCCESS] DeleteFileMetadata"
else
    echo -e "👻 [FAILURE] DeleteFileMetadata"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $DEL_FM_SIGNAL garbage $FM_UUID $FM_FUID $FM_AUDIO | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] DeleteFileMetadata with invalid duid"
else
    echo -e "👻 [FAILURE] DeleteFileMetadata with invalid duid"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $DEL_FM_SIGNAL $FM_DUID garbage $FM_FUID $FM_AUDIO | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] DeleteFileMetadata with invalid uuid"
else
    echo -e "👻 [FAILURE] DeleteFileMetadata with invalid uuid"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
node test_document_svc_client.js $DEL_FM_SIGNAL $FM_DUID $FM_UUID garbage $FM_AUDIO | grep 'code: 3,' &> /dev/null
if [ $? == 0  ]; then
   echo -e  "😃 [SUCCESS] DeleteFileMetadata with invalid fuid"
else
    echo -e "👻 [FAILURE] DeleteFileMetadata with invalid fuid"
    echo "---------- Fatal Exit ----------"
    exit 1
fi
echo "💩 ---------- Success Exit ---------- 💩"
exit 0
