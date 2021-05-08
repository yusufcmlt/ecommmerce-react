import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/auth-context/AuthContext";
import { useNavMenu } from "../../contexts/nav-menu-context/NavMenuContext";
import { useMediaQuery } from "react-responsive";

import { signedMenuItems } from "../../utils/constants";

import CustomButton from "../buttons/custom-button/CustomButton";

import "./MenuNav.style.scss";

export default function MenuNav({ navType }) {
  const { currentUser, userIsAdmin } = useAuth();
  const { appPageState, handleMenuOpened, handlePageState } = useNavMenu();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  function isButtonSelected(buttonPath) {
    return !isMobile && buttonPath && appPageState === buttonPath;
  }

  return currentUser ? (
    <React.Fragment>
      <Link to="/yonetim" key="adminButton">
        {userIsAdmin ? (
          <CustomButton
            buttonText="Yönetim"
            buttonSize={
              isMobile ? "mobile-menu size-admin" : "header-menu size-admin"
            }
            buttonIcon="setting"
            selectedMenuButton={isButtonSelected("yonetim")}
            funcOnPress={() => {
              handleMenuOpened();
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
                handleMenuOpened();
                handlePageState(button.path);
              })
            }
          />
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
