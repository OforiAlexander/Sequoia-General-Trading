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
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
        </svg>
      ),
      title: 'Consumer Goods',
      description: 'Wide range of quality consumer products for diverse market needs.'
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
      description: 'Comprehensive industrial equipment and supplies for various sectors.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        </svg>
      ),
      title: 'Electronics',
      description: 'Latest technology and electronic equipment for modern businesses.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: 'Medical Equipment',
      description: 'High-quality medical devices and healthcare solutions.'
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
      description: 'Professional laboratory equipment and scientific instruments.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1v3h2v-3h10v3h2v-3h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z"/>
          <path d="M6 7h4v2H6V7zm6 0h4v2h-4V7zM6 11h4v2H6v-2zm6 0h4v2h-4v-2z"/>
        </svg>
      ),
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
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-section.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '120px' // Account for fixed navbar
        }}
      >
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

      {/* About Preview Section with Brand Image */}
      <section className="section-padding bg-light" style={{ paddingTop: '100px' }}>
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
                <div className="text-center">
                  <img 
                    src="/our-brand.png" 
                    alt="Sequoia General Trading Brand" 
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview Section with Background Image */}
      <section 
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/our_products.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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

      {/* Stats Section with Background Image */}
      <section 
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.8), rgba(27, 94, 32, 0.8)), url('/counter_fix_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white'
        }}
      >
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div 
                  id={`stat-${index}`}
                  className={`stat-item animate-on-scroll ${visibleElements.has(`stat-${index}`) ? 'visible' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    textAlign: 'center',
                    padding: '2rem 1rem',
                    color: 'white'
                  }}
                >
                  <span 
                    className="stat-number"
                    style={{
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: 'white'
                    }}
                  >
                    {stat.number}{stat.suffix}
                  </span>
                  <span 
                    className="stat-label"
                    style={{
                      fontSize: '1.1rem',
                      opacity: '0.9',
                      color: 'white'
                    }}
                  >
                    {stat.label}
                  </span>
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