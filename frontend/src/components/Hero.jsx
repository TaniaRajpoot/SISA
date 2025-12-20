// import React, { useEffect, useState } from 'react';
// import '../styles/Hero.css';
// import banner1 from "../assets/download (1).jpg";
// import banner2 from "../assets/download.jpg"; // Add more images
// import banner3 from "../assets/Cambridge2.jpg";

// const slides = [
//   {
//     id: 1,
//     title: <>Learn <span className="highlight-skill">Skills</span> From <span className="text-black">Our Top Instructors</span></>,
//     description: "Discover thousands of courses from expert instructors. Learn at your own pace with lifetime access on mobile and desktop.",
//     image: banner1
//   },
//   {
//     id: 2,
//     title: <>Master <span className="highlight-skill">New Techniques</span> With <span className="text-black">Expert Guidance</span></>,
//     description: "Get hands-on experience and real-world skills to boost your career. Flexible learning at your fingertips.",
//     image: banner2
//   },
//   {
//     id: 3,
//     title: <>Join <span className="highlight-skill">Our Community</span> And <span className="text-black">Grow Together</span></>,
//     description: "Connect with like-minded learners and top instructors. Learn, practice, and achieve your goals.",
//     image: banner3
//   }
// ];

// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [animated, setAnimated] = useState(false);

//   // Animate on mount
//   useEffect(() => {
//     setTimeout(() => setAnimated(true), 100);
//   }, []);

//   // Auto-slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide(prev => (prev + 1) % slides.length);
//     }, 5000); // 5 seconds per slide
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="hero" id="hero" data-animate>
//       <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>

//         {/* Left side: content */}
//         <div className={`hero-content ${animated ? 'animate' : ''}`}>
//           <div className="hero-badge">
//             <span className='text-[#295fb1]'>100% Satisfaction Guarantee</span>
//           </div>

//           {/* Slide Title & Description */}
//           <h1 className="hero-title">
//             {slides[activeSlide].title}
//           </h1>

//           <p className="hero-description">
//             {slides[activeSlide].description}
//           </p>

//           {/* Buttons */}
//           <div className="hero-buttons">
//             <button className="btn btn-primary btn-lg">
//               <span>Explore Courses</span>
//               <i className="icon">→</i>
//             </button>

//             <button className="btn btn-secondary btn-lg">
//               <span className="play-icon">▶</span>
//               <span>Watch Demo</span>
//             </button>
//           </div>
//         </div>

//         {/* Right side: banner image */}
//         <img 
//           src={slides[activeSlide].image} 
//           alt={`Banner ${activeSlide + 1}`} 
//           className="hero-banner"
//           key={slides[activeSlide].id}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import banner1 from "../assets/download (1).jpg";
import banner2 from "../assets/download.jpg";
import banner3 from "../assets/Cambridge2.jpg";

const slides = [
  {
    id: 1,
    title: <>Learn <span className="highlight-skill">Skills</span> From <span>Our Top Instructors</span></>,
    description: "Discover thousands of courses from expert instructors. Learn at your own pace with lifetime access on mobile and desktop.",
    image: banner1
  },
  {
    id: 2,
    title: <>Master <span className="highlight-skill">New Techniques</span> With <span>Expert Guidance</span></>,
    description: "Get hands-on experience and real-world skills to boost your career. Flexible learning at your fingertips.",
    image: banner2
  },
  {
    id: 3,
    title: <>Join <span className="highlight-skill">Our Community</span> And <span>Grow Together</span></>,
    description: "Connect with like-minded learners and top instructors. Learn, practice, and achieve your goals.",
    image: banner3
  }
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-fullscreen">
      {slides.map((slide, index) => (
        <React.Fragment key={slide.id}>
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`hero-background ${activeSlide === index ? "active" : ""}`}
          />
          <div className={`hero-overlay ${activeSlide === index ? "active" : ""}`}>
            <div className={`hero-text ${activeSlide === index ? "active" : ""}`}>
              <h1 className={`hero-title`}>{slide.title}</h1>
              <p className={`hero-description slide-${slide.id}`}>{slide.description}</p>

              <div className="hero-buttons">
                <button className="btn btn-primary">Explore Courses</button>
                <button className="btn btn-secondary">Watch Demo</button>
              </div>

              <div className="hero-buttons-bottom">
                <button className="btn btn-outline">Admissions</button>
                <button className="btn btn-outline">Director's Message</button>
                <button className="btn btn-outline">Upcoming Events</button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Hero;
