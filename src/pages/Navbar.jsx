import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-16 w-full bg-slate-800 text-white'>
        <div className="logo">
            <Link to="/">
                myShop
            </Link>                
        </div>
        <div className='flex gap-5'>
            <Link to="/">All Products</Link>
            <Link to="/men">Men's Clothing</Link>
            <Link to="/women">Women's Clothing</Link>
        </div>
    </div>
  )
}

export default Navbar