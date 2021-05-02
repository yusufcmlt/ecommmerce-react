import React from "react";
import { useSize } from "../../contexts/mobile-sizes-context/MobileSizesContext";

import MenuNav from "../menu-nav/MenuNav";

import "./MobileSideMenu.style.scss";

export default function MobileSideMenu() {
  const { pageMobileHeight } = useSize();
  return (
    <div
      style={{ minHeight: `${pageMobileHeight}px` }}
      className="mobile-side-menu-nav"
    >
      <MenuNav navType="mobile-menu" />
    </div>
  );
}
