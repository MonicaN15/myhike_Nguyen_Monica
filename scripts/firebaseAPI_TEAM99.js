//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDqPDgVxYuIsxnqt-tT76e9MQrgay6FWFU",
    authDomain: "comp-1800-202410.firebaseapp.com",
    projectId: "comp-1800-202410",
    storageBucket: "comp-1800-202410.appspot.com",
    messagingSenderId: "131218048490",
    appId: "1:131218048490:web:03150bed8d4faaeea11e93"

};


//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
