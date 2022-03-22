// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6cYnQbCtXEo5I8vvlI5olSC6wUa-4Twg",
  authDomain: "qc-fswd.firebaseapp.com",
  projectId: "qc-fswd",
  storageBucket: "qc-fswd.appspot.com",
  messagingSenderId: "1018111940183",
  appId: "1:1018111940183:web:9b7f43395cf7a567a43512",
  measurementId: "G-824YE9M486",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
