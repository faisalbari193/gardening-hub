// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEHSScEiaPYbM3acGCmv7nDeUjwXbOY14",
  authDomain: "gardening-hub-2363f.firebaseapp.com",
  projectId: "gardening-hub-2363f",
  storageBucket: "gardening-hub-2363f.firebasestorage.app",
  messagingSenderId: "869845988129",
  appId: "1:869845988129:web:3c59bf88cf83f8695a0460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;
