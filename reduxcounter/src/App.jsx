import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addValue, removeValue } from "./Features/counter/conterSlice";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          dispatch(addValue());
        }}
      >
        Add Value
      </button>
      <button
        onClick={() => {
          dispatch(removeValue());
        }}
      >
        Remove Value
      </button>
    </div>
  );
}

export default App;
