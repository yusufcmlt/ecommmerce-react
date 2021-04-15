import React from "react";

import "./HeaderBar.style.scss";

export default function HeaderBar({ userName }) {
  return (
    <div className="header-bar-container">
      <div className="header-logo" alt="logo" />
      <p className="header-greeting">
        Merhaba, <span className="header-greeting-name">{userName}</span>
      </p>
      <div className="header-menu-button"></div>
    </div>
  );
}
