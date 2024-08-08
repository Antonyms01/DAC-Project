// src/pages/ProductPage/ProductPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './productpage.css';
import Header from '../../components/Header/Header';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Rating from '../../components/Rating/Rating';
import Notification from '../../components/Notification/Notification';

function ProductPage() {
  let _isLoggedin = true;
  let _userType = 1;
  let isdiscounted = 0;
  let userCredits = 10000;

  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(128);
  const { addToCart } = useCart();
  const [notification, setNotification] = useState({ message: '', show: false });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:8080/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("There was an error fetching the product!", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, selectedStorage });
      setNotification({ message: 'Product successfully added to cart', show: true });
      setTimeout(() => setNotification({ ...notification, show: false }), 3000); // Hide after 3 seconds
    }
  };

  const storages = [128, 256, 512];

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return (
      <div>
        <Header />
        <div className="product-card">
          <p>Product not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="product-card">
        <div>
          <img
            className='product-image'
            src={`${process.env.PUBLIC_URL}${product.imagepath}`}
            alt={`Product ${product.name}`}
          />
        </div>
        <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h2 id="product-description">({product.shortdesc}, {selectedStorage} GB)</h2>
          <p className="fine-print">In Stock {product.stockQuantity}</p>
          <p><Rating value={product.rating} /></p>
          {_isLoggedin && _userType === 1 ? 
            (isdiscounted === 0)? (
              <p className="price">₹{product.price - userCredits}{' + '}
              <img className='coin-32px' src={`${process.env.PUBLIC_URL}/assets/images/coin.png`} alt="Coin"></img>
              {'10000'}</p>
              ):(
                <div className='offer-product'>
                  <p className="price"><s>₹{product.price}</s></p>
                  <p className="discounted-price">₹{product.price - product.price*0.2}</p>
                </div>
                )
            : (
              <p className="price">₹{product.price}</p>
          )}
          <p>{product.longdesc}</p>
          <h3>Storage</h3>
          <div className="storage-options">
            {storages.map((storage) => (
              <button
                key={storage}
                onClick={() => handleStorageChange(storage)}
                className={storage === selectedStorage ? 'active' : ''}
              >
                {storage} GB
              </button>
            ))}
          </div>
          <br />
          <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
          <button className="buy-now">Buy Now</button>
          <br />
          <div className="delivery">
            <label>Enter Delivery Pincode</label><br />
            <input type="text" placeholder="Enter pincode" />
            <button className="check">Check</button>
          </div>
          <p className="fine-print">Delivery may take up to 6-7 days depending on the pincode</p>
        </div>
      </div>
      <Notification message={notification.message} show={notification.show} />
    </div>
  );
}

export default ProductPage;
