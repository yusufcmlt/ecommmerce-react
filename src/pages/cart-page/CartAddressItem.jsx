import React from "react";

import "./CartPage.style.scss";

export default function CartAddressItem({ data }) {
  const { name, firstName, address } = data;

  return (
    <div className="cart-address-item">
      <h4>{name}</h4>
      <div>
        <p>{firstName}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}
