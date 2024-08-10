import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signpage.css';

function SignInPage() {
  const [formData, setFormData] = useState({
    useremail: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, check if the user exists
      const emailCheckResponse = await axios.get(`http://localhost:8080/users`, {
        params: {
          useremail: formData.useremail,
        },
      });

      if (emailCheckResponse.status === 404) {
        setError('User doesn’t exist');
        return;
      }

      // If the user exists, verify the password
      const loginResponse = await axios.post('http://localhost:8080/users/login', {
        useremail: formData.useremail,
        password: formData.password,
      });

      if (loginResponse.status === 200) {
        const { token, user } = loginResponse.data;
        // Save token and user information to local storage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Redirect to the home page
        navigate('/', { replace: true });
      } else if (loginResponse.status === 401) {
        setError('Wrong Password');
      }
    } catch (error) {
      setError('Error occurred during signin. Please try again.');
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
