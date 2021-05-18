import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageNumberButtons from "../../../components/buttons/page-number-buttons/PageNumberButtons";

import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";
import CategoryItem from "../../home-page/category-container/category-item/CategoryItem";

export default function AdminCategoryList() {
  const {
    categories,
    handleCategoryLoading,
    filterChar,
    sortFunc,
    page,
    handlePaging,
    clearAllFilters,
  } = useItems();

  const location = useLocation();
  const [activeCategoryCount, setActiveCategoryCount] = useState(
    categories.data.length
  );
  const [filteredCategories, setFilteredCategories] = useState(categories.data);
  const [isUpdated, setUpdated] = useState(
    location.state ? location.state.isUpdated : false
  );

  useEffect(() => {
    if (!categories.loaded || isUpdated) {
      handleCategoryLoading();
      setUpdated(false);
    }
    clearAllFilters();
  }, []);

  useEffect(() => {
    if (categories.data) {
      setFilteredCategories(
        categories.data
          .filter((category) =>
            category.name.toLowerCase().includes(filterChar.categories)
          )
          .sort(sortFunc.categories.func)
          .slice(...page),
        setActiveCategoryCount(filteredCategories.length)
      );
    }
  }, [filterChar, sortFunc, filteredCategories.length, categories.data, page]);

  return (
    <div className="admin-category-list-container">
      <p className="admin-list-info">
        {activeCategoryCount
          ? `${activeCategoryCount} Kategori gösteriliyor`
          : "Ürün bulunamadı"}
      </p>
      {categories &&
        filteredCategories.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            imageURL={category.imageURL}
          >
            <Link
              className="admin-category-link"
              to={{
                pathname: `/yonetim/kategoriekle`,
                state: { ...category },
              }}
            ></Link>
          </CategoryItem>
        ))}
      <PageNumberButtons
        itemCount={activeCategoryCount}
        handlePaging={handlePaging}
      />
    </div>
  );
}
