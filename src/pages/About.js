import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
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

  const values = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          <path d="M10 14l-4-4 1.41-1.41L10 11.17l6.59-6.59L18 6l-8 8z"/>
        </svg>
      ),
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16.8c-.8 0-1.54.5-1.85 1.26l-1.92 5.53c-.34.97.22 2.04 1.23 2.37l.84.28V22h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.67 11 11s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.12 7.88 7 6.5 7S4 8.12 4 9.5V15H5.5v7h2z"/>
        </svg>
      ),
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We prioritize their needs and exceed their expectations.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3z"/>
          <circle cx="12" cy="12" r="8"/>
          <path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      ),
      title: 'Innovation',
      description: 'We continuously seek new and better ways to serve our clients, embracing technology and modern practices.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of our operations, delivering quality products and services.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"/>
          <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8-1.41-1.42z"/>
        </svg>
      ),
      title: 'Adaptability',
      description: 'We adjust to whatever our clients\' needs may be, providing flexible solutions for diverse requirements.'
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section about-section" 
        style={{
          minHeight: '60vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/about_hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="hero-content">
                <h1 className="hero-title">About Sequoia General Trading</h1>
                <p className="hero-subtitle">
                  Building partnerships that drive Ghana's economic growth
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div 
                id="company-story"
                className={`animate-on-scroll ${visibleElements.has('company-story') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-4">Our Story</h2>
                <p className="mb-4">
                  Sequoia General Trading was established in 2024 with a vision to become 
                  a leading general trading company in Ghana. Despite being a young company, 
                  our foundation is built on strong principles and a deep understanding of 
                  the trading landscape.
                </p>
                <p className="mb-4">
                  As registered general merchants in Ghana, we have quickly positioned 
                  ourselves as a reliable partner for businesses seeking quality products 
                  and exceptional service. Our approach combines traditional trading 
                  excellence with modern business practices.
                </p>
                <p>
                  True to our motto "Big things can come from small places," we believe 
                  that every great achievement starts with a solid foundation and unwavering 
                  commitment to our clients and community.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div 
                id="company-image"
                className={`animate-on-scroll ${visibleElements.has('company-image') ? 'visible' : ''}`}
              >
                <div className="text-center">
                  <img 
                    src="/logo.svg" 
                    alt="Sequoia General Trading Logo" 
                    className="img-fluid"
                    style={{ 
                      maxHeight: '350px', 
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <div 
                id="mission-card"
                className={`animate-on-scroll ${visibleElements.has('mission-card') ? 'visible' : ''}`}
              >
                <Card className="h-100 border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <div 
                        className="service-icon"
                        style={{ backgroundColor: 'var(--primary-green)' }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                    </div>
                    <Card.Title className="text-center text-primary-green mb-3">
                      Our Mission
                    </Card.Title>
                    <Card.Text className="text-center">
                      To provide high-quality products and exceptional service, fostering 
                      long-term relationships with our clients and partners while contributing 
                      to the economic growth of Ghana.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div 
                id="vision-card"
                className={`animate-on-scroll ${visibleElements.has('vision-card') ? 'visible' : ''}`}
              >
                <Card className="h-100 border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <div 
                        className="service-icon"
                        style={{ backgroundColor: 'var(--light-green)' }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 13.5l3.5 2.5L12 18.5 8.5 16l3.5-2.5z"/>
                          <circle cx="12" cy="12" r="8"/>
                        </svg>
                      </div>
                    </div>
                    <Card.Title className="text-center text-primary-green mb-3">
                      Our Vision
                    </Card.Title>
                    <Card.Text className="text-center">
                      To become a leading general trading company in Ghana, known for our 
                      integrity, innovation, and excellence in service delivery across all 
                      sectors we serve.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section with Background Image */}
      <section 
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.4), rgba(27, 94, 32, 0.4)), url('/why_us.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white'
        }}
      >
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div 
                id="why-choose-us"
                className={`animate-on-scroll ${visibleElements.has('why-choose-us') ? 'visible' : ''}`}
              >
                <h2 className="mb-4">Why Choose Sequoia General Trading?</h2>
                <p className="lead mb-4">
                  Our commitment to quality, reliability, and customer satisfaction sets 
                  us apart in the competitive trading landscape. We bring fresh perspectives 
                  and innovative solutions to traditional trading challenges.
                </p>
                <Row className="mt-5">
                  <Col md={4} className="mb-3">
                    <h4>Quality Assurance</h4>
                    <p>Every product meets our strict quality standards</p>
                  </Col>
                  <Col md={4} className="mb-3">
                    <h4>Reliable Service</h4>
                    <p>Consistent and dependable trading partnerships</p>
                  </Col>
                  <Col md={4} className="mb-3">
                    <h4>Local Expertise</h4>
                    <p>Deep understanding of Ghanaian market dynamics</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <div 
                id="values-title"
                className={`animate-on-scroll ${visibleElements.has('values-title') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-3">Our Core Values</h2>
                <p className="lead">
                  The principles that guide our every decision and action
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {values.map((value, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div 
                  id={`value-${index}`}
                  className={`animate-on-scroll ${visibleElements.has(`value-${index}`) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="service-card text-center">
                    <Card.Body>
                      <div className="service-icon mb-3">
                        {value.icon}
                      </div>
                      <Card.Title className="text-primary-green mb-3">
                        {value.title}
                      </Card.Title>
                      <Card.Text>
                        {value.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;