// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEzp2dHSs69IakbenUc_Ht3U3Cgtyifc4",
  authDomain: "react-project-with-auth.firebaseapp.com",
  projectId: "react-project-with-auth",
  storageBucket: "react-project-with-auth.appspot.com",
  messagingSenderId: "543222226591",
  appId: "1:543222226591:web:90244b9dfeae8c7e560caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;