// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDCN30cD2WJ03n9-ZWNLWCjO1En9Uq1DRQ",
  authDomain: "edusystem-ee06f.firebaseapp.com",
  projectId: "edusystem-ee06f",
  storageBucket: "edusystem-ee06f.appspot.com",
  messagingSenderId: "900784887982",
  appId: "1:900784887982:web:a74c7e951740576646f53f",
  measurementId: "G-NHXJG1VGGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
