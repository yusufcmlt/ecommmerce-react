import React from "react";

import "./PageTitleHeader.style.scss";

export default function PageTitleHeader({
  pageTitle,
  pageIcon,
  pageType,
  children,
}) {
  return (
    <div className="page-title-header box-shadow-rule">
      <div className={`page-title-icon pt-icon-${pageIcon}`} />
      <h3 className={`page-title-text page-title-text-${pageType}`}>
        {pageTitle}
      </h3>
      {children}
    </div>
  );
}
