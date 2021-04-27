import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import { SignInUp } from "./pages/sign-in-up/SignInUp";
import { AuthProvider, useAuth } from "./contexts/auth-context/AuthContext";

export default function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App">
      <Switch>
        <Route path="/giris">
          <SignInUp />
        </Route>
        <Route path="/">
          {currentUser ? (
            `Merhaba ${currentUser.email} hosgeldin`
          ) : (
            <Link to="/giris">Giris yap</Link>
          )}
        </Route>
      </Switch>
    </div>
  );
}
