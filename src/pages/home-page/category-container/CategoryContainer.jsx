import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

//Components
import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import Loading from "../../../components/loading/Loading";
import CategoryItem from "./category-item/CategoryItem";

//Styles
import "./CategoryContainer.style.scss";
import { Link } from "react-router-dom";

export default function CategoryContainer() {
  const [mouseOverInterval, setMouseOver] = useState();
  const { categories, handleCategoryLoading } = useItems();

  //Scroll horizontally on mouse over
  function handleCategoryScroll(direction) {
    const categoryContainer = document.getElementById("category-container");
    const slideInterval = setInterval(() => {
      categoryContainer.scrollBy({ left: direction, behavior: "smooth" });
    }, 100);
    setMouseOver(slideInterval);
  }

  //Load categories on mount if not loaded
  useEffect(() => {
    if (!categories.loaded) {
      handleCategoryLoading();
    }
  }, []);

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
        {categories.loaded ? (
          categories &&
          categories.data.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              imageURL={category.imageURL}
            >
              <Link
                className="home-category-link"
                to={{
                  pathname: `/kategori/${category.id}`,
                  state: category,
                }}
              ></Link>
            </CategoryItem>
          ))
        ) : (
          <Loading size="page" />
        )}
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
