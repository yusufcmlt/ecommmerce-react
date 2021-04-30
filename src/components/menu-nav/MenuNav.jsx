import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context/AuthContext";
import { signedMenuItems } from "../../utils/constants";
import CustomButton from "../buttons/custom-button/CustomButton";

import "./MenuNav.style.scss";

export default function MenuNav({ navType }) {
  const { currentUser } = useAuth();
  return currentUser ? (
    <React.Fragment>
      <Link to="/yonetim" key="adminButton">
        <CustomButton
          buttonText="Yönetim"
          buttonSize={navType}
          textColor="#D7654C"
          buttonColor="#4F5485"
          buttonIcon="setting"
        />
      </Link>
      {signedMenuItems.map((button) => (
        <Link to={button.path} key={button.id}>
          <CustomButton
            buttonText={button.text}
            buttonSize={navType}
            textColor="#fbb224"
            buttonColor="#4f5485"
            buttonIcon={button.icon}
            funcOnPress={button.funcOnPress}
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
        buttonColor="#4F5485"
        buttonIcon="login"
      />
    </Link>
  );
}
