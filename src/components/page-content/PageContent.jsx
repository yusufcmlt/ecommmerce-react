import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Redirect, Route, Switch, useLocation } from "react-router";

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
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/yonetim"}>
          {userIsAdmin ? <AdminPage /> : <Redirect to={"/"} />}
        </Route>
        <Route path={"/arama"}>
          <SearchResultsPage />
        </Route>
        <Route path={"/urun/:productID"}>
          <ProductPage />
        </Route>
        <Route path={"/kategori/:categoryID"}>
          <CategoryResultsPage />
        </Route>
        <Route path={"/sepetim"}>
          <div>SEPET</div>
        </Route>
        <Route path={"/siparislerim"}>
          <div>SIPARIS</div>
        </Route>
        <Route path={"/adreslerim"}>
          <div>ADRES</div>
        </Route>
      </Switch>
    </div>
  );
}
