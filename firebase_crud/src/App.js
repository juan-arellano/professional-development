import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

function App() {

  return (
 <div classname = "row">
   <div classname = "col-md-8 offset-md-2">
     <Contacts/>
   </div>
 </div>
  );
}

export default App;
