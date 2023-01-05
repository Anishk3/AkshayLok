// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCihBTF3s29Q37ekdKJPnDIN3F5YLSzT9M",
  authDomain: "akshaylok-1230e.firebaseapp.com",
  projectId: "akshaylok-1230e",
  storageBucket: "akshaylok-1230e.appspot.com",
  messagingSenderId: "775018534573",
  appId: "1:775018534573:web:0e6bedd849fca90fdf5824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export {
    app,
    googleProvider,
    auth

}