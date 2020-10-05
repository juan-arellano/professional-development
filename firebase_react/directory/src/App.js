import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import {
  FirestoreCollection,
  FirestoreProvider
} from "@react-firebase/firestore";

function App() {

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  //const ref = firebase.firestore().colllection("people");
  useEffect(() => { const ref = firebase.firestore().collection("")    .firestore().colllection("people");
  console.log(ref)

  }, []);


  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>People</h1>
      {people.map((person) => (
        <div key = {person.id}>
          <h2>{person.name}</h2>
          <h3>{person.role}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
