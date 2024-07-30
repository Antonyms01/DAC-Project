import React, { useState } from 'react';
import './productpage.css';
import Header from '../components/Header';

function ProductPage() {
  const [selectedColor, setSelectedColor] = useState('purple');
  const [selectedStorage, setSelectedStorage] = useState(128);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
  };

  const storages = [128, 256, 512];

  return (
    <div>
        <Header />
        <div className="product-page">
        <div className="product-image">
            <img 
                src={`/path/to/iphone-${selectedColor}.jpg`} 
                alt={`iPhone ${selectedColor}`} 
            />
        </div>
        <div className="product-details">
            <h2>Apple iPhone 14 ({selectedColor}, {selectedStorage} GB)</h2>
            <p>4.5 stars (2,99,617 ratings & 11,618 reviews)</p>
            
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