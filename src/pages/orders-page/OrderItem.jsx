import React, { useEffect } from "react";

import "./OrdersPage.style.scss";
export default function OrderItem({ data }) {
  const { dateOrdered, status, total, items, address } = data;

  useEffect(() => {}, []);

  //Changing mm/dd/yyyy to dd/mm/yyyy
  function handleDateString() {
    let dateString = dateOrdered.toDate().toLocaleString().split("/");
    dateString = [dateString[1], dateString[0], dateString[2]];
    return dateString.join("/");
  }

  function handleOrderItems() {
    return Object.keys(items).reduce(
      (acc, item) => [
        ...acc,
        {
          id: item,
          name: items[item].name,
          quantity: items[item].quantity,
          price: items[item].price,
        },
      ],
      []
    );
  }

  return (
    <div className="ordered-item">
      <h4>{handleDateString()} Tarihli Siparişiniz</h4>
      <div className="products-block">
        <h5>Ürünler</h5>
        <div className="ordered-items-list">
          {handleOrderItems().map((item, index) => (
            <div
              className="order-list-row"
              style={{
                backgroundColor: `${
                  index % 2 === 0 ? null : "rgba(79, 84, 133, 0.2)"
                }`,
              }}
            >
              <span>{index + 1}-</span>
              <span>{item.name}</span>
              <span>
                {item.quantity} Kg X {item.price}₺
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="address-block">
        <h5>Adres</h5>
        <div className="address-box">
          <span>{address.name}</span>
          <span>{address.firstName}</span>
          <span>{address.address}</span>
        </div>
      </div>
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
