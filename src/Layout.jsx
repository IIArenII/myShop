import React, { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router";
import CartTab from "./pages/CartTab";
import { useSelector } from "react-redux";
import Footer from "./pages/Footer";
import { fetchProducts } from "./products/products";



function Layout() {
  const openCartTab = useSelector((store) => store.cart.cartTab);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, [])


  return (
    <div>
      <main
        className={`w-full m-auto  transform transition-transform duration-500
        ${openCartTab === false ? "" : "-translate-x-56"}`}
      >
        <Navbar products={products} />
        <Outlet />
      </main>
      <CartTab />
      <Footer />
    </div>
  );
}

export default Layout;
