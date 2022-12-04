import React from 'react'
import "./Product1.css"
import { useStateValue } from "./StateProvider"
import { Link, useNavigate } from "react-router-dom"


function Product1({id, title, image, price, rating, detail}) {

  const [{ basket }, dispatch] = useStateValue();

  const productlink = "productdetail/" + {id}

  // console.log("the basket is >>>>>>> ", basket)

  const navigate = useNavigate();

  const toProductDetail=()=>{navigate('/productdetail',{state:{id: id, title:title, image:image, price:price, rating:rating, detail:detail}});console.log("title is clicked");
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
        rating: rating,
        detail: detail
      },
    });
  };

  return (
    <div className='product1'>
        <div className='product_info1'>
            <div className='product_info1_text' onClick={toProductDetail} >
              <Link>
                <p>{title}</p>
              </Link>
            </div>
            <p className='product_price1'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating1'>
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
            </div>
        </div>

        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>
        {/* <button onClick={toProductDetail}>to detail</button> */}
    </div>
  )
}

export default Product1