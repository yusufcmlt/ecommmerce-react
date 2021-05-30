import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createOrder } from "../../firebase/firebase";
import swal from "sweetalert";

import CustomButton from "../../components/buttons/custom-button/CustomButton";
import CustomSelect from "../../components/buttons/custom-select/CustomSelect";
import CartAddressItem from "./CartAddressItem";

import "./CartPage.style.scss";
import "../address-page/AddressPage.style.scss";

import { useCart } from "../../contexts/cart-context/CartContext";
import { useItems } from "../../contexts/item-category-context/ItemCategoryContext";
import { useAuth } from "../../contexts/auth-context/AuthContext";

export default function CartSideMenu({ total }) {
  const history = useHistory();
  const { addressData, handleAddressLoad, cartData, handleCartLoad } =
    useCart();
  const { items, handleItemLoading } = useItems();
  const { currentUser } = useAuth();

  const [selectedAddress, setSelectedAddress] = useState({});

  useEffect(() => {
    if (!addressData.loaded) {
      handleAddressLoad();
    }
    if (!items.loaded) {
      handleItemLoading();
    }
  }, []);

  function createAddressOption() {
    if (addressData.loaded) {
      return addressData.data.map((address) => ({
        name: address.name,
        value: address.id,
      }));
    } else return [];
  }

  function handleSelectChange(event) {
    const { value } = event.target;
    console.log(value);
    if (value) {
      setSelectedAddress(
        addressData.data.filter((address) => address.id === value)[0]
      );
    } else {
      setSelectedAddress({});
    }
  }

  function handleBuyProducts() {
    if (checkIfAddressEmpty()) {
      const itemIDs = cartData.data.reduce(
        (acc, item) => ({
          ...acc,
          [item.id]: {
            quantity: item.quantity,
            name: item.name,
            price: item.price,
          },
        }),
        {}
      );
      if (checkCartItemsOnBuy(itemIDs)) {
        const { id, ...addressRest } = selectedAddress;
        createOrder(itemIDs, currentUser.uid, addressRest, total)
          .then((message) => {
            console.log(message);
            handleCartLoad();
            swal("Satın alımınız için teşekkürler", {
              icon: "success",
              button: "Tamam",
            }).then((isConfirm) => {
              history.push({ pathname: "/siparislerim" });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      swal("Adres alanı boş bırakılamaz", {
        icon: "warning",
        button: "Tamam",
      });
    }
  }

  function checkIfAddressEmpty() {
    return Object.keys(selectedAddress).length;
  }

  //MODIFIES EXISTING ITEMIDS OBJECT
  function checkCartItemsOnBuy(cartItemsID) {
    const { keyPair } = items;
    for (const cartKey in cartItemsID) {
      if (
        !keyPair[cartKey] ||
        keyPair[cartKey] - cartItemsID[cartKey].quantity < 0
      ) {
        swal({
          title: "Eksik ürün",
          text: `${cartItemsID[cartKey].name} ürünü tükenmiş olabilir.`,
          icon: "warning",
          button: "Tamam",
        });
        return false;
      } else {
        cartItemsID[cartKey].leftItems =
          keyPair[cartKey] - cartItemsID[cartKey].quantity;
      }
    }

    return true;
  }

  return (
    <div className="cart-menu-container">
      <h3 className="cart-order-title">Adres</h3>
      <CustomSelect
        options={createAddressOption()}
        size="cart-address-select"
        selectOnChange={handleSelectChange}
      />
      {checkIfAddressEmpty() ? (
        <CartAddressItem data={selectedAddress} />
      ) : null}
      <CustomButton
        buttonSize="admin-menu size-sidemenu"
        buttonText="Yeni Adres Ekle"
        funcOnPress={() => {
          history.push({ pathname: "/adreslerim" });
        }}
      />
      <h3 className="cart-order-title">Sipariş Özeti</h3>
      <div className="cart-order-container">
        <span className="cart-order-info">
          Ara Toplam:
          <span className="cart-order-result">
            {total}
            <span className="currency-symbol">₺</span>
          </span>
        </span>
        <span className="cart-order-info">
          Kargo:
          <span className="cart-order-result">
            10<span className="currency-symbol">₺</span>
          </span>
        </span>
        <span className="cart-order-info">
          Toplam:
          <span className="cart-order-result">
            {total + 10}
            <span className="currency-symbol">₺</span>
          </span>
        </span>
      </div>
      <CustomButton
        buttonSize="admin-menu size-sidemenu"
        buttonText="Satın Al"
        funcOnPress={handleBuyProducts}
      />
    </div>
  );
}
