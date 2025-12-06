// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Images */}
        <div className="about-images">
          <div className="dots-decoration"></div>
          <div className="orange-shape"></div>
          
          <div className="experience-badge">
            <h3>12 +</h3>
            <p>Years of<br />Experiences</p>
          </div>

          <div className="small-image">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=320&fit=crop" 
              alt="Student" 
            />
          </div>

          <div className="large-image">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop" 
              alt="Instructor" 
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <div className="about-badge">Get To Know About Us</div>
          
          <h2 className="about-title">
            Discover Top <span className="highlight">Instructors</span><br />
            Around The World
          </h2>

          <p className="about-description">
            Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, 
            luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur adipis 
            we followelit. Borem.
          </p>

          <div className="about-stats">
            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-icon blue">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="stat-info">
                  <h4>20000</h4>
                  <p>Expert Tutors</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon green">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="stat-info">
                  <h4>1500</h4>
                  <p>Top Lessons</p>
                </div>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat-item">
                <div className="stat-icon purple">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="stat-info">
                  <h4>18000</h4>
                  <p>Over Students</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon red">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <div className="stat-info">
                  <h4>3200</h4>
                  <p>Pro Videos</p>
                </div>
              </div>
            </div>
          </div>

          <button className="discover-btn">
            DISCOVER MORE
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;