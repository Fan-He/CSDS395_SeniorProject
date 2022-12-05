import React, {useEffect, useState} from 'react'
import {doc, getDoc} from "firebase/firestore";
import {db} from "./firebase-config";
import "./Item.css"

async function getProducts(pid) {
    const docRef = doc(db, "product", pid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

function Item({item}){
    const [price, setPrice] = useState(" ");
    const [title, setTitle] = useState(" ");
    const [image, setImage] = useState(" ");

    useEffect(() => {
        if (item) {
            getProducts(item)
                .then(res => {
                    if (res) {
                        setPrice(res.Price);
                        setTitle(res.Title);
                        setImage(res.Image_url);
                    }
                })
        }
        else{
            setPrice("")
        }
    }, [item]);

    return(
        <div className = 'item'>
            {/* <h3>ProductID: {item}</h3>
            <p>{title}</p>
            <p>Price: {price}</p> */}
            <div className='item_img'>
                <img src={image}/>
            </div>
            <div className='item_info'>
                <p>{title}</p>
                <p>Price: ${price}</p>
            </div>
        </div>

    )

}

export default Item