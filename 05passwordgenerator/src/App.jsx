import { useCallback, useState, useEffect, useRef } from "react";

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
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, characters, setPassword]);
  useEffect(() => {
    passowordgenerator();
  }, [length, numberallowed, characters, , passowordgenerator]);
  const passwordref = useRef();
  const copypassword = () => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 15);
    window.navigator.clipboard.writeText(password);
  };
  return (
    <div className="w-full max-w-md mx-auto shadow-md px-4 py-3 my-8 text-orange-500 bg-green-400 rounded-lg ">
      <h1 className="text-white text-center my-2">Password Generator</h1>
      <div className="flex-shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordref}
        />
        <button
          onClick={copypassword}
          className="outline-none hover:bg-blue-700 bg-blue-300 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2'">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white ">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={() => {
              setNumberallowed((prev) => !prev);
            }}
          />
          <label className="text-white ">Numbers </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characters}
            id="characInput"
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <label className="text-white ">Characters </label>
        </div>
      </div>
    </div>
  );
}

export default App;
