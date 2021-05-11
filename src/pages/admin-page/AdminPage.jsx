import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Route, Switch, useLocation } from "react-router-dom";
import PageSideMenu from "../../components/page-side-menu/PageSideMenu";

//Components
import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";
import AdminCategoryList from "./admin-items/AdminCategoryList";
import AdminProductList from "./admin-items/AdminProductList";
import AdminNavButtons from "./admin-nav-buttons/AdminNavButtons";

export default function AdminPage() {
  const [pageHeaderInfo, setPageHeaderInfo] = useState({
    title: "Yönetim",
    icon: "admin",
    sideMenu: false,
  });

  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  useEffect(() => {
    switch (location.pathname) {
      case "/yonetim/urunler":
        setPageHeaderInfo({
          title: "Ürünler",
          icon: "product",
          sideMenu: true,
        });
        break;
      case "/yonetim/kategoriler":
        setPageHeaderInfo({
          title: "Kategoriler",
          icon: "category",
          sideMenu: true,
        });
        break;
      default:
        setPageHeaderInfo({ title: "Yönetim", icon: "admin", sideMenu: false });
    }
  }, [location.pathname]);

  return (
    <section className="admin-page-container">
      <PageTitleHeader
        pageTitle={pageHeaderInfo.title}
        pageIcon={pageHeaderInfo.icon}
        pageType="admin"
      />
      {pageHeaderInfo.sideMenu ? <PageSideMenu /> : null}
      <div
        className="admin-page-content"
        style={!pageHeaderInfo.sideMenu ? { margin: "auto" } : {}}
      >
        <Switch>
          <Route exact path="/yonetim">
            <AdminNavButtons navPosition="center" />
          </Route>
          <Route path="/yonetim/urunler">
            <AdminProductList />
          </Route>
          <Route path="/yonetim/kategoriler">
            <AdminCategoryList />
          </Route>
        </Switch>
      </div>
    </section>
  );
}
