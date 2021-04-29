import React from "react";
import Header from "../../components/headers/Header";

import "./MainPage.style.scss";

export default function MainPage() {
  return (
    <div className="main-page-container">
      <Header />
      <div style={{ margin: "auto" }}>SOME CONTENT</div>
      <div style={{ marginTop: "auto" }}>SOME FOOTER</div>
    </div>
  );
}
