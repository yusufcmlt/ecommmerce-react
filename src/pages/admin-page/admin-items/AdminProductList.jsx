import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import PageNumberButtons from "../../../components/buttons/page-number-buttons/PageNumberButtons";
import Loading from "../../../components/loading/Loading";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import AdminProduct from "./AdminProduct";

export default function AdminProductList() {
  const {
    items,
    handleItemLoading,
    filterChar,
    sortFunc,
    page,
    handlePaging,
    clearAllFilters,
  } = useItems();

  const [activeItemCount, setActiveItemCount] = useState(items.data.length);
  const [filteredItems, setFilteredItems] = useState(items.data);

  //Load Items on Page Load
  useEffect(() => {
    if (!items.loaded) {
      handleItemLoading();
    }
    clearAllFilters();
  }, []);

  useEffect(() => {
    if (items.data) {
      setFilteredItems(
        items.data
          .filter((item) => item.name.toLowerCase().includes(filterChar.items))
          .sort(sortFunc.items.func)
          .slice(...page),
        setActiveItemCount(filteredItems.length)
      );
    }
  }, [filterChar, sortFunc, filteredItems.length, items.data, page]);

  return (
    <div className="admin-product-list-container">
      <p className="admin-list-info">
        {activeItemCount
          ? `${activeItemCount} Ürün gösteriliyor`
          : "Ürün bulunamadı"}
      </p>
      {items.loaded ? (
        filteredItems.map((item) => <AdminProduct key={item.id} data={item} />)
      ) : (
        <Loading size="page" />
      )}
      <PageNumberButtons
        itemCount={activeItemCount}
        handlePaging={handlePaging}
      />
    </div>
  );
}
