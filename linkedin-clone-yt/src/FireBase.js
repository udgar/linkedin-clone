import {initializeApp} from "firebase/app"
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoAS0Jy2tLZFF5klQi9P6ByXv5gD3OSZ0",
    authDomain: "linkedin-clone-7860a.firebaseapp.com",
    projectId: "linkedin-clone-7860a",
    storageBucket: "linkedin-clone-7860a.appspot.com",
    messagingSenderId: "753263853848",
    appId: "1:753263853848:web:ce9f7850d462699362de6d",
    measurementId: "G-S4YFNLXW0L"
  };

  const firebaseApp= initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);

  export {db,auth};