import React from "react";
import "@fontsource/raleway";
import "./layout.css";

function Layout({ children }) {
  console.log("layout");
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
