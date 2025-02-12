import { useState } from "react";
import Youtube from "./youtube.jsx";
function App() {
  const [count, setCount] = useState(0);
  const username = "Pushparaj";
  return (
    <>
      <h1>Vite React App {username}</h1>
      <h1>Vite React App</h1>
      <Youtube />
    </>
  ); //you can't return two elements
  //but we can wrap all the headings in a div
}

export default App;
