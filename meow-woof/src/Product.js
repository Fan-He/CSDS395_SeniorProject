import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"
import { Link, useNavigate } from "react-router-dom"


function Product({id, objectID, title, image, price, rating, detail}) {

  const [{ basket }, dispatch] = useStateValue();

  const productlink = "productdetail/" + {id}

  // console.log("the basket is >>>>>>> ", basket)

  const navigate = useNavigate();

  const toProductDetail=()=>{navigate('/productdetail',{state:{id: id, objectID:objectID, title:title, image:image, price:price, rating:rating, detail:detail}});console.log("title is clicked");
  }

  const clickTitle=()=>{console.log("title is clicked");
  }

  

  const addToBasket = () => {
    //dispatch item into data layer
    dispatch({
      type: 'ADD_TO_BASKET', 
      item: {
        id: id, 
        objectID: objectID,
        title: title, 
        image: image, 
        price: price, 
        rating: rating,
        detail: detail
      },
    });
  };

  return (
    

    // <div className='product'>
    //     <img src={image} alt=""/>
    //     <div className='product_info'>
    //         <div onClick={toProductDetail} >
    //           <Link>
    //             <p>{title}</p>
    //           </Link>
    //         </div>
    //         <p className='product_price'>
    //             <small>$</small>
    //             <strong>{price}</strong>
    //         </p>
    //         <div className='product_rating'>
    //             {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
    //         </div>
    //     </div>

    //     {/* <img src={image} alt=""/> */}
    //     <button onClick={addToBasket}>Add to Basket</button>
    //     {/* <button onClick={toProductDetail}>to detail</button> */}
    // </div>
    <div class="card">

    <div class="imgBox">
      <img src={image} alt="mouse corsair" class="mouse"/>
    </div>

    <div class="contentBox">
        <h3 onClick={toProductDetail} >
               <Link>
                 <p>{title}</p>
               </Link>
        </h3>
      <h2 class="price">$<small>{price}</small></h2>
      <div className='product_rating'>
        {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
      </div>
      {/* <a href="#" class="buy">Add To Basket</a> */}
      <button href="#" class="buy" onClick={addToBasket}>Add to Basket</button>
    </div>

    </div>
  )
}

export default Product