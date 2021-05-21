import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as MobileLogo } from "../../../assets/icons/logo.svg";
import "./LogoMobile.style.scss";

export default function LogoMobile() {
  return (
    <Link
      onClick={() => {
        setTimeout(() => window.location.reload(), 200);
      }}
      to="/"
      style={{ textDecoration: "none" }}
      className="logo-mobile-link"
    >
      <div className="logo-mobile-container">
        <MobileLogo className="logo-mobile-icon" />
        <h2 className="logo-mobile-text">
          <span>Fındık</span>
          <span>Fıstık</span>
        </h2>
      </div>
    </Link>
  );
}
