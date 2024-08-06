import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import Categories from './Categories/Categories';
import SubCategories from './Categories/SubCategories/SubCategories';

const carouselItems = [
  {
    brand: '*T&C Apply',
    product: 'iPhone 14 Series',
    offer: 'Up to 10% off Voucher',
    link: '/product',
    imageSrc: 'assets/images/iphone-14-banner.png',
    altText: 'iPhone 14'
  },
  {
    brand: '*T&C Apply',
    product: 'iPhone 15 Series',
    offer: 'Up to 15% off Voucher',
    link: '/product',
    imageSrc: 'assets/images/iphone-14-banner.png',
    altText: 'iPhone 15'
  },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Col xs={12}>
          <Carousel controls={false} indicators={true} interval={2000} fade={false}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="banner">
                  <div className="banner-content">
                    <img src="assets/images/apple-logo.png" alt="Apple Logo" className="brand-logo" />
                    <h1 className="product">{item.product}</h1>
                    <h2 className="offer">{item.offer}</h2>
                    <Link
                      to={item.link}
                      className="shop-now"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="banner-image">
                    <img
                      src={process.env.PUBLIC_URL + '/' + item.imageSrc}
                      alt={item.altText}
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </main>
      <div className='categories'>
        {!selectedCategory ? (
          <Categories onSelectCategory={handleCategorySelect} />
        ) : (
          <div>
            <button className="back-to-categories" onClick={handleBackToCategories}>
              <i className="fas fa-angle-left"></i> Back to Categories
            </button>
            <SubCategories categoryId={selectedCategory} />
          </div>
        )}
      </div>  
    </div>
  );
};

export default HomePage;
