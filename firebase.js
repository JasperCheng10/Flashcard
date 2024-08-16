// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOozFGJiHJF7y84nViM_P-_3ICfUQF9eU",
  authDomain: "flashcard-saas-be783.firebaseapp.com",
  projectId: "flashcard-saas-be783",
  storageBucket: "flashcard-saas-be783.appspot.com",
  messagingSenderId: "242637822463",
  appId: "1:242637822463:web:f2152998111b16ca332fca",
  measurementId: "G-6NW48YBGWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}