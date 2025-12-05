// src/components/Stats.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    courses: 0,
    students: 0,
    instructors: 0,
    success: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { key: 'courses', end: 10000, suffix: '+', label: 'Online Courses', icon: '📚' },
    { key: 'students', end: 50000, suffix: '+', label: 'Active Students', icon: '👨‍🎓' },
    { key: 'instructors', end: 500, suffix: '+', label: 'Expert Instructors', icon: '👨‍🏫' },
    { key: 'success', end: 95, suffix: '%', label: 'Success Rate', icon: '🏆' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat) => {
      let start = 0;
      const increment = stat.end / 100;
      const duration = 2000;
      const stepTime = duration / 100;

      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.end) {
          setCounts((prev) => ({ ...prev, [stat.key]: stat.end }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }));
        }
      }, stepTime);
    });
  }, [isVisible]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <section className="stats" ref={sectionRef} data-animate>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={stat.key} 
              className={`stat-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">
                {formatNumber(counts[stat.key])}{stat.suffix}
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;