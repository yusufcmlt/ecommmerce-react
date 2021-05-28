import React, { useState, useEffect } from "react";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import CustomButton from "../custom-button/CustomButton";

import "./PageNumberButtons.style.scss";

export default function PageNumberButtons({ itemCount }) {
  const [pageCount, setPageCount] = useState(0);
  const { handlePaging } = useItems();

  useEffect(() => {
    const pageDivide = itemCount / 10;
    if (itemCount % 10 > 0) {
      setPageCount(Math.ceil(pageDivide));
    } else if (itemCount === 0) {
      setPageCount(0);
    } else {
      setPageCount(pageDivide);
    }
  }, [itemCount]);

  function pageButtonCreator() {
    const buttonList = [];
    for (let i = 0; i < pageCount; i++) {
      buttonList.push(
        <CustomButton
          key={i + 1}
          buttonText={i + 1}
          buttonSize="page-number"
          buttonValue={i + 1}
          funcOnPress={handlePaging}
        />
      );
    }
    return buttonList;
  }

  return <div className="page-number-container">{pageButtonCreator()}</div>;
}
