import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNr2yxajI4GJU4gOfZNmsq94gbQhSsUGk",
  authDomain: "vueblog-b45b8.firebaseapp.com",
  projectId: "vueblog-b45b8",
  storageBucket: "vueblog-b45b8.appspot.com",
  messagingSenderId: "759982874720",
  appId: "1:759982874720:web:58d17098778e4705422305",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
