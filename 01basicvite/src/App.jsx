import Youtube from "./youtube.jsx";
import React from "react";

function App() {
  const username = "Pushparaj";
  return (
    <div>
      <h1>Vite React App {username}</h1>
      <h1>Vite React App</h1>
      <Youtube />
    </div>
  ); //you can't return two elements
  //but we can wrap all the headings in a div
}
const anotheruser = "Pushparaj";
const Reactelement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  `Click me to visit Google, ${anotheruser}`
);
export { Reactelement };
export default App;
