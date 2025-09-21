import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
        </svg>
      ),
      title: 'Consumer Goods',
      description: 'Wide range of quality consumer products including household items, personal care products, food and beverages, and lifestyle goods.',
      features: [
        'Household Items & Appliances',
        'Personal Care Products',
        'Food & Beverages',
        'Lifestyle & Fashion Goods',
        'Sporting & Recreation Items'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M12 7.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z"/>
          <path d="M17.09 10.91l-1.41-1.41L12 13.17 8.32 9.5l-1.41 1.41L10.58 14.5 12 15.91l1.41-1.41 3.68-3.59z"/>
        </svg>
      ),
      title: 'Industrial Supplies',
      description: 'Comprehensive industrial equipment and supplies for manufacturing, construction, and various industrial sectors.',
      features: [
        'Manufacturing Equipment',
        'Construction Materials',
        'Safety Equipment & Gear',
        'Industrial Tools & Machinery',
        'Raw Materials & Components'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        </svg>
      ),
      title: 'Electronics',
      description: 'Latest technology and electronic equipment for businesses, institutions, and personal use.',
      features: [
        'Computer Hardware & Software',
        'Mobile Devices & Accessories',
        'Audio Visual Equipment',
        'Networking & Communication Devices',
        'Home & Office Electronics'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: 'Medical Equipment',
      description: 'High-quality medical devices and healthcare solutions for hospitals, clinics, and healthcare providers.',
      features: [
        'Diagnostic Equipment',
        'Surgical Instruments',
        'Patient Monitoring Systems',
        'Medical Furniture & Fixtures',
        'Emergency & First Aid Supplies'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l-2 7h4l-2-7z"/>
          <path d="M16 9c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v8c0 3.31 2.69 6 6 6s6-2.69 6-6v-8c0-1.1-.9-2-2-2h-2z"/>
          <circle cx="12" cy="17" r="2"/>
        </svg>
      ),
      title: 'Laboratory Products',
      description: 'Professional laboratory equipment and scientific instruments for research institutions, schools, and laboratories.',
      features: [
        'Scientific Instruments',
        'Laboratory Glassware',
        'Chemical Reagents',
        'Research Equipment',
        'Safety & Protection Gear'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1v3h2v-3h10v3h2v-3h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z"/>
          <path d="M6 7h4v2H6V7zm6 0h4v2h-4V7zM6 11h4v2H6v-2zm6 0h4v2h-4v-2z"/>
        </svg>
      ),
      title: 'Consumables',
      description: 'Essential consumable products for daily operations across various industries and sectors.',
      features: [
        'Office Supplies & Stationery',
        'Cleaning & Maintenance Products',
        'Packaging Materials',
        'Industrial Consumables',
        'Specialty Consumables'
      ]
    }
  ];

  const tradingServices = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Import Services',
      description: 'Comprehensive import solutions from global suppliers to Ghana market.',
      points: [
        'Global Supplier Network',
        'Quality Assurance',
        'Customs Clearance',
        'Logistics Coordination'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3z"/>
        </svg>
      ),
      title: 'Export Services',
      description: 'Professional export services to international markets worldwide.',
      points: [
        'Market Access',
        'Export Documentation',
        'International Shipping',
        'Compliance Management'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16.8c-.8 0-1.54.5-1.85 1.26l-1.92 5.53c-.34.97.22 2.04 1.23 2.37l.84.28V22h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.67 11 11s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.12 7.88 7 6.5 7S4 8.12 4 9.5V15H5.5v7h2z"/>
        </svg>
      ),
      title: 'Trading Partnerships',
      description: 'Building long-term relationships with clients and suppliers.',
      points: [
        'Supplier Partnerships',
        'Client Relationships',
        'Market Intelligence',
        'Business Development'
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'Consulting Services',
      description: 'Expert advice on trade regulations, market entry, and business strategy.',
      points: [
        'Market Analysis',
        'Regulatory Compliance',
        'Business Strategy',
        'Risk Assessment'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section services-section" 
        style={{
          minHeight: '60vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/services_hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="hero-content">
                <h1 className="hero-title">Our Products & Services</h1>
                <p className="hero-subtitle">
                  Comprehensive trading solutions across multiple sectors
                </p>
                <p className="hero-description">
                  From consumer goods to industrial supplies, we provide quality 
                  products and reliable trading services to meet your business needs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Services Section with Background */}
      <section 
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('/product_categories_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <div 
                id="services-intro"
                className={`animate-on-scroll ${visibleElements.has('services-intro') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-3">Product Categories</h2>
                <p className="lead">
                  We specialize in importing and exporting across these key product categories
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <div 
                  id={`service-detail-${index}`}
                  className={`animate-on-scroll ${visibleElements.has(`service-detail-${index}`) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="service-card h-100">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="service-icon me-3"
                          style={{ 
                            width: '60px', 
                            height: '60px', 
                            fontSize: '1.5rem',
                            margin: '0'
                          }}
                        >
                          {service.icon}
                        </div>
                        <Card.Title className="text-primary-green mb-0">
                          {service.title}
                        </Card.Title>
                      </div>
                      <Card.Text className="mb-3">
                        {service.description}
                      </Card.Text>
                      <div>
                        <h6 className="text-primary-green mb-2">What we offer:</h6>
                        <ul className="list-unstyled">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="mb-1">
                              <small>
                                <i className="text-primary-green me-2">✓</i>
                                {feature}
                              </small>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Trading Services Section with Background */}
      <section 
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 245, 245, 0.9), rgba(245, 245, 245, 0.9)), url('/trading_services_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <div 
                id="trading-services-intro"
                className={`animate-on-scroll ${visibleElements.has('trading-services-intro') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-3">Trading Services</h2>
                <p className="lead">
                  Professional trading services to facilitate your business growth
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {tradingServices.map((service, index) => (
              <Col lg={6} md={6} className="mb-4" key={index}>
                <div 
                  id={`trading-service-${index}`}
                  className={`animate-on-scroll ${visibleElements.has(`trading-service-${index}`) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="service-card h-100 text-center">
                    <Card.Body>
                      <div className="service-icon mb-3">
                        {service.icon}
                      </div>
                      <Card.Title className="text-primary-green mb-3">
                        {service.title}
                      </Card.Title>
                      <Card.Text className="mb-3">
                        {service.description}
                      </Card.Text>
                      <ul className="list-unstyled">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="mb-2">
                            <small>
                              <i className="text-primary-green me-2">•</i>
                              {point}
                            </small>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quality Assurance Section with Reduced Green */}
      <section 
        className="section-padding"
        style={{
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #e9ecef'
        }}
      >
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div 
                id="quality-assurance"
                className={`animate-on-scroll ${visibleElements.has('quality-assurance') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-4">Quality Assurance & Standards</h2>
                <p className="lead mb-4 text-dark">
                  Every product we trade meets our rigorous quality standards. 
                  We work with certified suppliers and maintain strict quality 
                  control processes throughout our supply chain.
                </p>
                <Row className="mt-5">
                  <Col md={3} className="mb-3">
                    <div 
                      className="service-icon mb-3 mx-auto"
                      style={{ 
                        backgroundColor: 'var(--light-green)',
                        width: '80px',
                        height: '80px'
                      }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        <path d="M10 14l-4-4 1.41-1.41L10 11.17l6.59-6.59L18 6l-8 8z"/>
                      </svg>
                    </div>
                    <h5 className="text-primary-green">Quality Control</h5>
                    <p className="text-muted">Rigorous inspection processes</p>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div 
                      className="service-icon mb-3 mx-auto"
                      style={{ 
                        backgroundColor: 'var(--light-green)',
                        width: '80px',
                        height: '80px'
                      }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <h5 className="text-primary-green">Compliance</h5>
                    <p className="text-muted">International standards adherence</p>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div 
                      className="service-icon mb-3 mx-auto"
                      style={{ 
                        backgroundColor: 'var(--light-green)',
                        width: '80px',
                        height: '80px'
                      }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16.8c-.8 0-1.54.5-1.85 1.26l-1.92 5.53c-.34.97.22 2.04 1.23 2.37l.84.28V22h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.67 11 11s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.12 7.88 7 6.5 7S4 8.12 4 9.5V15H5.5v7h2z"/>
                      </svg>
                    </div>
                    <h5 className="text-primary-green">Partnerships</h5>
                    <p className="text-muted">Trusted supplier networks</p>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div 
                      className="service-icon mb-3 mx-auto"
                      style={{ 
                        backgroundColor: 'var(--light-green)',
                        width: '80px',
                        height: '80px'
                      }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                      </svg>
                    </div>
                    <h5 className="text-primary-green">Delivery</h5>
                    <p className="text-muted">Reliable and timely shipments</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div 
                id="services-cta"
                className={`animate-on-scroll ${visibleElements.has('services-cta') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-4">
                  Ready to Explore Our Services?
                </h2>
                <p className="lead mb-4">
                  Contact us today to discuss your trading needs and discover 
                  how we can help your business grow with our comprehensive 
                  product range and professional services.
                </p>
                <div>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    size="lg" 
                    className="btn-primary-green me-3 mb-2"
                  >
                    Get a Quote
                  </Button>
                  <Button 
                    as={Link} 
                    to="/projects" 
                    variant="outline-dark" 
                    size="lg"
                    className="mb-2"
                  >
                    View Our Work
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;