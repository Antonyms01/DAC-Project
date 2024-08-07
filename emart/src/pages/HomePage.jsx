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
    link: '/product',
    imageSrc: '/assets/images/banner/iphone14-banner.jpg',
    altText: 'iPhone 14'
  },
  {
    link: '/product',
    imageSrc: '/assets/images/banner/tv-banner.jpg',
    altText: 'iPhone 15'
  },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId, { replace: true });
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null, { replace: true });
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
                <div className="banner-image">
                  <img src={process.env.PUBLIC_URL + item.imageSrc} alt={item.altText} />
                  <div className="banner-content">
                    <Link to={item.link} className="shop-now" onClick={(e) => e.stopPropagation()}>
                      Shop Now
                    </Link>
                  </div>
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
