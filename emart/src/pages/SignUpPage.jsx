import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function LoginPage() {
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
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control type="password" placeholder="Re-enter password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrimeMember">
              <Form.Check type="checkbox" label="Prime Member" />
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