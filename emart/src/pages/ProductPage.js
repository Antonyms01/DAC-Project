import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productpage.css';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import Rating from '../fragments/Rating';

function ProductPage() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(128);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get('http://localhost:8080/products/2');
        setProduct(response.data);
      } catch (error) {
        console.error("There was an error fetching the product!", error);
      } finally {
        setLoading(false); // Move loading false to here to ensure it sets after fetching
      }
    }
    fetchProduct();
  }, []);

  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
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
          <img className='product-image'
              src={`${process.env.PUBLIC_URL}/assets/images/iphone-14.jpg`} 
              alt={`Product ${product.name}`} 
            />
        </div>
        <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h2 id="product-description">({product.description}, {selectedStorage} GB)</h2>
          <p className="fine-print">In Stock {product.stockQuantity}</p>
          <p><Rating value={product.rating} /></p>
          <p className="price">₹{product.price}</p>
          <p>Body text for describing why this product is simply a must-buy</p>
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
          <button className="add-to-cart">Add to cart</button>
          <button className="buy-now">Buy Now</button>
          <br />
          <div className="delivery">
            <label>Enter Delivery Pincode</label><br />
            <input type="text" placeholder="Enter pincode" />
            <button className="check">Check</button>
          </div>        
          <p className="fine-print">Delivery may take upto 6-7 days depending on pincode</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;