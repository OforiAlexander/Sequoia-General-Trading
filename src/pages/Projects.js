import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
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

  const projects = [
    {
      title: 'Healthcare Equipment Supply to Regional Hospitals',
      category: 'Medical Equipment',
      description: 'Successfully supplied modern medical equipment including patient monitoring systems, diagnostic tools, and surgical instruments to three regional hospitals in Ghana.',
      achievements: [
        'Delivered 100+ medical devices',
        'Improved patient care quality',
        'Established long-term partnerships',
        'Provided technical training'
      ],
      timeline: '2024 Q2',
      status: 'Completed',
      icon: '🏥'
    },
    {
      title: 'Laboratory Equipment for Educational Institutions',
      category: 'Laboratory Products',
      description: 'Provided comprehensive laboratory equipment setup for universities and technical schools, enhancing science education capabilities.',
      achievements: [
        'Equipped 15 laboratories',
        'Served 5,000+ students',
        'Improved research capabilities',
        'Enhanced educational outcomes'
      ],
      timeline: '2024 Q1-Q2',
      status: 'Completed',
      icon: '🧪'
    },
    {
      title: 'Industrial Manufacturing Support',
      category: 'Industrial Supplies',
      description: 'Supplied specialized industrial equipment and raw materials to support local manufacturing companies in their production processes.',
      achievements: [
        'Supported 20+ manufacturers',
        'Reduced production downtime',
        'Improved efficiency by 30%',
        'Created jobs in manufacturing sector'
      ],
      timeline: '2024 Q3',
      status: 'Ongoing',
      icon: '🏭'
    },
    {
      title: 'Technology Infrastructure Development',
      category: 'Electronics',
      description: 'Provided modern IT equipment and electronics to support digital transformation initiatives in small and medium enterprises.',
      achievements: [
        'Deployed 500+ devices',
        'Enhanced digital capabilities',
        'Improved business productivity',
        'Supported SME growth'
      ],
      timeline: '2024 Q2-Q3',
      status: 'Ongoing',
      icon: '💻'
    },
    {
      title: 'Consumer Goods Distribution Network',
      category: 'Consumer Goods',
      description: 'Established efficient distribution channels for consumer products, connecting international suppliers with local retailers.',
      achievements: [
        'Connected 100+ suppliers',
        'Reached 500+ retailers',
        'Expanded market access',
        'Increased product availability'
      ],
      timeline: '2024 Q1-Q4',
      status: 'Ongoing',
      icon: '📦'
    },
    {
      title: 'Office Supplies & Consumables Program',
      category: 'Consumables',
      description: 'Comprehensive office supplies and consumables program for government agencies and private organizations.',
      achievements: [
        'Served 50+ organizations',
        'Streamlined procurement',
        'Reduced operational costs',
        'Ensured consistent supply'
      ],
      timeline: '2024 Q1-Q4',
      status: 'Ongoing',
      icon: '🛍️'
    }
  ];

  const testimonials = [
    {
      text: "Sequoia General Trading has been instrumental in providing quality medical equipment for our hospital. Their professionalism and reliability are unmatched.",
      author: "Dr. Sarah Mensah",
      position: "Chief Medical Officer, Regional Hospital",
      company: "Ghana Health Service"
    },
    {
      text: "The laboratory equipment provided by Sequoia has significantly enhanced our research capabilities. Their technical support is excellent.",
      author: "Prof. James Asante",
      position: "Dean of Sciences",
      company: "University of Ghana"
    },
    {
      text: "Working with Sequoia has helped us modernize our manufacturing processes. They understand our needs and deliver quality solutions.",
      author: "Mary Adjei",
      position: "Operations Manager",
      company: "Ghana Manufacturing Ltd."
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
                <h1 className="hero-title">Our Projects & Success Stories</h1>
                <p className="hero-subtitle">
                  Building partnerships that create lasting impact
                </p>
                <p className="hero-description">
                  Explore our portfolio of successful trading projects and the 
                  positive impact we've created across various sectors in Ghana.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Overview */}
      <section className="section-padding">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <div 
                id="projects-intro"
                className={`animate-on-scroll ${visibleElements.has('projects-intro') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-3">Recent Projects</h2>
                <p className="lead">
                  Delivering excellence across multiple sectors since our establishment in 2024
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {projects.map((project, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <div 
                  id={`project-${index}`}
                  className={`animate-on-scroll ${visibleElements.has(`project-${index}`) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="service-card h-100">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <div 
                            className="service-icon me-3"
                            style={{ 
                              width: '50px', 
                              height: '50px', 
                              fontSize: '1.2rem',
                              margin: '0'
                            }}
                          >
                            {project.icon}
                          </div>
                          <div>
                            <Badge 
                              bg={project.status === 'Completed' ? 'success' : 'primary'}
                              className="mb-1"
                            >
                              {project.status}
                            </Badge>
                            <div className="small text-muted">{project.timeline}</div>
                          </div>
                        </div>
                        <Badge bg="secondary">{project.category}</Badge>
                      </div>
                      
                      <Card.Title className="text-primary-green mb-3">
                        {project.title}
                      </Card.Title>
                      
                      <Card.Text className="mb-3">
                        {project.description}
                      </Card.Text>
                      
                      <div>
                        <h6 className="text-primary-green mb-2">Key Achievements:</h6>
                        <ul className="list-unstyled">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="mb-1">
                              <small>
                                <i className="text-primary-green me-2">✓</i>
                                {achievement}
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

      {/* Impact Statistics */}
      <section className="stats-section section-padding">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-white mb-3">Our Impact in Numbers</h2>
              <p className="lead text-light">
                Measurable results from our trading partnerships
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div 
                id="impact-1"
                className={`stat-item animate-on-scroll ${visibleElements.has('impact-1') ? 'visible' : ''}`}
              >
                <span className="stat-number">50+</span>
                <span className="stat-label">Organizations Served</span>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div 
                id="impact-2"
                className={`stat-item animate-on-scroll ${visibleElements.has('impact-2') ? 'visible' : ''}`}
                style={{ animationDelay: '0.1s' }}
              >
                <span className="stat-number">1000+</span>
                <span className="stat-label">Products Delivered</span>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div 
                id="impact-3"
                className={`stat-item animate-on-scroll ${visibleElements.has('impact-3') ? 'visible' : ''}`}
                style={{ animationDelay: '0.2s' }}
              >
                <span className="stat-number">10+</span>
                <span className="stat-label">Sectors Impacted</span>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div 
                id="impact-4"
                className={`stat-item animate-on-scroll ${visibleElements.has('impact-4') ? 'visible' : ''}`}
                style={{ animationDelay: '0.3s' }}
              >
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <div 
                id="testimonials-title"
                className={`animate-on-scroll ${visibleElements.has('testimonials-title') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-3">What Our Clients Say</h2>
                <p className="lead">
                  Hear from our partners about their experience working with us
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} className="mb-4" key={index}>
                <div 
                  id={`testimonial-${index}`}
                  className={`animate-on-scroll ${visibleElements.has(`testimonial-${index}`) ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="service-card h-100">
                    <Card.Body className="text-center">
                      <div className="mb-3">
                        <div style={{ fontSize: '3rem', color: 'var(--primary-green)' }}>
                          "
                        </div>
                      </div>
                      <Card.Text className="mb-4 fst-italic">
                        {testimonial.text}
                      </Card.Text>
                      <div>
                        <h6 className="text-primary-green mb-1">
                          {testimonial.author}
                        </h6>
                        <small className="text-muted">
                          {testimonial.position}
                        </small>
                        <br />
                        <small className="text-muted">
                          {testimonial.company}
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div 
                id="projects-cta"
                className={`animate-on-scroll ${visibleElements.has('projects-cta') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-4">
                  Ready to Start Your Next Project?
                </h2>
                <p className="lead mb-4">
                  Join our growing list of satisfied clients and let us help you 
                  achieve your trading goals. Whether you need to import specialized 
                  equipment or export products to international markets, we have the 
                  expertise and network to make it happen.
                </p>
                <div>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    size="lg" 
                    className="btn-primary-green me-3 mb-2"
                  >
                    Start Your Project
                  </Button>
                  <Button 
                    as={Link} 
                    to="/services" 
                    variant="outline-dark" 
                    size="lg"
                    className="mb-2"
                  >
                    View Our Services
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

export default Projects;