// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import OrdersPage from './pages/OrdersPage';
import ShoppingCartPage from './pages/ShoppingCart';
import FavoritePage from './pages/FavoritePage';
import ProductPage from './pages/ProductPage';
import FetchPage from './pages/FetchPage';
import Categories from './pages/Categories';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/fetchpage" element={<FetchPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
