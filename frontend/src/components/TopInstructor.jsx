import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TopInstructors.css';

import admin1 from '../assets/saeeda1.png';
import admin2 from '../assets/admin2.png';
import admin3 from '../assets/admin3.png';
import admin4 from '../assets/admin4.png';
import Graphic from '../assets/Graphic.png';
  
const TopInstructors = () => {
  const [hoveredShareBtn, setHoveredShareBtn] = useState(null);

  const instructors = [
    {
      id: "admin-1",
      name: "Mrs. Saeeda Salim",
      role: "Director & Principal",
      image: admin1,
    },
    {
      id: "admin-2",
      name: "Mr. Wasif W. Mir",
      role: "Vice Principal",
      image: admin2,
    },
    {
      id: "admin-3",
      name: "Mrs. Saneea Sohaib Khan",
      role: "Administrator",
      image: admin3,
    },
    {
      id: "admin-4",
      name: "Mr. Hassan Askari",
      role: "Coordinator – Math",
      image: admin4,
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
            <div key={instructor.id} className="instructor-card-new top-card">
              <div className="card-image-box">
                <div className="purple-bg-rect"></div>
                <div className="slanted-border"></div>
                <img src={instructor.image} alt={instructor.name} className="instructor-img" />
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