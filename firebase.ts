// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdJrDByDcCt4k7nQfyN7dlSaT35F3Ox-s",
  authDomain: "nextflix-forgetscode.firebaseapp.com",
  projectId: "nextflix-forgetscode",
  storageBucket: "nextflix-forgetscode.appspot.com",
  messagingSenderId: "298062363656",
  appId: "1:298062363656:web:61d3cc560758fcb50265bd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }