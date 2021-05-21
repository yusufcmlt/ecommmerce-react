import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import "../AdminPage.style.scss";

export default function AdminProduct({ data }) {
  const { name, category, price, quantity, imageURL, id } = data;
  const { categories, handleCategoryLoading } = useItems();

  useEffect(() => {
    if (!categories.loaded) {
      handleCategoryLoading();
    }
  }, []);
  return (
    <div className="admin-product-container">
      <img className="admin-product-image" src={imageURL} alt={name} />
      <div className="admin-product-info">
        <h4 className="admin-product-title">{name}</h4>
        <span className="admin-product-desc">Fiyat: {price} ₺</span>
        <span className="admin-product-desc">Stok: {quantity} Kg</span>
        <span className="admin-product-desc">
          Kategori:{" "}
          {categories.data
            .filter((ctgr) => category.includes(ctgr.id))
            .map((ctgr) => `${ctgr.name}, `)}
        </span>
      </div>
      <Link
        className="admin-product-link"
        to={{
          pathname: `${process.env.PUBLIC_URL}/yonetim/urunekle`,
          state: { ...data },
        }}
      >
        <CustomButton buttonIcon="edit" buttonSize="edit" />
      </Link>
    </div>
  );
}
