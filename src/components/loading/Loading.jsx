import React from "react";

import "./Loading.style.scss";

export default function Loading({ size = "page" }) {
  return <div className={`loading-icon loading-size-${size}`} />;
}
