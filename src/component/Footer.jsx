import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p>
              We provide top-quality services to help your business grow. Our team is passionate, creative, and committed to excellence.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/get-quotation" className="text-light text-decoration-none">GetQuotation</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-light fs-5">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-light fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />

        <Row>
          <Col className="text-center">
            <small>© {new Date().getFullYear()} YourCompany. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
