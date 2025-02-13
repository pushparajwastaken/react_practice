import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5); //setcounter aur counter are jsut name of the variables and set counter
  // would take in the new value of the counrter as parameter
  //let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      console.log("Button clicked", Math.random());
      setCounter(counter + 1);
    } else {
      return false;
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      console.log("Counter Removed");
      setCounter(counter - 1);
    } else {
      return false;
    }
  };
  return (
    <>
      <h1>Pushparaj And Lavaaa</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
