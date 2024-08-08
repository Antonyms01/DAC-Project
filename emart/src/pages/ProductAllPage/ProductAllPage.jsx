// src/pages/ProductAllPage/ProductAllPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import './productallpage.css';
import Header from '../../components/Header/Header';
import Rating from '../../components/Rating/Rating';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useCart } from '../../context/CartContext';
import Notification from '../../components/Notification/Notification';

const ProductAllPage = () => {
  let _isLoggedin = true;
  let _userType = 1;
  let isdiscounted = 0;
  let userCredits = 10000;
  
  const { subcategoryid } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ message: '', show: false });

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
  }, [subcategoryid]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification({ message: 'Product successfully added to cart', show: true });
    setTimeout(() => setNotification({ ...notification, show: false }), 3000); // Hide after 3 seconds
  };

  if (loading) {
    return <div><LoadingSpinner /></div>;
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
              onClick={() => navigate(`/product/${product.productId}`)}
            >
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <Card.Img className='card-product-img' src={product.imagepath} alt={product.name} />
                  </Col>
                  <Col>
                    <h4 id="product-name"><strong>{product.name}</strong></h4>
                    <h5 id="product-description" style={{ color: "#a9a9a9" }}>({product.shortdesc})</h5>
                    <p className="fine-print">Brand: {product.brandname}</p>
                    {product.stockquantity > 0 ? <p className="fine-print">In Stock: {product.stockquantity}</p> : <p className="fine-print">Out of Stock</p>}
                    <p><Rating value={product.rating} /></p>
                    {_isLoggedin && _userType === 1 ? 
                      (isdiscounted === 0)? (
                        <p className="price">₹{product.price - userCredits}{' + '}
                        <img className='coin-32px' src={`${process.env.PUBLIC_URL}/assets/images/coin.png`} alt="Coin"></img>
                        {'10000'}</p>
                        ):(
                          <div className='offer-product'>
                            <p className="price"><s>₹{product.price}</s></p>
                            <p className="discounted-price">₹{product.price - product.price*0.2}</p>
                          </div>
                      ): (
                        <p className="price">₹{product.price}</p>
                    )}
                    <p>{product.longdesc}</p>                    
                    <button className="add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product); // Add product to cart and show notification
                      }}
                      disabled={product.stockquantity <= 0}>Add to cart</button>
                    <button className="buy-now"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/checkout/${product.productId}`); // Navigate to checkout with product
                      }}>Buy Now</button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <Notification message={notification.message} show={notification.show} />
    </div>
  );
};

export default ProductAllPage;
