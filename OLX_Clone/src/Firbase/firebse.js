// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyDZcFAUjfatcL6f4_oUtuLaUlWqTdjoNq0",
  authDomain: "react-olx-clone-9e870.firebaseapp.com",
  projectId: "react-olx-clone-9e870",
  storageBucket: "react-olx-clone-9e870.appspot.com",
  messagingSenderId: "690312129705",
  appId: "1:690312129705:web:a76123f028dceb8adb4db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()