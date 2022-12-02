import React, {useEffect, useState} from 'react'
import "./Home.css"
import Cats from './images/cats.jpg'
import { collection, getDocs } from "firebase/firestore";
import Product from './Product'
import { Link } from "react-router-dom"
import {QuerySnapshot} from "firebase/firestore";
import {db} from "./firebase-config";
import scroller from "./virtual-and-infinite"

const querySnapshot = await getDocs(collection(db, "product"));
const products = [];
const productComponents = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
    const p = doc.data();
    p.Rating = parseFloat(p.Rating);
    p.Price = parseFloat(p.Price);
    // console.log(typeof p.Price);
  products.push(p);
});

productComponents.push(products.map(data => (
  <Product title = {data.Title} price = {data.Price} rating = {data.Rating} image = {data.Image_url} detail={data.Detail}/>
)));

function Home() {


    return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src={Cats} alt=""></img>
            <div className='home_row'>
                {/* {products.map(data => (
                    <Product title = {data.Title} price = {data.Price} rating = {data.Rating} image = {data.Image_url} detail={data.Detail}/>
                ))} */}
                {/* <scroller listItems={productComponents} height={30}/> */}
                {productComponents}
            </div>

            

        </div>
    </div>

  )
}

export default Home