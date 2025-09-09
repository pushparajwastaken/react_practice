import { useState } from "react";
import Card from "./components/card.jsx";
import "./App.css";

function App() {
  let myobject = {
    username: "pushpa",
    age: 20,
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <Card channel="chaiaurcode" someobj={myobject} />

      <Card />
    </>
  );
}

export default App;
