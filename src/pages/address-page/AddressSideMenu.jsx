import React, { useState, useEffect } from "react";
import CustomButton from "../../components/buttons/custom-button/CustomButton";
import CustomInput from "../../components/custom-input/CustomInput";
import { useCart } from "../../contexts/cart-context/CartContext";

export default function AddressSideMenu({
  selectedAddress = {},
  isAddressSelected,
  handleSelectedAddress,
}) {
  const { handleAddressAdd, handleAddressDelete, addressData } = useCart();

  const [addressFormData, setAddressFormData] = useState({
    id: "",
    name: "",
    firstName: "",
    address: "",
  });

  const [addressChanged, setAddressChanged] = useState(false);

  useEffect(() => {
    if (isAddressSelected) {
      setAddressFormData({ ...selectedAddress });
    } else {
      setAddressFormData({ id: "", name: "", firstName: "", address: "" });
    }
  }, [selectedAddress, isAddressSelected]);

  //Create a new address or update existing one.
  function handleAddressSubmit(event) {
    event.preventDefault();

    if (handleEmptyCheck() && addressChanged) {
      handleTrimInputs();
      const { id, ...restAddressInfo } = addressFormData;
      //console.log(restAddressInfo);
      handleAddressAdd(restAddressInfo, id);
      setAddressChanged(false);
      setAddressFormData({
        id: "",
        name: "",
        firstName: "",
        address: "",
      });
      if (isAddressSelected) {
        handleSelectedAddress();
      }
    }
  }
  //Fill forms
  function handleChange(event) {
    let { name, value } = event.target;
    !addressChanged && setAddressChanged(true);
    setAddressFormData({ ...addressFormData, [name]: value });
  }

  //Delete existing address

  function handleDelete() {
    handleAddressDelete(addressFormData.id);
    handleSelectedAddress({});
  }

  //Trim after user fills form.
  function handleTrimInputs() {
    let copyAddress = addressFormData;
    for (const key in copyAddress) {
      copyAddress[key] = copyAddress[key].trim();
    }
    setAddressFormData({ ...copyAddress });
  }
  //Check user filled any input with space only characters
  function handleEmptyCheck() {
    for (const key in addressFormData) {
      if (key !== "id") {
        if (!addressFormData[key].trim().length) {
          return false;
        }
      }
    }
    return true;
  }

  return (
    <form
      className={`address-side-menu ${isAddressSelected ? "selected" : ""}`}
      onSubmit={handleAddressSubmit}
    >
      <div className="input-block">
        <label htmlFor="address-name">Adres Adı</label>
        <CustomInput
          id="address-name"
          inputType="text"
          inputPlaceholder="Adres adı girin."
          value={addressFormData.name}
          onChange={handleChange}
          inputName="name"
          minLength="5"
        />
      </div>
      <div className="input-block">
        <label htmlFor="address-firstname">İsim</label>
        <CustomInput
          id="address-firstname"
          inputType="text"
          inputPlaceholder="İsim girin."
          value={addressFormData.firstName}
          inputName="firstName"
          onChange={handleChange}
          minLength="5"
        />
      </div>
      <div className="input-block">
        <label htmlFor="address-info">
          Adres (Kalan {200 - addressFormData.address.length} karakter)
        </label>

        <textarea
          className="border-radius-10 input-stroke"
          required
          minLength="20"
          maxLength="200"
          placeholder="Adres girin"
          value={addressFormData.address}
          onChange={handleChange}
          name="address"
        />
      </div>
      <CustomButton
        buttonText={`Adres ${isAddressSelected ? "Güncelle" : "Ekle"}`}
        buttonSize="admin-menu size-sidemenu"
        buttonState={false}
      />
      {isAddressSelected && (
        <CustomButton
          buttonText="Adres Sil"
          buttonSize={`admin-menu size-sidemenu ${
            isAddressSelected ? "remove" : ""
          }`}
          funcOnPress={handleDelete}
        />
      )}
    </form>
  );
}
