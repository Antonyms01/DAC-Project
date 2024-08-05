import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './homepage.css'; // Keep your custom styles
import Categories from './Categories/Categories'; // Ensure this import is correct
import AppLayout from "./AppLayout";

const carouselItems = [
  {
    brand: '*T&C Apply',
    product: 'iPhone 14 Series',
    offer: 'Up to 10% off Voucher',
    link: '/product',
    imageSrc: 'assets/images/iphone-14-banner.png', // Ensure correct image path
    altText: 'iPhone 14'
  },
  {
    brand: '*T&C Apply',
    product: 'iPhone 15 Series',
    offer: 'Up to 15% off Voucher',
    link: '/product',
    imageSrc: 'assets/images/iphone-14-banner.png', // Ensure correct image path
    altText: 'iPhone 15'
  },
  // Add more items as needed
];

const HomePage = () => {
  return (
    <div> {/* Use container-fluid for full width */}
      <Header />
      <main className="main">
        <Col xs={12}> {/* Responsive layout */}
          <Carousel controls={false} indicators={true} interval={2000} fade={false}> {/* Enable indicators */}
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="banner">
                  <div className="banner-content">
                    <img src="assets/images/apple-logo.png" alt="Apple Logo" className="brand-logo" />
                    <h1 className="product">{item.product}</h1>
                    <h2 className="offer">{item.offer}</h2>
                    {/* <p className="brand">{item.brand}</p> */}
                    <Link
                      to={item.link}
                      className="shop-now"
                      onClick={(e) => e.stopPropagation()} // Prevent carousel sliding
                    >
                      Shop Now
                    </Link>
                  </div>
                  <div className="banner-image">
                    <img
                      src={process.env.PUBLIC_URL + '/' + item.imageSrc} // Ensure the image path is correct
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
        <Categories />
        <AppLayout />
      </div>
    </div>
  );
};

export default HomePage;
