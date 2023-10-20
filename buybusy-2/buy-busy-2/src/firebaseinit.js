// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuEgnwUKqafEkJeUDFEC2K8s5bRKRvT88",
  authDomain: "buybusy-2-fddd1.firebaseapp.com",
  projectId: "buybusy-2-fddd1",
  storageBucket: "buybusy-2-fddd1.appspot.com",
  messagingSenderId: "995780771141",
  appId: "1:995780771141:web:bfdad751d935211d33522c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
