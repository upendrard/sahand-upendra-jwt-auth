// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "upendra-amar-jwt-auth.firebaseapp.com",
  projectId: "upendra-amar-jwt-auth",
  storageBucket: "upendra-amar-jwt-auth.appspot.com",
  messagingSenderId: "340240531355",
  appId: "1:340240531355:web:ed1ececde583d5ead0eb3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


