// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import './header.css';
import SearchBar from './SearchBar/SearchBar';


const Header = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const _isLoggedin = token ? true : false;
  const _userType = user ? user.userType : 0;
  const _userCredits = user ? user.epoint : 0;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <AppBar position="static" >
      <Toolbar className='emart-header'>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/emart.png`} alt="Emart" className='emart-logo' />
        </Link>
        {_isLoggedin && _userType === 1 ? (
          <>
            <img src={`${process.env.PUBLIC_URL}/assets/images/coin.png`} alt="Coin" className='coin' />
            <input type='text' disabled value={_userCredits} className='coin-value' />
          </>
        ):(
          <></>
        )}
        <Typography variant='h4' className='emart-typography'>
        </Typography>
        {_isLoggedin && _userType === 1 ? (
          <div  style={{ color: 'black', marginRight: '20px'}}>
            Welcome, {user.name}
          </div>
        ):(
          //remove div content if user is not logged in
          <div  style={{ color: 'black', marginRight: '10px'}}>
            Welcome, 
          </div>
        )}
        <SearchBar />
        {_isLoggedin ? (
          <Button onClick={handleLogout} className='linkto-textbutton'>
            Logout
          </Button>
        ):(
          <Link to="/signup" className='linkto-textbutton'>
            Sign Up
          </Link>
        )}
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