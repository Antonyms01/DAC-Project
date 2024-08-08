// src/pages/ShoppingCart/ShoppingCart.jsx
import React from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import Header from '../../components/Header/Header';
import './shoppingcart.css'; // CSS for styling

const ShoppingCart = () => {

  let _isLoggedin = true;
  let _userType = 1;
  let isdiscounted = 0;
  let userCredits = 10000;


  const navigate = useNavigate();
  const { cartItems, incrementItem, decrementItem, removeFromCart } = useCart();

  const handleContinueShopping = () => {
    navigate('/', { replace: true });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + 
    _isLoggedin && _userType === 1 ? 
      (isdiscounted === 0)? (
        <>₹{(item.price.toFixed(2)-userCredits)* item.quantity}</>
        ):(
          <>₹{(item.price - item.price*0.2)* item.quantity}</>
          )
      : (
        <>₹{(item.price * item.quantity).toFixed(2)}</>
    )
      // item.price * item.quantity
      , 0);
  };

  const calculateEPointsTotal = () => {
    return ;
  }

  return (
    <div>
      <Header />
      {(cartItems.length === 0) ? <EmptyCart /> : (
        <Container className="row-shopping-cart">
          <Row className="">
            <div>
              <h2>Your Cart</h2>
              <p>{cartItems.length} items in your cart</p>
            </div>
            <Col>
              {cartItems.map((item) => (
                <Card key={item.productId} className="card-shopping-cart">
                  <Card.Body>
                    <Row>
                      <Col md={3}>
                        <Card.Img className='card-cart-img' src={item.imagepath} alt={item.name} />
                      </Col>
                      <Col>
                        <h5>{item.name}</h5>
                        
                        <p><strong>Each: </strong> 
                          {_isLoggedin && _userType === 1 ? 
                            (isdiscounted === 0)? (
                              <>₹{item.price.toFixed(2) - userCredits}</>
                              //calculateEPointsTotal()
                              ):(
                                <>₹{item.price - item.price*0.2}</>
                                )
                            : (
                              <>₹{item.price}</>
                          )}
                        </p>
                        <Form.Group as={Row} controlId={`quantity-${item.productId}`} className="quantity-control">
                          <Form.Label column sm="2">
                            Quantity:
                          </Form.Label>
                          <div className='quantity-div'>
                            <button type="button" className="quantity-button"
                              onClick={() => decrementItem(item.productId)}>
                              -
                            </button>
                            <Form.Control
                              type="number" value={item.quantity} readOnly className="quantity-input" />
                            <button type="button" className="quantity-button"
                              onClick={() => incrementItem(item.productId)}>
                              +
                            </button>
                          </div>
                        </Form.Group>
                        <p><strong>Total: </strong> 
                          {_isLoggedin && _userType === 1 ? 
                            (isdiscounted === 0)? (
                              <>₹{(item.price.toFixed(2)-userCredits)* item.quantity}</>
                              ):(
                                <>₹{(item.price - item.price*0.2)* item.quantity}</>
                                )
                            : (
                              <>₹{(item.price * item.quantity).toFixed(2)}</>
                          )}
                        </p>
                        <Button className="custom-delete-button" onClick={() => removeFromCart(item.productId)}>
                          <FontAwesomeIcon icon={faTrash} /> Remove
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
              <Button variant="link" onClick={handleContinueShopping} className="continue-shopping">
                Continue Shopping
              </Button>
            </Col>
            <Col md={4}>
              <div className="cart-promotion">
                <h4>Promotions</h4>
                <ListGroup variant="flush" className='cart-summary'>
                  <ListGroup.Item>Free Shipping on Orders Above ₹10000</ListGroup.Item>
                  <ListGroup.Item>Subtotal <span className="float-end">{calculateTotal()}</span></ListGroup.Item>
                  <ListGroup.Item>Shipping cost <span className="float-end">₹18.97</span></ListGroup.Item>
                  <ListGroup.Item>Shipping Discount <span className="text-danger float-end">-₹18.97</span></ListGroup.Item>
                  <ListGroup.Item>Estimated Sales Tax <span className="float-end">TBD</span></ListGroup.Item>
                  <ListGroup.Item><strong>Estimated Total</strong> <span className="float-end"><strong>{calculateTotal()}</strong></span></ListGroup.Item>
                </ListGroup>
                <Button className="w-100 mt-3 checkout-button"
                  onClick={() => navigate('/thankyou')}>CHECKOUT</Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ShoppingCart;
