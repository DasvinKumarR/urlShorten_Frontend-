import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  const navigate = useNavigate(); //navigaiton instance

  // UI code for Landing page
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        <Col className="text-center">
          <h1 className="mb-4">URL Shortener</h1>
          <Button
            variant="primary"
            className="m-2"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button
            variant="secondary"
            className="m-2"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
