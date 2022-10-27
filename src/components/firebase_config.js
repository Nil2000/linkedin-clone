import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXuvnEze94ycyEJ5BYU_-8yIvVKwDiPcA",
    authDomain: "linkedin-clone-c4f46.firebaseapp.com",
    projectId: "linkedin-clone-c4f46",
    storageBucket: "linkedin-clone-c4f46.appspot.com",
    messagingSenderId: "18422467459",
    appId: "1:18422467459:web:389c079cfe6932e67884b6",
    measurementId: "G-BR5D5WL0E8"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
