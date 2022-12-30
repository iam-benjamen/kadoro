import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
