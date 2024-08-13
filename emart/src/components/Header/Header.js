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
  // Retrieve user email from localStorage
  const userEmail = localStorage.getItem('userEmail');
  
  const handleLogout = () => {
    localStorage.removeItem('userEmail');  // Clear user email from localStorage
    window.location.reload(); // Reload the page to reset the state
  };

  return (
    <AppBar position="static">
      <Toolbar className='emart-header'>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/emart.png`} alt="Emart Logo" className='emart-logo' />
        </Link>
        <Typography variant='h4' className='emart-typography'></Typography>
        <div style={{ color: 'black', marginRight: '20px'}}>
          Welcome, {userEmail ? userEmail : 'Guest'}
        </div>
        <SearchBar />
        {userEmail ? (
          <Link onClick={handleLogout} className='linkto-textbutton'>
            Logout
          </Link>
        ) : (
          <Link to="/signup" className='linkto-textbutton'>
            Sign Up
          </Link>
        )}
        <Link to="/orders" className='linkto-textbutton'>
          Orders
        </Link>
        <Link to="/shoppingcart">
          <IconButton className='linkto-iconbutton'>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
        <Link to="/favorite">
          <IconButton className='linkto-iconbutton'>
            <FavoriteIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
