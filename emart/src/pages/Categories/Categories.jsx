import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './categories.css'; // Custom CSS for styling

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Electronics', image: 'assets/images/iphone-14.jpg', link: '/electronics' },
    { name: 'Apparels', image: 'assets/images/apparel.png', link: '/apparels'},
    { name: 'Kitchen', image: 'assets/images/kitchen.png', link: '/kitchen' },
    { name: 'Grocery', image: 'assets/images/grocery.png', link: '/grocery' },
    { name: 'Health', image: 'assets/images/health.png', link: '/health' },
    { name: 'Home Essential', image: 'assets/images/homeessentials.png', link: '/home-essential' }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`${categoryName}`);
  };

  return (
    <div className="categories">
      <h4>Shop by Category:</h4>
      <CardGroup>
        {categories.map((category) => (
          <Card
            key={category.name}
            border="primary"
            onClick={() => handleCategoryClick(category.link)}
          >
            <Card.Img variant="top" src={category.image} alt={category.name} />
            <Card.Title className="card-text">{category.name}</Card.Title>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default Categories;
