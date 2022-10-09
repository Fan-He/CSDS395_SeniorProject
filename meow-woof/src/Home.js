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
                <Product 
                id="1123" 
                title='Instinct Ultimate Protein Duck Recipe 4-lb bag' 
                image="https://cdn.shopify.com/s/files/1/1957/5661/products/43355-1558541199_8b4425d6-84a2-42d7-8700-c28eae9d4e0e_1000x1000.jpg?v=1594824869"
                price={39.99} 
                rating={4}/>
                <Product 
                id="1124" 
                title='Instinct Original Grain-Free Recipe with Real Chicken' 
                image="https://assets.petco.com/petco/image/upload/f_auto,q_auto/2749832-center-1"
                price={24.99} 
                rating={4}/>
                
            </div>

            <div className='home__row'>
                <Product 
                id="2134" 
                title='Frisco Animal Series Cat Condo, Llama' 
                image="https://image.chewy.com/is/image/catalog/289340_MAIN._AC_SL600_V1633012080_.jpg"
                price={56.99} 
                rating={5}/>
                <Product 
                id="2135" 
                title='Frisco Animal Series Cat Condo, Sloth' 
                image="https://image.chewy.com/is/image/catalog/289341_MAIN._AC_SL1500_V1633012197_.jpg"
                price={39.22} 
                rating={5}/>
                <Product 
                id="2135" 
                title='Frisco Animal Series Cat Condo, Unicorn' 
                image="https://image.chewy.com/is/image/catalog/289339_MAIN._AC_SS300_V1633012235_.jpg"
                price={58.67} 
                rating={4}/>
            </div>

            <div className='home__row'>
                <Product 
                id="3101" 
                title='Wellness CORE Signature Flaked Tuna & Wild Salmon Canned Cat Food' 
                image="https://image.chewy.com/is/image/catalog/119917_MAIN._AC_SL600_V1621987351_.jpg"
                price={36.98} 
                rating={4}/>
                <Product 
                id="3102" 
                title='Weruva Paw Lickin Chicken in Gravy Grain-Free Canned Cat Food' 
                image="https://image.chewy.com/is/image/catalog/49319_MAIN._AC_SL600_V1643067725_.jpg"
                price={37.35} 
                rating={4}/>
                <Product 
                id="3103" 
                title='Weruva Cats in the Kitchen Cuties Grain-Free Canned Cat Food' 
                image="https://image.chewy.com/is/image/catalog/115896_MAIN._AC_SL600_V1536253316_.jpg"
                price={17.03} 
                rating={3}/>
                <Product 
                id="3104" 
                title='Tiki Cat After Dark Variety Pack Canned Cat Food, 2.8-oz, case of 12' 
                image="https://image.chewy.com/is/image/catalog/112295_MAIN._AC_SL600_V1626731772_.jpg"
                price={23.58} 
                rating={5}/>
            </div>
        </div>
    </div>

  )
}

export default Home