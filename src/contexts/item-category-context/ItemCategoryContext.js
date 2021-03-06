import React, { useContext, useState, useEffect } from "react";

import {
  getAdminItems,
  getCategories,
  getItemCategoryCount,
  getNewFiveItem,
} from "../../firebase/firebase";
import { sortFunctions } from "../../utils/constants";

const ItemCategoryContext = React.createContext();

export function useItems() {
  return useContext(ItemCategoryContext);
}

export function ItemCategoryProvider({ children }) {
  const [categories, setCategories] = useState({ loaded: false, data: [] });
  const [newItems, setNewItems] = useState({ loaded: false, data: [] });
  const [items, setItems] = useState({ loaded: false, data: [] });
  const [adminItems, setAdminItems] = useState({ loaded: false, data: [] });

  const [counts, setCounts] = useState({
    loaded: false,
    items: 0,
    categories: 0,
  });
  const [filterChar, setFilterChar] = useState({ items: "", categories: "" });
  const [sortFunc, setSortFunc] = useState({
    items: {
      func: (a, b) =>
        a["name"].toLowerCase().localeCompare(b["name"].toLowerCase()),
    },
    categories: {
      func: (a, b) =>
        a["name"].toLowerCase().localeCompare(b["name"].toLowerCase()),
    },
  });
  const [page, setPage] = useState([0, 10]);

  useEffect(() => {
    console.log("Item Provider Mounted");
    return () => {
      console.log("Item Provider UnMounted");
      clearAllFilters();
    };
  }, []);

  function handleCountLoading() {
    console.log("Item and Category Numbers are Loading");
    getItemCategoryCount().then((countData) => {
      setCounts({ loaded: true, ...countData });
      console.log("Numbers Loaded");
    });
  }

  /**
   * ITEM LOAD
   */

  function handleItemLoading() {
    console.log("Items Loading");
    getAdminItems()
      .then((itemData) => {
        setItems({
          loaded: true,
          data: itemData.filter((item) => item.quantity > 0),
          keyPair: itemData
            .filter((item) => item.quantity > 0)
            .reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {}),
        });
        console.log("Items Loaded");
      })
      .catch((error) => {
        console.log("Failed to load items: ", error);
      });
  }
  function handleAdminItemsLoading() {
    console.log("Admin Items Loading");
    getAdminItems()
      .then((itemData) => {
        setAdminItems({
          loaded: true,
          data: [...itemData],
        });

        console.log("Admin items Loaded");
      })
      .catch((error) => {
        console.log("Failed to load items: ", error);
      });
  }

  function handleNewItemsLoading() {
    console.log("New Items Loading");
    getNewFiveItem()
      .then((newFiveItemsData) => {
        setNewItems({
          loaded: true,
          data: [...newFiveItemsData],
        });
        console.log("New items loaded.");
      })
      .catch((error) => console.log("Failed to load new items", error));
  }

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
  /**
   * FILTER
   */
  function handleFiltering(event) {
    const { name, value } = event.target;
    setFilterChar({ ...filterChar, [name]: value.toLowerCase() });
  }

  /**
   * SORTING
   */

  function handleSorting(event) {
    //Getting sort directions as ['list to sort','property to sort','sort order']
    const { value } = event.target;
    if (value) {
      const valueSplit = value.split("-");

      console.log(valueSplit);
      setSortFunc({
        ...sortFunc,
        [valueSplit[0]]: { func: sortFunctions[valueSplit[1]][valueSplit[2]] },
      });
    }
  }

  /**
   * PAGING
   */

  function handlePaging(event) {
    let { value } = event.target;
    value = Number(value);
    const startPage = (value - 1) * 10;
    const endPage = value * 10;

    setPage([startPage, endPage]);
  }

  /**
   * Clearing Filters
   */
  function clearAllFilters() {
    //Clear Filter Search Input
    setFilterChar({ items: "", categories: "" });
    //Clear Sorting
    setSortFunc({
      items: {
        func: (a, b) =>
          a["name"].toLowerCase().localeCompare(b["name"].toLowerCase()),
      },
      categories: {
        func: (a, b) =>
          a["name"].toLowerCase().localeCompare(b["name"].toLowerCase()),
      },
    });
    //Clear Paging
    setPage([0, 10]);
  }

  /**
   * EXPORT
   */

  const value = {
    categories,
    handleCategoryLoading,
    handleCountLoading,
    counts,
    handleItemLoading,
    items,
    handleNewItemsLoading,
    newItems,
    handleFiltering,
    filterChar,
    handleSorting,
    sortFunc,
    page,
    handlePaging,
    clearAllFilters,
    handleAdminItemsLoading,
    adminItems,
  };

  return (
    <ItemCategoryContext.Provider value={value}>
      {children}
    </ItemCategoryContext.Provider>
  );
}
