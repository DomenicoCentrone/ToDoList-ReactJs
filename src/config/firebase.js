// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqCsKU3XJ5mqqvwQh5tfmvfsEmSY7oEjc",
  authDomain: "to-do-list---reactjs.firebaseapp.com",
  projectId: "to-do-list---reactjs",
  storageBucket: "to-do-list---reactjs.appspot.com",
  messagingSenderId: "635348048286",
  appId: "1:635348048286:web:a3d374bf4f327538a35e8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);