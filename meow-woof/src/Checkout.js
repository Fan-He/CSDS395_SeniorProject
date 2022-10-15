import React from 'react'
import BasketProduct from './BasketProduct'
import "./Checkout.css"
import checkout_ad from "./images/checkout_ad.png"
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
            className='checkout_ad'
            src={checkout_ad}
            alt=""/>

            <div>
                <h2 className='checkout_title'>Your shopping basket🖤</h2>
                {basket.map(item => (
                  <BasketProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
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