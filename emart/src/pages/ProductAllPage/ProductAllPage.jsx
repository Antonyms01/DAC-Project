import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../../components/Header';
import Rating from '../../fragments/Rating';
import './productallpage.css';

const ProductAllPage = ({ onSelectProduct, onAddToCart }) => {
  const { subcategoryid } = useParams(); // Extract subcategoryid from URL

  const cartItems = [
    {
        id: 1,
        name: 'Holiday Luxury Chocolate Advent Calendar',
        stockQuantity: '14',
        price: 39.95,
        shortdesc: "hello",
        image: '/assets/images/categories/electronics/mobiles',
      },
      {
        id: 2,
        name: 'Assorted Coffee, Ground, Set of 3, 10 oz. Each',
        stockQuantity: '19',
        price: 36.00,
        shortdesc: "hello",
        quantity: 1,
        image: '/assets/images/categories/electronics/mobiles',
      },
      {
        id: 3,
        name: 'Assorted Coffee, Ground, Set of 3, 10 oz. Each',
        stockQuantity: '19',
        price: 36.00,
        shortdesc: "hello",
        quantity: 1,
        image: '/assets/images/categories/electronics/mobiles',
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <Row className="row-productall">
          {cartItems.map((item) => (
            <Card
              className="card-productall" 
              key={item.id}
              onClick={() => onSelectProduct(item.id, item.name)}
            >
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <Card.Img src={item.image} alt={item.name} />
                  </Col>
                  <Col>
                    <h4><strong>{item.name}</strong></h4>
                    <p className="fine-print">In Stock {item.stockQuantity}</p>
                    <p><Rating value={item.rating} /></p>
                    <h5 style={{ color: "#a9a9a9" }}>{item.shortdesc}</h5>
                    <h5>${item.price.toFixed(2)}</h5>
                    <br/>
                    <button
                      className="add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents the card click event
                        onAddToCart(item.id);
                      }}
                    >Add to cart</button>
                    <button
                      className="buy-now"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents the card click event
                        // Implement buy now functionality here
                      }}
                    >Buy Now</button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAllPage;
