import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as DesktopLogo } from "../../../assets/icons/logo.svg";
import "./LogoDesktop.style.scss";

export const LogoDesktop = () => {
  return (
    <Link
      onClick={() => {
        setTimeout(() => window.location.reload(), 200);
      }}
      to="/"
      style={{ textDecoration: "none" }}
      className="logo-desktop-link"
    >
      <div className="logo-desktop-container">
        <DesktopLogo className="logo-desktop-icon" />
        <h2 className="logo-desktop-text">
          <span>Fındık</span>
          <span>Fıstık</span>
        </h2>
      </div>
    </Link>
  );
};
