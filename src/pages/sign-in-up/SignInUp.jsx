import React, { useState } from "react";
import CustomButton from "../../components/custom-button/CustomButton";
import "./SignInUp.style.scss";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { LogoLogin } from "../../components/logos/logo-login/LogoLogin";
import { SignGreetPage } from "./sign-in-page/SignGreetPage";

export const SignInUp = () => {
  const [signPageState, setSignPage] = useState({
    signPage: "greet",
    signMessage: "Hoşgeldiniz",
  });
  return (
    <div className="sign-page-container">
      <LogoLogin />
      <div className="sign-page-form-container border-radius-20 box-shadow-rule">
        <h3 className="sign-page-greet">{signPageState.signMessage}</h3>
        <hr className="sign-page-hr" />
        {signPageState.signPage === "greet" ? <SignGreetPage /> : null}
      </div>
    </div>
  );
};
