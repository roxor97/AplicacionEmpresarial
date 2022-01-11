import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const AUTH = process.env;

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBRYsPEND-qP5rNdszyPspv810UbTARZwk",
  authDomain: "appquestions-ebfe2.firebaseapp.com",
  projectId: "appquestions-ebfe2",
  storageBucket: "appquestions-ebfe2.appspot.com",
  messagingSenderId: "21033701603",
  appId: "1:21033701603:web:61972e698be0d12d0d75d6",
  measurementId: "G-1KSE0FBJWX",
});

export const google = new firebase.auth.GoogleAuthProvider();
