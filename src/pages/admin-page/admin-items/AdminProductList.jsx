import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PageNumberButtons from "../../../components/buttons/page-number-buttons/PageNumberButtons";
import Loading from "../../../components/loading/Loading";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import AdminProduct from "./AdminProduct";

export default function AdminProductList() {
  const location = useLocation();

  const {
    adminItems,
    handleAdminItemsLoading,
    filterChar,
    sortFunc,
    page,
    handlePaging,
    clearAllFilters,
    handleCategoryLoading,
  } = useItems();

  const [activeItemCount, setActiveItemCount] = useState(
    adminItems.data.length
  );
  const [filteredItems, setFilteredItems] = useState(adminItems.data);
  const [filteredItemsCount, setFilteredItemsCount] = useState(0);
  const [isUpdated, setUpdated] = useState(
    location.state ? location.state.isUpdated : false
  );

  //Load Items on Page Load
  useEffect(() => {
    if (!adminItems.loaded || isUpdated) {
      handleAdminItemsLoading();
      handleCategoryLoading();
      setUpdated(false);
    }

    clearAllFilters();
  }, []);

  useEffect(() => {
    if (adminItems.data) {
      const filterItem = adminItems.data
        .filter((item) => item.name.toLowerCase().includes(filterChar.items))
        .sort(sortFunc.items.func);
      setFilteredItemsCount(filterItem.length);
      setFilteredItems(
        filterItem.slice(...page),
        setActiveItemCount(filteredItems.length)
      );
    }
  }, [filterChar, sortFunc, filteredItems.length, adminItems.data, page]);

  return (
    <div className="admin-product-list-container">
      <p className="admin-list-info">
        {activeItemCount
          ? `${activeItemCount} Ürün gösteriliyor`
          : "Ürün bulunamadı"}
      </p>
      {adminItems.loaded ? (
        filteredItems.map((item) => <AdminProduct key={item.id} data={item} />)
      ) : (
        <Loading size="page" />
      )}
      <PageNumberButtons itemCount={filteredItemsCount} />
    </div>
  );
}
