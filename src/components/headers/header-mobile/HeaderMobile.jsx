import React from "react";
import { useLocation } from "react-router";

import LogoMobile from "../../logos/logo-mobile/LogoMobile";
import SearchBar from "../../search-bar/SearchBar";
import UserGreet from "../../user-greet-message/UserGreet";

import "./HeaderMobile.style.scss";

export default function HeaderMobile() {
  const location = useLocation();

  return (
    <header id="header-mobile-container" className="header-mobile-container">
      <React.Fragment>
        <div className="header-mobile-main-row">
          {<LogoMobile />}
          <UserGreet />
        </div>
        <div className="header-mobile-optional-row">
          {location.pathname === "/" ? (
            <SearchBar searchBarSize="mobile" />
          ) : null}
        </div>
      </React.Fragment>
    </header>
  );
}
