// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from "../assets/SISA_Logo2_transparent[1] copy.png"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <a href="#home" className="nav-link">
              About<span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#home1">About</a>
              <a href="#home2">Directior's Message</a>
              <a href="#home3">Mission & VIsion</a>
              <a href="#home3">Facilities</a>
              <a href="#home3">Accerdation</a>
              <a href="#home3">Campus Virtual Tour</a>
            </div>
          </li>
          
          
          <li className="nav-item dropdown">
            <a href="#home" className="nav-link">
              Academics <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#home1">Cirriculm & Sections</a>
              <a href="#home2">Preschool & Junior School</a>
              <a href="#home3">Middle School</a>
              <a href="#home3">Senior School</a>
              <a href="#home3">BTEC</a>
            </div>
          </li>
          
         

          <li className="nav-item dropdown">
            <a href="#home" className="nav-link">
              Admissions <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#home1">Why Choose SISA</a>
              <a href="#home2">Admisssion Process</a>
              <a href="#home3">Online and On Campus</a>
          
            </div>
          </li>


             <li className="nav-item dropdown">
            <a href="#courses" className="nav-link">
              Student Life <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#all-courses">Club & Co-curricluar activities</a>
              <a href="#course-details">School teams & Houses</a>
              <a href="#become-instructor">Alumini & Testimonials</a>
              <a href="#become-instructor">Student Council</a>
              <a href="#become-instructor">Awards & Houners</a>
            </div>
          </li>
          
          <li className="nav-item dropdown">
            <a href="#home" className="nav-link">
              Quick Links <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#home1">Cirriculm & Sections</a>
              <a href="#home2">Preschool & Junior School</a>
              <a href="#home3">Middle School</a>
              <a href="#home3">Senior School</a>
              <a href="#home3">BTEC</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="#home" className="nav-link">
              Contacts<span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#home1">School Address & Location Pin</a>
              <a href="#home2">Phone Numbers</a>
              <a href="#home3">Contact Form</a>
              <a href="#home3">Job Application Form</a>
              <a href="#home3">Franchise application (expression of interedt )</a>
            </div>
          </li>

           <li className="nav-item dropdown">
            <a href="#pages" className="nav-link">
              News & Events <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#about">Upcoming Events</a>
              <a href="#instructors">Photo Gallery</a>
              <a href="#mentors">Videos etc</a>
              <a href="#events">Our Events</a>
              
            </div>
          </li>


          <li className="nav-item dropdown">
            <a href="#shop" className="nav-link">
            Policies <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#shop-grid">Rules & Regulations</a>
              <a href="#shop-list">Child PRotection Policy</a>
              <a href="#product-details">Product Details</a>
              <a href="#cart">Examination Policy</a>
           
            </div>
          </li>

          {/* Mobile Get Started Button */}
          <li className="nav-item mobile-get-started-item">
            <a href="#get-started" className="mobile-get-started-btn">
              Get Started
            </a>
          </li>
          
          {/* <li className="nav-item dropdown">
            <a href="#blog" className="nav-link">
              Blog <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="#blog-grid">Blog Grid</a>
              <a href="#blog-list">Blog List</a>
              <a href="#blog-details">Blog Details</a>
            </div>
          </li> */}
        </ul>

        {/* <div className="nav-actions">
          <div className="categories-dropdown">
            <button 
              className="categories-btn"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              <span className="grid-icon">▦</span>
              Categories
            </button>
            
            {categoriesOpen && (
              <div className="categories-menu">
                <div className="categories-header">
                  <span className="grid-icon-large">▦</span>
                  <h3>Categories</h3>
                </div>
                <div className="categories-search">
                  <input 
                    type="text" 
                    placeholder="Search categories..." 
                    className="category-search-input"
                  />
                  <span className="search-icon-input">🔍</span>
                </div>
                <div className="categories-list">
                  <a href="#business" className="category-item">Business</a>
                  <a href="#design" className="category-item">Design</a>
                  <a href="#development" className="category-item">Development</a>
                  <a href="#health" className="category-item">Heath & Fitness</a>
                  <a href="#marketing" className="category-item">Marketing</a>
                  <a href="#math" className="category-item">Math</a>
                  <a href="#photography" className="category-item">Photography</a>
                </div>
              </div>
            )}
          </div>

   

          <button className="login-btn">Log In</button>
        </div> */}

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