import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './cartItem';

const CartTab = ({products}) => {
    const carts = useSelector(store => store.cart.items);


  return (
    <div className="fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500" >
        <h2>SHOPPİNG CART</h2>
        <div>
            {carts.map((item, key) =>
                <CartItem key={key} item={products} />
            )}

        </div>
        <div>
            <button className='bg-black text-white'>Close</button>
            <button className='bg-amber-600'>Checkout</button>
        </div>
    </div>
    
  )
}

export default CartTab