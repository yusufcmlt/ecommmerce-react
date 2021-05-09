import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Loading from "../../../components/loading/Loading";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import AdminProduct from "./AdminProduct";

export default function AdminProductList() {
  const { items, handleItemLoading } = useItems();

  useEffect(() => {
    if (!items.loaded) {
      handleItemLoading();
    }
  }, []);

  return (
    <div className="admin-product-list-container">
      {items.loaded ? (
        items.data.map((item) => <AdminProduct data={item} />)
      ) : (
        <Loading size="page" />
      )}
    </div>
  );
}
