import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from ".";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
