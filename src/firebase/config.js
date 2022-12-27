import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuV09IIfUei1Hjmk-g9fvqiAehlsEzzds",
  authDomain: "reactnativetask-98b8a.firebaseapp.com",
  projectId: "reactnativetask-98b8a",
  storageBucket: "reactnativetask-98b8a.appspot.com",
  messagingSenderId: "271724420176",
  appId: "1:271724420176:web:224c7ac1fc5daaa55f0555",
  measurementId: "G-PBS7HSKPX5",
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db;
