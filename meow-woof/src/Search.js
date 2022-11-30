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

function Search() {
  return (
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
  )
}

export default Search