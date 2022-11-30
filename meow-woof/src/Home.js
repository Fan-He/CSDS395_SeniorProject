import React, {useEffect, useState} from 'react'
import "./Home.css"
import Cats from './images/cats.jpg'
import { collection, getDocs } from "firebase/firestore";
import Product from './Product'
import { Link } from "react-router-dom"
import {QuerySnapshot} from "firebase/firestore";
import {db} from "./firebase-config";


// const querySnapshot = await getDocs(collection(db, "product"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

const Products = () => {
    // const [loading, setLoading] = useState(true);
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const getProductsFromFirebase = [];
    //     const subscriber = db
    //         .collection("product")
    //         .onSnapshot((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 getProductsFromFirebase.push({
    //                     ...doc.data(), 
    //                     key: doc.title, 
    //                 });
    //             });
    //             setPosts(getProductsFromFirebase);
    //             setLoading(false);
    //         });
    //     return () => subscriber();
    // }, []);
    // if(loading){
    //     return <h1>loading from firestore</h1>
    // }
    // return (
    //     <div className='container'>
    //         <h1>Products:</h1>
    //         {posts.length > 0 ? (
    //             posts.map((post) => <div key={post.title}>{post.title}</div>)
    //         ) : (<h1>No products</h1>)}
    //     </div>
    // )
}


