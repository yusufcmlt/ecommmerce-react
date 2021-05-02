import React from "react";

import "./LogoLogin.style.scss";
import { ReactComponent as LoginLogo } from "../../../assets/icons/shoes-logo.svg";
import { Link } from "react-router-dom";

const LogoLogin = () => {
  return (
    <Link
      onClick={() => window.location.reload()}
      to="/giris"
      style={{ textDecoration: "none" }}
      className="logo-login-link"
    >
      <div className="logo-login-container">
        <LoginLogo className="logo-login-icon" />
        <h2 className="logo-login-text">SHOESHOE</h2>
      </div>
    </Link>
  );
};

export default LogoLogin;
