import { useState } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Login onLogin={() => setIsLoggedIn(true)} />
      <Home onLogout={() => setIsLoggedIn(false)} />
    </>
  );
}

export default App;
