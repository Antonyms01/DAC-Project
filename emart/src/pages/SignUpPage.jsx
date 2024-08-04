import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: '',
    primeMember: false,
  });

  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  useEffect(() => {
    const { password, reEnterPassword } = formData;
    if (password !== reEnterPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  }, [formData.password, formData.reEnterPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match before submission
    if (formData.password !== formData.reEnterPassword) {
      setPasswordError('Passwords do not match');
      return; // Prevent unnecessary submission
    }

    // Add logic for form submission here
    console.log('Form submitted:', formData);
    // You can make an API call, store data in local storage, etc.
  };

  return (
    <Container fluid style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Row style={{ width: '80%', maxWidth: '900px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Col md={6} style={{ backgroundColor: '#00bfa5', color: '#fff', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <Button variant="light" style={{ marginTop: '20px' }}>Sign In</Button>
        </Col>
        <Col md={6} style={{ padding: '40px', backgroundColor: '#fff' }}>
          <h2>Create Account</h2>
          <div className="social-login-buttons" style={{ marginBottom: '20px' }}>
            <Button variant="outline-secondary" className="me-2"><i className="bi bi-facebook"></i></Button>
            <Button variant="outline-secondary" className="me-2"><i className="bi bi-google"></i></Button>
            <Button variant="outline-secondary"><i className="bi bi-linkedin"></i></Button>
          </div>
          <p>or use your email for registration:</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formReEnterPassword">
              <InputGroup>
                <Form.Control
                  type={showReEnterPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  name="reEnterPassword"
                  value={formData.reEnterPassword}
                  onChange={handleChange}
                />
                <InputGroup.Text onClick={() => setShowReEnterPassword(!showReEnterPassword)}>
                  {showReEnterPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
              {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrimeMember">
              <Form.Check
                type="checkbox"
                label="Prime Member"
                name="primeMember"
                checked={formData.primeMember}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>  
  );
}

export default LoginPage;
