import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDZIwa9nHqOsrZN_qV1xsbrcwYbs5Jkyzg",
    authDomain: "letmeask-25c30.firebaseapp.com",
    databaseURL: "https://letmeask-25c30-default-rtdb.firebaseio.com",
    projectId: "letmeask-25c30",
    storageBucket: "letmeask-25c30.appspot.com",
    messagingSenderId: "950038575126",
    appId: "1:950038575126:web:5f405399a15e5f6fd99d37"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();