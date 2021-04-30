import React from "react";
import MenuNav from "../menu-nav/MenuNav";

import "./MobileSideMenu.style.scss";

export default function MobileSideMenu() {
  return (
    <div className="mobile-side-menu-container">
      <div className="mobile-side-menu-nav">
        <MenuNav navType="mobile-menu" />
      </div>
    </div>
  );
}
