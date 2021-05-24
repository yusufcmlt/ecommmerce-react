import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/auth-context/AuthContext";
import { useNavMenu } from "../../contexts/nav-menu-context/NavMenuContext";
import { useMediaQuery } from "react-responsive";
import { useCart } from "../../contexts/cart-context/CartContext";

import { signedMenuItems } from "../../utils/constants";

import CustomButton from "../buttons/custom-button/CustomButton";

import "./MenuNav.style.scss";

export default function MenuNav({ navType }) {
  const { cartData, handleCartLoad, cartCount, cartUpdated } = useCart();
  const { currentUser, userIsAdmin } = useAuth();
  const { appPageState, handlePageState } = useNavMenu();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  function isButtonSelected(buttonPath) {
    return buttonPath && appPageState === buttonPath;
  }

  useEffect(() => {
    if ((cartUpdated || !cartData.loaded) && currentUser) {
      handleCartLoad();
    }
  }, []);

  return currentUser ? (
    <React.Fragment>
      <Link
        to={{
          pathname: `/yonetim`,
          state: { title: "Yönetim", icon: "admin", sideMenu: false },
        }}
        key="adminButton"
      >
        {userIsAdmin ? (
          <CustomButton
            buttonText="Yönetim"
            buttonSize={
              isMobile ? "mobile-menu size-admin" : "header-menu size-admin"
            }
            buttonIcon="setting"
            selectedMenuButton={isButtonSelected("yonetim")}
            funcOnPress={() => {
              handlePageState("yonetim");
            }}
          />
        ) : null}
      </Link>
      {signedMenuItems.map((button) => (
        <Link to={`/${button.path}`} key={button.id}>
          <CustomButton
            buttonText={button.text}
            buttonSize={navType}
            buttonIcon={button.icon}
            selectedMenuButton={isButtonSelected(button.path)}
            funcOnPress={
              button.funcOnPress ||
              (() => {
                handlePageState(button.path);
              })
            }
          >
            {button.path === "sepetim" ? (
              cartData.loaded && cartCount ? (
                <span className="cart-count">{cartCount}</span>
              ) : null
            ) : null}
          </CustomButton>
        </Link>
      ))}
    </React.Fragment>
  ) : (
    <Link to="/giris" key="logoutButton">
      <CustomButton
        buttonText="Giriş yap"
        buttonSize={navType}
        buttonIcon="login"
      />
    </Link>
  );
}
