import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div>
      <div className='header'>
        <div className='header__logo'>
          <StorefrontIcon className='header__logoImage' fontSize='large' />
          <h2 className='header__logoTitle'>Shop</h2>
        </div>
        <div className='header__search'>
          <input type='text' className='header__search' />
          <SearchIcon className='header__searchIcon' fontSize='large' />
        </div>
        <div className='header__nav'>
          <div className='nav__item'>
            <span className='navItem__lineOne'>Hello Guest</span>
            <span className='navItem__lineTwo'>Sign In</span>
          </div>
          <div className='nav__item'>
            <span className='navItem__lineOne'>Your</span>
            <span className='navItem__lineTwo'>Shop </span>
          </div>
          <div className='nav__itemBasket'>
            <ShoppingBasketIcon />
            <span className='navItem__lineTwo nav__basketCount'>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
