import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as MobileLogo } from "../../../assets/icons/shoes-logo.svg";
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
      <MobileLogo className="logo-mobile-icon" />
    </Link>
  );
}
