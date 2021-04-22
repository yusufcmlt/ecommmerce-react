import firebase from "./firebase/firebase";

import "./App.scss";
import HeaderBar from "./components/header-bar/HeaderBar";
import Button from "./components/custom-button/CustomButton";
import CustomButton from "./components/custom-button/CustomButton";
import { SignInUp } from "./pages/sign-in-up/SignInUp";

function App() {
  return (
    <div className="App">
      {/* <HeaderBar userName="Yusuf" /> */}
      <SignInUp />
    </div>
  );
}

export default App;
