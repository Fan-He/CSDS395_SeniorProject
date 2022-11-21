import React from 'react'
import BasketProduct from './BasketProduct'
import "./Checkout.css"
import checkout_ad from "./images/checkout_ad.png"
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
import { useState, useEffect } from 'react'

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();
  const [user] = useState({});
  console.log("user is "+user.email);


  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
            className='checkout_ad'
            src={checkout_ad}
            alt=""/>

            <div>
              <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your shopping basket🖤</h2>
                {basket.map(item => (
                  <BasketProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    detail={item.detail}
                  />
                ))}
            </div>

        </div>

        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout