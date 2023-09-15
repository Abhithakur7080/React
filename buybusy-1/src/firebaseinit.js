// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHPeEcZc0UJRCBG4Uzf-vkQArtChg-qm4",
  authDomain: "buybusy-1.firebaseapp.com",
  projectId: "buybusy-1",
  storageBucket: "buybusy-1.appspot.com",
  messagingSenderId: "860588715148",
  appId: "1:860588715148:web:3607e70499f10060cbdfa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);