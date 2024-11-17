// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPPsSxs2SbDoVwj69-2J5Q-7xx5tEY044",
  authDomain: "dragon-news-e8773.firebaseapp.com",
  projectId: "dragon-news-e8773",
  storageBucket: "dragon-news-e8773.firebasestorage.app",
  messagingSenderId: "218199166649",
  appId: "1:218199166649:web:b74b2a5b52c9fbd7b09568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth