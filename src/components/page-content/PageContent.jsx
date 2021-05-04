import React from "react";
import { useMediaQuery } from "react-responsive";
import { Route, Switch } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import HomePage from "../../pages/home-page/HomePage";

import "./PageContent.style.scss";

export default function PageContent() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  useEffect(() => {
    if (isMobile) {
      const headerHeightSelector = document.getElementById(
        "header-mobile-container"
      ).offsetHeight;
      setHeaderHeight(headerHeightSelector);
    }
  }, [isMobile]);

  return (
    <div
      className="app-page-container"
      style={{
        marginTop: isMobile ? `${headerHeight}px` : "0",
      }}
    >
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/sepetim">
          <div>SEPET</div>
        </Route>
        <Route path="/siparislerim">
          <div>SIPARIS</div>
        </Route>
        <Route path="/adreslerim">
          <div>ADRES</div>
        </Route>
      </Switch>
    </div>
  );
}
