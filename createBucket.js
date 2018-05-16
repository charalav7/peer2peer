// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');

// Creates a client by providing the credentials
const storage = new Storage({
    keyFilename: "C:/Users/chara/Documents/MEGAsync/KTH_Software/4_PeerToPeer/FinalProject/GoogleCloudProject/authKey.json"
});

const bucketName = 'my-task1';

// Creates a new bucket
storage
    .createBucket(bucketName, {
        location: 'EU',
        storageClass: 'MULTI_REGIONAL',
    })
    .then(() => {
        console.log(`Bucket ${bucketName} created.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });