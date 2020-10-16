import * as firebase from "firebase";

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

  export default fireDb.database().ref();