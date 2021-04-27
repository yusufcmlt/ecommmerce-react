import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setUserLoading(false);
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
  };
  return (
    <AuthContext.Provider value={value}>
      {!userLoading && children}
    </AuthContext.Provider>
  );
}
