import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import PageTitleHeader from "../../components/page-title-header/PageTitleHeader";
import { getItemCategoryCount } from "../../firebase/firebase";
import AdminNavButtons from "./admin-nav-buttons/AdminNavButtons";

export default function AdminPage() {
  const [pageTitle, setPageTitle] = useState("Yönetim");
  const [isLoading, setLoading] = useState(true);
  const [adminCounts, setAdminCounts] = useState(0);

  useEffect(() => {
    getItemCategoryCount().then((newItemCounts) => {
      console.log(newItemCounts);
      setAdminCounts(newItemCounts);
    });
    setLoading(false);
  }, []);

  return (
    <section className="admin-page-container">
      <PageTitleHeader
        pageTitle={pageTitle}
        pageIcon="admin"
        pageType="admin"
      />
      {!isLoading && (
        <Switch>
          <Route exact path="/yonetim">
            <AdminNavButtons
              navPosition="center"
              productCount={adminCounts.items}
              categoryCount={adminCounts.categories}
            />
          </Route>
          <Route exact path="/yonetim/urunler">
            <p>Urunler</p>
          </Route>
          <Route exact path="/yonetim/kategoriler">
            <p>kategoriler</p>
          </Route>
        </Switch>
      )}
    </section>
  );
}
