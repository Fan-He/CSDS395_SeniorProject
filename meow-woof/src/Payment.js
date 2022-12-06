import React from 'react'
import "./Payment.css"
import { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import BasketProduct from './BasketProduct';
import { Link } from "react-router-dom"
import {doc, setDoc, addDoc, updateDoc, getDoc} from "firebase/firestore";
import {db} from "./firebase-config";
import { collection, getDocs, arrayUnion, arrayRemove  } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import CurrencyFormat from "react-currency-format"
import { getTotalInBasket } from "./reducer"
import { useNavigate } from "react-router-dom"


const newOrder = doc(collection(db, "orders"));



async function getUserProfile(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

function Payment() {
    const [user, setUser] = useState({});
    const [{ basket }, dispatch] = useStateValue();
    const [userAddress, setUserAddress] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userState, setUserState] = useState("");
    const [userZip, setUserZip] = useState("");
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const allProducts = [];
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    useEffect(() => {
        if (user) {
            getUserProfile(user.uid)
                .then(res => {
                    if (res) {
                        setUserAddress(res.address);
                        setUserCity(res.city);
                        setUserState(res.state);
                        setUserZip(res.zip);
                        setUserName(res.name)
                    }
                })
        }
    }, [user]);

    async function placeOrder() {
        basket.forEach(element => {
            allProducts.push(element.id);
            console.log(element.id);
        });
        if(allProducts.length > 0){
            dispatch({
                type: 'REMOVE_ALL',  
            });

            //Great code
            const newOrder = await addDoc(collection(db, "orders"), {
                UID: user.uid,
                products: allProducts
            });
            
            console.log("Order is: ");
            console.log(newOrder.id);

            //----------------------------------------------------------------------------------------------
            //Needs to be updated with currently logged in user id to replace "123123"
            const currentUser = doc(db, "users", user.uid);
            //----------------------------------------------------------------------------------------------
            await updateDoc(currentUser, {
                orders: arrayUnion(newOrder.id)
            });
            // alert("Order Placed! Thank you!");
            navigate('/thanks');
        }
        else{
            alert("The shopping basket is empty!");
        }
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
                    <p>{userName}</p>
                    <p>{userAddress}</p>
                    <p>{userCity}, {userState} {userZip}</p>
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

            <div className='payment_section'>
                <div className='payment_subtotal'>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                            <p>
                                Subtotal ({basket.length} items): <strong>{value}</strong>
                            </p>
                        </>
                        )}
                        decimalScale={2}
                        value = {getTotalInBasket(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                </div>
            </div>

            {/* payment method */}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_detail'>
                    {/* stripe stuffs */}
                </div>
                
            </div>
            <div className='payment_section'>
                <div className='payment_placeOrder'>
                    <button onClick={placeOrder}>Place Order</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Payment