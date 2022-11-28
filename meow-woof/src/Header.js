import React, { useEffect, useState, useRef}from 'react'
import './Header.css'
import logo from './images/logo.png'
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
    return (
            <div className='header'>
                <Link to="/">
                    <img className="header_logo" src={logo} alt=""></img>
                </Link>
            <div  className = "Search">
                <InstantSearch searchClient={searchClient} indexName="Pet_Product">
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters">
            </div>
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}/>
              <Hits hitComponent={Hit} />
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
            </div>

            <div className="header_nav">
                <Link to="/login">
                    <div className="header_option">
                        <span className='header_optionLineOne'>
                            Hello Guest
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
                    <div className='header_optionBasket'>
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