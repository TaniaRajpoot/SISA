// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from "../assets/sisa_logo.png"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo-container">
        <div className="logo-icon">
          <img src={logo} alt="sisa" />
        </div>
      </Link>

      <nav className="nav-wrapper">
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item dropdown">
            <a
              href="/"
              className="nav-link"
            >
              HOME
            </a>

          </li>

          <li className="nav-item dropdown">
            <Link
              to="/about"
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('about');
                }
              }}
            >
              ABOUT <span className="dropdown-arrow">▼</span>
            </Link>
            <div className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}>
              <Link to="/about/us">About Us</Link>
              <Link to="/mission-vision">Mission & Vision</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/admissions"
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('admissions');
                }
              }}
            >
              ADMISSIONS <span className="dropdown-arrow">▼</span>
            </Link>
            <div className={`dropdown-menu ${activeDropdown === 'admissions' ? 'mobile-active' : ''}`}>
              <Link to="/why-choose-sisa" onClick={() => setMobileMenuOpen(false)}>Why Choose SISA</Link>
              {/* <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>Admission Process</Link>
              <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>Online and On Campus</Link> */}
            </div>
          </li>

          <li className="nav-item mega-menu-item">
            <Link
              to="/quick-links"
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('quicklinks');
                }
              }}
            >
              QUICK LINKS <span className="dropdown-arrow">▼</span>
            </Link>
            <div className={`mega-menu ${activeDropdown === 'quicklinks' ? 'mobile-active' : ''}`}>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">ACADEMICS</h3>
                  <div className="mega-menu-divider"></div>
                  <Link to="/academics/curriculum">Curriculum & Sections</Link>
                  <Link to="/academics/preschool-junior">Preschool & Junior School</Link>
                  <Link to="/academics/middle-school">Middle School</Link>
                  <Link to="/academics/btec">BTEC</Link>
                </div>

                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">STUDENT LIFE</h3>
                  <div className="mega-menu-divider"></div>
                  <Link to="/student-life">Overview</Link>
                </div>

                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">POLICIES</h3>
                  <div className="mega-menu-divider"></div>
                  <Link to="/policies/rules">Rules & Regulations</Link>
                  <Link to="/policies/child-protection">Child Protection Policy</Link>
                  <Link to="/policies/exams">Examination Policy</Link>
                  <Link to="/policies/attendance">Attendance Policy</Link>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/contact"
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('contact');
                }
              }}
            >
              CONTACT <span className="dropdown-arrow">▼</span>
            </Link>
            <div className={`dropdown-menu ${activeDropdown === 'contact' ? 'active' : ''}`}>
              <Link to="/contact">Contact Info & Location</Link>
              {/* <Link to="/contact">Contact Form</Link> */}
              <Link to="/instructors">Our Instructors</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </li>



          {/* Mobile Get Started Button */}
          <li className="nav-item mobile-get-started-item">
            <Link to="/contact" className="mobile-get-started-btn">
              Get Started
            </Link>
          </li>
        </ul>

        {/* Desktop Get Started Button */}
        <div className="nav-actions">
          <Link to="/contact" className="get-started-btn">Get Started</Link>
        </div>

        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;