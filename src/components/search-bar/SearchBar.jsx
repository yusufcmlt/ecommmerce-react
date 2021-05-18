import React from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import CustomButton from "../buttons/custom-button/CustomButton";

import "./SearchBar.style.scss";

export default function SearchBar({ searchBarSize }) {
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchTerm) {
      history.push({ pathname: "/arama", search: `?${searchTerm}` });
    }
  }

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearchTerm(value);
  }

  return (
    <form
      className={`search-bar-container border-radius-10 search-bar-${searchBarSize}`}
      onSubmit={handleSearchSubmit}
    >
      <input
        onChange={handleSearchChange}
        className="search-bar-input"
        type="search"
        placeholder="Aklından geçen ürünü ara..."
      />
      <CustomButton
        buttonSize="search"
        buttonIcon="search"
        buttonType="submit"
      />
    </form>
  );
}
