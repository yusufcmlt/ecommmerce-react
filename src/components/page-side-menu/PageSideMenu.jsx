import React from "react";
import { Route, Switch } from "react-router";

import { AdminFilterMenu } from "../../components/filter-menu/FilterMenu";
import { adminMenuFilters } from "../../utils/constants";

import "./PageSideMenu.style.scss";

export default function PageSideMenu({ children }) {
  return (
    <div className="page-side-menu-container">
      <Switch>
        <Route path="/yonetim/urunler">
          <AdminFilterMenu
            filter={adminMenuFilters.productsAdmin}
            input={adminMenuFilters.productsAdmin.id}
          />
        </Route>
        <Route path="/yonetim/kategoriler">
          <AdminFilterMenu
            filter={adminMenuFilters.categoriesAdmin}
            input={adminMenuFilters.categoriesAdmin.id}
          />
        </Route>
      </Switch>
    </div>
  );
}
