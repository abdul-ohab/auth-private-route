// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmStxHzFfHPww7IKCi1RxSncyNE5T67wE",
  authDomain: "fir-authentication-cd1a0.firebaseapp.com",
  projectId: "fir-authentication-cd1a0",
  storageBucket: "fir-authentication-cd1a0.appspot.com",
  messagingSenderId: "1022490259920",
  appId: "1:1022490259920:web:6dba165e3f2e98e97049d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;