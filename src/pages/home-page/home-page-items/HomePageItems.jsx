import React from "react";
import Item from "../../../components/item/Item";

import { itemsPlaceholder } from "../../../utils/constants";

import "./HomePageItems.style.scss";

export default function HomePageItems() {
  return (
    <section id="new-items-section">
      <h3 className="app-section-h3-title">Yeni Gelenler</h3>
      <div className="items-container">
        {itemsPlaceholder.map((item) => (
          <Item
            key={item.name + item.price}
            image={item.images[0]}
            name={item.name}
            price={item.price}
            desc={item.description}
          />
        ))}
      </div>
    </section>
  );
}
