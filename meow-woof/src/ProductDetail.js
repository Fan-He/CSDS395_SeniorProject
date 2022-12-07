import React from 'react'
import './ProductDetail.css'
import { useStateValue } from "./StateProvider"
import {useLocation} from 'react-router-dom';
import { configure } from '@testing-library/react';
import { HorizontalSlider } from '@algolia/ui-components-horizontal-slider-react';
import {
    FrequentlyBoughtTogether,
    RelatedProducts,
  } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';
import Product from './Product';

function ProductDetail({id}) {
    const location = useLocation();
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
          type: 'ADD_TO_BASKET', 
          item: {
            id: location.state.id, 
            objectID: location.state.objectID,
            title: location.state.title, 
            image: location.state.image, 
            price: location.state.price, 
            rating: location.state.rating,
            detail: location.state.detail
          },
        });
    
    };
    const recommendClient = recommend("ICV2YF7XAB","802af3124223d9f3a2c0f38c579b7763");
    const indexName = "Pet_Product"
    function RelatedItem({ item }) {
    return (
        <div className = "result">
            <Product
                objectID={item.objectID} 
                title={item.title}
                image={item.image_url}
                price={item.price} 
                rating={item.rating}

                />
        </div>
  );
}
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
                <div>
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
        <div className = "recommend">
        <RelatedProducts
         recommendClient={recommendClient}
         indexName={"Pet_Product"}
         objectIDs={[location.state.objectID]}
         view={HorizontalSlider}
         itemComponent={RelatedItem}    
         maxRecommendations = {5}/>
        </div>
    </div>
    
  )
}

export default ProductDetail