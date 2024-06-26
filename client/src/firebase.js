// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1805.firebaseapp.com",
  projectId: "mern-auth-1805",
  storageBucket: "mern-auth-1805.appspot.com",
  messagingSenderId: "300757303527",
  appId: "1:300757303527:web:b8aea40356f604e1dce242",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
