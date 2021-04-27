import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";

import { LogoLogin } from "../../components/logos/logo-login/LogoLogin";
import { useAuth } from "../../contexts/auth-context/AuthContext";
import { SignGreetPage } from "./sign-greet-page/SignGreetPage";
import SignInPage from "./sign-in-page/SignInPage";
import SignUpPage from "./sign-up-page/SignUpPage";

import "./SignInUp.style.scss";

export const SignInUp = () => {
  const [signPageState, setSignPage] = useState({
    signPage: "GREET",
    signMessage: "Hoşgeldiniz",
  });

  const { currentUser } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      history.push({ pathname: "/" });
    }
  }, [currentUser]);

  const handleSignIn = () => {
    setSignPage({ signPage: "SIGN_IN", signMessage: "Giriş Yapın" });
  };
  const handleSignUp = () => {
    setSignPage({ signPage: "SIGN_UP", signMessage: "Bir Hesap Oluşturun." });
  };

  return (
    <div className="sign-page-container">
      <LogoLogin />
      <div className="sign-page-form-container border-radius-20 box-shadow-rule">
        <div className="sign-page-header">
          <h3 className="sign-page-greet">{signPageState.signMessage}</h3>
          <hr className="sign-page-hr" />
        </div>
        <div className="sign-page-content">
          {signPageState.signPage === "GREET" ? (
            <SignGreetPage signIn={handleSignIn} signUp={handleSignUp} />
          ) : signPageState.signPage === "SIGN_IN" ? (
            <SignInPage />
          ) : (
            <SignUpPage />
          )}
        </div>
      </div>
    </div>
  );
};
