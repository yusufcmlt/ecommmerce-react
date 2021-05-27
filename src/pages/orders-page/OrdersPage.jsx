import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";
import { useCart } from "../../contexts/cart-context/CartContext";
import OrderItem from "./OrderItem";

import "./OrdersPage.style.scss";

export default function OrdersPage() {
  const { orderData, handleOrderLoad } = useCart();

  useEffect(() => {
    if (!orderData.loaded) {
      handleOrderLoad();
    }
  }, []);

  return (
    <section id="orders-page-section">
      <PageTitleHeader
        pageTitle="Siparişlerim"
        pageIcon="order"
        pageType="normal"
      />
      <div className="order-list">
        {orderData.loaded ? (
          orderData.data.length ? (
            orderData.data.map((item) => (
              <OrderItem key={item.id} data={item} />
            ))
          ) : (
            <h3>Siparişiniz Bulunmuyor...</h3>
          )
        ) : (
          <Loading size="page" />
        )}
      </div>
    </section>
  );
}
