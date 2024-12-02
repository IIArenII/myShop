import React from 'react'
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router'
import CartTab from './pages/CartTab'


function Layout () {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <CartTab />
    </div>
  )
}

export default Layout