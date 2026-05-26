// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-87c48.firebaseapp.com",
  projectId: "mern-estate-87c48",
  storageBucket: "mern-estate-87c48.firebasestorage.app",
  messagingSenderId: "395833399081",
  appId: "1:395833399081:web:1bb4e4f95c5a01257a4938",
  measurementId: "G-FCH656H320",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
