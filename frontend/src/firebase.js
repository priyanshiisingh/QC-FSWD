// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu4ExxnB5fX9Etlv8bZ1BdhmFSmwDE788",
  authDomain: "quora-clone-ed3a2.firebaseapp.com",
  projectId: "quora-clone-ed3a2",
  storageBucket: "quora-clone-ed3a2.appspot.com",
  messagingSenderId: "1016223440753",
  appId: "1:1016223440753:web:05c7f705e7feddae7660d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
