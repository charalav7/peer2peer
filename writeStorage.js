// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');

// Creates a client by providing the credentials
const storage = new Storage({
    keyFilename: "C:/Users/chara/Documents/MEGAsync/KTH_Software/4_PeerToPeer/FinalProject/GoogleCloudProject/authKey.json"
});

// The name of the bucket to write
const bucketName = 'my-task1';
// The file to write e.g. a photo
const filename = "C:/Users/chara/Documents/MEGAsync/KTH_Software/4_PeerToPeer/FinalProject/GoogleCloudProject/DSC_0374.jpg";

// Uploads a local file to the bucket
storage
    .bucket(bucketName)
    .upload(filename)
    .then(() => {
        console.log(`${filename} uploaded to ${bucketName}.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });