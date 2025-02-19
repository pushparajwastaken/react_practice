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
      //if we want ki har card ek alag value kare toh in this case we use
      <Card />
    </>
  );
}

export default App;
