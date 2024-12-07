import React from "react";
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router";
import CartTab from "./pages/CartTab";
import { useSelector } from "react-redux";
import Footer from "./pages/Footer";

function Layout() {
  const openCartTab = useSelector((store) => store.cart.cartTab);

  return (
    <div>
      <main
        className={`w-full m-auto  transform transition-transform duration-500
        ${openCartTab === false ? "" : "-translate-x-56"}`}
      >
        <Navbar />
        <Outlet />
      </main>
      <CartTab />
      <Footer />
    </div>
  );
}

export default Layout;
