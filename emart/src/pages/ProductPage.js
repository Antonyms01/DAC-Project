import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productpage.css';
import Header from '../components/Header';

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(128);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get('http://localhost:8080/products/1');
        setProduct(response.data);
      } catch (error) {
        console.error("There was an error fetching the product!", error);
      }
    }

    fetchProduct();
  }, []);

  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
  };

  const storages = [128, 256, 512];

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="product-page">
        <div className="product-image">
          <img 
            src={`/path/to/iphone-${product.name}.jpg`} 
            alt={`Product ${product.name}`} 
          />
        </div>
        <div className="product-details">
          <h2>{product.name} ({product.description}, {selectedStorage} GB)</h2>
          <p>{product.rating} stars</p>
          
          <ul>
            <li>Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</li>
            <li>Bank Offer ₹500 off on Flipkart UPI T&C</li>
            <li>Special Price Get extra ₹9601 off (price inclusive of cashback/coupon) T&C</li>
            <li>Freebie Flat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on booking T&C</li>
          </ul>
          <p>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories Know More</p>
          <h3>Storage</h3>
          <div className="storage-options">
            {storages.map((storage) => (
              <button key={storage} onClick={() => handleStorageChange(storage)} className={storage === selectedStorage ? 'active' : ''}>
                {storage} GB
              </button>
            ))}
          </div>
          <br></br>
          <button>Add to Cart</button>
          <button>Buy Now</button>
          <br></br>
          <br></br>
          <div className="delivery">
            <label>Enter Delivery Pincode</label>
            <input type="text" placeholder="Enter pincode" />
            <button>Check</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
