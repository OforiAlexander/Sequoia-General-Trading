import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
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
      description: 'Wide range of quality consumer products for diverse market needs.'
    },
    {
      icon: '🏭',
      title: 'Industrial Supplies',
      description: 'Comprehensive industrial equipment and supplies for various sectors.'
    },
    {
      icon: '💻',
      title: 'Electronics',
      description: 'Latest technology and electronic equipment for modern businesses.'
    },
    {
      icon: '🏥',
      title: 'Medical Equipment',
      description: 'High-quality medical devices and healthcare solutions.'
    },
    {
      icon: '🧪',
      title: 'Laboratory Products',
      description: 'Professional laboratory equipment and scientific instruments.'
    },
    {
      icon: '🛍️',
      title: 'Consumables',
      description: 'Essential consumable products for daily operations.'
    }
  ];

  const stats = [
    { number: '2024', label: 'Established', suffix: '' },
    { number: '100', label: 'Happy Clients', suffix: '+' },
    { number: '500', label: 'Products Traded', suffix: '+' },
    { number: '6', label: 'Product Categories', suffix: '' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <div className="hero-content">
                <h1 className="hero-title">
                  Trading Excellence for Ghana's Growth
                </h1>
                <p className="hero-subtitle">
                  Big things can come from small places
                </p>
                <p className="hero-description">
                  Sequoia General Trading is your trusted partner in import and export services, 
                  specializing in consumer goods, industrial supplies, electronics, medical equipment, 
                  and laboratory products. We are committed to quality, reliability, and exceptional service.
                </p>
                <div className="hero-cta">
                  <Button 
                    as={Link} 
                    to="/about" 
                    size="lg" 
                    className="btn-primary-green me-3 mb-2"
                  >
                    Learn More About Us
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-light" 
                    size="lg"
                    className="mb-2"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div 
                id="about-preview"
                className={`animate-on-scroll ${visibleElements.has('about-preview') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-4">A Brand You Can Trust</h2>
                <h3 className="mb-4">Our Uniqueness</h3>
                <p className="mb-4">
                  Established in 2024 and registered in Ghana, Sequoia General Trading 
                  stands as a dynamic and versatile trading company. As general merchants, 
                  we specialize in the import and export of a wide range of products, 
                  catering to diverse market needs.
                </p>
                <p className="mb-4">
                  Our commitment to quality, reliability, and customer satisfaction sets 
                  us apart in the competitive trading landscape. We continuously seek new 
                  and better ways to serve our clients while maintaining the highest ethical standards.
                </p>
                <Button as={Link} to="/about" className="btn-primary-green">
                  Read More About Us
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div 
                id="about-image"
                className={`animate-on-scroll ${visibleElements.has('about-image') ? 'visible' : ''}`}
              >
                <div 
                  className="bg-primary-green rounded"
                  style={{ 
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}
                >
                  <div className="text-center">
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏢</div>
                    <div>Professional Trading Services</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <div 
                id="services-title"
                className={`animate-on-scroll ${visibleElements.has('services-title') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-3">Our Products & Services</h2>
                <p className="lead">
                  We deal in a variety of products across multiple categories, 
                  ensuring quality and reliability in every transaction.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div 
                  id={`service-${index}`}
                  className={`animate-on-scroll ${visibleElements.has(`service-${index}`) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="service-card">
                    <Card.Body className="text-center">
                      <div className="service-icon">
                        {service.icon}
                      </div>
                      <Card.Title className="text-primary-green">
                        {service.title}
                      </Card.Title>
                      <Card.Text>
                        {service.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <Button as={Link} to="/services" className="btn-primary-green">
                View All Services
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-padding">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div 
                  id={`stat-${index}`}
                  className={`stat-item animate-on-scroll ${visibleElements.has(`stat-${index}`) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="stat-number">
                    {stat.number}{stat.suffix}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div 
                id="cta-section"
                className={`animate-on-scroll ${visibleElements.has('cta-section') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-4">
                  Ready to Start Trading with Us?
                </h2>
                <p className="lead mb-4">
                  Join our growing network of satisfied clients and experience 
                  the Sequoia difference. We're committed to building long-term 
                  relationships and contributing to Ghana's economic growth.
                </p>
                <div>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    size="lg" 
                    className="btn-primary-green me-3 mb-2"
                  >
                    Contact Us Today
                  </Button>
                  <Button 
                    as={Link} 
                    to="/services" 
                    variant="outline-dark" 
                    size="lg"
                    className="mb-2"
                  >
                    Explore Services
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

export default Home;