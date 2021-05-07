import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../components/buttons/custom-button/CustomButton";

import "../AdminPage.style.scss";

export default function AdminProduct({ name, image, price, number }) {
  return (
    <div className="admin-product-container">
      <img className="admin-product-image" src={image} alt={name} />
      <div className="admin-product-info">
        <h4 className="admin-product-title">{name}</h4>
        <span className="admin-product-desc">Fiyat: {price} TL</span>
        <span className="admin-product-desc">Stok: {number} Kg</span>
      </div>
      <Link className="admin-product-link" to="/yonetim/urunler/:urunID">
        <CustomButton buttonIcon="edit" buttonSize="edit" />
      </Link>
    </div>
  );
}
