import React, { useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const MobileSizeContext = React.createContext();

export function useSize() {
  return useContext(MobileSizeContext);
}

export function SizeProvider({ children }) {
  const [pageMobileHeight, setPageMobileHeight] = useState(100);
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  useEffect(() => {
    if (isMobile) {
      const mobileHeight = window.innerHeight;
      setPageMobileHeight(mobileHeight);
    }
  }, [isMobile]);

  const value = { pageMobileHeight };
  return (
    <MobileSizeContext.Provider value={value}>
      {children}
    </MobileSizeContext.Provider>
  );
}
