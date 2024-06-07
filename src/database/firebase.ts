import * as admin from "firebase-admin";
var serviceAccount = require("");
/* const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS; */
const bucket = process.env.STORAGE_BUCKET;


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount!),
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

function firestore() {
    try {
        return admin.firestore();
    } catch (error) {
        throw error;
    }
}

function auth() {
    try {
        return admin.auth();
    } catch (error) {
        throw error;
    }
}

function storage() {
    try {
        return admin.storage().bucket(bucket);
    } catch (error) {

    }
}


export {
    firestore,
    auth,
    storage
}