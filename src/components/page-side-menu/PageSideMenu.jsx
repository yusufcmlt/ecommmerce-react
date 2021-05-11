import React from "react";
import { Route, Switch } from "react-router";

import { AdminFilterMenu } from "../../pages/admin-page/admin-forms/AdminProductForm";
import { adminMenuFilters } from "../../utils/constants";

import "./PageSideMenu.style.scss";

export default function PageSideMenu({ children }) {
  return (
    <div className="page-side-menu-container">
      <Switch>
        <Route path="/yonetim/urunler">
          <AdminFilterMenu
            filter={adminMenuFilters.productsAdmin.name}
            filterOption={adminMenuFilters.productsAdmin.data}
            input={adminMenuFilters.productsAdmin.id}
          />
        </Route>
        <Route path="/yonetim/kategoriler">
          <AdminFilterMenu
            filter={adminMenuFilters.categoriesAdmin.name}
            filterOption={adminMenuFilters.categoriesAdmin.data}
            input={adminMenuFilters.categoriesAdmin.id}
          />
        </Route>
      </Switch>
    </div>
  );
}
