import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Loading = ({ message = "Loading..." }) => {
  return (
    <div 
      className="d-flex align-items-center justify-content-center"
      style={{ 
        minHeight: '50vh',
        background: 'linear-gradient(135deg, var(--primary-green) 0%, var(--light-green) 100%)'
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <div className="text-white">
              <div className="loading-spinner mx-auto mb-4"></div>
              <h4 className="mb-3">{message}</h4>
              <p className="mb-0">Please wait while we prepare your content...</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Loading;