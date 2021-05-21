import React from "react";
import { Route, Switch } from "react-router";

import {
  AdminFilterMenu,
  MainFilter,
} from "../../components/filter-menu/FilterMenu";
import { adminMenuFilters } from "../../utils/constants";

import "./PageSideMenu.style.scss";

export default function PageSideMenu({
  children,
  title = "Filtrele",
  size = "",
}) {
  return (
    <div className={`${size} page-side-menu-container`}>
      <h4>{title}</h4>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/yonetim/urunler"}>
          <AdminFilterMenu
            filter={adminMenuFilters.productsAdmin}
            input={adminMenuFilters.productsAdmin.id}
          />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/yonetim/kategoriler"}>
          <AdminFilterMenu
            filter={adminMenuFilters.categoriesAdmin}
            input={adminMenuFilters.categoriesAdmin.id}
          />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/arama"}>
          <MainFilter />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/kategori"}>
          <MainFilter />
        </Route>
      </Switch>
    </div>
  );
}
