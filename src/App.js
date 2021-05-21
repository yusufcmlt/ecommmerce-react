import { Switch, Route } from "react-router-dom";

import "./App.scss";
import { SignInUp } from "./pages/sign-in-up/SignInUp";

import React from "react";
import MainPage from "./pages/main-page/MainPage";
import { MenuProvider } from "./contexts/nav-menu-context/NavMenuContext";
import { SizeProvider } from "./contexts/mobile-sizes-context/MobileSizesContext";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/giris"}>
          <SizeProvider>
            <SignInUp />
          </SizeProvider>
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"}>
          <MenuProvider>
            <SizeProvider>
              <MainPage />
            </SizeProvider>
          </MenuProvider>
        </Route>
      </Switch>
    </div>
  );
}
