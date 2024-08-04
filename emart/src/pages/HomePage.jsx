// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Carousel>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.imageSrc}
                alt={item.altText}
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{item.product}</h3>
                <p>{item.offer}</p>
                <Link to={item.link} className="btn btn-primary">
                  Shop Now
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </main>
      <Categories/>
    </div>
  );
};

export default HomePage;