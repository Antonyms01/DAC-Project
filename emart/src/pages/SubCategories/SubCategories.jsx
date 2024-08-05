import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardGroup, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './subcategories.css'; // Custom CSS for styling

const SubCategories = () => {
  const { categoryName } = useParams();

  // Example subcategories with images
  const subcategories = {
    Electronics: [
      { name: 'Mobiles', image: 'assets/images/mobiles.png' },
      { name: 'Laptops', image: 'assets/images/laptops.png' },
      { name: 'Cameras', image: 'assets/images/cameras.png' }
    ],
    Apparels: [
      { name: 'Men', image: 'assets/images/men.png' },
      { name: 'Women', image: 'assets/images/women.png' },
      { name: 'Kids', image: 'assets/images/kids.png' }
    ],
  };

  const subcategoryList = subcategories[categoryName];

  return (
    <div className="subcategories">
      {subcategoryList ? (
        <>
          <h3>Subcategories for {categoryName}</h3>
          <CardGroup>
            {subcategoryList.map((subcategory) => (
              <Card key={subcategory.name} border="secondary">
                <Card.Img variant="top" src={subcategory.image} alt={subcategory.name} />
                <Card.Body>
                  <Card.Title>{subcategory.name}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </>
      ) : (
        <Alert variant="warning">No subcategories available for {categoryName}.</Alert>
      )}
    </div>
  );
};

export default SubCategories;
