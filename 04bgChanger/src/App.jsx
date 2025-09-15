import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="min-h-screen w-screen duration-200 flex items-center justify-center overflow-hidden "
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-4 bg-white p-4 rounded-lg shadow">
        <button
          className="px-4 py-2 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-600"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-600"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white font-semibold bg-pink-500 hover:bg-pink-600"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white font-semibold bg-yellow-500 hover:bg-yellow-600"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white font-semibold bg-violet-500 hover:bg-violet-600"
          onClick={() => setColor("violet")}
        >
          Violet
        </button>
      </div>
    </div>
  );
}

export default App;
