import React from "react";
import CustomButton from "../buttons/custom-button/CustomButton";

import "./SearchBar.style.scss";

export default function SearchBar({ searchBarSize }) {
  return (
    <form
      className={`search-bar-container border-radius-10 search-bar-${searchBarSize}`}
    >
      <input
        className="search-bar-input"
        type="search"
        placeholder="Aklından geçen ürünü ara..."
      ></input>
      <CustomButton
        buttonColor="#4F5485"
        buttonSize="search"
        buttonIcon="search"
      />
    </form>
  );
}
