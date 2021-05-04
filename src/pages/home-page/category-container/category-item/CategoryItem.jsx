import React from "react";

import "./CategoryItem.style.scss";

export default function CategoryItem({ name, imageUrl }) {
  return (
    <div
      className="category-item-container border-radius-5 box-shadow-rule-card"
      style={{
        backgroundImage: `linear-gradient(120deg, #2e274f80, #26294e), url(${imageUrl})`,
      }}
    >
      <h4 className="category-title">{name}</h4>
    </div>
  );
}
