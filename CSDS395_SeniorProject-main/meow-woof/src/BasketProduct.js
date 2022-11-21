import React from 'react'
import './BasketProduct.css'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from "react-router-dom"

function BasketProduct({id, image, title, price, rating, detail}) {


    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            id: id, 
        });
    }

    const [{ basket }, dispatch] = useStateValue();

    const navigate = useNavigate();

    const toProductDetail=()=>{navigate('/productdetail',{state:{id: id, title:title, image:image, price:price, rating:rating, detail:detail}});console.log("title is clicked");
    }


  return (
    <div className='basketProduct'>
        <img className='basketProduct__image' src={image} alt=""/>

        <div className='basketProduct__info'>
            <div className='basketProduct__title' onClick={toProductDetail}>
                <Link>{title}</Link>
            </div>
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