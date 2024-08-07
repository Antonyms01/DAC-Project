import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; // Import useParams to get the subcategory ID
import { Container, Row, Col, Card, Alert } from 'react-bootstrap'; 
import Header from '../../components/Header';
import Rating from '../../fragments/Rating'; 
import './productallpage.css'; 
import LoadingSpinner from '../../components/LoadingSpinner';

const ProductAllPage = ({ onSelectProduct, onAddToCart }) => {
  const { subcategoryid } = useParams(); // Get the subcategory ID from the URL
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products/subcategory/${subcategoryid}`); 
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [subcategoryid]); // Fetch products whenever the subcategoryid changes

  if (loading) {
    return <div><LoadingSpinner/></div>;
  }

  if (error) {
    return <Alert variant="danger">Error loading products: {error.message}</Alert>;
  }

  if (products.length === 0) {
    return (
      <div>
        <Header />
        <Container>
          <Alert variant="warning">Product not found for this subcategory.</Alert>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container>
        <Row className="row-productall">
          {products.map((product) => (
            <Card
              className="card-productall"
              key={product.productId}
              onClick={() => onSelectProduct(product.productId, product.name)}
            >
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <Card.Img className='card-product-img' src={product.imagepath} alt={product.name} />
                  </Col>
                  <Col>
                    <h4><strong>{product.name}</strong></h4>
                    <p className="fine-print">Brand: {product.brandname}</p>
                    <p className="fine-print">In Stock: {product.stockquantity}</p>
                    <p><Rating value={product.rating} /></p>
                    <h5 style={{ color: "#a9a9a9" }}>{product.shortdesc}</h5>
                    <h5>${product.price.toFixed(2)}</h5>
                    <p>{product.longdesc}</p>
                    <button
                      className="add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product.productId);
                      }}
                    >Add to cart</button>
                    <button
                      className="buy-now"
                      onClick={(e) => {
                        e.stopPropagation();
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
