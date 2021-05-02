import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/auth-context/AuthContext";
import { useNavMenu } from "../../contexts/nav-menu-context/NavMenuContext";
import { useMediaQuery } from "react-responsive";

import { signedMenuItems } from "../../utils/constants";

import CustomButton from "../buttons/custom-button/CustomButton";

import "./MenuNav.style.scss";

export default function MenuNav({ navType }) {
  const { currentUser } = useAuth();
  const { appPageState, handleMenuOpened, handlePageState } = useNavMenu();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  function isButtonSelected(buttonPath) {
    return !isMobile && buttonPath && appPageState === buttonPath;
  }

  return currentUser ? (
    <React.Fragment>
      <Link to="/yonetim" key="adminButton">
        <CustomButton
          buttonText="Yönetim"
          buttonSize={navType}
          textColor="#D7654C"
          buttonColor="transparent"
          buttonIcon="setting"
          selectedMenuButton={isButtonSelected("yonetim")}
          funcOnPress={() => {
            handleMenuOpened();
            handlePageState("yonetim");
          }}
        />
      </Link>
      {signedMenuItems.map((button) => (
        <Link to={`/${button.path}`} key={button.id}>
          <CustomButton
            buttonText={button.text}
            buttonSize={navType}
            textColor="#fbb224"
            buttonColor="transparent"
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
        textColor="#FBB224"
        buttonColor="transparent"
        buttonIcon="login"
      />
    </Link>
  );
}