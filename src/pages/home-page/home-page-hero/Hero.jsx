import React from "react";
import { useMediaQuery } from "react-responsive";
import CategoryContainer from "../category-container/CategoryContainer";
import SearchBar from "../../../components/search-bar/SearchBar";

import "./Hero.style.scss";

export default function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  return (
    <div className="hero">
      <div className="hero-first">
        <h1 className="hero-title">
          Tüm Kuruyemiş Çeşitlerinde Alışverişin Adresi!
        </h1>
        {!isMobile && <SearchBar searchBarSize="desktop" />}
      </div>
      <div className="hero-second">
        <h3 className="app-section-h3-title">Ürün Çeşitleri</h3>
        <CategoryContainer />
      </div>
    </div>
  );
}
