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
      icon: '🤝',
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.'
    },
    {
      icon: '👥',
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We prioritize their needs and exceed their expectations.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously seek new and better ways to serve our clients, embracing technology and modern practices.'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of our operations, delivering quality products and services.'
    },
    {
      icon: '🔄',
      title: 'Adaptability',
      description: 'We adjust to whatever our clients\' needs may be, providing flexible solutions for diverse requirements.'
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
                <div 
                  className="bg-light-green rounded p-5 text-center"
                  style={{ minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div>
                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌱</div>
                    <h4 className="text-white">Growing Together</h4>
                    <p className="text-white mb-0">
                      Nurturing partnerships for sustainable growth
                    </p>
                  </div>
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
                        🎯
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
                        🔮
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

      {/* Core Values Section */}
      <section className="section-padding">
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-green text-white">
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
    </div>
  );
};

export default About;