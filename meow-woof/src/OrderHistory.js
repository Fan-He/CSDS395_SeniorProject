import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import {db} from "./firebase-config";
import OrderBlock from './OrderBlock'


const docRef = doc(db, "users", "123123");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("User data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such User!");
}

const userInfo = docSnap.data();
const orders = userInfo.orders;
// console.log('current sum order is: ' + orders);

function OrderHistory() {

  return (
    <div className='orderhistory'>
        <div className='orderhistory_orders'>
            {orders.map(data => (
                <OrderBlock orderID = {data}/>
            ))}
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default OrderHistory