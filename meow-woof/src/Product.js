import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"
import { Link, useNavigate } from "react-router-dom"


function Product({id, title, image, price, rating}) {

  const [{ basket }, dispatch] = useStateValue();

  const productlink = "productdetail/" + {id}

  // console.log("the basket is >>>>>>> ", basket)

  const navigate = useNavigate();

  const toProductDetail=()=>{navigate('/productdetail',{state:{id: id, title:title, image:image, price:price, rating:rating}});console.log("title is clicked");
  }

  const clickTitle=()=>{console.log("title is clicked");
  }

  

  const addToBasket = () => {
    //dispatch item into data layer
    dispatch({
      type: 'ADD_TO_BASKET', 
      item: {
        id: id, 
        title: title, 
        image: image, 
        price: price, 
        rating: rating
      },
    });
  };

  return (
    

    <div className='product'>
        <div className='product_info'>
            <div onClick={toProductDetail} >
              <Link>
                <p>{title}</p>
              </Link>
            </div>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
            </div>
        </div>

        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>
        <button onClick={toProductDetail}>to detail</button>
    </div>
  )
}

export default Product