import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useItems } from "../../../contexts/item-category-context/ItemCategoryContext";

import AdminAddImage from "../../../components/buttons/admin-add-image/AdminAddImage";
import CustomButton from "../../../components/buttons/custom-button/CustomButton";
import CustomSelect from "../../../components/buttons/custom-select/CustomSelect";
import CustomInput from "../../../components/custom-input/CustomInput";
import Loading from "../../../components/loading/Loading";

import {
  createOrUpdateItemCategory,
  removeItemCategory,
} from "../../../firebase/firebase";
import { randomNumberForLink } from "../../../utils/constants";

import "./AdminForms.style.scss";
import swal from "sweetalert";

export function AdminProductForm() {
  return <div>PRODUCT FORM</div>;
}

//ADMIN CATEGORY FORM

export function AdminCategoryItemForm({ formOptions }) {
  const location = useLocation();
  const history = useHistory();

  const isUpdate = location.state ? true : false;
  const { handleCountLoading } = useItems();

  const [adminForm, setAdminForm] = useState(
    location.state ? { ...location.state } : { name: "", id: "", imageURL: "" }
  );

  const [imageFile, setImageFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomLink, setRandomLink] = useState(0);
  const [tempImageURL, setTempImageURL] = useState("");
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    if (!location.state) {
      setRandomLink(randomNumberForLink());
    }
  }, []);

  function reloadDatas() {
    handleCountLoading();
    setLoading(false);
    history.replace({
      pathname: `/yonetim/${formOptions.redirectPath}`,
      state: { isUpdated: true },
    });
  }

  function handleItemCategoryDelete() {
    swal({
      title: "Sil",
      text: "Silmek istediğinden emin misin?",
      icon: "warning",
      buttons: ["Hayır", "Evet"],
      dangerMode: true,
    }).then((isDelete) => {
      if (isDelete) {
        setLoading(true);
        removeItemCategory(adminForm.id, formOptions.formType)
          .then(() => {
            swal("Silindi", { icon: "success", button: "Tamam" });
            reloadDatas();
          })
          .catch((errorMessage) => console.log(errorMessage));
      } else {
        swal("Silinmedi", { icon: "info", button: "Tamam" });
      }
    });
  }

  function handleAdminFormSubmit(event) {
    event.preventDefault();
    //Checking if there is an image URL or image waiting to be uploaded.
    //Updating an item or creating a new one.
    if (
      (adminForm.imageURL || imageFile) &&
      formChanged &&
      (formOptions.formType === "categories" ||
        (adminForm.category && adminForm.category.length))
    ) {
      setLoading(true);
      createOrUpdateItemCategory(
        {
          ...adminForm,
          id: location.state
            ? location.state.id
            : `${adminForm.id}-${randomLink}`,
          dateAdded: new Date(),
        },
        imageFile,
        formOptions.formType,
        isUpdate
      )
        .then((successMessage) => {
          console.log(successMessage);
          setLoading(false);
          reloadDatas();
        })
        .catch((errorMessage) => {
          console.log(errorMessage);
        });
    } else {
      swal("Eksik bir bilgi girdiniz veya güncellenecek bir bilgi yok", {
        icon: "warning",
        button: "Tamam",
      });
    }
  }

  function handleFormImageChange(event) {
    const imageFile = event.target.files[0];
    setTempImageURL(URL.createObjectURL(imageFile));
    setImageFile(imageFile);
    setFormChanged(true);
  }

  function handleAdminFormChange(event) {
    setFormChanged(true);
    let { name, value } = event.target;
    switch (name) {
      case "id":
        value = value.replace(/[^A-Za-z]/gi, "").toLowerCase();
        setAdminForm({ ...adminForm, [name]: value });
        setFormChanged(true);
        break;
      case "category":
        adminForm.category
          ? setAdminForm({
              ...adminForm,
              [name]: [...adminForm.category, value],
            })
          : setAdminForm({ ...adminForm, [name]: [value] });
        break;
      case "price":
      case "quantity":
        value = parseFloat(value);
        setAdminForm({ ...adminForm, [name]: value });
        break;
      default:
        setAdminForm({ ...adminForm, [name]: value });
    }
  }

  function handleRemoveSelectedCategory(selectedID) {
    setFormChanged(true);
    setAdminForm({
      ...adminForm,
      category: adminForm.category.filter((item) => item !== selectedID),
    });
  }

  const formProps = {
    handleAdminFormSubmit,
    handleFormImageChange,
    handleItemCategoryDelete,
    handleAdminFormChange,
    adminForm,
    location,
    randomLink,
    handleRemoveSelectedCategory,
  };
  const adminImageProps = {
    text: `Resim ${location.state ? "Güncelle" : "Ekle"}`,
    onChangeFunc: handleFormImageChange,
  };

  return (
    <div className="item-category-form-container">
      {loading ? (
        <div>
          <Loading />
          <p>Yükleniyor</p>
        </div>
      ) : (
        <>
          <AdminAddImage
            {...adminImageProps}
            image={tempImageURL || adminForm.imageURL}
          />
          {formOptions.formType === "categories" ? (
            <CategoryForm {...formProps} />
          ) : (
            <ItemForm {...formProps} />
          )}
        </>
      )}
    </div>
  );
}

