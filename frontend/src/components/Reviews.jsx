import React, { useState, useEffect } from "react";
import "../styles/Reviews.css";

const reviews = [
  {
    text: "When an unknown printer took a galley of type and scrambled to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    name: "Cristina Luwis",
    role: "Web Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    text: "The professionalism and dedication shown by the team is remarkable. They helped me achieve my goals and exceeded all my expectations throughout the journey.",
    name: "John Anderson",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    text: "An incredible learning experience that transformed my career. The support and guidance provided were exceptional and made all the difference in my success.",
    name: "Sarah Mitchell",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  // Auto-slide effect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, []);

  const nextReview = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  return (
    <section className="review-section">
      {/* Decorative background elements */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>

      <div className="review-wrapper">
        {/* Header */}
        <div className="review-header">
          <h1 className="review-title">
            What Our Students Say About Us
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

            {/* Avatar Circle */}
            <div className="avatar-circle">
              <img
                key={`avatar-${currentIndex}`}
                src={reviews[currentIndex].avatar}
                alt={reviews[currentIndex].name}
                className={`avatar-image ${direction === 'next' ? 'slide-right' : 'slide-left'}`}
              />
            </div>

            {/* Dot indicator */}
            <div className="avatar-dot"></div>
          </div>

          {/* Text Content */}
          <div className="text-container">
            {/* Quote mark */}
            <div className="quote-mark">"</div>

            <div
              key={`content-${currentIndex}`}
              className={`text-content ${direction === 'next' ? 'slide-right' : 'slide-left'}`}
            >
              <p className="review-text">
                {reviews[currentIndex].text}
              </p>

              <div className="text-divider"></div>

              <h3 className="reviewer-name">
                {reviews[currentIndex].name}
              </h3>

              <p className="reviewer-role">
                {reviews[currentIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button onClick={prevReview} className="nav-btn" aria-label="Previous review">
            ←
          </button>
          <button onClick={nextReview} className="nav-btn" aria-label="Next review">
            →
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="progress-indicators">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToReview(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;