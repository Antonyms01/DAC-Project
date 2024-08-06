// src/pages/OrdersPage.js
import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shoppingcart.css';

const ShoppingCart = () => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="continue-shopping">
        <a href="/continue-shopping">Continue Shopping</a>
      </div>
      <div className="cart-item">
        <div className="cart-item-details">
          <div>
            <h2>Holiday Luxury Chocolate Advent Calendar</h2>
            <p>SKU: 14169</p>
            <p>In Stock</p>
          </div>
          <div className="cart-item-pricing">
            <p>Each: $39.95</p>
            <p>
              Quantity: <input type="number" value="2" />
            </p>
            <p>Total: $79.90</p>
          </div>
        </div>
        <div className="cart-item-details">
          <div>
            <h2>Assorted Coffee, Ground, Set of 3, 10 oz. Each</h2>
            <p>SKU: 191990</p>
            <p>In Stock</p>
          </div>
          <div className="cart-item-pricing">
            <p>
              <span className="original-price">$44.85</span> <span className="discounted-price">$36.00</span>
            </p>
            <p>
              Quantity: <input type="number" value="1" />
            </p>
            <p>Total: $36.00</p>
          </div>
        </div>
      </div>
      <div className="promo-code">
        <input type="text" placeholder="Promo Code" />
        <button>Submit</button>
      </div>
      <div className="promotions">
        <p>Promotions</p>
        <p>Free Shipping on Orders $39+ <span className="promotion-value">-$18.97</span></p>
      </div>
      <div className="totals">
        <p>Subtotal <span className="total-value">$115.90</span></p>
        <p>Shipping cost <span className="total-value">$18.97</span></p>
        <p>Shipping Discount <span className="total-value">-$18.97</span></p>
        <p>Estimated Sales Tax <span className="total-value">TBD</span></p>
        <p>Estimated Total <span className="estimated-total">$115.90</span></p>
      </div>
      <button className="checkout-button">CHECKOUT</button>
    </div>
  );
};

export default ShoppingCart;
