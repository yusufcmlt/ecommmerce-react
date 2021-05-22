import React from "react";
import CustomButton from "../../components/buttons/custom-button/CustomButton";

import "./CartPage.style.scss";

export default function CartSideMenu({ total }) {
  return (
    <div className="cart-menu-container">
      <h3 className="cart-order-title">Sipariş Özeti</h3>
      <div className="cart-order-container">
        <span className="cart-order-info">
          Ara Toplam:<span className="cart-order-result">{total}₺</span>
        </span>
        <span className="cart-order-info">
          Kargo:<span className="cart-order-result">10₺</span>
        </span>
        <span className="cart-order-info">
          Toplam:<span className="cart-order-result">{total + 10}₺</span>
        </span>
      </div>
      <CustomButton
        buttonSize="admin-menu size-sidemenu"
        buttonText="Satın Al"
      />
    </div>
  );
}
