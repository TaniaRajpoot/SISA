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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <h4>20000</h4>
                  <p>Expert Tutors</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon green">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <h4>18000</h4>
                  <p>Over Students</p>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon red">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5Z" fill="currentColor"/>
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