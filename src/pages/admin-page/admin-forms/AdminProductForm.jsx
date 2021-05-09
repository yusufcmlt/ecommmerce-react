import React from "react";
import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import CustomSelect from "../../../components/buttons/custom-select/CustomSelect";
import CustomInput from "../../../components/custom-input/CustomInput";

export function AdminProductMenu() {
  return (
    <>
      <CustomInput
        inputType="text"
        inputName="adminProductSearch"
        inputPlaceholder="Ürün Ara"
        inputSize="admin"
      />
      <CustomSelect />
      <CustomButton
        buttonText="Ürün Ekle"
        buttonSize="admin-menu"
        buttonIcon="plus"
      />
    </>
  );
}

export function AdminProductForm() {
  return <div>PRODUCT FORM</div>;
}
