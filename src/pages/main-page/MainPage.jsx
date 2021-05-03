import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../../components/footer/Footer";
import Header from "../../components/headers/Header";

import HeroDesktop from "../../components/main-page-hero/HeroDesktop";
import HeroMobile from "../../components/main-page-hero/HeroMobile";
import MobileSideMenu from "../../components/mobile-side-menu/MobileSideMenu";
import { useSize } from "../../contexts/mobile-sizes-context/MobileSizesContext";
import { useNavMenu } from "../../contexts/nav-menu-context/NavMenuContext";

import "./MainPage.style.scss";

export default function MainPage() {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { isMenuOpened } = useNavMenu();
  const { pageMobileHeight } = useSize();

  return (
    <div
      style={{ minHeight: isMobile ? `${pageMobileHeight}px` : "100vh" }}
      className="main-page-container"
    >
      <React.Fragment>
        <Header />
        {isMobile && isMenuOpened ? (
          <MobileSideMenu />
        ) : (
          <React.Fragment>
            {isMobile ? <HeroMobile /> : <HeroDesktop />}
            <Footer></Footer>
          </React.Fragment>
        )}
      </React.Fragment>
    </div>
  );
}
