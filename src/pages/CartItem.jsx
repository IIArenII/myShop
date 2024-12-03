import React, { useEffect, useState } from 'react';



const CartItem = (  {data,products }) => {
    const {productId, quantity} = data;
    const [detail, setDetail] = useState(null); // Initialize as null for conditional rendering

    useEffect(() => {
        if (products && products.length > 0) {
            const productDetail = products.find(product => product.id === productId)[0];
            if (productDetail) {
                setDetail(productDetail);
            }  else {
                console.warn(`No product found for id: ${productId}`);
            }
        }
    }, [productId, products]);

    if (!detail) {
        return (
            <div className="text-red-500">
                Loading product details or unable to load. Please check your product data.
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4 border-b p-2">
            <img src={detail.image} alt={detail.title} className="w-16 h-16 object-cover" />
            <div>
                <h3 className="text-lg font-semibold">{detail.title}</h3>
                <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                <p className="text-sm font-medium text-gray-900">${detail.price || '0.00'}</p>
            </div>
        </div>
    );
};

export default CartItem
