import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLhiA9-3isInNJc5C9bCmoYkDedDBqfmg",
    authDomain: "directory-f1c24.firebaseapp.com",
    databaseURL: "https://directory-f1c24.firebaseio.com",
    projectId: "directory-f1c24",
    storageBucket: "directory-f1c24.appspot.com",
    messagingSenderId: "676103079274",
    appId: "1:676103079274:web:5f127067fe47e15a60d113"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;