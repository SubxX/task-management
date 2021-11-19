// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY as string,
    authDomain: process.env.REACT_APP_AUTHDOMAIN as string,
    projectId: process.env.REACT_APP_PROJECTID as string,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET as string,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID as string,
    appId: process.env.REACT_APP_APPID as string
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// export const database = getDatabase();

