// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDIjOZqdQ8JF2Aye6G3-F8YUyTvlgdIMU0",
  authDomain: "sigaspandu.firebaseapp.com",
  projectId: "sigaspandu",
  storageBucket: "sigaspandu.appspot.com",
  messagingSenderId: "438657350196",
  appId: "1:438657350196:web:361d466f40d505fcf6a861",
  measurementId: "G-6TG5E992E6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