function Home() {
    // const [loading, setLoading] = useState(true);
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const getProductsFromFirebase = [];
    //     const subscriber = db
    //         .collection("product")
    //         .onSnapshot((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 getProductsFromFirebase.push({
    //                     ...doc.data(), 
    //                     key: doc.title, 
    //                 });
    //             });
    //             setPosts(getProductsFromFirebase);
    //             setLoading(false);
    //         });
    //     return () => subscriber();
    // }, []);
    // if(loading){
    //     return <h1>loading from firestore</h1>
    // }
    // return (
    //     <div className='container'>
    //         <h1>Products:</h1>
    //         {posts.length > 0 ? (
    //             posts.map((post) => <div key={post.title}>{post.title}</div>)
    //         ) : (<h1>No products</h1>)}
    //     </div>
    // )







    return (
    <div className='home'>
            <div className='home_container'>
            <img className='home_image' src={Cats} alt=""></img>
            <div className='home_row'>

                <Product 
                id="1123" 
                title='Instinct Ultimate Protein Duck Recipe 4-lb bag'
                image="https://cdn.shopify.com/s/files/1/1957/5661/products/43355-1558541199_8b4425d6-84a2-42d7-8700-c28eae9d4e0e_1000x1000.jpg?v=1594824869"
                price={39.99} 
                rating={4}
                detail="Boosted nutrition with high-protein kibble + freeze-dried raw.
                Cage-free chicken is the first ingredient so it’s packed with animal protein for strong, lean muscles.
                Includes a probiotic boost for digestive health, higher levels of omegas for healthy skin and coat, and more antioxidants for immune health.
                Never contains any grain, potato, corn, wheat, soy, by-product meal, artificial colors or preservatives.
                Made in the USA with the finest ingredients from around the world.
                
                A better way to feed kibble, Instinct Raw Boost Grain-Free Recipe with Real Chicken & Freeze-Dried Raw Coated Pieces Dry Cat Food is high animal protein, boosted nutrition featuring bites of freeze-dried raw meat throughout. Created to unlock your cat’s potential to thrive and put the benefits of raw nutrition into every bowl, it’s made with cage-free chicken as the first ingredient for strong, lean muscles. There’s also probiotics for digestive health, higher levels of omegas for healthy skin and coat, plus more antioxidants for immune health—and it all comes from the finest ingredients from around the world."
                />
                <Product 
                id="1124" 
                title='Instinct Original Grain-Free Recipe with Real Chicken' 
                image="https://assets.petco.com/petco/image/upload/f_auto,q_auto/2749832-center-1"
                price={24.99} 
                rating={4}
                detail="Cage-free chicken is the first ingredient for high animal protein to support strong, lean muscles.
                Features 81% real animal ingredients and nutritious oils, plus 19% fruits, vegetables and other wholesome ingredients.
                Never contains any grain, potato, corn, wheat, soy, by-product meal, artificial colors or preservatives.
                Guaranteed levels of live, natural probiotics, natural omegas and antioxidants to support digestive health, healthy skin and coat, and immune health.
                Made in the USA using premium ingredients from around the world, with the pure nutrition of raw in every piece.
                
                Satisfy your pet’s need for real food with Instinct Original Grain-Free Recipe with Real Chicken Freeze-Dried Raw Coated Dry Cat Food. Guided by Instinct’s belief in raw nutrition, this recipe unlocks your cat’s ability to thrive. It’s thoughtfully balanced with wholesome foods, like real chicken and vegetables, plus guaranteed levels of probiotics, natural omegas and antioxidants. The result is a tasty, high animal protein diet that promotes maximum digestibility, a healthy coat and skin, and immune health."/>
                
            </div>

            <div className='home_row'>
                <Product 
                id="2134" 
                title='Frisco Animal Series Cat Condo, Llama' 
                image="https://image.chewy.com/is/image/catalog/289340_MAIN._AC_SL600_V1633012080_.jpg"
                price={56.99} 
                rating={5}
                detail="Available in three fun animal designs— check out the whimsical unicorn, lovable llama and super-cute sloth.
                Includes all the kitty amenities—a scratching post, a private condo and a perch at the top.
                Helps satisfy a cat’s core desires for play, scratching, privacy, comfort and elevation.
                Fully wrapped sisal post promotes satisfying scratching and healthy kitty nails.
                Cushion inside the condo is reversible, removable and machine washable for easy cleaning.
                
                The Frisco Animal Series Cat Condos are the perfect hideout and hangout spots for kitties! They have everything a kitty loves, including a scratching post, a private condo and a perch at the top where they can survey their whole kingdom. The post is wrapped in claw-friendly sisal; the condo has a reversible, removable and machine washable cushion inside; and the perch comes with your choice of adorable animal—whimsical unicorn, lovable llama or super-cute sloth. Give your animal-loving cat all the amenities, and make it cute while you’re at it, with one of these kitty-approved condos."/>
                <Product 
                id="2135" 
                title='Frisco Animal Series Cat Condo, Sloth' 
                image="https://image.chewy.com/is/image/catalog/289341_MAIN._AC_SL1500_V1633012197_.jpg"
                price={39.22} 
                rating={5}
                detail="Available in three fun animal designs— check out the whimsical unicorn, lovable llama and super-cute sloth.
                Includes all the kitty amenities—a scratching post, a private condo and a perch at the top.
                Helps satisfy a cat’s core desires for play, scratching, privacy, comfort and elevation.
                Fully wrapped sisal post promotes satisfying scratching and healthy kitty nails.
                Cushion inside the condo is reversible, removable and machine washable for easy cleaning."/>
                <Product 
                id="2135" 
                title='Frisco Animal Series Cat Condo, Unicorn' 
                image="https://image.chewy.com/is/image/catalog/289339_MAIN._AC_SS300_V1633012235_.jpg"
                price={58.67} 
                rating={4}
                detail="Available in three fun animal designs— check out the whimsical unicorn, lovable llama and super-cute sloth.
                Includes all the kitty amenities—a scratching post, a private condo and a perch at the top.
                Helps satisfy a cat’s core desires for play, scratching, privacy, comfort and elevation.
                Fully wrapped sisal post promotes satisfying scratching and healthy kitty nails.
                Cushion inside the condo is reversible, removable and machine washable for easy cleaning."/>
            </div>

            <div className='home_row'>
                <Product 
                id="3101" 
                title='Wellness CORE Signature Flaked Tuna & Wild Salmon Canned Cat Food' 
                image="https://image.chewy.com/is/image/catalog/119917_MAIN._AC_SL600_V1621987351_.jpg"
                price={36.98} 
                rating={4}
                detail="Packed by hand with delicate flakes of real meat in a delectable sauce.
                Carefully sourced ingredients includes real tuna as a high quality fish protein source.
                Also has sunflower oil that contains essential fatty acids for a healthy coat.
                Offers a healthy protein blend and adds hydration to his diet for urinary support.
                Complete and balanced nutrition comes in convenient serving sizes for everyday feeding."/>
                <Product 
                id="3102" 
                title='Weruva Paw Lickin Chicken in Gravy Grain-Free Canned Cat Food' 
                image="https://image.chewy.com/is/image/catalog/49319_MAIN._AC_SL600_V1643067725_.jpg"
                price={37.35} 
                rating={4}
                detail="Grain-free wet food is made with shredded chicken as the first ingredient so it’s high in protein sourced from real meat.
                Formulated to satisfy a carnivore’s cravings for animal protein, with savory gravy in every gourmet recipe.
                Provides a balanced blend of amino acids, omegas, vitamins and minerals, plus taurine for heart and vision health.
                Broth-based gravy makes it appealing to picky eaters, and provides adequate hydration to support overall well-being.
                100% grain-free, carrageenan-free, complete and balanced meal in every can, with zero BPA, antibiotics, hormones, GMOs or MSG; made in a human food facility."/>
                <Product 
                id="3103" 
                title='Weruva Cats in the Kitchen Cuties Grain-Free Canned Cat Food' 
                image="https://image.chewy.com/is/image/catalog/115896_MAIN._AC_SL600_V1536253316_.jpg"
                price={17.03} 
                rating={3}
                detail="Grain-free wet food variety pack features real meat for animal-sourced protein to support lean muscles.
                Provides a 100% complete and balanced diet for cats, enhanced with vitamins, minerals and antioxidants.
                Loaded with real broth to keep cats hydrated while supporting digestive and urinary health, with zero grain or gluten.
                Packed with essential nutrients for overall health, like omegas for a shiny coat and taurine for heart and vision health.
                Easy to use, single-portion BPA-free cans can be served on their own or as delicious kibble toppers or mix-ins."/>
                <Product 
                id="3104" 
                title='Tiki Cat After Dark Variety Pack Canned Cat Food, 2.8-oz, case of 12' 
                image="https://image.chewy.com/is/image/catalog/112295_MAIN._AC_SL600_V1626731772_.jpg"
                price={23.58} 
                rating={5}
                detail="Real chicken is the #1 ingredient, providing your purring pal with the nutrition he needs and the taste that he craves.
                A high-protein cat food crafted with zero grains or carbohydrates .
                Each meal contains nutrient-dense organ meat and shredded chicken in a whisker-licking broth.
                This low-calorie cat food contains high-moisture content to give your kitty the supplemental water he needs.
                Nutritionally balanced for feline friends from all life stages."/>

            </div>

            

        </div>
    </div>

  )
}

export default Home