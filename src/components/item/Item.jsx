import React from "react";

import "./Item.style.scss";

export default function Item({ image, name, price, desc }) {
  return (
    <div className="item-container">
      <img src={image} alt={name} className="item-image" />
      <div className="item-description-container">
        <h4 className="item-title">{name}</h4>
        <span className="item-description">{desc}</span>
        <span className="item-price">{price}TL</span>
      </div>
    </div>
  );
}
