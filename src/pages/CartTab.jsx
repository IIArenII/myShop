import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './cartItem';
import { openCartTab } from '../stores/cart';



const CartTab = ({products}) => {
    const carts = useSelector(store => store.cart.items);
    const isCartTabOpen = useSelector(store => store.cart.cartTab);
    const dispatch = useDispatch();

    const handleCloseMenu = () => {
        dispatch(openCartTab());
    }

  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-80 h-full grid grid-rows-[60px_1fr_60px] 
        transform transition-transform duration-500
        ${isCartTabOpen ? "" : "translate-x-full"}
        `}>
        <h2 className='flex items-center justify-center font-semibold font-sans text-white text-2xl'>SHOPPİNG CART</h2>
       
        <div>
            {carts.map((item, key) =>
            <CartItem key={key} item={item} />
            )}

        </div>
        <div className='w-full flex justify-center items '>
            <button className='bg-black text-white w-[50%]' onClick={handleCloseMenu}>Close</button>
            <button className='bg-amber-600 w-[50%]'>Checkout</button>
        </div>
    </div>
    
  )
}

export default CartTab