import React from 'react'
import './Header.css'
import logo from './logo.png'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
return (
    <div className='header'>
        <img classname="header_logo" src={logo} alt=""></img>

        <div className="header_search" type="text">
            <input className='header__searchInput' type="text" />
            <SearchIcon/>
        </div>


        <div classname="header_nav">
            <div classname="header_option">
                <span className='header__optionLineOne'>
                    Hello Guest
                </span>
                <span className='header__optionLineTwo'>
                    Sign In
                </span>
            </div>

            <div classname="header_option">
                <span className='header__optionLineOne'>
                    Returns
                </span>
                <span className='header__optionLineTwo'>
                    Orders
                </span>
            </div>

            <div classname="header_option">
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>
 
        </div>
    </div>
)
}

export default Header