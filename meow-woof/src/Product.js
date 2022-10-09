import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>The lean startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>273.99</strong>
            </p>
            <div className='product__rating'>
                <p>	&#11088;</p>
            </div>
        </div>

        <img src="https://cdn.shopify.com/s/files/1/1957/5661/products/43355-1558541199_8b4425d6-84a2-42d7-8700-c28eae9d4e0e_1000x1000.jpg?v=1594824869" alt=""/>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product