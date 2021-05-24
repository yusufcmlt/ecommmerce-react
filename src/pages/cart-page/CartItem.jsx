import React from "react";
import { useHistory } from "react-router";
import CustomButton from "../../components/buttons/custom-button/CustomButton";

import "./CartPage.style.scss";

export default function CartItem({ cartData, itemDelete }) {
  const history = useHistory();
  const { id, name, imageURL, price, quantity } = cartData;

  return (
    <div className="cart-item-container">
      <img src={imageURL} className="cart-item-image" alt="item" />
      <div
        className="cart-item-info"
        onClick={() => {
          history.push({ pathname: `/urun/${id}` });
        }}
      >
        <h4>{name}</h4>
        <span>Ürün miktarı:{quantity} Kg</span>
        <span>
          Birim fiyat:{price}
          <span className="currency-symbol">₺</span>
        </span>
      </div>
      <div className="cart-item-options">
        <CustomButton
          buttonSize="edit"
          buttonIcon="delete"
          funcOnPress={itemDelete}
        />
      </div>
    </div>
  );
}
