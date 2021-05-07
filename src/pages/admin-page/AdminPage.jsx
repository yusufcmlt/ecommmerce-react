import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";

import AdminProductList from "./admin-items/AdminProductList";
import { getItemCategoryCount } from "../../firebase/firebase";
import AdminNavButtons from "./admin-nav-buttons/AdminNavButtons";

export default function AdminPage() {
  const [pageHeaderInfo, setPageHeaderInfo] = useState({
    title: "Yönetim",
    icon: "admin",
  });
  const [isLoading, setLoading] = useState(true);
  const [adminCounts, setAdminCounts] = useState(0);

  const location = useLocation();

  useEffect(() => {}, []);

  useEffect(() => {
    setLoading(true);
    getItemCategoryCount().then((newItemCounts) => {
      setAdminCounts(newItemCounts);
    });
    switch (location.pathname) {
      case "/yonetim/urunler":
        console.log("hey");
        setPageHeaderInfo({ title: "Ürünler", icon: "product" });
        break;
      case "/yonetim/kategoriler":
        setPageHeaderInfo({ title: "Kategoriler", icon: "category" });
        break;
      default:
        setPageHeaderInfo({ title: "Yönetim", icon: "admin" });
    }
    setLoading(false);
  }, [location.pathname]);

  return (
    <section className="admin-page-container">
      <PageTitleHeader
        pageTitle={pageHeaderInfo.title}
        pageIcon={pageHeaderInfo.icon}
        pageType="admin"
      />
      {!isLoading && (
        <Switch>
          <Route exact path="/yonetim">
            <AdminNavButtons
              navPosition="center"
              productCount={adminCounts.items}
              categoryCount={adminCounts.categories}
            />
          </Route>
          <Route path="/yonetim/urunler">
            <AdminProductList />
          </Route>
          <Route path="/yonetim/kategoriler">
            <p>kategoriler</p>
          </Route>
        </Switch>
      )}
    </section>
  );
}
