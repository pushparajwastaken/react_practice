import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to React</h1>
      <button
        onClick={() => {
          setCount(!count);
        }}
      >
        Toggle Login
      </button>
      <div>
        <h3>&& operator</h3>
        {count.length > 0 && <p>This is from the ternanry operator</p>}
      </div>
      <div>
        <h3>Ternary operator</h3>
        {count.length > 0 ? (
          <p>This is from the ternanry operator</p>
        ) : (
          "Please set the value to true"
        )}
      </div>
    </div>
  );
}

export default App;
