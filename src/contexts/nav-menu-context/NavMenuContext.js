import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react/cjs/react.development";

const NavMenuContext = React.createContext();

export function useNavMenu() {
  return useContext(NavMenuContext);
}

export function MenuProvider({ children }) {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [appPageState, setPageState] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setPageState((appPageState) => pathname.slice(1));
  }, [pathname]);

  function handleMenuOpened() {
    setMenuOpened((isMenuOpened) => !isMenuOpened);
  }
  function handlePageState(pageState) {
    setPageState((appPageState) => pageState);
  }

  const value = {
    isMenuOpened,
    handleMenuOpened,
    appPageState,
    handlePageState,
  };
  return (
    <NavMenuContext.Provider value={value}>{children}</NavMenuContext.Provider>
  );
}