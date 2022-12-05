import React, {useEffect, useState} from 'react'
import {doc, getDoc} from "firebase/firestore";
import {db} from "./firebase-config";
import Item from "./Item"
import "./Order.css"

async function getOrderDetails(oid) {
    const docRef = doc(db, "orders", oid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

function Order({order}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (order) {
            getOrderDetails(order)
                .then(res => {
                    if (res) {
                        setProducts(res.products);
                    }
                })
        }
    }, [order]);

    return(
        <div className='order'>
            <h2>OrderID: {order}</h2>
            <div className='order_products'>
                {products?.map(item => (
                    <Item item={item} />
                ))}
            </div>
        </div>

    )

}

export default Order