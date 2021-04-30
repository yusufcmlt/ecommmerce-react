import react from "react";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import CustomButton from "../../buttons/custom-button/CustomButton";
import { LogoDesktop } from "../../logos/logo-desktop/LogoDesktop";
import MenuNav from "../../menu-nav/MenuNav";
import UserGreet from "../../user-greet-message/UserGreet";

import "./HeaderDesktop.style.scss";

export default function HeaderDesktop() {
  return (
    <div className="header-desktop-container box-shadow-rule">
      <LogoDesktop />
      <UserGreet />
      <div className="header-desktop-buttons">
        <MenuNav navType="header-menu" />
      </div>
    </div>
  );
}
