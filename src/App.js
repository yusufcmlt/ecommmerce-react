import { Switch, Route } from "react-router-dom";

import "./App.scss";
import { SignInUp } from "./pages/sign-in-up/SignInUp";

import React from "react";
import MainPage from "./pages/main-page/MainPage";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/giris">
          <SignInUp />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}
