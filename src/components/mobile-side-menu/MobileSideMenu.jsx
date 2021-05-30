import React from "react";

import MenuNav from "../menu-nav/MenuNav";

import "./MobileSideMenu.style.scss";

export default function MobileMenu({ displayMenu }) {
  return (
    <nav className="mobile-menu-nav">
      <MenuNav navType="mobile-menu" />
    </nav>
  );
}
