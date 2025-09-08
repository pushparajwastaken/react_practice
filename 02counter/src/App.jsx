import { useState } from "react";
import React from "react";
const App = () => {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    if (counter < 20) {
      console.log("Button Clicked");
      setCounter(counter + 1);
    } else {
      return false;
    }
  };
  const RemoveValue = () => {
    if (counter > 0) {
      console.log("Button Clicked");
      setCounter(counter - 1);
    } else {
      return false;
    }
  };
  return (
    <div>
      <h1>Lavanyaa Love Youuuu</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value</button>
    </div>
  );
};
export default App;
