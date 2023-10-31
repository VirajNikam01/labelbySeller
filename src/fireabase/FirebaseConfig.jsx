// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJd4k1jZBmrpZyCIqq5N_yf-tJ7ILZw5g",
  authDomain: "labelbyviraj.firebaseapp.com",
  projectId: "labelbyviraj",
  storageBucket: "labelbyviraj.appspot.com",
  messagingSenderId: "294168649632",
  appId: "1:294168649632:web:7d5d1cfd7a67bb7e19cec5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
