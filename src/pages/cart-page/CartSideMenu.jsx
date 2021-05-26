import React from "react";
import { useHistory } from "react-router";
import CustomButton from "../../components/buttons/custom-button/CustomButton";
import CustomSelect from "../../components/buttons/custom-select/CustomSelect";

import "./CartPage.style.scss";

export default function CartSideMenu({ total }) {
  const history = useHistory();

  return (
    <div className="cart-menu-container">
      <h3 className="cart-order-title">Adres</h3>
      <CustomSelect options={[]} size="cart-address-select" />
      <CustomButton
        buttonSize="admin-menu size-sidemenu"
        buttonText="Adres Ekle"
        funcOnPress={() => {
          history.push({ pathname: "/adreslerim" });
        }}
      />
      <h3 className="cart-order-title">Sipariş Özeti</h3>
      <div className="cart-order-container">
        <span className="cart-order-info">
          Ara Toplam:
          <span className="cart-order-result">
            {total}
            <span className="currency-symbol">₺</span>
          </span>
        </span>
        <span className="cart-order-info">
          Kargo:
          <span className="cart-order-result">
            10<span className="currency-symbol">₺</span>
          </span>
        </span>
        <span className="cart-order-info">
          Toplam:
          <span className="cart-order-result">
            {total + 10}
            <span className="currency-symbol">₺</span>
          </span>
        </span>
      </div>
      <CustomButton
        buttonSize="admin-menu size-sidemenu"
        buttonText="Satın Al"
      />
    </div>
  );
}
