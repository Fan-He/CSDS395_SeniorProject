import React from 'react'
import "./Checkout.css"
import checkout_ad from "./images/checkout_ad.png"
import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img 
            className='checkout__ad'
            src={checkout_ad}
            alt=""/>

            <div>
                <h2 className='checkout__title'>Your shopping basket🖤</h2>
                {/* basketItem */}
            </div>

        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout