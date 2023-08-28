// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRd2qWlNvWFoixmkzL0YmX1wa7QvyJiPU",
  authDomain: "blogging-app-fb6c5.firebaseapp.com",
  projectId: "blogging-app-fb6c5",
  storageBucket: "blogging-app-fb6c5.appspot.com",
  messagingSenderId: "740592627647",
  appId: "1:740592627647:web:cb63060eb4489e94f57b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);