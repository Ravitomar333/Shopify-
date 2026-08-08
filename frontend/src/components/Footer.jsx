import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Shopify</h3>
          <p>Simple shopping, reliable delivery.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/about">About Us</Link>
          <Link to="/return">Return Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </nav>

        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Shopify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;