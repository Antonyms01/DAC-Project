import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productpage.css';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

function ProductPage() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(128);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get('http://localhost:8080/products/9');
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
        <div className="product-image">
        <img 
            src={`/path/to/iphone-${product.name}.jpg`} 
            alt={`Product ${product.name}`} 
          />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p>{product.rating} stars</p>
          <h2>({product.description}, {selectedStorage} GB)</h2>
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
          <button className="add-to-cart">Add to cart</button>
          <button className="add-to-cart">Buy Now</button>
          <br />
          <br />
          <div className="delivery">
            <label>Enter Delivery Pincode</label>
            <input type="text" placeholder="Enter pincode" />
            <button>Check</button>
          </div>
          <p className="fine-print">Text box for additional details or fine print</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;