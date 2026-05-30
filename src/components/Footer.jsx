import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Built with React • Designed for impact
        </p>
        <p className="footer-copyright">
          © 2026 Aarav Chauhan. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://github.com/aaaaarravv" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <span className="footer-separator">•</span>
          <a href="https://www.linkedin.com/in/aarav-chauhan-484598339/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <span className="footer-separator">•</span>
          <a href="mailto:aaravchauhan2006chd@gmail.com" className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
