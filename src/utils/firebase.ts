// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD90t_lB8VLljnqUDHgxMt0mE-NFcyrPy0",
  authDomain: "netflixgpt-c2b1b.firebaseapp.com",
  projectId: "netflixgpt-c2b1b",
  storageBucket: "netflixgpt-c2b1b.firebasestorage.app",
  messagingSenderId: "928052794070",
  appId: "1:928052794070:web:2e59f8a37c8bd881062f77",
  measurementId: "G-EGQ85FSXK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();