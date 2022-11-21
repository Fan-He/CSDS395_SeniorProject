import React from 'react'
import "./Payment.css"
import { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import BasketProduct from './BasketProduct';
import { Link } from "react-router-dom"

function Payment() {

    const [user] = useState({});
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className='payment_container'>

            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>

            {/* deliver address */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address: </h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>10900 Euclid Ave</p>
                    <p>Cleveland, OH 44106</p>
                </div>

            </div>
            {/* review items */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review and Delivery</h3>
                </div>
                <div className='payment_items'>
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
            {/* payment method */}
            <div className='payment_section'>
                <div className='patment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_detail'>
                    {/* stripe stuffs */}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Payment