// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './homepage.css';
import Categories from './Categories';

const carouselItems = [
  {
    brand: 'Apple',
    product: 'iPhone 16 Series',
    offer: 'Up to 10% off Voucher',
    link: '/product',
    imageSrc: 'path/to/iphone14.jpg',
    altText: 'iPhone 14'
  },
  {
    brand: 'Apple',
    product: 'iPhone 15 Series',
    offer: 'Up to 15% off Voucher',
    link: '/product',
    imageSrc: 'path/to/iphone15.jpg',
    altText: 'iPhone 15'
  },
  // Add more items as needed
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          {carouselItems.map((item, index) => (
            <div className="banner" key={index}>
              <div className="banner-content">
                <p className="brand">{item.brand}</p>
                <h1 className="product">{item.product}</h1>
                <h2 className="offer">{item.offer}</h2>
                <Link to={item.link} className="shop-now">
                  Shop Now
                </Link>
              </div>
              <div className="banner-image">
                <img src={item.imageSrc} alt={item.altText} />
              </div>
            </div>
          ))}
        </Carousel>
      </main>
      <Categories/>
    </div>
  );
};

export default HomePage;
