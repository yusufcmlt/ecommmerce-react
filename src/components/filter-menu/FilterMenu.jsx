import { useState } from "react";
import queryString from "query-string";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useItems } from "../../contexts/item-category-context/ItemCategoryContext";
import CustomButton from "../buttons/custom-button/CustomButton";
import CustomSelect from "../buttons/custom-select/CustomSelect";
import CustomInput from "../custom-input/CustomInput";

function AdminFilterMenu({ filter, input }) {
  const { handleFiltering, handleSorting } = useItems();
  return (
    <>
      <CustomInput
        inputType="text"
        inputName={input}
        inputPlaceholder={`${filter.name} Ara`}
        inputSize="admin"
        inputChange={handleFiltering}
      />
      <CustomSelect
        size="select-size-admin"
        options={filter.data}
        selectName={input}
        selectOnChange={handleSorting}
      />
      <Link
        to={{
          pathname: `/yonetim/${filter.formPath}`,
          id: "",
        }}
      >
        <CustomButton
          buttonText={`${filter.name} Ekle`}
          buttonSize="admin-menu"
          buttonIcon="plus"
        />
      </Link>
    </>
  );
}

function MainFilter() {
  const history = useHistory();
  const location = useLocation();

  const sortOptions = [
    { name: "Fiyat Düşük-Yüksek", value: "price-asc" },
    { name: "Fiyat Yüksek-Düşük", value: "price-desc" },
    { name: "İsim A-Z", value: "name-asc" },
    { name: "İsim Z-A", value: "name-desc" },
  ];

  function handleMainFilterSort(event) {
    const { value } = event.target;
    if (value) {
      const params = queryString.parse(location.search);
      const sortQuery = queryString.stringify({ ...params, sort: value });
      history.push({ search: sortQuery });
    }
  }
  return (
    <>
      <CustomSelect
        size="select-size-admin select-size-product"
        options={sortOptions}
        selectOnChange={handleMainFilterSort}
      />
    </>
  );
}

export { AdminFilterMenu, MainFilter };
