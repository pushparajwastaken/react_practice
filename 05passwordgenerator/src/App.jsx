import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState();
  const passowordgenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (numberallowed) {
      str += "1234567890";
    }
    if (characters) {
      str += "!@#$%^&*()--{}[]:;<,>.?/";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, characters, setPassword]);
  return (
    <div>
      <h1 className="text-4xl text-center">Password Generator</h1>
    </div>
  );
}

export default App;
