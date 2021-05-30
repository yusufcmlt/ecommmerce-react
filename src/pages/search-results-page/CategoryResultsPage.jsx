import React, { useEffect, useState } from "react";
import queryString from "query-string";

import { useLocation, useParams } from "react-router";

import Item from "../../components/item/Item";
import Loading from "../../components/loading/Loading";
import PageSideMenu from "../../components/page-side-menu/PageSideMenu";
import { useItems } from "../../contexts/item-category-context/ItemCategoryContext";

import "./SearchResultsPage.style.scss";
import { sortFunctions } from "../../utils/constants";

export default function CategoryResultsPage() {
  const { categoryID } = useParams();
  const { search, pathname } = useLocation();
  const searchQuery = queryString.parse(search);

  //State
  const [sortParams, setSortParams] = useState("");

  const { categories, items, handleItemLoading, handleCategoryLoading } =
    useItems();

  useEffect(() => {
    if (!items.loaded || !categories.loaded) {
      handleItemLoading();
      handleCategoryLoading();
    }
  }, []);

  useEffect(() => {
    if (searchQuery.sort) {
      setSortParams(searchQuery.sort.split("-"));
    }
  }, [search, pathname]);

  const categoryTitle = categories.loaded
    ? categories.data.filter((category) => category.id === categoryID)[0].name
    : "Kategori";

  const categoryItemData = items.loaded
    ? items.data.filter((item) => item.category.includes(categoryID))
    : [];

  return (
    <section id="category-results-section">
      <h2 className="app-section-h3-title">{categoryTitle}</h2>
      <PageSideMenu
        key="yct245766"
        title="Ürün Filtrele"
        size="page-side-product"
      />
      <div className="items-container">
        {items.loaded ? (
          categoryItemData
            .sort(
              sortParams
                ? sortFunctions[sortParams[0]][sortParams[1]]
                : sortFunctions.name.asc
            )
            .map((item) => (
              <Item
                key={item.name + item.price}
                image={item.imageURL}
                name={item.name}
                price={item.price}
                desc={item.description}
                routeTo={item.id}
              />
            ))
        ) : (
          <Loading size="page" />
        )}
      </div>
    </section>
  );
}
