import React from "react";
import { Route, Switch } from "react-router";
import { AdminCategoryMenu } from "../../pages/admin-page/admin-forms/AdminCategoryForm";
import { AdminProductMenu } from "../../pages/admin-page/admin-forms/AdminProductForm";

import "./PageSideMenu.style.scss";

export default function PageSideMenu({ children }) {
  return (
    <div className="page-side-menu-container">
      <Switch>
        <Route path="/yonetim/urunler">
          <AdminProductMenu />
        </Route>
        <Route path="/yonetim/kategoriler">
          <AdminCategoryMenu />
        </Route>
      </Switch>
    </div>
  );
}
