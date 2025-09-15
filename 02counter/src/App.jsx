import { useState } from "react";
import React from "react";
const App = () => {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    if (counter < 20) {
      console.log("Button Clicked");
      setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      //even by adding these many setCounter the increment will be of only 1 because of useState
      //useState sends all the updates in UI in batches
      //React sees all of these calls in the same render cycle. Since each call is using the same stale value of counter, they all effectively mean:

      //"set counter to (oldCounter + 1)"

      //not "increment three times".
      //So the final state after React processes them will just be +1, not +3.
      /*If you want each update to take the latest value, you should use the functional form of setState:

setCounter(prev => prev + 1);
setCounter((counter) => counter + 1);
setCounter(prevCounter => prevCounter + 1);


Now React doesn’t just see "set counter to X". Instead, it sees "update counter based on whatever the latest value is".
This will result in +3 as expected. ✅ */
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
      <h1>Lavanyaaa Love You</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value</button>
    </div>
  );
};
export default App;
