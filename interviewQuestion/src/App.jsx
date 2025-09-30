import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  console.log("App Rendered", Math.random());

  const [count, setCount] = useState({
    value: 0,
  });
  // let multipliedvalue = count * 2;
  const multiply = () => {
    setCount({
      value: 0,
    });
    //console.log("logged");
  };

  return (
    <div>
      <h1>Main Value:{count.value}</h1>
      <button onClick={multiply}>Click value to Multiply</button>
    </div>
  );
}

export default App;
