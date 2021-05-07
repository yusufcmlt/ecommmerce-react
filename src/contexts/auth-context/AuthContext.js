import React, { useContext, useState, useEffect } from "react";
import { auth, getUserIsAdmin } from "../../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      getUserIsAdmin(user && user.uid).then((userState) => {
        setUserIsAdmin(userState);
        setUserLoading(false);
      });
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    userIsAdmin,
  };
  return (
    <AuthContext.Provider value={value}>
      {!userLoading && children}
    </AuthContext.Provider>
  );
}
