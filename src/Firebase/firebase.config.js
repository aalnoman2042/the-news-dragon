// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJtCYvHRf1YKipcizfKtNnVhqkHRwiSms",
  authDomain: "the-news-dragon-790a7.firebaseapp.com",
  projectId: "the-news-dragon-790a7",
  storageBucket: "the-news-dragon-790a7.appspot.com",
  messagingSenderId: "281661809827",
  appId: "1:281661809827:web:76201f45a11775d89f8b16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app