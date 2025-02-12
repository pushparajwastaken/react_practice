import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React, { StrictMode } from "react";

function Myapp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
// const Reactelement = {
//   type: "a", // It's a link ("<a>")
//   props: {
//     href: "https://google.com", // The link should go to Google
//     target: "_blank", // It should open in a new tab
//   },
//   children: "Click me to visit google", // This is the text inside the link
// };

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
const anotheruser = "Pushparaj";
const Reactelement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  `Click me to visit Google, ${anotheruser}`
);
const root = createRoot(document.getElementById("root"));
root.render(Reactelement);
