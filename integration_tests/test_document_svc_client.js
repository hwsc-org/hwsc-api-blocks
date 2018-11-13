const index = require('../index.js');

function callback(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Response ', response);
    // console.log('Response ', response.documentCollection[0].publisherName);
    // console.log('Response ', response.documentCollection[1].publisherName);
  }
}

const dataSet = [
  // valid doc req - 0
  {
    data: {
      duid: '',
      uuid: 'abcfXSNJG0MQJHBF4QX1EFD443',
      publisherName: {
        lastName: 'Doe',
        firstName: 'John',
      },
      callTypeName: 'Conga',
      groundType: 'Breeding Migrating',
      studySite: {
        city: 'Cabo Mexico',
        state: 'Baja Calafornia',
        country: 'Mexico',
      },
      ocean: 'Pacific Ocean',
      sensorType: 'Tag',
      sensorName: 'Acousonde',
      samplingRate: 8000,
      latitude: 21.37382047121921,
      longitude: -109.9239326211374,
      imageUrlsMap: {},
      audioUrlsMap: {},
      videoUrlsMap: {},
      fileUrlsMap: {},
      recordTimestamp: 1394709793,
      createTimestamp: 0,
      updateTimestamp: 0,
      isPublic: true,
    },
    imageUrls: ['https://hwscdevstorage.blob.core.windows.net/images/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.jpg',
      'https://hwscdevstorage.blob.core.windows.net/images/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.png'],
    audioUrls: ['https://hwscdevstorage.blob.core.windows.net/audios/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav'],
    videoUrls: [],
    fileUrls: [],
  },
  // null - 1
  null,
  // invalid doc req - 2
  {
    data: {
      duid: '',
      uuid: 'garbage',
      publisherName: {
        lastName: 'Doe',
        firstName: 'Jane',
      },
      callTypeName: 'Fish Call',
      groundType: 'Baja Ground',
      studySite: {
        city: 'Los Angeles',
        state: 'California',
        country: 'USA',
      },
      ocean: 'Pacific Ocean',
      sensorType: 'Tag',
      sensorName: 'Cprobe',
      samplingRate: 8000,
      latitude: 38.016498,
      longitude: -120.400598,
      imageUrlsMap: {},
      audioUrlsMap: {},
      videoUrlsMap: {},
      fileUrlsMap: {},
      recordTimestamp: 1496542237,
      createTimestamp: 0,
      updateTimestamp: 0,
      isPublic: true,
    },
    imageUrls: ['https://hwscdevstorage.blob.core.windows.net/images/Seger_Unknown13_CaboMexico_Tag_Bprobe_20150324_142637_8000_3_BreedingMigrating.jpg',
      'https://hwscdevstorage.blob.core.windows.net/images/Seger_Unknown13_CaboMexico_Tag_Bprobe_20150324_142637_8000_3_BreedingMigrating.png'],
    audioUrls: ['https://hwscdevstorage.blob.core.windows.net/audios/Seger_Unknown13_CaboMexico_Tag_Bprobe_20150324_142637_8000_3_BreedingMigrating.wav'],
    videoUrls: [],
    fileUrls: [],
  },
  // valid uuid A - 3
  {
    data: {
      uuid: '0XXXXSNJG0MQJHBF4QX1EFD6Y3',
    },
  },
  // valid uuid B - 4
  {
    data: {
      uuid: '123XXSNJG0MQASDF4QFFFFD6Y3',
    },
  },
  // invalid uuid - 5
  {
    data: {
      uuid: '123XXSNJG0MQASDF4QFFFFD6Y3123',
    },
  },
  // non-existing uuid - 6
  {
    data: {
      uuid: 'xxx0XSNJG0xxxxxF4QX1Exxxxx',
    },
  },
  // valid update - 7
  {
    data: {
      duid: '',
      uuid: 'abcfXSNJG0MQJHBF4QX1EFD443',
      publisherName: {
        lastName: 'Doe',
        firstName: 'John',
      },
      callTypeName: 'Conga',
      groundType: 'Breeding Migrating',
      studySite: {
        city: 'Cabo Mexico',
        state: 'Baja Calafornia',
        country: 'Mexico',
      },
      ocean: 'Pacific Ocean',
      sensorType: 'Tag',
      sensorName: 'Acousonde',
      samplingRate: 8000,
      latitude: 21.37382047121921,
      longitude: -109.9239326211374,
      imageUrlsMap: {},
      audioUrlsMap: {},
      videoUrlsMap: {},
      fileUrlsMap: {},
      recordTimestamp: 1394709793,
      createTimestamp: 0,
      updateTimestamp: 0,
      isPublic: true,
    },
    imageUrls: ['https://hwscdevstorage.blob.core.windows.net/images/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.jpg',
      'https://hwscdevstorage.blob.core.windows.net/images/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.png'],
    audioUrls: ['https://hwscdevstorage.blob.core.windows.net/audios/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav'],
    videoUrls: [],
    fileUrls: [],
  },
  // invalid update - 8
  {
    data: {
      duid: '',
      uuid: 'garbage',
      publisherName: {
        lastName: 'Doe',
        firstName: 'John',
      },
      callTypeName: 'Conga',
      groundType: 'Breeding Migrating',
      studySite: {
        city: 'Cabo Mexico',
        state: 'Baja Calafornia',
        country: 'Mexico',
      },
      ocean: 'Pacific Ocean',
      sensorType: 'Tag',
      sensorName: 'Acousonde',
      samplingRate: 8000,
      latitude: 21.37382047121921,
      longitude: -109.9239326211374,
      imageUrlsMap: {},
      audioUrlsMap: {},
      videoUrlsMap: {},
      fileUrlsMap: {},
      recordTimestamp: 1394709793,
      createTimestamp: 0,
      updateTimestamp: 0,
      isPublic: true,
    },
    imageUrls: ['https://hwscdevstorage.blob.core.windows.net/images/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.jpg',
      'https://hwscdevstorage.blob.core.windows.net/images/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.png'],
    audioUrls: ['https://hwscdevstorage.blob.core.windows.net/audios/Seger_Conga_CaboMexico_Tag_Acousonde_20140313_112313_8000_3_BreedingMigrating.wav'],
    videoUrls: [],
    fileUrls: [],
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
      dataSet[parseInt(process.argv[3])].data.duid = process.argv[4];
      index.hwscDocumentSvc
        .updateDocument(dataSet[parseInt(process.argv[3])], callback);
      break;
    case '4':
      index.hwscDocumentSvc
        .deleteDocument({ data: { duid: process.argv[3], uuid: process.argv[4] } }, callback);
      break;
    case '5':
      index.hwscDocumentSvc
        .queryDocument(
          {
            queryParameters:
              {
                publishers: [],
                studySites: [],
                callTypes: ['Conga'],
                groundTypes: ['Breeding Migrating'],
                sensorTypes: [],
                sensorNames: [],
                minRecordTimestamp: 0,
                maxRecordTimestamp: 0,
              },
          }, callback,
        );
      break;
    default:
      console.error('Invalid arg');
  }
}

main();
