import React from "react";

import "./CartPage.style.scss";

export default function CartItem({ cartData }) {
  const { name, imageURL, price, quantity } = cartData;
  return (
    <div className="cart-item-container">
      <img src={imageURL} className="cart-item-image" alt="item" />
      <div className="cart-item-info">
        <h4>{name}</h4>
        <span>Birim fiyat:{price}₺</span>
      </div>
      <div className="cart-item-options">
        <span>{quantity}</span>
        <span>Item Delete</span>
      </div>
    </div>
  );
}
