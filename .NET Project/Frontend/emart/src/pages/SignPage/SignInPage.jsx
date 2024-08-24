import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './signpage.css';

function SignInPage() {
  const [formData, setFormData] = useState({
    useremail: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState(null);

  const { productpageid, productpageall } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const loginResponse = await axios.post('https://localhost:8080/api/User/signin', {
        useremail: formData.useremail,
        password: formData.password,
      });
  
      const token = loginResponse.data.token;
      const user = loginResponse.data.user; // Assume the user data is returned with the token
  
      if (loginResponse.status === 200 && token && user) {
        sessionStorage.setItem('jwtToken', token);
        sessionStorage.setItem('user', JSON.stringify(user));
  
        navigate('/');
        window.location.reload(); // Reload the page to reflect changes
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError('Error occurred during sign-in.');
    }
  };
  

  return (
    <Container fluid className="container-fluid">
      <Row className="row-sign">
        <Col className="col-white">
          <h2>Sign In</h2>
          <div>
            <Button variant="outline-secondary" className="social-login-buttons">
              <i className="bi-facebook"></i>
            </Button>
            <Button variant="outline-secondary" className="social-login-buttons">
              <i className="bi bi-google"></i>
            </Button>
            <Button variant="outline-secondary" className="social-login-buttons">
              <i className="bi bi-linkedin"></i>
            </Button>
          </div>
          <p>Use your email to sign in:</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="useremail"
                value={formData.useremail}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            {error && <Form.Text className="text-danger">{error}</Form.Text>}
            <Button variant="success" type="submit">
              Sign In
            </Button>
          </Form>
        </Col>
        <Col md={6} className="col-green">
          <h2>Create new account!</h2>
          <p>To keep connected with us please sign up with your personal info</p>
          <Button className="btn-signin" onClick={() => navigate('/signup', { replace: true })}>
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
