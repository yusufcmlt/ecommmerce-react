import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDUCbnYpJLm7k9SzAq3wheW6ri3To-tSsY",
  authDomain: "react-ecommerce-isyeri.firebaseapp.com",
  projectId: "react-ecommerce-isyeri",
  storageBucket: "react-ecommerce-isyeri.appspot.com",
  messagingSenderId: "394203784394",
  appId: "1:394203784394:web:e6176cfdc1b3f9ce25c033",
  measurementId: "G-M2TR57NKZF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firestoreDB = firebase.firestore();

export default { firebase, firestoreDB };
