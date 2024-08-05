// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignPage/SignUpPage';
import SignInPage from './pages/SignPage/SignInPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import ShoppingCartPage from './pages/ShoppingCart/ShoppingCart';
import FavoritePage from './pages/FavoritePage';
import ProductPage from './pages/ProductPage/ProductPage';
import FetchPage from './pages/FetchPage';
import Categories from './pages/Categories/Categories';
import SubCategories from './pages/SubCategories/SubCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/signup" element={<SignUpPage />} /> 
         <Route path="/signin" element={<SignInPage />} /> 
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/fetchpage" element={<FetchPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/subcategories" element={<SubCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
