import React from 'react'
import "./Payment.css"
import { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import BasketProduct from './BasketProduct';
import { Link } from "react-router-dom"
import { doc, setDoc, addDoc, updateDoc } from "firebase/firestore"; 
import {db} from "./firebase-config";
import { collection, getDocs, arrayUnion, arrayRemove  } from "firebase/firestore";


const newOrder = doc(collection(db, "orders"));

function Payment() {

    const [user] = useState({});
    const [{ basket }, dispatch] = useStateValue();

    const allProducts = [];

    async function placeOrder() {
        basket.forEach(element => {
            allProducts.push(element.id);
            console.log(element.id);
        });
        dispatch({
            type: 'REMOVE_ALL',  
        });

        //Great code
        const newOrder = await addDoc(collection(db, "orders"), {
            UID: "12345",
            products: allProducts
        });
        
        console.log("Order is: ");
        console.log(newOrder.id);

        //----------------------------------------------------------------------------------------------
        //Needs to be updated with currently logged in user id to replace "123123"
        const currentUser = doc(db, "users", "123123");
        //----------------------------------------------------------------------------------------------
        await updateDoc(currentUser, {
            orders: arrayUnion(newOrder.id)
        });
    }



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
            <div className='payment_section'>
                <div className='patment_placeOrder'>
                    <button onClick={placeOrder}>Place Order</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Payment