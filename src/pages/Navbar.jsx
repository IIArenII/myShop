import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { GiShoppingBag } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { openCartTab } from '../stores/cart';
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
  const [totalQ, setTotalQ] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const [mobileMenu, setMobileMenu] = useState(false);

  const openCart = () => {
    dispatch(openCartTab());
  }

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQ(total)
  }, [carts])

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav>
      <div className='flex justify-between px-3 md:px-10 lg:px-44 items-center h-16 w-full bg-slate-800 text-white'>
        <div className="logo">
            <Link to="/">

              <p className='text-2xl font-sans font-semibold'>my<span className='text-2xl font-sans font-semibold text-yellow-500'>Shop</span></p>   
            </Link>                
        </div>
        <div className='hidden md:flex gap-5'>
            <Link to="/">All Products</Link>
            <Link to="/men">Men's Clothing</Link>
            <Link to="/women">Women's Clothing</Link>
        </div>
        <div className='flex justify-end gap-4'>
          <div className='flex justify-center items-center bg-white rounded-full cursor-pointer relative'
          onClick={openCart}>
            <GiShoppingBag className='w-8 h-8 text-gray-900 p-1' />
            <span className='flex justify-center items-center absolute top-2/3 -left-1  bg-red-600 w-4 h-4 text-white rounded-full '>{totalQ}</span>
          </div>
          <div className='flex md:hidden justify-center items-center'>
            <CiMenuBurger className='w-6 h-6 cursor-pointer' onClick={toggleMobileMenu} />
            <div></div>
          </div>
        </div>
        
      </div>
      {mobileMenu && (
        <div className="md:hidden bg-slate-800 text-white flex flex-col gap-4 py-4 px-4 shadow-lg ">
          <Link to="/" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">
            All Products
          </Link>
          <Link to="/men" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">
            Men's Clothing
          </Link>
          <Link to="/women" onClick={() => setMobileMenu(false)} className="hover:text-yellow-400 transition">
            Women's Clothing
          </Link>
        </div>
      )}
    </nav>
    
  )
}

export default Navbar