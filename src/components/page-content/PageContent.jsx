import React from "react";
import { useMediaQuery } from "react-responsive";
import { Redirect, Route, Switch, useLocation } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { useAuth } from "../../contexts/auth-context/AuthContext";
import AdminPage from "../../pages/admin-page/AdminPage";
import HomePage from "../../pages/home-page/HomePage";
import ProductPage from "../../pages/product-page/ProductPage";
import CategoryResultsPage from "../../pages/search-results-page/CategoryResultsPage";
import SearchResultsPage from "../../pages/search-results-page/SearchResultsPage";

import "./PageContent.style.scss";

export default function PageContent() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  const { userIsAdmin } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isMobile) {
      const headerHeightSelector = document.getElementById(
        "header-mobile-container"
      ).offsetHeight;
      setHeaderHeight(headerHeightSelector);
    }
  }, [location.pathname]);

  return (
    <div
      className="app-page-container"
      style={{
        marginTop: isMobile ? `${headerHeight}px` : "0",
      }}
    >
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <HomePage />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/yonetim"}>
          {userIsAdmin ? (
            <AdminPage />
          ) : (
            <Redirect to={process.env.PUBLIC_URL + "/"} />
          )}
        </Route>
        <Route path={process.env.PUBLIC_URL + "/arama"}>
          <SearchResultsPage />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/urun/:productID"}>
          <ProductPage />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/kategori/:categoryID"}>
          <CategoryResultsPage />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/sepetim"}>
          <div>SEPET</div>
        </Route>
        <Route path={process.env.PUBLIC_URL + "/siparislerim"}>
          <div>SIPARIS</div>
        </Route>
        <Route path={process.env.PUBLIC_URL + "/adreslerim"}>
          <div>ADRES</div>
        </Route>
      </Switch>
    </div>
  );
}
