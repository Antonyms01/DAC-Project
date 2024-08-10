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
  // Safely retrieve the user data
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  const token = localStorage.getItem('token');

  const _isLoggedin = Boolean(token);  // Checks if token exists
  const _userType = user ? user.usertype : 0;  // Adjusted the key to match your usage
  const _userCredits = _isLoggedin && _userType === 1 ? user.epoint : 0;

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
