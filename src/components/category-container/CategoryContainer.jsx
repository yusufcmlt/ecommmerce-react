import React from "react";

import { categories } from "../../utils/constants";
import CategoryItem from "./category-item/CategoryItem";

import "./CategoryContainer.style.scss";
export default function CategoryContainer() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.name}
          name={category.name}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
}
