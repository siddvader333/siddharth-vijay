import React from "react";
import "@fontsource/raleway";
import "./layout.css";
import Navbar from "./Navbar";

function Layout({ children }) {
  console.log("layout");
  return (
    <>
    <Navbar/>
      <main>{children}</main>
    </>
  );
}

export default Layout;
