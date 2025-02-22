import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  //onclick ko pura function chahiye hota hai na ki function ka reference ya phir function ki return value
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-5xl">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-5xl">
          <button
            onClick={() => setColor("oklch(0.444 0.177 26.899")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
