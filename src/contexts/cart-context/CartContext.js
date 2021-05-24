import React, { useContext, useState, useEffect } from "react";
import {
  addProductToCart,
  deleteUserCartItem,
  getUserCart,
} from "../../firebase/firebase";
import { useAuth } from "../auth-context/AuthContext";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartData, setCartData] = useState({ loaded: false, data: [] });
  const [cartCount, setCartCount] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);

  const { currentUser } = useAuth();

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

  useEffect(() => {});

  const value = {
    cartData,
    handleCartLoad,
    handleCartItemDelete,
    handleCartAdd,
    cartCount,
    cartUpdated,
    handleCartUpdate,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
