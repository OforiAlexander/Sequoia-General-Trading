import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Consumer Goods',
    'Industrial Supplies',
    'Electronics',
    'Medical Equipment',
    'Laboratory Products',
    'Business Consulting'
  ];

  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Company Info */}
          <Col lg={4} md={6} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <div 
                className="me-3"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >
                S
              </div>
              <div>
                <h5 className="text-white mb-1">Sequoia General Trading</h5>
                <small className="text-light">Big things from small places</small>
              </div>
            </div>
            <p className="mb-3">
              Your trusted partner in import and export services across Ghana 
              and West Africa. We specialize in quality products and reliable 
              trading solutions.
            </p>
            <div className="mb-2">
              <strong>📧 Email:</strong>
              <br />
              <a href="mailto:sequoia.trades@outlook.com" className="text-decoration-none">
                sequoia.trades@outlook.com
              </a>
            </div>
            <div>
              <strong>📞 Phone:</strong>
              <br />
              <a href="tel:+233553882284" className="text-decoration-none">
                +233 55 388 2284
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link 
                    to={link.path} 
                    className="text-decoration-none"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-white mb-3">Our Services</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent-green)' }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </Col>

          {/* Business Info */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-white mb-3">Business Information</h5>
            <div className="mb-2">
              <strong>🏢 Registration:</strong>
              <br />
              <span style={{ fontSize: '0.9rem' }}>
                Ghana (General Merchants)
              </span>
            </div>
            <div className="mb-2">
              <strong>📅 Established:</strong>
              <br />
              <span style={{ fontSize: '0.9rem' }}>2024</span>
            </div>
            <div className="mb-2">
              <strong>🕐 Business Hours:</strong>
              <br />
              <span style={{ fontSize: '0.9rem' }}>
                Mon - Fri: 8:00 AM - 6:00 PM<br />
                Ghana Standard Time (GMT)
              </span>
            </div>
            <div className="mb-2">
              <strong>🌍 Coverage:</strong>
              <br />
              <span style={{ fontSize: '0.9rem' }}>
                Ghana, West Africa & Global
              </span>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Col lg={6} className="mb-2">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              &copy; {currentYear} Sequoia General Trading. All rights reserved.
            </p>
          </Col>
          <Col lg={6} className="text-lg-end">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              Built with dedication to excellence in trading services.
            </p>
          </Col>
        </Row>

        {/* Mission Statement */}
        <Row className="mt-3">
          <Col className="text-center">
            <div 
              className="p-3 rounded"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <p className="mb-0 fst-italic" style={{ fontSize: '0.9rem' }}>
                "To provide high-quality products and exceptional service, fostering 
                long-term relationships with our clients and partners while contributing 
                to the economic growth of Ghana."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;