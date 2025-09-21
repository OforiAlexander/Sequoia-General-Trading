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
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Email Address',
      details: 'sequoia.trades@outlook.com',
      description: 'Send us an email anytime'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: 'Phone Number',
      details: '+233 55 388 2284',
      description: 'Call us during business hours'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Business Registration',
      details: 'Ghana',
      description: 'Registered in Ghana as General Merchants'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
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
      {/* Hero Section with Background Image */}
      <section 
        className="hero-section contact-section" 
        style={{
          minHeight: '60vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/contact_hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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

            {/* Sticky Contact Information Sidebar */}
            <Col lg={4}>
              <div 
                id="contact-info"
                className={`animate-on-scroll ${visibleElements.has('contact-info') ? 'visible' : ''}`}
                style={{
                  position: 'sticky',
                  top: '100px',
                  alignSelf: 'flex-start'
                }}
              >
                <h3 className="text-primary-green mb-4">Contact Information</h3>
                
                {contactInfo.map((info, index) => (
                  <Card className="service-card mb-3" key={index}>
                    <Card.Body className="p-3">
                      <div className="d-flex align-items-start">
                        <div 
                          className="me-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'var(--light-green)',
                            borderRadius: '50%',
                            color: 'white'
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

                {/* Google Maps Placeholder */}
                <Card className="service-card mt-4">
                  <Card.Body className="p-3">
                    <h6 className="text-primary-green mb-3">Our Location</h6>
                    <div 
                      className="bg-light d-flex align-items-center justify-content-center text-center"
                      style={{
                        height: '200px',
                        borderRadius: '8px',
                        border: '2px dashed #ccc'
                      }}
                    >
                      <div>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-green)" className="mb-2">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <p className="mb-0 text-muted">
                          <strong>Google Maps</strong><br />
                          Interactive map will be embedded here
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        Email Us
                      </Button>
                      <Button 
                        variant="outline-success" 
                        size="sm"
                        href="tel:+233553882284"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        Call Us
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview with Background */}
      <section 
        className="section-padding"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 245, 245, 0.6), rgba(245, 245, 245, 0.6)), url('/contact_services_bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary-green)" className="me-2">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
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
                    <div className="mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M12 6.5h3v1h-3z"/>
                      </svg>
                    </div>
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
      <section className="section-padding bg-light">
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
                <div className="bg-white rounded p-4 shadow-sm">
                  <div className="mb-3">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--primary-green)">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
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