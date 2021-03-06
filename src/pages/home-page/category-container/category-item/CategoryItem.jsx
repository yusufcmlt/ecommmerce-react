import React from "react";

import "./CategoryItem.style.scss";

export default function CategoryItem({ name, imageURL, children }) {
  return (
    <div
      className="category-item-container border-radius-10 box-shadow-rule-card"
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(251, 179, 36, 0.50), rgba(140,75,5,0.95)), url(${imageURL})`,
      }}
    >
      <h4 className="category-title">{name}</h4>
      {children}
    </div>
  );
}
