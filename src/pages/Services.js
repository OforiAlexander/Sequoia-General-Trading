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
      icon: '📦',
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
      icon: '🏭',
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
      icon: '💻',
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
      icon: '🏥',
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
      icon: '🧪',
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
      icon: '🛍️',
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
      icon: '📥',
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
      icon: '📤',
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
      icon: '🤝',
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
      icon: '📋',
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
      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <div className="hero-overlay"></div>
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

      {/* Main Services Section */}
      <section className="section-padding">
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

      {/* Trading Services Section */}
      <section className="section-padding bg-light">
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

      {/* Quality Assurance Section */}
      <section className="section-padding bg-primary-green text-white">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div 
                id="quality-assurance"
                className={`animate-on-scroll ${visibleElements.has('quality-assurance') ? 'visible' : ''}`}
              >
                <h2 className="mb-4">Quality Assurance & Standards</h2>
                <p className="lead mb-4">
                  Every product we trade meets our rigorous quality standards. 
                  We work with certified suppliers and maintain strict quality 
                  control processes throughout our supply chain.
                </p>
                <Row className="mt-5">
                  <Col md={3} className="mb-3">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
                    <h5>Quality Control</h5>
                    <p>Rigorous inspection processes</p>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                    <h5>Compliance</h5>
                    <p>International standards adherence</p>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
                    <h5>Partnerships</h5>
                    <p>Trusted supplier networks</p>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📦</div>
                    <h5>Delivery</h5>
                    <p>Reliable and timely shipments</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
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