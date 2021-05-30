import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import { useCart } from "../../contexts/cart-context/CartContext";
import AddressItem from "./AddressItem";

export default function AdressList({ handleSelectedAddress, selectedAddress }) {
  const { handleAddressLoad, addressData } = useCart();

  useEffect(() => {
    if (!addressData.loaded) {
      handleAddressLoad();
    }
  }, []);

  return (
    <div className="address-list-container">
      {addressData.loaded ? (
        addressData.data.length ? (
          addressData.data.map((address) => (
            <AddressItem
              key={address.id}
              data={address}
              handleSelectedAddress={handleSelectedAddress}
              selected={address.id === selectedAddress.id}
            />
          ))
        ) : (
          <h3> Kayıtlı adresiniz bulunmuyor.</h3>
        )
      ) : (
        <Loading size="page" />
      )}
    </div>
  );
}
