import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useAuth } from "../../contexts/auth-context/AuthContext";
import { auth } from "../../firebase/firebase";

import "./HeaderBar.style.scss";

export default function HeaderBar() {
  const { currentUser } = useAuth();
  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    <div className="header-bar-container">
      <div className="header-logo" alt="logo" />
      <p className="header-greeting">
        Merhaba,{" "}
        {currentUser ? (
          <React.Fragment>
            <span className="header-greeting-name">
              {currentUser.displayName}
            </span>
            <Link
              onClick={() => {
                auth.signOut();
              }}
              to="/"
            >
              Çıkış Yap
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="header-greeting-name">Misafir</span>
            <Link to="/giris">Giriş Yap</Link>
          </React.Fragment>
        )}
      </p>
      <div className="header-menu-button"></div>
    </div>
  );
}
