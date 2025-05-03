// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQ27vA2eirAJMc1R8oMK2mTddYLqlWIsM",
    authDomain: "easyprep-b2315.firebaseapp.com",
    projectId: "easyprep-b2315",
    storageBucket: "easyprep-b2315.firebasestorage.app",
    messagingSenderId: "958715317055",
    appId: "1:958715317055:web:914462c6e79998ce48e18a",
    measurementId: "G-53VNKHD0WH"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);