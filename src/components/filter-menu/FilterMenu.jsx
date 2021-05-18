import { Link } from "react-router-dom";
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
      <Link to={{ pathname: `/yonetim/${filter.formPath}`, id: "" }}>
        <CustomButton
          buttonText={`${filter.name} Ekle`}
          buttonSize="admin-menu"
          buttonIcon="plus"
        />
      </Link>
    </>
  );
}

export { AdminFilterMenu };
