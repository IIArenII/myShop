import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Men from './pages/Men'
import Women from './pages/Women'
import AllProducts from './pages/AllProducts'
import ProductDetails from './pages/ProductDetails'
import React,{ useEffect, useState } from 'react'
import {fetchProducts} from './products/products'
import CartTab from './pages/CartTab'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <AllProducts products={products} />
        },
        {
          path: "/men",
          element: <Men products={products} />
        },
        {
          path: "/women",
          element: <Women products={products} />
        },
        {
          path: "/:productId",
          element: <ProductDetails products={products} />
        },
        {
          path: "/cart",
          element: <CartTab products={products} />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
