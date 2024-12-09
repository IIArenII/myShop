import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {changeQ} from '../stores/cart';


const CartItem = (  {data,products }) => {
    const {productId, quantity} = data;
    const [detail, setDetail] = useState([]); // Initialize as null for conditional rendering
    const dispatch = useDispatch();

    useEffect(() => {
        if (products && products.length > 0) {
            const productDetail = products.find(product => product.id === productId);
    
            if (productDetail) {
                setDetail(productDetail);
                console.log(detail); 
            } else {
                console.warn(`No product found for id: ${productId}`);
            }
        } else {
            // Handle case where products are undefined or empty
            console.log('Products data is not available or still loading');
        }
    }, [productId, products]);
    
    if (!detail) {
        return <div>Loading product details...</div>;
    }

    const handleMinusQ = () => {
        dispatch(changeQ({
            productId: productId,
            quantity: quantity - 1
        }));
    }

    const handlePlusQ = () => {
        dispatch(changeQ({
            productId: productId,
            quantity: quantity + 1
        }));
    }


    return (
        <div className="flex items-center gap-5 border-b p-2 bg-white rounded-lg mx-2 mb-3 ">
            
            <img src={detail.image} alt={detail.title} className="w-20 h-20 rounded-full" />
            <div>
                <h3 className="text-lg font-semibold">{detail.title}</h3>
                <div className='flex gap-3'>
                    <button className='flex bg-slate-100 rounded-full font-semibold w-4 h-4 items-center justify-center' onClick={handleMinusQ}>-</button>
                    <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                    <button className='flex bg-slate-100 rounded-full font-semibold w-4 h-4 items-center justify-center' onClick={handlePlusQ}>+</button>  
                </div>
                <p className="text-sm font-medium text-gray-900">${detail.price * quantity}</p>
                
            </div>
        </div>
    ); 
};

export default CartItem
