import React from 'react'
import "./Home.css"
import Cats from './images/cats.jpg'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src={Cats} alt=""></img>
            <div className='home__row'>
                <Product/>
            </div>

            <div className='home__row'>
                {/* product */}
                {/* product */}
                {/* product */}
            </div>

            <div className='home__row'>
                {/* product */}
            </div>
        </div>
    </div>

  )
}

export default Home