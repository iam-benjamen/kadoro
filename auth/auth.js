const button = document.querySelector(".login");
import { app, auth } from "../utils/firebase";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged, signOut
} from "firebase/auth";
           

// Initialize Firebase
const provider = new GoogleAuthProvider();


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

//handle auth change status
onAuthStateChanged(auth, (user) => {
  const baseUrl = window.location.origin;

  if (user) {
    localStorage.setItem("user", user.displayName);
    window.history.pushState({}, "", `${baseUrl}/kadoro`);
    window.location.reload()
  } else {
    console.log(false);
  }
});




