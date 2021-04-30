import React, { useContext, useState } from "react";

const MobileMenuContext = React.createContext();

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function MenuProvider({ children }) {
  const [isMenuOpened, setMenuOpened] = useState(false);

  function handleMenuOpened() {
    setMenuOpened((isMenuOpened) => !isMenuOpened);
  }

  const value = {
    isMenuOpened,
    handleMenuOpened,
  };
  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
}
