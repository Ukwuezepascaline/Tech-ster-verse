import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9WghmQ5M0VlnB2qkznvOEypXkbDGIj9E",
  authDomain: "techsters-login.firebaseapp.com",
  projectId: "techsters-login",
  storageBucket: "techsters-login.appspot.com",
  messagingSenderId: "953601243360",
  appId: "1:953601243360:web:0cf95a3724adcf8cf37885",
  measurementId: "G-FCXK3DNG2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

export {auth, provider, providerGit};