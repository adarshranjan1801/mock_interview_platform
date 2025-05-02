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
    apiKey: "AIzaSyD5OmvdhzokmFNmuT1l5gvFCS6sncI4ZRs",
    authDomain: "prepwise-e8c0f.firebaseapp.com",
    projectId: "prepwise-e8c0f",
    storageBucket: "prepwise-e8c0f.firebasestorage.app",
    messagingSenderId: "723539890235",
    appId: "1:723539890235:web:1088adfc731544700f0c1e",
    measurementId: "G-6VL3W4YM2V"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);