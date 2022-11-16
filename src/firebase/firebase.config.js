// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiI3SfiRneZF5mpwI6DiCnVT6JV_4HiAQ",
  authDomain: "dentist-portal-e3d50.firebaseapp.com",
  projectId: "dentist-portal-e3d50",
  storageBucket: "dentist-portal-e3d50.appspot.com",
  messagingSenderId: "109827000383",
  appId: "1:109827000383:web:a7243eb38c8241d20a508a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app