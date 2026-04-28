import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/JoinTeacher.css';

const JoinTeacher = () => {
  const navigate = useNavigate();
  return (
    <section className="join-teacher-section">
      <div className="join-teacher-container">
        <div className="decorative-elements">
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="circle-shape circle-1"></div>
          <div className="circle-shape circle-2"></div>
        </div>

        <div className="join-teacher-content">
          <div className="text-content">
            <h2 className="join-title">
              Join Us & Spread
              <span className="underline-text"> Experiences</span>
            </h2>
          </div>

         

          <div className="cta-content">
            <button className="become-instructor-btn" onClick={() => navigate('/careers')}>
              BECOME AN INSTRUCTOR
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 20 20" 
                fill="none"
                className="arrow-icon"
              >
                <path 
                  d="M4 10h12m0 0l-4-4m4 4l-4 4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeacher;