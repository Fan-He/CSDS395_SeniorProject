import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import {db} from "./firebase-config";
import OrderBlock from './OrderBlock'
import {useEffect, useState} from "react";
import {onAuthStateChanged, getAuth} from "firebase/auth";
import Order from "./Order"
import "./OrderHistory.css"

async function getUserProfile(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

async function getOrderDetails(oid) {
    const docRef = doc(db, "orders", oid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

function OrderHistory() {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState("");
    //const [products, setProducts] = useState([]);
    const auth = getAuth();

    const [products, setProducts] = useState([]);
    function getProducts(oid){
        getOrderDetails(oid)
            .then(res => {
                if (res) {
                    setProducts(res.products);
                }
            })
        return products;
    }

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
                        setOrders(res.orders);
                    }
                })
        }else{
            setOrders([])
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            getOrderDetails(orders)
                .then(res => {
                    if (res) {
                        setProducts(res.products);
                    }
                })
        }
    }, [user]);


  return (
    <div className='orderhistory'>
        <div className='orderhistory_orders'>
            <h1> Your Orders</h1>
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
        <div>
        </div>
    </div>
  )
}

export default OrderHistory