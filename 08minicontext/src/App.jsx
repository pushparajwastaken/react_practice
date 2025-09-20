import { useState } from "react";

import "./App.css";
import Usercontextprovier from "../context/usercontextprovider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Usercontextprovier>
      <h1>Lavanya</h1>
      <Login />
      <Profile />
    </Usercontextprovier>
  );
}

export default App;
