import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import electronicsImage from 'public/images/Electricals.jpg'; // replace with your image path
// import kitchenImage from './path_to_kitchen_image'; // replace with your image path
// import groceryImage from './path_to_grocery_image'; // replace with your image path
// import apparelsImage from './path_to_apparels_image'; // replace with your image path
// import healthImage from './path_to_health_image'; // replace with your image path
// import homeEssentialImage from './path_to_home_essential_image'; // replace with your image path

const categories = [
  { name: 'Electronics', image: 'public/images/Electricals.jpg'},
  { name: 'Kitchen', image: 'public/images/Electricals.jpg'},
  { name: 'Grocery'},
  { name: 'Apparels'},
  { name: 'Health'},
  { name: 'Home Essential'},
];

const Categories = () => {
  return (
    <Container>
      <Row>
        {categories.map((categories, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="text-center">
            <Card.Img 
                variant="top" 
                src={categories.image} 
                style={{ height: '200px', objectFit: 'contain' }} 
                alt={categories.name}
              />
              <Card.Body> 
                <Card.Title>{categories.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;