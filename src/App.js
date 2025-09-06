import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './styles/custom.css';

import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="App">
            <Navbar />
            <ScrollToTop />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>🔍</div>
            <h1 className="text-primary-green mb-4">Page Not Found</h1>
            <p className="lead mb-4">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div>
              <a href="/" className="btn btn-primary-green btn-lg me-3">
                🏠 Go Home
              </a>
              <a href="/contact" className="btn btn-outline-dark btn-lg">
                📧 Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;