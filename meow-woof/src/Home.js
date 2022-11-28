import React, {useEffect, useState} from 'react'
import "./Home.css"
import Cats from './images/cats.jpg'
import Product from './Product'
import { Link } from "react-router-dom"
import {collection, getDocs} from "firebase/firestore";
import {db} from "./firebase-config";

function Home() {

    return (
    <div className='home'>
            <div className='home_container'>
            <img className='home_image' src={Cats} alt=""></img>
            
  
        </div>
    </div>

  )
}

export default Home