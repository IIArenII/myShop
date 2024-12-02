import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {store} from '../stores/index'

const CartItem = ({products}) => {
    const {productId, quantity} = useSelector(store = store.cart.items);
    const [detail, setDetail ] = useState([]);
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId[0]);
        setDetail(findDetail);
    }, [productId])
  return (
    <div>
        <img src={detail.image} alt={detail.title} />
    </div>
  )
}

export default CartItem