import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import Product from './Product'
import {db} from "./firebase-config";
import { connectAutoComplete } from 'react-instantsearch-dom';


const allProducts = [];
let oid;

async function getProducts(orderID){
    // console.log('current order id is: ' + orderID);
    const docRef = doc(db, "orders", orderID);
    const docSnap = await getDoc(docRef);
    oid = orderID;
    if (docSnap.exists()) {
        console.log("Order data:", docSnap.data());
    } else {
    // doc.data() will be undefined in this case
        console.log("No such Order!");
    }

    const OrderInfo = docSnap.data();
    const productIDs = OrderInfo.products;


    productIDs.forEach(pid => {
        let p = getProduct(pid);
        // allProducts.push(p);
        // console.log('getting ' + pid);
    });
}

async function getProduct(pid){
    // console.log('now getting single product: ' + pid);
    let pRef = doc(db, "product", pid);
    let pSnap = await getDoc(pRef);
    console.log('now pushing single product: ' + pSnap.data().Title + " to order " + oid);
    allProducts.push(pSnap.data());
}


function OrderBlock({orderID}) {
    console.log('MY ORDER ID IS: !!!' + orderID);

    getProducts(orderID);

  console.log('now products are: ' + allProducts);
//   allProducts.forEach(element => {
//     console.log(element.Title);
//   });
  return (
    <div className='orderblock'>
        <div className='orderblock_id'>
            Order ID: {orderID}
        </div>
        <div className='orderblock_products'>
            {allProducts.map(data => (
                // <Product id = {data.id} title = {data.Title} price = {data.Price} rating = {data.Rating} image = {data.Image_url} detail={data.Detail}/>
                // <image alt="" src={data.Image_url}/>
                <p>{data.Title}</p>
            ))}
        </div>
    </div>
  )
}

export default OrderBlock