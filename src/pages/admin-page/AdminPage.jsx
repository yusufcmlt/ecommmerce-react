import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import PageSideMenu from "../../components/page-side-menu/PageSideMenu";

//Components
import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";
import AdminCategoryList from "./admin-items/AdminCategoryList";
import AdminProductList from "./admin-items/AdminProductList";
import AdminNavButtons from "./admin-nav-buttons/AdminNavButtons";

//Constant Data
import { routeInfo } from "../../utils/routeConstants";
import { AdminCategoryItemForm } from "./admin-forms/AdminForms";

export default function AdminPage() {
  const [pageHeaderInfo, setPageHeaderInfo] = useState({
    title: "Yönetim",
    icon: "admin",
    sideMenu: false,
  });

  const location = useLocation();

  //Getting header info from location data
  useEffect(() => {
    let locationPath = location.pathname.split("/");
    locationPath = locationPath[locationPath.length - 1];
    console.log(locationPath);
    setPageHeaderInfo({ ...routeInfo[locationPath] });
  }, [location]);

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
          <Route exact path={"/yonetim"}>
            <AdminNavButtons navPosition="center" />
          </Route>
          <Route path={"/yonetim/urunler"}>
            <AdminProductList />
          </Route>
          <Route path={"/yonetim/kategoriler"}>
            <AdminCategoryList />
          </Route>
          <Route path={"/yonetim/urunekle"}>
            <AdminCategoryItemForm
              formOptions={{ redirectPath: "urunler", formType: "items" }}
            />
          </Route>
          <Route path={"/yonetim/kategoriekle"}>
            <AdminCategoryItemForm
              formOptions={{
                redirectPath: "kategoriler",
                formType: "categories",
              }}
            />
          </Route>
        </Switch>
      </div>
    </section>
  );
}
