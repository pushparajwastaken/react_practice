import { createRoot } from "react-dom/client";
import App, { Reactelement } from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {Reactelement}
  </>
);
