import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import { useItems } from "../../contexts/item-category-context/ItemCategoryContext";

import Item from "../../components/item/Item";
import Loading from "../../components/loading/Loading";

import "./SearchResultsPage.style.scss";
import PageSideMenu from "../../components/page-side-menu/PageSideMenu";
import { sortFunctions } from "../../utils/constants";

export default function SearchResultsPage() {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const searchQuery = queryString.parse(search);
  const { items, handleItemLoading } = useItems();

  const [sortParams, setSortParams] = useState("");

  useEffect(() => {
    if (!items.loaded) {
      handleItemLoading();
    }
  }, []);

  useEffect(() => {
    if (!search) {
      history.replace({ pathname: "/" });
    }
    if (searchQuery.sort) {
      setSortParams(searchQuery.sort.split("-"));
    }
  }, [search, pathname]);

  const itemData =
    searchQuery.ara &&
    items.data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.ara.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.ara.toLowerCase())
    );

  return (
    <section id="search-results-section">
      <h3 className="app-section-h3-title">
        "{searchQuery.ara}" için Arama Sonuçları
      </h3>
      <PageSideMenu title="Ürün Filtrele" size="page-side-product" />
      <div className="items-container">
        {items.loaded ? (
          itemData && itemData.length ? (
            itemData
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
            <h3 className="app-section-h3-title">Ürün Bulunamadı</h3>
          )
        ) : (
          <Loading size="page" />
        )}
      </div>
    </section>
  );
}
