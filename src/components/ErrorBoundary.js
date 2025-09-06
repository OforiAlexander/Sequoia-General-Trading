import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-vh-100 d-flex align-items-center bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={10}>
                <div className="text-center">
                  <div 
                    className="mb-4"
                    style={{ fontSize: '5rem', color: 'var(--primary-green)' }}
                  >
                    ⚠️
                  </div>
                  <h1 className="text-primary-green mb-3">
                    Oops! Something went wrong
                  </h1>
                  <p className="lead mb-4">
                    We're sorry, but something unexpected happened. 
                    Our team has been notified and is working to fix the issue.
                  </p>
                  
                  <Alert variant="light" className="text-start mb-4">
                    <Alert.Heading>What can you do?</Alert.Heading>
                    <hr />
                    <ul className="mb-0">
                      <li>Try refreshing the page</li>
                      <li>Go back to the homepage</li>
                      <li>Clear your browser cache</li>
                      <li>Contact us if the problem persists</li>
                    </ul>
                  </Alert>

                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Button 
                      className="btn-primary-green"
                      onClick={this.handleRefresh}
                      size="lg"
                    >
                      🔄 Refresh Page
                    </Button>
                    <Button 
                      variant="outline-dark"
                      onClick={this.handleGoHome}
                      size="lg"
                    >
                      🏠 Go Home
                    </Button>
                    <Button 
                      variant="outline-secondary"
                      href="/contact"
                      size="lg"
                    >
                      📧 Contact Support
                    </Button>
                  </div>

                  {process.env.NODE_ENV === 'development' && (
                    <details className="mt-4 text-start">
                      <summary className="btn btn-outline-danger btn-sm">
                        Show Error Details (Development)
                      </summary>
                      <div className="mt-3 p-3 bg-danger-subtle rounded">
                        <h6>Error:</h6>
                        <pre className="small">
                          {this.state.error && this.state.error.toString()}
                        </pre>
                        <h6>Component Stack:</h6>
                        <pre className="small">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    </details>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;