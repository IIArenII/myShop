import React from 'react'
import { Link } from 'react-router';


const Women = ({products}) => {

  const womensProducts = products.filter(product => product.category === "women's clothing");

  return (
    
    <div className='flex flex-col w-full min-h-screen gap-6 bg-gray-50 '>
      <h1 className='text-slate-900 font-sans font-extrabold text-center text-5xl py-12 tracking-tight'>Our Products</h1>
      
       
      <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-grow gap-10 p-8'>
        {womensProducts.map((product) => (
          <Link key={product.id} to={`/${product.id}`}>
            <li className='bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl  duration-300 
                hover:scale-105 ease-in-out cursor-pointer overflow-hidden 
            '>
              <img src={product.image} alt={product.title} className='w-full h-64 object-cover rounded-t-3xl ' />
              <div className="p-6 space-y-3">
                    <h2 className="text-lg font-semibold text-gray-700 truncate">
                      {product.title}
                    </h2>
                    <p className="text-2xl font-bold text-gray-800">${product.price}</p>
                    <button className="mt-3 w-full text-sm font-medium text-white bg-gradient-to-r from-slate-800 to-slate-500 py-2 px-4 rounded-full shadow-sm hover:from-slate-600 hover:to-slate-400 transition-all">
                      View Details
                    </button>
                  </div>
            </li>
          </Link>
        
        ))}
      </ul>
       
       
      
    </div>

  );
};

export default Women