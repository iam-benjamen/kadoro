const button = document.querySelector(".login");
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//Add Event Listener on Click
button.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorMessage);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("kadoro_name", user.displayName);
    window.history.pushState({}, "", "http://localhost:8000/kadoro");
  } else {
    console.log(false);
  }
});
