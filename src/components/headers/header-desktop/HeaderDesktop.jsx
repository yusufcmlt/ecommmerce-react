import react from "react";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import CustomButton from "../../buttons/custom-button/CustomButton";
import { LogoDesktop } from "../../logos/logo-desktop/LogoDesktop";

import "./HeaderDesktop.style.scss";

export default function HeaderDesktop({ currentUser }) {
  return (
    <div className="header-desktop-container box-shadow-rule">
      <LogoDesktop />
      <div className="header-desktop-greet">
        Merhaba ,
        <span className="header-desktop-greet-username">
          {currentUser ? currentUser.displayName : "Misafir"}
        </span>
      </div>
      <div className="header-desktop-buttons">
        {currentUser ? (
          <React.Fragment>
            <CustomButton
              buttonText="Sepetim"
              buttonSize="header-menu"
              textColor="#FBB224"
              buttonColor="#4F5485"
              buttonIcon="cart"
            />
            <CustomButton
              buttonText="Siparislerim"
              buttonSize="header-menu"
              textColor="#FBB224"
              buttonColor="#4F5485"
              buttonIcon="orders"
            />
            <CustomButton
              buttonText="Sepetim"
              buttonSize="header-menu"
              textColor="#FBB224"
              buttonColor="#4F5485"
              buttonIcon="address"
            />

            <CustomButton
              buttonText="Çıkış yap"
              funcOnPress={() => auth.signOut()}
              buttonSize="header-menu"
              textColor="#FBB224"
              buttonColor="#4F5485"
              buttonIcon="logout"
            />
          </React.Fragment>
        ) : (
          <Link to="/giris">
            <CustomButton
              buttonText="Giriş yap"
              buttonSize="header-menu"
              textColor="#FBB224"
              buttonColor="#4F5485"
              buttonIcon="login"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
