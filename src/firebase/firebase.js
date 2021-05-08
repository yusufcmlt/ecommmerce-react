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

export async function createUserProfileDocument(email, userID) {
  //if (!userID) return;

  //New or existing user reference
  const userRef = firestore.doc(`users/${userID}`);

  //Getting user snapshot.
  const snapShot = await userRef.get();
  //Creating a new user object on database
  if (!snapShot.exists) {
    await userRef.set({
      email,
      cart: [],
      addresses: [],
      orders: [],
      isAdmin: false,
      createdAt: new Date(),
    });
  }
}
export function getUserIsAdmin(userID) {
  const userRef = firestore.doc(`users/${userID}`);

  return new Promise((resolve) => {
    userRef.get().then((userDoc) => {
      if (userDoc.exists) {
        resolve(userDoc.data().isAdmin);
      } else resolve(false);
    });
  });
}

export function getItemCategoryCount() {
  let countObj = {};
  return new Promise((resolve) => {
    firestore
      .collection(`itemCounts`)
      .get()
      .then((countSnapshot) => {
        countSnapshot.forEach((countData) => {
          countObj = { ...countObj, [countData.id]: countData.data().count };
        });
        resolve(countObj);
      });
  });
}

export function getAdminItems() {
  return new Promise((resolve, reject) => {
    firestore
      .collection("items")
      .get()
      .then((itemSnapshot) => {
        resolve(
          itemSnapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getCategories() {
  return new Promise((resolve, reject) => {
    firestore
      .collection("categories")
      .get()
      .then((categorySnapshot) => {
        resolve(
          categorySnapshot.docs.map((category) => {
            return {
              id: category.id,
              ...category.data(),
            };
          })
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export const auth = app.auth();
export const firestore = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
