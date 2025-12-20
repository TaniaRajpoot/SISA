import React from "react";
import "../styles/Reviews.css";
import mamImage from "../assets/mam2.jpg";

const review = {
  text: "Welcome to SISA. We are committed to providing an exceptional educational experience that empowers students to reach their full potential. Our dedicated faculty and state-of-the-art facilities ensure a nurturing environment for academic and personal growth.",
  name: "Mrs. Saeeda Salim",
  role: "Director",
  avatar: mamImage
};

const Reviews = () => {
  return (
    <section className="review-section">
      {/* Decorative background elements */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>

      <div className="review-wrapper">
        {/* Header */}
        <div className="review-header">
          <h1 className="review-title">
            From Director
            <span className="title-underline"></span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="review-content">
          {/* Avatar Section */}
          <div className="avatar-container">
            {/* Decorative shapes */}
            <div className="deco-shape deco-triangle">
              <svg viewBox="0 0 100 100">
                <polygon points="50,10 90,90 10,90" fill="#ff4444" />
              </svg>
            </div>
            <div className="deco-shape deco-triangle-small">
              <svg viewBox="0 0 100 100">
                <polygon points="50,20 80,80 20,80" fill="#ffdd00" />
              </svg>
            </div>
            <div className="deco-shape deco-lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            {/* Avatar Circle - Now Square */}
            <div className="avatar-box">
              <img
                src={review.avatar}
                alt={review.name}
                className="avatar-image"
              />
            </div>

            {/* Dot indicator */}
            <div className="avatar-dot"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            {/* Quote mark */}
            <div className="quote-mark">"</div>

            <div className="text-content">
              <p className="review-text">
                {review.text}
              </p>

              <div className="text-divider"></div>

              <h3 className="reviewer-name">
                {review.name}
              </h3>

              <p className="reviewer-role">
                {review.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;