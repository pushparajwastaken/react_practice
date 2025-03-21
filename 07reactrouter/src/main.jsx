import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout.jsx";
import User from "./components/User/User.jsx";
import GitHub from "./components/Github/Github.jsx";
// To make a router, we have to import createBrowserRouter, which is a method and has an array inside it
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> }, // Home route
      { path: "about", element: <About /> }, // About route
      { path: "contact", element: <Contact /> }, // Contact route
      { path: "user/:id", element: <User /> },
      { path: "github", element: <GitHub /> },
    ],
  },
]);

// Rendering the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* We have to make a router for it */}
  </StrictMode>
);
