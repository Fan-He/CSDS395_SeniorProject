import React from 'react'
import './ProductDetail.css'
import { useStateValue } from "./StateProvider"
import {useLocation} from 'react-router-dom';

function ProductDetail({id}) {
    const location = useLocation();
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
          type: 'ADD_TO_BASKET', 
          item: {
            id: location.state.id, 
            title: location.state.title, 
            image: location.state.image, 
            price: location.state.price, 
            rating: location.state.rating,
            detail: location.state.detail
          },
        });
    };

  return (
    <div className='productDetail'>
        {/* <h1>Product Detail {id}</h1>
        <div>{location.state.title}</div>
        <img src={location.state.image}/> */}
        <div className='productdetail_container'>
            <img className='productdetail_image' src={location.state.image} alt=""/>
            <div className='productdetail_info'>
                <p className='productdetail_title'>{location.state.title}</p>
                <p className='productdetail_price'>
                    <small>$</small>
                    <strong>{location.state.price}</strong>
                </p>
                <div className='productdetail_rating'>
                {/* first create an array of size rating, then fill it with stars */}
                {Array(location.state.rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
                <div className='productdetail_addToBasket'>
                    <button onClick={addToBasket}>Add to Basket</button>
                </div>
                <div className='productdetail_detail'>
                    <p>{location.state.detail}</p>
                </div>
            </div>
        </div>
        
        <div className='productdetail_functions'>
            {/* <div className='productdetail_addToBasket'>
                <button onClick={addToBasket}>Add to Basket</button>
            </div> */}
        </div>
        <div className='productdetail_promotions'>

        </div>
    </div>
  )
}

export default ProductDetail