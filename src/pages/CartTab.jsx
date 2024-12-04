import React, { useEffect, useState } from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './CartItem';
import { openCartTab } from '../stores/cart';
import {fetchProducts} from '../products/products'


const CartTab = ({  }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async() => {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      };
      getProducts();
    }, [])


    const carts = useSelector(store => store.cart.items);
    const isCartTabOpen = useSelector(store => store.cart.cartTab);
    const dispatch = useDispatch();

    const handleCloseMenu = () => {
        dispatch(openCartTab());
    }

    console.log(isCartTabOpen);  // Check if the cartTab state is toggling properly


    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-[360px] h-full grid grid-rows-[60px_1fr_60px] 
            transform transition-transform duration-500
            ${isCartTabOpen ? "" : "translate-x-full"}`}>
            <h2 className='flex items-center justify-center font-semibold font-sans text-white text-2xl'>SHOPPING CART</h2>
            <div>
                {carts.map((item, key) =>
                    <CartItem
                        key={key}
                        data={item}
                        products={products}
                    />
                )}
            </div>
            <div className='w-full flex justify-center items'>
                <button className='bg-black text-white w-[50%]' onClick={handleCloseMenu}>Close</button>
                <button className='bg-amber-600 w-[50%]'>Checkout</button>
            </div>
        </div>
    )
}


export default CartTab
