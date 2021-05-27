import React from "react";
import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";
import OrderItem from "./OrderItem";

import "./OrdersPage.style.scss";

export default function OrdersPage() {
  const orderItemTest = [{}];

  return (
    <section id="orders-page-section">
      <PageTitleHeader
        pageTitle="Siparişlerim"
        pageIcon="order"
        pageType="normal"
      />
      <div className="order-list">
        {orderItemTest.length ? (
          orderItemTest.map((item) => <OrderItem data={item} />)
        ) : (
          <h3>Siparişiniz bulunmuyor...</h3>
        )}
      </div>
    </section>
  );
}
