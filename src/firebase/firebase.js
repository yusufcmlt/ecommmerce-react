import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { randomNumberForLink } from "../utils/constants";

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
  return new Promise((resolve) => {
    firestore
      .collection(`itemCounts`)
      .get()
      .then((countSnapshot) => {
        resolve(
          countSnapshot.docs.reduce((acc, countDoc) => {
            return { ...acc, [countDoc.id]: countDoc.data()["count"] };
          }, {})
        );
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

export function getNewFiveItem() {
  return new Promise((resolve, reject) => {
    firestore
      .collection("items")
      .where("quantity", ">", 0)
      .orderBy("quantity")
      .orderBy("dateAdded", "desc")
      .limit(5)
      .get()
      .then((itemSnapshot) =>
        resolve(
          itemSnapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
        )
      )
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

// export function checkCartItemsOnBuy(cartItems){

//   const itemsRef = firestore.collection('items');

//   return new Promise((resolve,reject)=>{

//     for(const item in cartItems){

//       itemsRef.doc(item).get().then(itemData=>{
//         if(itemData.exists && itemData.data().quantity-cartItems[item]>=0){

//         }
//         else{
//           reject("Ürün")
//         }
//       })

//     }

//   })

// }

export function createOrUpdateItemCategory(form, image, type, isUpdate) {
  //REF
  const documentRef = firestore.collection(type).doc(form.id);
  const countRef = firestore.collection("itemCounts").doc(type);
  const fileRef = storage.ref(`${type}-images`);
  const increment = firebase.firestore.FieldValue.increment(1);

  return new Promise((resolve, reject) => {
    //Checking if a new image provided or not(Update the image).
    //User can't pass the form submit without providing either a url or an image file
    //Only check for image file. If it is an existing item or category there will be an url.
    if (image) {
      fileRef
        .child(form.id)
        .put(image)
        .then((imageSnapshot) => {
          imageSnapshot.ref.getDownloadURL().then((imageURL) => {
            form.imageURL = imageURL;
            const { id, ...restInfo } = form;
            if (isUpdate) {
              documentRef
                .update(restInfo)
                .then(() => {
                  resolve(`${type} updated.`);
                })
                .catch((error) => reject(error));
            } else {
              documentRef
                .set(restInfo)
                .then(() => {
                  countRef.update({ count: increment });
                  resolve(`New ${type} added.`);
                })
                .catch((error) => reject(error));
            }
          });
        });
    } else {
      const { id, ...restInfo } = form;
      documentRef
        .update({ ...restInfo })
        .then(() => {
          resolve(`${type} updated`);
        })
        .catch((error) => reject(error));
    }
  });
}

export function removeItemCategory(id, type) {
  const deleteImageRef = storage.ref(`${type}-images/${id}`);
  const docRef = firestore.collection(type).doc(id);
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const countRef = firestore.collection("itemCounts").doc(type);
  return new Promise((resolve, reject) => {
    deleteImageRef
      .delete()
      .then(() => {
        docRef
          .delete()
          .then(() => {
            countRef.update({ count: decrement });
            resolve(`${type} deleted`);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getIndividualProduct(productID) {
  const productRef = firestore.collection("items").doc(productID);

  return new Promise((resolve, reject) => {
    productRef
      .get()
      .then((productSnapshot) => {
        //console.log(productSnapshot.data());
        resolve({ id: productSnapshot.id, ...productSnapshot.data() });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function addProductToCart(productInfo, userID) {
  const cartRef = firestore.doc(`carts/${userID}`);

  const { name, id, imageURL, price, quantity, totalQuantity } = productInfo;

  return new Promise((resolve, reject) => {
    cartRef.get().then((cartData) => {
      if (cartData.exists) {
        let cartCopy = cartData.data();

        cartCopy = {
          ...cartCopy,
          [id]: cartCopy[id]
            ? {
                name,
                imageURL,
                price,
                quantity:
                  cartCopy[id].quantity + quantity > totalQuantity
                    ? totalQuantity
                    : cartCopy[id].quantity + quantity,
              }
            : { name, imageURL, price, quantity },
        };

        cartRef
          .update({ ...cartCopy })
          .then(resolve("Added to cart"))
          .catch((error) => reject(error));
      } else {
        const cartInfo = { name, imageURL, price, quantity };

        cartRef
          .set({ [id]: { ...cartInfo } })
          .then(resolve("Added to cart"))
          .catch((error) => reject(error));
      }
    });
  });
}
export function getUserCart(userID) {
  const cartRef = firestore.collection("carts").doc(userID);

  return new Promise((resolve, reject) => {
    cartRef
      .get()
      .then((cartData) => {
        if (cartData.exists) {
          resolve(
            Object.keys(cartData.data()).map((cartItem) => ({
              id: cartItem,
              ...cartData.data()[cartItem],
            }))
          );
        } else {
          resolve([]);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function deleteUserCartItem(userID, itemID) {
  const cartRef = firestore.collection("carts").doc(userID);

  return new Promise((resolve, reject) => {
    cartRef
      .update({
        [itemID]: firebase.firestore.FieldValue.delete(),
      })
      .then(() => {
        resolve("Item Deleted");
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getUserAddressList(userID) {
  const addressRef = firestore.collection("addresses").doc(userID);

  return new Promise((resolve, reject) => {
    addressRef
      .get()
      .then((addressData) => {
        if (addressData.exists) {
          resolve(
            Object.keys(addressData.data()).map((addressItem) => ({
              id: addressItem,
              ...addressData.data()[addressItem],
            }))
          );
        } else {
          resolve([]);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function deleteUserAddressItem(userID, addressID) {
  const addressRef = firestore.collection("addresses").doc(userID);

  return new Promise((resolve, reject) => {
    addressRef
      .update({
        [addressID]: firebase.firestore.FieldValue.delete(),
      })
      .then(() => {
        resolve("Address Deleted");
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function createOrUpdateUserAddress(userID, addressInfo, addressID = "") {
  const addressRef = firestore.collection("addresses").doc(userID);
  const { name } = addressInfo;

  addressID =
    addressID ||
    `${name.replace(/\s+/g, "-").toLowerCase()}-${randomNumberForLink()}`;

  return new Promise((resolve, reject) => {
    addressRef.get().then((addressDoc) => {
      if (addressDoc.exists) {
        addressRef
          .update({ [addressID]: { ...addressInfo } })
          .then(() => {
            resolve("User address updated");
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        addressRef
          .set({ [addressID]: { ...addressInfo } })
          .then(() => {
            resolve("A user address created for the first time");
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  });
}

export const storage = app.storage();
export const auth = app.auth();
export const firestore = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
