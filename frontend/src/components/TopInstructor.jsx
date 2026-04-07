import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TopInstructors.css';

import inst01 from '../assets/New folder/SISA - Website Instructor-01.png';
import inst02 from '../assets/New folder/SISA - Website Instructor-02.png';
import inst03 from '../assets/New folder/SISA - Website Instructor-03.png';
import inst04 from '../assets/New folder/SISA - Website Instructor-04.png';
import Graphic from '../assets/Graphic.png';
  
const TopInstructors = () => {
  const [hoveredShareBtn, setHoveredShareBtn] = useState(null);

  const instructors = [
    {
      id: "admin-1",
      name: "Mrs. Saeeda Salim",
      role: "Director & Principal",
      image: inst01,
    },
    {
      id: "admin-2",
      name: "Mr. Wasif W. Mir",
      role: "Vice Principal",
      image: inst02,
    },
    {
      id: "admin-3",
      name: "Mrs. Saneea Sohaib Khan",
      role: "Administrator",
      image: inst03,
    },
    {
      id: "admin-4",
      name: "Mr. Hassan Askari",
      role: "Coordinator – Math",
      image: inst04,
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
            <Link to="/instructors" className="all-instructors-btn">
              ALL INSTRUCTORS
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="instructors-new-grid">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="simple-instructor-card-top">
              <div className="simple-card-image-box">
                <img src={instructor.image} alt={instructor.name} className="simple-instructor-img" />
              </div>
              <div className="card-text-content">
                <h3 className="instructor-name-new">{instructor.name}</h3>
                <p className="instructor-role-new">{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;