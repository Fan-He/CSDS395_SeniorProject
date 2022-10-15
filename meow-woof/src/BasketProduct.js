import React from 'react'
import './BasketProduct.css'
import { useStateValue } from './StateProvider'

function BasketProduct({id, image, title, price, rating}) {


    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            id: id, 
        });
    }

    const [{ basket }, dispatch] = useStateValue();


  return (
    <div className='basketProduct'>
        <img className='basketProduct__image' src={image} alt=""/>

        <div className='basketProduct__info'>
            <p className='basketProduct__title'>{title}</p>
            <p className='basketProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='basketProduct__rating'>
                {/* first create an array of size rating, then fill it with stars */}
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default BasketProduct