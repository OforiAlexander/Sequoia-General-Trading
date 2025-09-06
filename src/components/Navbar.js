import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNavbar = () => setExpanded(false);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
          <div className="d-flex align-items-center">
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
              <div 
                className={`fw-bold ${scrolled ? 'text-white' : 'text-primary-green'}`}
                style={{ fontSize: '1.2rem' }}
              >
                Sequoia General Trading
              </div>
              <div 
                className={`small ${scrolled ? 'text-light' : 'text-muted'}`}
                style={{ fontSize: '0.8rem' }}
              >
                Big things from small places
              </div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0"
        >
          <span className={`navbar-toggler-icon ${scrolled ? 'text-white' : 'text-primary-green'}`}></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={closeNavbar}
              className={`${isActive('/') ? 'active' : ''} ${scrolled ? 'text-white' : 'text-primary-green'}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={closeNavbar}
              className={`${isActive('/about') ? 'active' : ''} ${scrolled ? 'text-white' : 'text-primary-green'}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={closeNavbar}
              className={`${isActive('/services') ? 'active' : ''} ${scrolled ? 'text-white' : 'text-primary-green'}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={closeNavbar}
              className={`${isActive('/projects') ? 'active' : ''} ${scrolled ? 'text-white' : 'text-primary-green'}`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={closeNavbar}
              className={`${isActive('/contact') ? 'active' : ''} ${scrolled ? 'text-white' : 'text-primary-green'}`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;