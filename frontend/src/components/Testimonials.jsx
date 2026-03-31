import React, { useState, useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    location: 'United States',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Eduvalt transformed my career completely! The courses are comprehensive and the instructors are absolutely top-notch. I landed my dream job within 3 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    location: 'Australia',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Best investment I ever made in my professional development. The quality of content is exceptional and very practical. The community support is amazing too!',
    rating: 5,
  },
  {
    id: 3,
    name: 'James Smith',
    location: 'Canada',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'I learned more in 3 months than I did in a year of self-study. The structured approach and hands-on projects made all the difference. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    location: 'United Kingdom',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'The flexibility to learn at my own pace while having access to expert guidance was perfect for my busy schedule. The certificates helped me advance my career.',
    rating: 5,
  },
  {
    id: 5,
    name: 'David Chen',
    location: 'Singapore',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'Outstanding platform! The mentors are incredibly knowledgeable and always willing to help. I went from a complete beginner to a full-stack developer in 6 months.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Priya Patel',
    location: 'India',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    text: 'Eduvalt gave me the confidence and skills to switch careers. The real-world projects prepared me perfectly for industry demands. Truly life-changing!',
    rating: 5,
  },
];

const VISIBLE = 2; // cards shown at once

const Testimonials = () => {
  // Infinite clone list: clone last VISIBLE at front, first VISIBLE at end
  const cloned = [
    ...testimonials.slice(-VISIBLE),
    ...testimonials,
    ...testimonials.slice(0, VISIBLE),
  ];

  const [index, setIndex] = useState(VISIBLE); // start at first real item
  const [transitioning, setTransitioning] = useState(true);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const isAnimating = useRef(false);

  // Intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const advance = () => {
    if (isAnimating.current) return;
    setTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const retreat = () => {
    if (isAnimating.current) return;
    setTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  const handleNext = () => { advance(); };
  const handlePrev = () => { retreat(); };

  // Snap back silently when hitting clone boundaries
  const handleTransitionEnd = () => {
    isAnimating.current = false;
    const realCount = testimonials.length;
    if (index >= realCount + VISIBLE) {
      setTransitioning(false);
      setIndex(VISIBLE);
    } else if (index < VISIBLE) {
      setTransitioning(false);
      setIndex(realCount + VISIBLE - 1);
    }
  };

  useEffect(() => {
    if (!transitioning) {
      const t = setTimeout(() => setTransitioning(true), 30);
      return () => clearTimeout(t);
    }
  }, [transitioning]);

  const trackOffset = -(index * (100 / VISIBLE));

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testi-container">

        {/* ── Header row ── */}
        <div className="testi-header">
          <div className="testi-header-left">
            <span className="testi-label">TESTIMONIALS</span>
            <h2 className="testi-title">
              People's Say About Our<br />
              <span className="testi-brand">SISA</span>
              <span className="testi-underline" />
            </h2>
          </div>
          <div className="testi-nav">
            <button className="testi-nav-btn" onClick={handlePrev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="testi-nav-btn" onClick={handleNext} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Body: image panel + cards ── */}
        <div className={`testi-body ${visible ? 'testi-visible' : ''}`}>

          {/* Left rating panel */}
          <div className="testi-rating-panel">
            <div className="testi-rating-overlay">
              <span className="testi-rating-score">4.8</span>
              <div className="testi-rating-stars">★★★★★</div>
              <p className="testi-rating-label">5 Star Rating</p>
            </div>
          </div>

          {/* Right: sliding cards */}
          <div className="testi-track-wrapper">
            <div
              className={`testi-track ${!transitioning ? 'testi-no-transition' : ''}`}
              style={{ transform: `translateX(${trackOffset}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {cloned.map((t, i) => (
                <div key={`${t.id}-${i}`} className="testi-card-slide">
                  <div className="testi-card">
                    <div className="testi-card-top">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="testi-avatar"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="testi-card-info">
                        <h4 className="testi-name">{t.name}</h4>
                        <span className="testi-location">{t.location}</span>
                      </div>
                    </div>
                    <p className="testi-text">{t.text}</p>
                    <div className="testi-card-footer">
                      <div className="testi-stars">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <span key={si} className="testi-star">★</span>
                        ))}
                      </div>
                    </div>
                    <span className="testi-quote-mark">"</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;