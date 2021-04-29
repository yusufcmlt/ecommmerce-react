import React from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../contexts/auth-context/AuthContext";

import HeaderDesktop from "./header-desktop/HeaderDesktop";
import HeaderMobile from "./header-mobile/HeaderMobile";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width:1000px)" });
  const { currentUser } = useAuth();

  return (
    <React.Fragment>
      {isMobile ? (
        <HeaderMobile currentUser={currentUser} />
      ) : (
        <HeaderDesktop currentUser={currentUser} />
      )}
    </React.Fragment>
  );
}
