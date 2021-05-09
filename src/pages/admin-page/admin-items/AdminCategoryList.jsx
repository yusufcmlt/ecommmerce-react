import React from "react";
import { useEffect } from "react/cjs/react.development";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";
import CategoryItem from "../../home-page/category-container/category-item/CategoryItem";

export default function AdminCategoryList() {
  const { categories, handleCategoryLoading } = useItems();

  useEffect(() => {
    if (!categories.loaded) {
      handleCategoryLoading();
    }
  });

  return (
    <div className="admin-category-list-container">
      {categories &&
        categories.data.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
    </div>
  );
}
