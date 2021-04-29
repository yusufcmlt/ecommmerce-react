import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import { SignInUp } from "./pages/sign-in-up/SignInUp";
import { useAuth } from "./contexts/auth-context/AuthContext";
import { auth } from "./firebase/firebase";
import React, { useEffect } from "react";
import MainPage from "./pages/main-page/MainPage";

export default function App() {
  const { currentUser } = useAuth();

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
