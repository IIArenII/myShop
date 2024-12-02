import React from 'react'
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router'
import CartTab from './pages/CartTab'
import { useSelector } from 'react-redux'


function Layout () {
  const openCartTab = useSelector(store => store.cart.cartTab)


  return (
    <div>
        
        <main className={`w-full m-auto  transform transition-transform duration-500
        ${openCartTab === false ? "" : "-translate-x-40" }`}>
            <Navbar /><Outlet />
        </main>
        <CartTab />
    </div>
  )
}

export default Layout