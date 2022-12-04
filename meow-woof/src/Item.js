import React, {useEffect, useState} from 'react'
import {doc, getDoc} from "firebase/firestore";
import {db} from "./firebase-config";

async function getProducts(pid) {
    const docRef = doc(db, "product", pid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

function Item({item}){
    const [price, setPrice] = useState(" ");
    const [title, setTitle] = useState(" ");

    useEffect(() => {
        if (item) {
            getProducts(item)
                .then(res => {
                    if (res) {
                        setPrice(res.Price);
                        setTitle(res.Title)
                    }
                })
        }
        else{
            setPrice("")
        }
    }, [item]);

    return(
        <div className = 'order'>
            <h3>ProductID: {item}</h3>
            <p>{title}</p>
            <p>Price: {price}</p>
        </div>

    )

}

export default Item