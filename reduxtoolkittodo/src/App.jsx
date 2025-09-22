import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is a crash course to Redux toolkitnp</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
