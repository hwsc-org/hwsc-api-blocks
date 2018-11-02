const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
    // console.log('Length ', response.fileMetadataCollection.length)
  }
}

const dataSet = [
  // valid A - 0
  {
    duid: '',
    uuid: '0000XSNJG0MQJHBF4QX1EFD6Y3',
    lastName: 'Kim',
    firstName: 'Lisa',
    callTypeName: 'some call type name',
    groundType: 'some ground type',
    region: 'some region',
    ocean: 'Pacific Ocean',
    sensorType: 'some sensor type',
    sensorName: 'some sensor name',
    sampleRate: 100,
    latitude: 89.12300109863281,
    longitude: -100.12300109863281,
    imageUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/image/hulkgif.png',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif',
    },
    audioUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3',
    },
    videoUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    fileUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    recordTimestamp: 1514764800,
    createTimestamp: 1541036514,
    updateTimestamp: 0,
  },
  // valid B - 1
  {
    duid: '',
    uuid: '0000XSNJG0MQJHBF4QX1EFD6Y5',
    lastName: 'Faraon',
    firstName: 'Conard',
    callTypeName: 'some call type name',
    groundType: 'some ground type',
    region: 'some region',
    ocean: 'Pacific Ocean',
    sensorType: 'some sensor type',
    sensorName: 'some sensor name',
    sampleRate: 100,
    latitude: 89.12300109863281,
    longitude: -100.12300109863281,
    imageUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/image/hulkgif.png',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif',
    },
    audioUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3',
    },
    videoUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    fileUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    recordTimestamp: 1514764800,
    createTimestamp: 1541036514,
    updateTimestamp: 0,
  },
  // null - 2
  null,
  // garabage uuid - 3
  {
    duid: '',
    uuid: '0000XSNJG0MQJHBF4QX1EFD6Y5asd',
    lastName: 'Faraon',
    firstName: 'Conard',
    callTypeName: 'some call type name',
    groundType: 'some ground type',
    region: 'some region',
    ocean: 'Pacific Ocean',
    sensorType: 'some sensor type',
    sensorName: 'some sensor name',
    sampleRate: 100,
    latitude: 89.12300109863281,
    longitude: -100.12300109863281,
    imageUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/image/hulkgif.png',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif',
    },
    audioUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3',
    },
    videoUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    fileUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    recordTimestamp: 1514764800,
    createTimestamp: 1541036514,
    updateTimestamp: 0,
  },
  // valid uuid - 4
  {
    uuid: '0000XSNJG0MQJHBF4QX1EFD6Y3',
  },
  // valid uuid - 5
  {
    uuid: '0000XSNJG0MQJHBF4QX1EFD6Y5',
  },
  // invalid uuid - 6
  {
    uuid: '0000XSNJG0MQJHBF4QX1EFD6Y5asd',
  },
  // non-existing uuid - 7
  {
    uuid: 'xxx0XSNJG0MQJHBF4QX1EFD6Yx',
  },
  // valid update - 8
  {
    duid: '1CMjsoGz1cNOkIYaarbcSzmNg1n',
    uuid: '0000XSNJG0MQJHBF4QX1EFD6Y3',
    lastName: 'Keem',
    firstName: 'Leesa',
    callTypeName: 'some call type name',
    groundType: 'some ground type',
    region: 'ceej',
    ocean: 'Pacific Ocean',
    sensorType: 'some sensor type',
    sensorName: 'some sensor name',
    sampleRate: 100,
    latitude: 89.12300109863281,
    longitude: -100.12300109863281,
    imageUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/image/hulkgif.png',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif',
    },
    audioUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3',
    },
    videoUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    fileUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    recordTimestamp: 1514764800,
    createTimestamp: 1541036514,
    updateTimestamp: 0,
  },
  // invalid update - 9
  {
    duid: 'xxxjsoGz1cNOkIYaarbcSzmNg1n',
    uuid: 'xxx0XSNJG0MQJHBF4QX1EFD6Y3',
    lastName: 'Keem',
    firstName: 'Leesa',
    callTypeName: 'some call type name',
    groundType: 'some ground type',
    region: 'ceej',
    ocean: 'Pacific Ocean',
    sensorType: 'some sensor type',
    sensorName: 'some sensor name',
    sampleRate: 100,
    latitude: 89.12300109863281,
    longitude: -100.12300109863281,
    imageUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/image/hulkgif.png',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/image/Rotating_earth_(large).gif',
    },
    audioUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/audio/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/audio/Milad Hosseini - Deli Asheghetam [128].mp3',
    },
    videoUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    fileUrl: {
      '4ff30392-8ec8-45a4-ba94-5e22c4a686de': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.wmv',
      '4ff30392-8ec8-45a4-ba94-5e22c4a686df': 'https://hwssappstorage.blob.core.windows.net/video/videoplayback.mp4',
    },
    recordTimestamp: 1514764800,
    createTimestamp: 1541036514,
    updateTimestamp: 0,
  },
];


function main() {
  switch (process.argv[2]) {
    case '0':
      index.hwscDocumentSvc
        .getStatus(callback);
      break;
    case '1':
      index.hwscDocumentSvc
        .createDocument(dataSet[parseInt(process.argv[3])], callback);
      break;
    case '2':
      index.hwscDocumentSvc
        .listUserDocumentCollection(dataSet[parseInt(process.argv[3])], callback);
      break;
    case '3':
      index.hwscDocumentSvc
        .updateDocument(dataSet[parseInt(process.argv[3])], callback);
      break;
    case '4':
      index.hwscDocumentSvc
        .deleteDocument({ duid: process.argv[3], uuid: process.argv[4] }, callback);
      break;
    default:
      console.error('Invalid arg');
  }
}

main();
