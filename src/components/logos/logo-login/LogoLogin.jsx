import React from "react";

import "./LogoLogin.style.scss";
import { ReactComponent as LoginLogo } from "../../../assets/icons/shoes-logo.svg";
import { Link } from "react-router-dom";

export const LogoLogin = () => {
  return (
    <Link
      onClick={() => window.location.reload()}
      to="/giris"
      style={{ textDecoration: "none" }}
    >
      <div className="logo-login-container">
        <LoginLogo className="logo-login-icon" />
        <h2 className="logo-login-text">SHOE</h2>
      </div>
    </Link>
  );
};
