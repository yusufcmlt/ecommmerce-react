import React from "react";
import { useEffect } from "react/cjs/react.development";
import { useSize } from "../../contexts/mobile-sizes-context/MobileSizesContext";

import MenuNav from "../menu-nav/MenuNav";

import "./MobileSideMenu.style.scss";

export default function MobileSideMenu({ displayMenu }) {
  const { pageMobileHeight } = useSize();

  //Lock scrolling while using menu.
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  });

  return (
    <nav
      style={{
        minHeight: `${pageMobileHeight}px`,
      }}
      className="mobile-side-menu-nav"
    >
      <h2 className="mobile-side-menu-title">Seçenekler</h2>
      <MenuNav navType="mobile-menu" />
    </nav>
  );
}
