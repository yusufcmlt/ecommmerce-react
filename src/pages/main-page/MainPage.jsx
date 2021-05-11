import React from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../../components/footer/Footer";
import Header from "../../components/headers/Header";

import MobileSideMenu from "../../components/mobile-side-menu/MobileSideMenu";
import PageContent from "../../components/page-content/PageContent";
import { ItemCategoryProvider } from "../../contexts/item-category-context/ItemCategoryContext";
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
      <>
        <Header />
        {isMobile && isMenuOpened ? <MobileSideMenu /> : null}
        <ItemCategoryProvider>
          <PageContent />
        </ItemCategoryProvider>
        <Footer />
      </>
    </div>
  );
}
