//we can do all this work inside of the layout.jsx also
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom"; //this outlet will use the layout as the base keeping the
//header and footer same while dynamically changing the iside
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
//we have to declare it in the index that i'm using a layout and the
// changes are being made inside that //Routing happens like home ke andar
//about us hai home ke andar contact us hai
