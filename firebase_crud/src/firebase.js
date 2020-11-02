import * as firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBfGHnM2YQtZbSMkE9f9iwwPoEy1PS_YzM",
    authDomain: "react-crud-5243c.firebaseapp.com",
    databaseURL: "https://react-crud-5243c.firebaseio.com",
    projectId: "react-crud-5243c",
    storageBucket: "react-crud-5243c.appspot.com",
    messagingSenderId: "672598698631",
    appId: "1:672598698631:web:a5652c9d63305386926622"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  export default fireDb.database().ref();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
  promt: "select_account",
  });

  export const signInWithGoogle = () =>    auth.signInWithPopup(provider);