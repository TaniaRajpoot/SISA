// src/components/TopInstructors.jsx
import React, { useState } from 'react';
import '../styles/TopInstructors.css';

const TopInstructors = () => {
  const [hoveredShareBtn, setHoveredShareBtn] = useState(null);

  const instructors = [
    {
      id: 1,
      name: "Robert Smith",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bgColor: "#E0F2FE",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Olivia Mia",
      role: "Web Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bgColor: "#D1FAE5",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "William Hope",
      role: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bgColor: "#E0E7FF",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Sophia Ava",
      role: "Support Staff",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bgColor: "#FCE7F3",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="top-instructors-section">
      <div className="instructors-container">
        {/* Header */}
        <div className="instructors-header">
          <div className="header-left">
            <span className="header-badge">Our Qualified People Matter</span>
            <h2 className="header-title">
              Top <span className="highlight">Class</span> Instructors
            </h2>
          </div>
          <div className="header-right">
            <a href="#all-instructors" className="all-instructors-btn">
              ALL INSTRUCTORS
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="instructor-card"
            >
              <div className="instructor-card-inner">
                {/* Image Section */}
                <div
                  className="instructor-image-wrapper"
                  style={{ backgroundColor: instructor.bgColor }}
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="instructor-image"
                  />

                  {/* Share Menu */}
                  <div
                    className="share-wrapper"
                    onMouseEnter={() => setHoveredShareBtn(instructor.id)}
                    onMouseLeave={() => setHoveredShareBtn(null)}
                  >
                    <div className={`social-links ${hoveredShareBtn === instructor.id ? 'show' : ''}`}>
                      <a href={instructor.socials.facebook} className="social-link" aria-label="Facebook">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href={instructor.socials.twitter} className="social-link" aria-label="Twitter">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                      <a href={instructor.socials.linkedin} className="social-link" aria-label="LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                    <button className="share-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="instructor-info">
                  <p className="instructor-role">{instructor.role}</p>
                  <h3 className="instructor-name">{instructor.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;