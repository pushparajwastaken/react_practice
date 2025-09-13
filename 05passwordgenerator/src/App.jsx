import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState();
  const passowordgenerator=useCallback(fn,[length,numberallowed,characters,s])
  return (
    <div>
      <h1 className="text-4xl text-center">Password Generator</h1>
    </div>
  );
}

export default App;
