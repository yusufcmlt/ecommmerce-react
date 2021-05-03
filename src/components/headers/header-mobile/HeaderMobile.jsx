import React from "react";
import { useNavMenu } from "../../../contexts/nav-menu-context/NavMenuContext";
import CustomButton from "../../buttons/custom-button/CustomButton";
import LogoMobile from "../../logos/logo-mobile/LogoMobile";
import SearchBar from "../../search-bar/SearchBar";
import UserGreet from "../../user-greet-message/UserGreet";

import "./HeaderMobile.style.scss";

export default function HeaderMobile() {
  const { isMenuOpened, handleMenuOpened } = useNavMenu();

  return (
    <header id="header-mobile-container" className="header-mobile-container">
      {!isMenuOpened ? (
        <React.Fragment>
          <div className="header-mobile-main-row">
            <LogoMobile />
            <UserGreet />
            <CustomButton
              buttonSize="nav"
              buttonIcon="nav"
              funcOnPress={handleMenuOpened}
            />
          </div>
          <div className="header-mobile-optional-row">
            <SearchBar searchBarSize="mobile" />
          </div>
        </React.Fragment>
      ) : (
        <div className="header-mobile-main-row">
          <CustomButton
            buttonSize="back"
            buttonIcon="back"
            funcOnPress={handleMenuOpened}
          />
          <UserGreet />
        </div>
      )}
    </header>
  );
}
