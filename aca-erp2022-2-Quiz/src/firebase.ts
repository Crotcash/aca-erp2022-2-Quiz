// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_uipaK7UiXOCy9Aq2hDY76p1gmUZZjz8",
  authDomain: "quiz-app-9de5f.firebaseapp.com",
  projectId: "quiz-app-9de5f",
  storageBucket: "quiz-app-9de5f.firebasestorage.app",
  messagingSenderId: "445968049498",
  appId: "1:445968049498:web:ec342760e8df25964fbf63",
  measurementId: "G-PLYLXFF7B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);