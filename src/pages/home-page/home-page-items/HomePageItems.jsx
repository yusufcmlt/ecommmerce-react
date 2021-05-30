import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../../../components/item/Item";
import Loading from "../../../components/loading/Loading";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import "./HomePageItems.style.scss";

export default function HomePageItems() {
  const { newItems, handleNewItemsLoading } = useItems();

  useEffect(() => {
    if (!newItems.loaded) {
      handleNewItemsLoading();
    }
  }, []);

  return (
    <section id="new-items-section">
      <div className="new-items-header">
        <h3 className="app-section-h3-title">Yeni Ürünler</h3>
        <Link
          to={{
            pathname: `/arama`,
            search: `ara=`,
          }}
        >
          Tüm Ürünler{">>"}
        </Link>
      </div>
      <div className="items-container">
        {newItems.loaded ? (
          newItems.data.map((item) => (
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
