import React, { useContext, useState, useEffect, useMemo } from "react";
import { getCategories } from "../../firebase/firebase";

const ItemCategoryContext = React.createContext();

export function useItems() {
  return useContext(ItemCategoryContext);
}

export function ItemCategoryProvider({ children }) {
  const [itemLoading, setItemLoading] = useState(true);
  const [categories, setCategories] = useState({ loaded: false, data: [] });
  const [newItems, setNewItems] = useState([]);
  const [items, setItems] = useState([]);

  function handleCategoryLoading() {
    getCategories()
      .then((categoryData) => {
        setCategories({ loading: false, data: [...categoryData] });
        setItemLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (!categories.loaded && itemLoading) {
      handleCategoryLoading();
      console.log("Categories loading");
    }
  }, []);

  const value = { categories };
  return (
    <ItemCategoryContext.Provider value={value}>
      {!itemLoading && children}
    </ItemCategoryContext.Provider>
  );
}
