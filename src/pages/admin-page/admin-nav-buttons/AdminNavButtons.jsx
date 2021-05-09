import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import Loading from "../../../components/loading/Loading";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import "../AdminPage.style.scss";

export default function AdminNavButtons({ navPosition }) {
  const { handleCountLoading, counts } = useItems();

  useEffect(() => {
    if (!counts.loaded) {
      handleCountLoading();
    }
  }, []);

  return (
    <nav className={`admin-nav-buttons admin-nav-${navPosition}`}>
      {counts.loaded ? (
        <React.Fragment>
          <Link to="/yonetim/urunler" className="admin-nav-link">
            <CustomButton
              buttonText={counts.items}
              buttonSize="admin-nav"
              buttonIcon="product"
              buttonInfo="Ürünler"
            />
          </Link>
          <Link to="/yonetim/kategoriler" className="admin-nav-link">
            <CustomButton
              buttonText={counts.categories}
              buttonSize="admin-nav"
              buttonIcon="category"
              buttonInfo="Kategoriler"
            />
          </Link>
        </React.Fragment>
      ) : (
        <Loading size="page" />
      )}
    </nav>
  );
}
