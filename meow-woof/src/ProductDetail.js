import React from 'react'
import './ProductDetail.css'
import {useLocation} from 'react-router-dom';

function ProductDetail({id}) {
    const location = useLocation();
  return (
    <div className='productDetail'>
        <h1>Product Detail {id}</h1>
        <div>{location.state.title}</div>
        <img src={location.state.image}/>
    </div>
  )
}

export default ProductDetail