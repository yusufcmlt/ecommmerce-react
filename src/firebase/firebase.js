import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export async function createUserProfileDocument(displayName, email, userID) {
  //if (!userID) return;

  //New or existing user reference
  const userRef = firestore.doc(`users/${userID}`);

  //Getting user snapshot.
  const snapShot = await userRef.get();
  //Creating a new user object on database
  if (!snapShot.exists) {
    await userRef.set({
      displayName,
      email,
      cart: [],
      addresses: [],
      isAdmin: false,
      createdAt: new Date(),
    });
  }
}

export const auth = app.auth();
export const firestore = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
