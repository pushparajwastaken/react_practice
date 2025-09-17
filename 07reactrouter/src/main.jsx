import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout.jsx";
import User from "./components/User/User.jsx";
import GitHub, { githubinfoloader } from "./components/Github/Github.jsx";
// To make a router, we have to import createBrowserRouter, which is a method and has an array inside it

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      { path: "contact", element: <Contact /> },
      {
        path: "github",
        loader: githubinfoloader,
        element: <GitHub />,
      },
      {
        path: "user/:id",

        element: <User />,
      },
    ],
  },
]);
// Rendering the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
