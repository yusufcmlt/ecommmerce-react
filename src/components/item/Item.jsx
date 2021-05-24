import React from "react";
import { useHistory } from "react-router";

import "./Item.style.scss";

export default function Item({ image, name, price, desc, routeTo }) {
  const history = useHistory();
  return (
    <div
      className="item-container"
      onClick={() => {
        history.push({ pathname: `/urun/${routeTo}` });
      }}
    >
      <img src={image} alt={name} className="item-image" />
      <div className="item-description-container">
        <h4 className="item-title">{name}</h4>
        <span className="item-description">{desc}</span>
        <span className="item-price">
          {price}
          <span className="currency-symbol">₺</span>
        </span>
      </div>
    </div>
  );
}
