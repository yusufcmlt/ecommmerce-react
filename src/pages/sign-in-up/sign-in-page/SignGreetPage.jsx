import React from "react";

import CustomButton from "../../../components/custom-button/CustomButton";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import "./SignGreetPage.style.scss";

export const SignGreetPage = () => {
  return (
    <div className="greet-container">
      <div className="sign-page-buttons-container">
        <CustomButton
          buttonText="Bir Hesap Oluşturun"
          buttonColor="#FBB224"
          textColor="#4F5485"
        />
        <CustomButton
          buttonText="Giriş Yapın"
          buttonColor="#4F5485"
          textColor="#FBB224"
        />
        <p style={{ color: "#FBB224" }}>veya</p>
        <a className="google-hesap-secenek" href="google.com">
          <GoogleIcon className="google-hesap-icon" />
          <p style={{ color: "#FBB224" }}>hesabızla giriş yapın</p>
        </a>
      </div>
    </div>
  );
};
