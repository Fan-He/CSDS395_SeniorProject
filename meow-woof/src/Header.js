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
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "./firebase-config.js";

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

async function getUserProfile(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

function Header() {
    const [showHits, setShowHits] = useState(false);
    const [{basket}, dispatch] = useStateValue();

    const [user, setUser] = useState({});
    const [userName, setUserName] = useState();

    const auth = getAuth();

    const logout = async () => {
        await signOut(auth);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, [])

    useEffect(() => {
        if (user) {
            getUserProfile(user.uid)
                .then(res => {
                    if (res) {
                        setUserName(res.name);
                    }
                })
        }
    }, [user]);

    const mapState = (state) => ({
        currentUser: state.user.currentUser
    });

    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src={logo} alt=""></img>
            </Link>

            <div className="header_search" type="text">
                {/* <input className='header_searchInput' type="text" /> */}
                <div>
                    <Link to="/search">
                        <SearchIcon className="header_searchIcon"/>
                    </Link>
                </div>
            </div>


            <div className="header_nav">

                    <div className="header_option">
                        {userName ? (
                            <span className='header_optionLineOne'>Hello {userName}
                                <br/>
                            <Link to="/login" onClick={logout}>
                                Log Out
                            </Link>
                            </span>
                        ) : (
                            <span className='header_optionLineOne'>Hello Guest
                                <br/>
                            <Link to="/login">
                                Sign In
                            </Link>
                            </span>
                        )}
                    </div>

                <Link to='/orderhistory'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>
                            Returns
                        </span>
                        <span className='header_optionLineTwo'>
                            & Orders
                        </span>
                    </div>
                </Link>

                <Link to='/contact'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>
                            Customer
                        </span>
                        <span className='header_optionLineTwo'>
                            Service
                        </span>
                    </div>
                </Link>

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