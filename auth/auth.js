// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// Add Firebase products that you want to use

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4cu5j1p5m3semI46XpD3EtvONxRquec0",
  authDomain: "kadoro-5161a.firebaseapp.com",
  projectId: "kadoro-5161a",
  storageBucket: "kadoro-5161a.appspot.com",
  messagingSenderId: "1091097714447",
  appId: "1:1091097714447:web:3e163ceabce8fa8dd0a87a",
  measurementId: "G-DPDFQXY7ZK",
  clientID:
    "692243734013-gk1ung03fmpf2khidc9i7jkucqpjn9kt.apps.googleusercontent.com",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());
// const provider = new GoogleAuthProvider();

ui.start(".auth_tab", {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
});
