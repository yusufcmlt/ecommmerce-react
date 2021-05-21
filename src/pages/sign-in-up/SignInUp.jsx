import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/auth-context/AuthContext";

import LogoLogin from "../../components/logos/logo-login/LogoLogin";
import { createUserProfileDocument } from "../../firebase/firebase";
import SignGreetPage from "./sign-greet-page/SignGreetPage";
import SignInPage from "./sign-in-page/SignInPage";
import SignUpPage from "./sign-up-page/SignUpPage";

import "./SignInUp.style.scss";
import { useMediaQuery } from "react-responsive";
import { useSize } from "../../contexts/mobile-sizes-context/MobileSizesContext";
import Loading from "../../components/loading/Loading";

export const SignInUp = () => {
  const [signPageState, setSignPage] = useState({
    signPage: "GREET",
    signMessage: "Hoşgeldiniz",
  });
  const [signError, setSignError] = useState("");
  const [signLoading, setSignLoading] = useState(false);

  const { currentUser } = useAuth();
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { pageMobileHeight } = useSize();

  useEffect(() => {
    if (currentUser) {
      createUserProfileDocument(currentUser.email, currentUser.uid)
        .then(() => {
          history.replace({ pathname: `${process.env.PUBLIC_URL}/` });
        })
        .catch((error) => {
          setSignError("Girişte bir hata oldu.");
        });
    }
    // eslint-disable-next-line
  }, [currentUser, signLoading]);

  const handleSignIn = () => {
    setSignPage({ signPage: "SIGN_IN", signMessage: "Giriş Yapın" });
  };
  const handleSignUp = () => {
    setSignPage({ signPage: "SIGN_UP", signMessage: "Bir Hesap Oluşturun." });
  };
  const handleError = (errorMessage) => {
    setSignError(errorMessage);
  };
  const handleSignLoading = (loadingState) => {
    setSignLoading(loadingState);
  };

  return (
    <div
      style={{ minHeight: isMobile ? `${pageMobileHeight}px` : "100vh" }}
      className="sign-page-container"
    >
      <LogoLogin />
      <div className="sign-page-form-container border-radius-20 box-shadow-rule">
        <div className="sign-page-header">
          <h3 className="sign-page-greet">{signPageState.signMessage}</h3>
          <hr className="sign-page-hr" />
          {signLoading ? (
            <Loading size="sign" />
          ) : signError ? (
            <div className="sign-up-error">{signError}</div>
          ) : null}
        </div>
        <div className="sign-page-content">
          {signPageState.signPage === "GREET" ? (
            <SignGreetPage signIn={handleSignIn} signUp={handleSignUp} />
          ) : signPageState.signPage === "SIGN_IN" ? (
            <SignInPage
              handleError={handleError}
              handleSignLoading={handleSignLoading}
              signLoading={signLoading}
            />
          ) : (
            <SignUpPage
              handleError={handleError}
              handleSignLoading={handleSignLoading}
              signLoading={signLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};
