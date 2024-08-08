// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import './header.css';
import SearchBar from './SearchBar/SearchBar';


const Header = () => {
  
  let _isLoggedin = true;
  let _userType = 1;
  let userPoints = 10000;

  return (
    <AppBar position="static" >
      <Toolbar className='emart-header'>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/emart.png`} alt="Emart" className='emart-logo' />
        </Link>
        {_isLoggedin && _userType === 1 ? (
          <>
            <img src={`${process.env.PUBLIC_URL}/assets/images/coin.png`} alt="Coin" className='coin' />
            <input type='text' disabled value={userPoints} className='coin-value' />
          </>
        ):(
          <></>
        )}
        <Typography variant='h4' className='emart-typography'>
        </Typography>
        <SearchBar />
        <Link to="/signup" className='linkto-textbutton'>
          Sign Up
        </Link>
        <Link to="/orders" className='linkto-textbutton'>
          Orders
        </Link>
        <Link to="/shoppingcart" >
          <IconButton className='linkto-iconbutton'>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
        <Link to="/favorite" >
        <IconButton className='linkto-iconbutton'>
          <FavoriteIcon />
        </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;