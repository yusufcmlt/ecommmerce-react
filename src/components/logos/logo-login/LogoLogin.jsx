import React from "react";

import "./LogoLogin.style.scss";
import { ReactComponent as LoginLogo } from "../../../assets/icons/shoes-logo.svg";

export const LogoLogin = () => {
  return (
    <div className="logo-login-container">
      <LoginLogo className="logo-login-icon" />
      <h2 className="logo-login-text">SHOE</h2>
    </div>
  );
};
