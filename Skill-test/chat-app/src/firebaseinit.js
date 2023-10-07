// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1btRe4UFFmEv3hwNEf2skfZPV80gocM8",
  authDomain: "chat-app-d6351.firebaseapp.com",
  projectId: "chat-app-d6351",
  storageBucket: "chat-app-d6351.appspot.com",
  messagingSenderId: "736934161228",
  appId: "1:736934161228:web:06eb3cc16386ac03d0bde9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();