import React from 'react'
import { Link } from 'react-router'
import { GiShoppingBag } from "react-icons/gi";

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
        <div className='flex justify-center items-center bg-white rounded-full cursor-pointer relative'>
          <GiShoppingBag className='w-8 h-8 text-gray-900 p-1' />
          <span className='flex justify-center items-center absolute top-2/3 -left-1  bg-red-600 w-4 h-4 text-white rounded-full '>0</span>
        </div>
    </div>
  )
}

export default Navbar