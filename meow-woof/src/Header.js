import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue();

    const mapState = (state) => ({
        currentUser: state.user.currentUser
    });

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