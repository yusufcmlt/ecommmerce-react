import React, { useEffect, useState } from "react";
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

  const [activeCategoryCount, setActiveCategoryCount] = useState(
    categories.data.length
  );
  const [filteredCategories, setFilteredCategories] = useState(categories.data);

  useEffect(() => {
    if (!categories.loaded) {
      handleCategoryLoading();
    }
    clearAllFilters();
  }, []);

  useEffect(() => {
    setFilteredCategories(
      categories.data
        .filter((item) =>
          item.name.toLowerCase().includes(filterChar.categories)
        )
        .sort(sortFunc.categories.func)
        .slice(...page),
      setActiveCategoryCount(filteredCategories.length)
    );
  }, [filterChar, sortFunc, filteredCategories.length, categories.data, page]);

  return (
    <div className="admin-category-list-container">
      {categories &&
        filteredCategories.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
      <PageNumberButtons
        itemCount={activeCategoryCount}
        handlePaging={handlePaging}
      />
    </div>
  );
}
