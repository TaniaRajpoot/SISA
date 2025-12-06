// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from "../assets/SISA_Logo2_transparent[1] copy.png"

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
      <a href="#home" className="logo-container">
        <div className="logo-icon">
          <img src={logo} alt="sisa" />
        </div>
      </a>

      <nav className="nav-wrapper">
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item dropdown">
            <a 
              href="#home" 
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('home');
                }
              }}
            >
              HOME <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'home' ? 'mobile-active' : ''}`}>
              <a href="#home1" onClick={() => setMobileMenuOpen(false)}>Home Default</a>
              <a href="#home2" onClick={() => setMobileMenuOpen(false)}>Home Alternate</a>
              <a href="#home3" onClick={() => setMobileMenuOpen(false)}>Home Slider</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a 
              href="#admissions" 
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('admissions');
                }
              }}
            >
              ADMISSIONS <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'admissions' ? 'mobile-active' : ''}`}>
              <a href="#why-choose" onClick={() => setMobileMenuOpen(false)}>Why Choose SISA</a>
              <a href="#admission-process" onClick={() => setMobileMenuOpen(false)}>Admission Process</a>
              <a href="#online-campus" onClick={() => setMobileMenuOpen(false)}>Online and On Campus</a>
            </div>
          </li>

          <li className="nav-item mega-menu-item">
            <a 
              href="#quick-links" 
              className="nav-link"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('quicklinks');
                }
              }}
            >
              QUICK LINKS <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`mega-menu ${activeDropdown === 'quicklinks' ? 'mobile-active' : ''}`}>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">ACADEMICS</h3>
                  <div className="mega-menu-divider"></div>
                  <a href="#curriculum">Curriculum & Sections</a>
                  <a href="#preschool">Preschool & Junior Schoolr</a>
                  <a href="#middle">Middle School</a>
                  <a href="#senior">Senior School</a>
                  <a href="#btec">BTEC</a>
                  <div className="mega-menu-divider"></div>
                  <a href="#awards">Awards & Distinctions - O' & A' Level results`</a>
                  <a href="#affiliations">Affiliations with UK boards etc.</a>
                  <a href="#calendar">Academic Calendar</a>
                  <a href="#online">Online School</a>
                </div>

                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">STUDENT LIFE</h3>
                  <div className="mega-menu-divider"></div>
                  <a href="#clubs">Clubs & Co-curricular activities</a>
                  <a href="#teams">School teams & Houses</a>
                  <a href="#alumni">Alumni & Testimonials</a>
                  <a href="#council">Student Council</a>
                  <a href="#honours">Awards & Honours</a>
                </div>

                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">NEWS & EVENTS</h3>
                  <div className="mega-menu-divider"></div>
                  <a href="#upcoming">Upcoming Events</a>
                  <a href="#gallery">Photo Gallery</a>
                  <a href="#videos">Videos etc</a>
                </div>

                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">POLICIES</h3>
                  <div className="mega-menu-divider"></div>
                  <a href="#rules">Rules & Regulations</a>
                  <a href="#protection">Child Protection Policy</a>
                  <a href="#examination">Examination Policy</a>
                  <a href="#attendance">Attendance Policy</a>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a 
              href="#contact" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('contact');
              }}
            >
              CONTACT <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'contact' ? 'active' : ''}`}>
              <a href="#address">School Address & Location Pin</a>
              <a href="#phone">Phone Numbers</a>
              <a href="#contact-form">Contact Form</a>
              <a href="#job">Job Application Form</a>
              <a href="#franchise">Franchise Application</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('about');
              }}
            >
              ABOUT <span className="dropdown-arrow">▼</span>
            </a>
            <div className={`dropdown-menu ${activeDropdown === 'about' ? 'active' : ''}`}>
              <a href="#about-us">About</a>
              <a href="#director">Director's Message</a>
              <a href="#mission">Mission & Vision</a>
              <a href="#facilities">Facilities</a>
              <a href="#accreditation">Accreditation</a>
              <a href="#tour">Campus Virtual Tour</a>
            </div>
          </li>

          {/* Mobile Get Started Button */}
          <li className="nav-item mobile-get-started-item">
            <a href="#get-started" className="mobile-get-started-btn">
              Get Started
            </a>
          </li>
        </ul>

        {/* Desktop Get Started Button */}
        <div className="nav-actions">
          <a href="#get-started" className="get-started-btn">Get Started</a>
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