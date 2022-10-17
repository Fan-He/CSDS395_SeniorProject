// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2xjYZl1hsAtjtEGRUDBAyOp_4C2bwCso",
  authDomain: "meow-woof-f4234.firebaseapp.com",
  projectId: "meow-woof-f4234",
  storageBucket: "meow-woof-f4234.appspot.com",
  messagingSenderId: "956803223147",
  appId: "1:956803223147:web:4f1ea150e5bb55f23c2b2e",
  measurementId: "G-CN0CWL5W6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);