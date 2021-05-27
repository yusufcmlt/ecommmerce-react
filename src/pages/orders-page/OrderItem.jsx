import React from "react";

import "./OrdersPage.style.scss";
export default function OrderItem({ data }) {
  const { date, status, orderedItems, total } = data;

  return (
    <div className="ordered-item">
      <h4>{date} Tarihli Siparişiniz</h4>
      <h5>Ürünler</h5>
      <div className="ordered-items-list"></div>
      <div className="order-footer">
        <span className="status-price-block">
          Durum:<span className="order-info">{status}</span>
        </span>
        <span className="status-price-block">
          Toplam:
          <span>
            {total}
            <span className="currency-symbol">₺</span>
          </span>
        </span>
      </div>
    </div>
  );
}
