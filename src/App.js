import firebase from "./firebase/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import HeaderBar from "./components/header-bar/HeaderBar";
import Button from "./components/custom-button/CustomButton";
import CustomButton from "./components/custom-button/CustomButton";
import { SignInUp } from "./pages/sign-in-up/SignInUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/giris">
          <SignInUp />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
