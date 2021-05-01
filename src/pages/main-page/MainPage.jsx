import React from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/headers/Header";
import MobileSideMenu from "../../components/mobile-side-menu/MobileSideMenu";
import { useNavMenu } from "../../contexts/nav-menu-context/NavMenuContext";

import "./MainPage.style.scss";

export default function MainPage() {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { isMenuOpened } = useNavMenu();

  return (
    <div className="main-page-container">
      <React.Fragment>
        <Header />
        {isMobile && isMenuOpened ? (
          <MobileSideMenu />
        ) : (
          <React.Fragment>
            <div style={{ margin: "auto" }}>SOME CONTENT</div>
            <div style={{ marginTop: "auto" }}>SOME FOOTER</div>
          </React.Fragment>
        )}
      </React.Fragment>
    </div>
  );
}
