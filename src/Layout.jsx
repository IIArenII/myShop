import React from 'react'
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router'
import Footer from './pages/Footer'


function Layout () {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout