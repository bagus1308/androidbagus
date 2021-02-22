import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjImJmiDrTM8RDwABxM9soNEPEhOTpHOc",
    authDomain: "project1bagus.firebaseapp.com",
    projectId: "project1bagus",
    storageBucket: "project1bagus.appspot.com",
    messagingSenderId: "1069891568988",
    appId: "1:1069891568988:web:3cf440e3c5aff335a22d99",
    measurementId: "G-M0PYFQ7F54"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
