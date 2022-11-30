import React, { useEffect, useState, useRef}from 'react'
import './Header.css'
import logo from './images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Configure,
    Hits,
    SearchBox,
    Panel,
    RefinementList,
    Pagination,
    Highlight,
  } from 'react-instantsearch-dom';
import Product1 from './Product1';

const Hit = ({hit})=>
    <div className = "hit">
        <div className = "result">
            <Product1
                id={hit.objectID} 
                title={hit.title}
                image={hit.image_url}
                price={hit.price} 
                rating={hit.rating}
                detail={hit.detail}
                />
        </div>
    </div>


    
const algoliaClient = algoliasearch("ICV2YF7XAB","802af3124223d9f3a2c0f38c579b7763");
const searchClient = {
    ...algoliaClient,
    search(requests) {
      return algoliaClient.search(requests);
    },
  };


function Header() {
    const [showHits, setShowHits] = useState(false);
    const [{basket}, dispatch] = useStateValue();

    const mapState = (state) => ({
        currentUser: state.user.currentUser
    });

    let name = localStorage.getItem("name");

    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src={logo} alt=""></img>
            </Link>

            <div className="header_search" type="text">
                <input className='header_searchInput' type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>


            <div className="header_nav">

                <Link to="/login">
                    <div className="header_option">
                        <span className='header_optionLineOne'>
                            Hello {name}
                        </span>
                        <span className='header_optionLineTwo'>
                            Sign In
                        </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className="header_option">
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className='header_optionBasket111'>
                        <ShoppingBasketTwoToneIcon/>
                        {/* two class names */}
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header