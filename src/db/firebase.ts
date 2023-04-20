// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY as string,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN as string,
    projectId: process.env.REACT_APP_PROJECT_ID as string,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET as string,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID as string,
    appId: process.env.REACT_APP_APP_ID as string
};
console.log(firebaseConfig)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// export const database = getDatabase();

