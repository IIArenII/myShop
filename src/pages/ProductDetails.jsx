import React from 'react'
import { useParams } from 'react-router'

import Button from '@mui/material/Button';


const ProductDetails = ({products}) => {

    const {productId} = useParams();

    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) {
      return <p>Product not found.</p>; 
    }

  return (
  <div className='flex justify-center items-center min-h-screen'>
    <div className='border border-gray-200 shadow-sm hover:shadow-lg p-10 max-w-[900px] w-full rounded-lg'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        <img src={product.image} alt={product.title} className='w-80 h-auto' />
        <div>
          <h2 className='text-xl font-semibold'>{product.title}</h2>
          <p className='text-gray-600 mt-5'>{product.description}</p>
          <p className='text-gray-900 mt-10 mb-5 font-bold text-3xl'>${product.price}</p>
          <Button variant="contained" size="medium" >
          Add to Cart
        </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails