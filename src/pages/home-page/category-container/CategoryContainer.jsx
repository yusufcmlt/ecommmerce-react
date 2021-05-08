import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import CategoryItem from "./category-item/CategoryItem";

import "./CategoryContainer.style.scss";
export default function CategoryContainer() {
  const [mouseOverInterval, setMouseOver] = useState();

  const { categories } = useItems();

  // useEffect(() => {
  //   console.log(categories.length);
  //   if (!categories.length) {
  //     handleCategoryLoading();
  //   }
  // }, []);

  function handleCategoryScroll(direction) {
    const categoryContainer = document.getElementById("category-container");
    const slideInterval = setInterval(() => {
      categoryContainer.scrollBy({ left: direction, behavior: "smooth" });
    }, 100);
    setMouseOver(slideInterval);
  }

  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <div className="categories-all">
      {!isMobile && (
        <CustomButton
          buttonSize="category-nav"
          buttonText="<"
          buttonMouseOver={() => {
            handleCategoryScroll(-100);
          }}
          buttonOut={() => {
            clearInterval(mouseOverInterval);
          }}
        />
      )}
      <div id="category-container" className="categories-container">
        {categories &&
          categories.data.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
            />
          ))}
      </div>
      {!isMobile && (
        <CustomButton
          buttonSize="category-nav"
          buttonText=">"
          buttonMouseOver={() => {
            handleCategoryScroll(100);
          }}
          buttonOut={() => {
            clearInterval(mouseOverInterval);
          }}
        />
      )}
    </div>
  );
}
