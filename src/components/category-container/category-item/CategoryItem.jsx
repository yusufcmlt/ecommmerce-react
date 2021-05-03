import React from "react";

import "./CategoryItem.style.scss";

export default function CategoryItem({ name, imageUrl }) {
  return (
    <div
      className="category-item-container border-radius-5 box-shadow-rule-card"
      style={{
        backgroundImage: `linear-gradient(149.25deg, rgba(41, 44, 69, 0.7) 5%, rgba(38, 35, 63, 0.8) 86.62%), url(${imageUrl})`,
      }}
    >
      <h4 className="category-title">{name}</h4>
    </div>
  );
}
