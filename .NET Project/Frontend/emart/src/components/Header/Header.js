import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { Badge, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './header.css';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState(0);
  const [userEpoint, setUserEpoint] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0); // Example state

  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken');
    const storedUser = sessionStorage.getItem('user');
  
    if (token && storedUser) {
      const user = JSON.parse(storedUser);
  
      setLoggedIn(true);
      setUserName(user.username || ''); // Ensure userName is available
      setUserType(user.usertype || 0); // Ensure userType is available
      setUserEpoint(user.epoints || 0); // Ensure userEpoint is available
  
      // Debugging logs
      console.log('User Type:', user.usertype);
      console.log('User Epoints:', user.epoints);
    } else {
      setLoggedIn(false);
    }
  }, []);
  

  const handleLogout = () => {
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('cartItems'); // Clear cart items
    sessionStorage.removeItem('cartItemCount'); // Clear cart item count
    window.location.reload();
  };

  const { i18n, t } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="static">
    <Toolbar className='emart-header'>
      <Link to="/">
        <img src={`${process.env.PUBLIC_URL}/assets/images/emart.png`} alt="Emart Logo" className='emart-logo' />
      </Link>
      {loggedIn && userType > 0 && (
        <>
          <img src={`${process.env.PUBLIC_URL}/assets/images/coin.png`} alt="Credits" className='coin' />
          <input type='text' disabled value={userEpoint} className='coin-value' />
        </>
      )}
      <Typography variant='h4' className='emart-typography'></Typography>
      <div style={{ color: 'black', marginRight: '20px' }}>
        {t('welcome')}, {loggedIn ? userName : t('guest')}
      </div>
      <SearchBar />
  
      {/* Language Selection Dropdown */}
      <Select
        value={i18n.language}  // Default to 'en' if no language is set
        onChange={handleLanguageChange}
        variant="outlined"
        className='select-language'
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="de">German</MenuItem>
        <MenuItem value="mr">Marathi</MenuItem>
      </Select>
  
      {loggedIn ? (
        <>
          <Link onClick={handleLogout} className='linkto-textbutton'>
            {t('logout')}
          </Link>
          <Link to="/profile">
            <IconButton className='linkto-iconbutton'>
              <ProfileIcon />
            </IconButton>
          </Link>
        </>
      ) : (
        <Link to="/signup" className='linkto-textbutton'>
          {t('signUp')}
        </Link>
      )}
      <Link to="/shoppingcart">
        <IconButton className='linkto-iconbutton'>
          <Badge badgeContent={cartItemCount} color="error">
            <ShoppingCartIcon />
          </Badge>
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
