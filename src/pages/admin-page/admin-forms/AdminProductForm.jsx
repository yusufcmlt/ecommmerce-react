import React from "react";
import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import CustomSelect from "../../../components/buttons/custom-select/CustomSelect";
import CustomInput from "../../../components/custom-input/CustomInput";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

export function AdminFilterMenu({ filter, filterOption, input }) {
  const { handleFiltering, handleSorting } = useItems();
  return (
    <>
      <CustomInput
        inputType="text"
        inputName={input}
        inputPlaceholder={`${filter} Ara`}
        inputSize="admin"
        inputChange={handleFiltering}
      />
      <CustomSelect
        size="select-size-admin"
        options={filterOption}
        selectName={input}
        selectOnChange={handleSorting}
      />
      <CustomButton
        buttonText={`${filter} Ekle`}
        buttonSize="admin-menu"
        buttonIcon="plus"
      />
    </>
  );
}

export function AdminProductForm() {
  return <div>PRODUCT FORM</div>;
}

export function AdminCategoryForm() {
  return <div>category form</div>;
}
