import React, { useContext, useState, useEffect, useMemo } from "react";

import {
  getAdminItems,
  getCategories,
  getItemCategoryCount,
  getNewFiveItem,
} from "../../firebase/firebase";

const ItemCategoryContext = React.createContext();

export function useItems() {
  return useContext(ItemCategoryContext);
}

export function ItemCategoryProvider({ children }) {
  //const [itemLoading, setItemLoading] = useState(true);
  const [categories, setCategories] = useState({ loaded: false, data: [] });
  const [newItems, setNewItems] = useState({ loaded: false, data: [] });
  const [items, setItems] = useState({ loaded: false, data: [] });
  const [counts, setCounts] = useState({
    loaded: false,
    items: 0,
    categories: 0,
  });

  function handleCategoryLoading() {
    console.log("Categories Loading");
    getCategories()
      .then((categoryData) => {
        setCategories({ loaded: true, data: [...categoryData] });
        console.log("Categories Loaded");
      })
      .catch((error) => {
        console.log(error);
        console.log("Categories Failed to Load");
      });
  }

  function handleCountLoading() {
    console.log("Item and Category Numbers are Loading");
    getItemCategoryCount().then((countData) => {
      setCounts({ loaded: true, ...countData });
      console.log("Numbers Loaded");
    });
  }

  function handleItemLoading() {
    console.log("Items Loading");
    getAdminItems()
      .then((itemData) => {
        setItems({ loaded: true, data: [...itemData] });
        console.log("Items Loaded");
      })
      .catch((error) => {
        console.log("Failed to load items: ", error);
      });
  }

  function handleNewItemsLoading() {
    console.log("New Items Loading");
    getNewFiveItem()
      .then((newFiveItemsData) => {
        setNewItems({ loaded: true, data: [...newFiveItemsData] });
        console.log("New items loaded.");
      })
      .catch((error) => console.log("Failed to load new items", error));
  }

  const value = {
    categories,
    handleCategoryLoading,
    handleCountLoading,
    counts,
    handleItemLoading,
    items,
    handleNewItemsLoading,
    newItems,
  };
  return (
    <ItemCategoryContext.Provider value={value}>
      {children}
    </ItemCategoryContext.Provider>
  );
}
