import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-logo">
                <span className="logo-icon">🎓</span>
                Eduvalt
              </h3>
              <p>Empowering learners worldwide with quality education and expert instruction.</p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#instructors">Instructors</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <span className="icon">📍</span>
                  <span>123 Education St, Learning City</span>
                </li>
                <li>
                  <span className="icon">📧</span>
                  <span>info@eduvalt.com</span>
                </li>
                <li>
                  <span className="icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Eduvalt. All rights reserved. Made with ❤️ for learners worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;