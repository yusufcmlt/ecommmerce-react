import React from "react";

import { useAuth } from "../../contexts/auth-context/AuthContext";

import "./UserGreet.style.scss";
export default function UserGreet() {
  const { currentUser } = useAuth();
  return (
    <div className="header-greet">
      Merhaba,
      <span className="header-greet-username">
        {currentUser ? currentUser.displayName : "Misafir"}!
      </span>
    </div>
  );
}
