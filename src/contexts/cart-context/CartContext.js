import React, { useContext, useState, useEffect } from "react";
import swal from "sweetalert";
import {
  addProductToCart,
  deleteUserCartItem,
  getUserCart,
  createOrUpdateUserAddress,
  getUserAddressList,
  deleteUserAddressItem,
  getOrderList,
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

  //ORDER INFO
  const [orderData, setOrderData] = useState({ loaded: false, data: [] });

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
    swal({
      title: "Ürün sil",
      text: "Ürünü sepetinden çıkarmak istiyor musun?",
      icon: "warning",
      buttons: ["Hayır", "Evet"],
      dangerMode: true,
    }).then((isDelete) => {
      if (isDelete) {
        setCartData({ ...cartData, loaded: false });
        deleteUserCartItem(userID, itemID)
          .then((success) => {
            swal("Ürün sepetten çıkartıldı.", {
              icon: "success",
              button: "Tamam",
            });
            handleCartLoad();
            console.log(success);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal("Ürün çıkartılmadı.", { icon: "info", button: "Tamam" });
      }
    });
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
        swal("Adres eklendi", { icon: "success", button: "Tamam" });
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
    swal({
      title: "Adres Sil",
      text: "Adresi silmek istediğinden emin misin?",
      icon: "warning",
      buttons: ["Hayır", "Evet"],
      dangerMode: true,
    }).then((isDelete) => {
      if (isDelete) {
        setCartData({ ...cartData, loaded: false });
        deleteUserAddressItem(currentUser.uid, addressID)
          .then((success) => {
            swal("Adres silindi", { icon: "success", button: "Tamam" });
            handleAddressLoad();
            console.log(success);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal("Adres silinmedi", { icon: "info", button: "Tamam" });
      }
    });
  }

  function handleOrderLoad() {
    console.log("User orders data loading.");
    getOrderList(currentUser.uid)
      .then((orderInfo) => {
        setOrderData({ loaded: true, data: [...orderInfo] });
        console.log("User order data loaded");
      })
      .catch((error) => {
        console.log(error);
      });
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
    orderData,
    handleOrderLoad,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
