import React from "react";
import { useEffect } from "react/cjs/react.development";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";
import CategoryItem from "../../home-page/category-container/category-item/CategoryItem";

export default function AdminCategoryList() {
  const {
    categories,
    handleCategoryLoading,
    filterChar,
    clearFiltering,
  } = useItems();

  useEffect(() => {
    clearFiltering();
    if (!categories.loaded) {
      handleCategoryLoading();
    }
  }, []);

  return (
    <div className="admin-category-list-container">
      {categories &&
        categories.data
          .filter((category) =>
            category.name.toLowerCase().includes(filterChar.categories)
          )
          .map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
            />
          ))}
    </div>
  );
}
