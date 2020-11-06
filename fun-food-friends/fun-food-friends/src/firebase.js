import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBnIcHsRLvbNbyODqvP3JmuWstUBvKZRu0",
    authDomain: "fun-food-friends-73c46.firebaseapp.com",
    databaseURL: "https://fun-food-friends-73c46.firebaseio.com",
    projectId: "fun-food-friends-73c46",
    storageBucket: "fun-food-friends-73c46.appspot.com",
    messagingSenderId: "711618800974",
    appId: "1:711618800974:web:170bd876ca70190bf1021f"
  };

  // Initialize Firebase
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;