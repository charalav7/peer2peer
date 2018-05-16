// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');

// Creates a client by providing the credentials
const storage = new Storage({
    keyFilename: "C:/Users/chara/Documents/MEGAsync/KTH_Software/4_PeerToPeer/FinalProject/GoogleCloudProject/authKey.json"
});

const bucketName = 'my-task1';
const srcFilename = 'DSC_0374.jpg';
const destFilename = "C:/Users/chara/Documents/MEGAsync/KTH_Software/4_PeerToPeer/FinalProject/GoogleCloudProject/DSC_0374_downloaded.jpg";

const options = {
    // The path to which the file should be downloaded
    destination: destFilename,
};

// Downloads the file
storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options)
    .then(() => {
        console.log(
            `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
        );
    })
    .catch(err => {
        console.error('ERROR:', err);
    });