export function CategoryForm({
  handleAdminFormSubmit,
  handleAdminFormChange,
  handleItemCategoryDelete,
  location,
  adminForm,
  randomLink,
}) {
  return (
    <form className="admin-form category-form" onSubmit={handleAdminFormSubmit}>
      <label htmlFor="category-name">Kategori Adı</label>
      <CustomInput
        id="category-name"
        inputName="name"
        inputType="text"
        inputChange={handleAdminFormChange}
        inputSize="admin-form"
        inputPlaceholder={"Kategori ismi girin."}
        value={location.state && adminForm.name}
      />

      <>
        <label htmlFor="category-link">
          Kategori Linki (Sadece İngilizce max 20 karakter.)
        </label>
        <label className="item-category-link" htmlFor="category-link">
          Adres: /kategori/{`${adminForm.id}-${randomLink}`}
        </label>
        <CustomInput
          id="category-link"
          inputName="id"
          inputType="text"
          inputChange={handleAdminFormChange}
          inputSize="admin-form"
          inputPlaceholder={"Kategori link adı girin."}
          value={location.state && adminForm.id}
          maxLength="20"
          disabled={location.state ? true : false}
        />
      </>

      <CustomButton
        buttonText={`Kategori ${location.state ? "Güncelle" : "Ekle"}`}
        buttonSize="admin-menu"
        buttonType="submit"
      />
      {location.state ? (
        <CustomButton
          buttonType="button"
          buttonText="Kategoriyi Sil"
          buttonSize="admin-delete"
          funcOnPress={handleItemCategoryDelete}
        />
      ) : null}
    </form>
  );
}

export function ItemForm({
  handleAdminFormSubmit,
  handleAdminFormChange,
  handleItemCategoryDelete,
  location,
  adminForm,
  randomLink,
  handleRemoveSelectedCategory,
}) {
  const { categories, handleCategoryLoading } = useItems();

  useEffect(() => {
    if (!categories.loaded) {
      handleCategoryLoading();
    }
  }, []);

  return (
    <form className="admin-form item-form" onSubmit={handleAdminFormSubmit}>
      <div className="admin-form-group">
        <label htmlFor="item-name">Ürün Adı</label>
        <CustomInput
          id="item-name"
          inputName="name"
          inputType="text"
          inputChange={handleAdminFormChange}
          inputSize="admin-form"
          inputPlaceholder={"Ürün ismi girin."}
          value={location.state && adminForm.name}
        />
      </div>
      <div className="admin-form-group">
        <label htmlFor="item-category">Ürün Kategorisi</label>
        <CustomSelect
          id="item-category"
          selectName="category"
          size="select-size-form"
          selectOnChange={handleAdminFormChange}
          options={categories.data
            .filter((category) =>
              adminForm.category
                ? !adminForm.category.includes(category.id)
                : true
            )
            .map((category) => ({
              name: category.name,
              value: category.id,
            }))}
        />

        {/* Selected Categories */}
        {adminForm.category && (
          <div className="selected-categories">
            {categories.data
              .filter((category) => adminForm.category.includes(category.id))
              .map((category) => (
                <li
                  key={category.name + category.id}
                  onClick={() => handleRemoveSelectedCategory(category.id)}
                >
                  {category.name}
                </li>
              ))}
          </div>
        )}
      </div>
      <div className="admin-form-group">
        <label htmlFor="item-price">Ürün Fiyatı (TL)</label>
        <CustomInput
          id="item-price"
          inputName="price"
          inputType="number"
          min="0"
          max="5000"
          inputChange={handleAdminFormChange}
          inputSize="admin-form"
          inputPlaceholder="Ürün fiyatı girin."
          value={location.state && adminForm.price}
        />
      </div>
      <div className="admin-form-group">
        <label htmlFor="item-quantity">Ürün Miktarı(Kg)</label>
        <CustomInput
          id="item-quantity"
          inputName="quantity"
          inputType="number"
          min="1"
          max="3000"
          inputChange={handleAdminFormChange}
          inputSize="admin-form"
          inputPlaceholder="Ürün miktarı girin."
          value={location.state && adminForm.quantity}
        />
      </div>
      <div
        className="admin-form-group"
        style={{ flexBasis: "100%", alignItems: "center" }}
      >
        <label htmlFor="item-name">Ürün Açıklaması</label>
        <CustomInput
          id="item-name"
          inputName="description"
          inputType="text"
          inputChange={handleAdminFormChange}
          inputSize="admin-form"
          inputPlaceholder={"Ürün açıklaması girin."}
          value={location.state && adminForm.description}
        />
      </div>
      {!location.state ? (
        <div
          className="admin-form-group"
          style={{ flexBasis: "100%", alignItems: "center" }}
        >
          <label htmlFor="item-link">
            Ürün Linki (Sadece İngilizce max 20 karakter.)
          </label>
          <label className="item-category-link" htmlFor="item-link">
            Adres: /urun/{`${adminForm.id}-${randomLink}`}
          </label>
          <CustomInput
            id="item-link"
            inputName="id"
            inputType="text"
            inputChange={handleAdminFormChange}
            inputSize="admin-form"
            inputPlaceholder={
              location.state ? location.state.id : "Ürün link girin."
            }
            value={adminForm.id}
            maxLength="20"
          />
        </div>
      ) : null}
      <CustomButton
        buttonText={`Ürün ${location.state ? "Güncelle" : "Ekle"}`}
        buttonSize="admin-menu"
        buttonType="submit"
      />
      {location.state ? (
        <CustomButton
          buttonType="button"
          buttonText="Ürünü Sil"
          buttonSize="admin-delete"
          funcOnPress={handleItemCategoryDelete}
        />
      ) : null}
    </form>
  );
}
