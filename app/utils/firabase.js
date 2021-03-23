import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAyy2sd0NaXmBZ2XKf2BvZLzdc2MmTSBRQ",
    authDomain: "tenedores-e4bd6.firebaseapp.com",
    projectId: "tenedores-e4bd6",
    storageBucket: "tenedores-e4bd6.appspot.com",
    messagingSenderId: "607317421634",
    appId: "1:607317421634:web:36ab8b6582e2b96d2407db"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);;