import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Loading from "../../../components/loading/Loading";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import AdminProduct from "./AdminProduct";

export default function AdminProductList() {
  const {
    items,
    handleItemLoading,
    filterChar,
    clearFiltering,
    sortFunc,
    clearSorting,
  } = useItems();

  useEffect(() => {
    clearFiltering();
    clearSorting();
    if (!items.loaded) {
      handleItemLoading();
    }
  }, []);

  return (
    <div className="admin-product-list-container">
      {items.loaded ? (
        items.data
          .filter((item) => item.name.toLowerCase().includes(filterChar.items))
          .sort((a, b) => b.name.toLowerCase() - a.name.toLowerCase())
          .map((item) => <AdminProduct key={item.id} data={item} />)
      ) : (
        <Loading size="page" />
      )}
    </div>
  );
}
