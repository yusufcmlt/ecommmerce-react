import React, { useContext, useState, useEffect } from "react";
import {
  addProductToCart,
  deleteUserCartItem,
  getUserCart,
  createOrUpdateUserAddress,
  getUserAddressList,
  deleteUserAddressItem,
} from "../../firebase/firebase";
import { useAuth } from "../auth-context/AuthContext";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  //CART INFO
  const [cartData, setCartData] = useState({ loaded: false, data: [] });
  const [cartCount, setCartCount] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);

  //ADDRESS INFO
  const [addressData, setAddressData] = useState({ loaded: false, data: [] });
  const [addressUpdated, setAddressUpdated] = useState(false);

  const { currentUser } = useAuth();
  //CART
  function handleCartLoad() {
    console.log("Cart loading...");
    getUserCart(currentUser.uid).then((cartInfo) => {
      setCartData({ loaded: true, data: [...cartInfo] });
      cartInfo && setCartCount(cartInfo.length);
      //console.log(cartInfo);
      console.log("Cart loaded.");
    });
    handleCartUpdate(false);
  }
  function handleCartItemDelete(userID, itemID) {
    if (window.confirm(`Ürün silinsin mi?`)) {
      setCartData({ ...cartData, loaded: false });
      deleteUserCartItem(userID, itemID)
        .then((success) => {
          alert("Ürün silindi");
          handleCartLoad();
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  function handleCartAdd(itemInfo, userInfo) {
    addProductToCart(itemInfo, userInfo).then((message) => {
      handleCartLoad();
      console.log(message);
    });
  }

  function handleCartUpdate(updateState) {
    setCartUpdated((cartUpdated) => updateState);
  }

  //ADDRESS
  function handleAddressUpdate(updateState) {
    setAddressUpdated((addressUpdated) => updateState);
  }
  function handleAddressAdd(addressInfo, addressID = "") {
    createOrUpdateUserAddress(currentUser.uid, addressInfo, addressID)
      .then((message) => {
        console.log(message);
        handleAddressLoad();
        handleAddressUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleAddressLoad() {
    console.log("User addresses are loading...");
    setAddressData({ ...addressData, loaded: false });
    getUserAddressList(currentUser.uid)
      .then((addressInfo) => {
        setAddressData({ loaded: true, data: [...addressInfo] });
        console.log("User addresses are loaded.");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        handleAddressUpdate(false);
      });
  }

  function handleAddressDelete(addressID) {
    if (window.confirm(`Adres silinsin mi?`)) {
      setCartData({ ...cartData, loaded: false });
      deleteUserAddressItem(currentUser.uid, addressID)
        .then((success) => {
          alert("Ürün silindi");
          handleAddressLoad();
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => {});

  const value = {
    cartData,
    handleCartLoad,
    handleCartItemDelete,
    handleCartAdd,
    cartCount,
    cartUpdated,
    addressData,
    handleCartUpdate,
    handleAddressAdd,
    handleAddressLoad,
    handleAddressDelete,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
