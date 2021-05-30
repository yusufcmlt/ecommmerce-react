import React, { useEffect, useState } from "react";

import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";
import CartSideMenu from "./CartSideMenu";

import "./CartPage.style.scss";
import CartItem from "./CartItem";
import { useAuth } from "../../contexts/auth-context/AuthContext";

import Loading from "../../components/loading/Loading";
import { useCart } from "../../contexts/cart-context/CartContext";

export default function CartPage() {
  const { currentUser } = useAuth();
  const { cartData, handleCartLoad, handleCartItemDelete, cartUpdated } =
    useCart();

  useEffect(() => {
    if (currentUser && cartUpdated) {
      handleCartLoad();
    }
  }, []);

  function cartTotal() {
    if (cartData.loaded) {
      return cartData.data.reduce((totalPrice, cartItem) => {
        return totalPrice + cartItem.price * cartItem.quantity;
      }, 0);
    } else return 0;
  }

  return (
    <section id="cart-section">
      <PageTitleHeader pageTitle="Sepetim" pageIcon="cart" pageType="normal" />
      <div className="cart-page-container">
        <div className="cart-content">
          {cartData.loaded ? (
            cartData.data.length ? (
              cartData.data.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  cartData={cartItem}
                  itemDelete={() => {
                    handleCartItemDelete(currentUser.uid, cartItem.id);
                  }}
                />
              ))
            ) : (
              <h3>Sepetiniz Boş</h3>
            )
          ) : (
            <Loading size="page" />
          )}
        </div>
        {cartData.data.length ? <CartSideMenu total={cartTotal()} /> : null}
      </div>
    </section>
  );
}
