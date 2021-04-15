import firebase from "./firebase/firebase";

import "./App.scss";
import HeaderBar from "./components/header-bar/HeaderBar";

function App() {
  return (
    <div className="App">
      <HeaderBar userName="Yusuf" />
    </div>
  );
}

export default App;
