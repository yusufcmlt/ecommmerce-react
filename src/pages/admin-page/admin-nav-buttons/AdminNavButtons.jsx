import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../components/buttons/custom-button/CustomButton";

import "../AdminPage.style.scss";

export default function AdminNavButtons({
  productCount,
  categoryCount,
  navPosition,
}) {
  return (
    <nav className={`admin-nav-buttons admin-nav-${navPosition}`}>
      <Link to="/yonetim/urunler">
        <CustomButton
          buttonText={productCount}
          buttonSize="admin-nav"
          buttonIcon="product"
          buttonInfo="Ürünler"
        />
      </Link>
      <Link to="/yonetim/urunler">
        <CustomButton
          buttonText={categoryCount}
          buttonSize="admin-nav"
          buttonIcon="category"
          buttonInfo="Kategoriler"
        />
      </Link>
    </nav>
  );
}
