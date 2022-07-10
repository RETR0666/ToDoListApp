import "firebase/storage";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD7O-IlGsFOJvybVkk8ATjPC53muqdz1I",
  authDomain: "todolistapp-5df0a.firebaseapp.com",
  projectId: "todolistapp-5df0a",
  storageBucket: "todolistapp-5df0a.appspot.com",
  messagingSenderId: "700996257857",
  appId: "1:700996257857:web:f784bf4f006f3747f89ec0"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
