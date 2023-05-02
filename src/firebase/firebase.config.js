// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRNA91cPaki2iRIMpPmCle6xntYLg6ZvY",
  authDomain: "the-indic-cuisine.firebaseapp.com",
  projectId: "the-indic-cuisine",
  storageBucket: "the-indic-cuisine.appspot.com",
  messagingSenderId: "647938965489",
  appId: "1:647938965489:web:b561f1a535bd299ad98e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;