import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Address',
      details: 'sequoia.trades@outlook.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone Number',
      details: '+233 55 388 2284',
      description: 'Call us during business hours'
    },
    {
      icon: '🏢',
      title: 'Business Registration',
      details: 'Ghana',
      description: 'Registered in Ghana as General Merchants'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      description: 'Ghana Standard Time (GMT)'
    }
  ];

  const services = [
    'Consumer Goods Trading',
    'Industrial Supplies',
    'Electronics Import/Export',
    'Medical Equipment',
    'Laboratory Products',
    'Business Consulting',
    'Market Analysis',
    'Supply Chain Management'
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
                <h1 className="hero-title">Contact Us</h1>
                <p className="hero-subtitle">
                  Let's discuss your trading needs
                </p>
                <p className="hero-description">
                  Ready to start your next trading partnership? Get in touch with 
                  our team to explore how we can help your business grow.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8}>
              <div 
                id="contact-form"
                className={`animate-on-scroll ${visibleElements.has('contact-form') ? 'visible' : ''}`}
              >
                <Card className="service-card">
                  <Card.Body className="p-4">
                    <h3 className="text-primary-green mb-4">Send Us a Message</h3>
                    
                    {showAlert && (
                      <Alert variant="success" className="mb-4">
                        <strong>Thank you!</strong> Your message has been sent successfully. 
                        We'll get back to you within 24 hours.
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Full Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your full name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your email address"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Company/Organization</Form.Label>
                            <Form.Control
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Enter your company name"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject *</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general-inquiry">General Inquiry</option>
                          <option value="product-request">Product Request</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="quote-request">Quote Request</option>
                          <option value="support">Customer Support</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Please provide details about your inquiry or requirements..."
                        />
                      </Form.Group>

                      <Button type="submit" className="btn-primary-green" size="lg">
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4}>
              <div 
                id="contact-info"
                className={`animate-on-scroll ${visibleElements.has('contact-info') ? 'visible' : ''}`}
              >
                <h3 className="text-primary-green mb-4">Contact Information</h3>
                
                {contactInfo.map((info, index) => (
                  <Card className="service-card mb-3" key={index}>
                    <Card.Body className="p-3">
                      <div className="d-flex align-items-start">
                        <div 
                          className="me-3"
                          style={{
                            fontSize: '1.5rem',
                            width: '40px',
                            textAlign: 'center'
                          }}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h6 className="text-primary-green mb-1">{info.title}</h6>
                          <div className="fw-bold mb-1">{info.details}</div>
                          <small className="text-muted">{info.description}</small>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}

                <Card className="service-card mt-4">
                  <Card.Body className="p-3">
                    <h6 className="text-primary-green mb-3">Quick Inquiry</h6>
                    <p className="small mb-3">
                      For quick inquiries, you can also reach us directly via:
                    </p>
                    <div className="d-grid gap-2">
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        href="mailto:sequoia.trades@outlook.com"
                      >
                        📧 Email Us
                      </Button>
                      <Button 
                        variant="outline-success" 
                        size="sm"
                        href="tel:+233553882284"
                      >
                        📞 Call Us
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={6}>
              <div 
                id="services-overview"
                className={`animate-on-scroll ${visibleElements.has('services-overview') ? 'visible' : ''}`}
              >
                <h3 className="text-primary-green mb-4">How We Can Help You</h3>
                <p className="mb-4">
                  Whether you're looking to import products, export goods, or 
                  need consulting on trade opportunities, our team is ready to 
                  assist you with professional and reliable services.
                </p>
                <Row>
                  {services.map((service, index) => (
                    <Col md={6} className="mb-2" key={index}>
                      <div className="d-flex align-items-center">
                        <i className="text-primary-green me-2">✓</i>
                        <small>{service}</small>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div 
                id="response-time"
                className={`animate-on-scroll ${visibleElements.has('response-time') ? 'visible' : ''}`}
              >
                <Card className="service-card bg-primary-green text-white">
                  <Card.Body className="p-4 text-center">
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                    <h4 className="mb-3">Quick Response Time</h4>
                    <p className="mb-4">
                      We understand that time is crucial in business. That's why 
                      we commit to responding to all inquiries within 24 hours.
                    </p>
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="h5 mb-1">24hrs</div>
                        <small>Response Time</small>
                      </div>
                      <div className="col-4">
                        <div className="h5 mb-1">100%</div>
                        <small>Client Satisfaction</small>
                      </div>
                      <div className="col-4">
                        <div className="h5 mb-1">24/7</div>
                        <small>Email Support</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Location Section */}
      <section className="section-padding">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div 
                id="location-info"
                className={`animate-on-scroll ${visibleElements.has('location-info') ? 'visible' : ''}`}
              >
                <h2 className="text-primary-green mb-4">Our Location</h2>
                <p className="lead mb-4">
                  Based in Ghana, we serve clients across West Africa and 
                  maintain trading relationships with partners worldwide.
                </p>
                <div className="bg-light rounded p-4">
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🇬🇭</div>
                  <h4 className="text-primary-green mb-2">Ghana</h4>
                  <p className="mb-0">
                    Strategically located in Ghana, we leverage our position 
                    to facilitate trade across West Africa and connect with 
                    global markets.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;