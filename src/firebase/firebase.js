import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAfjL24YMUpa_yAH5fAXmBN3RrXlGRWf4Q",
  authDomain: "veggie-67c3c.firebaseapp.com",
  databaseURL: "https://veggie-67c3c.firebaseio.com",
  projectId: "veggie-67c3c",
  storageBucket: "",
  messagingSenderId: "638056876429"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};