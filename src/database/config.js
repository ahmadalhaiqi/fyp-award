import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDAwgiLJsYCGF2rCuaPYOfznNVIa3lZUWo",
  authDomain: "fyp-award.firebaseapp.com",
  databaseURL: "https://fyp-award.firebaseio.com",
  projectId: "fyp-award",
  storageBucket: "fyp-award.appspot.com",
  messagingSenderId: "896387540167"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
