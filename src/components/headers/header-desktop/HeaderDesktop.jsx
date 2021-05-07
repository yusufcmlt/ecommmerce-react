import React from "react";

import { LogoDesktop } from "../../logos/logo-desktop/LogoDesktop";
import MenuNav from "../../menu-nav/MenuNav";
import UserGreet from "../../user-greet-message/UserGreet";

import "./HeaderDesktop.style.scss";

export default function HeaderDesktop() {
  return (
    <header className="header-desktop-container box-shadow-rule">
      <LogoDesktop />
      <UserGreet />
      <nav className="header-desktop-buttons">
        <MenuNav navType="header-menu" />
      </nav>
    </header>
  );
}
