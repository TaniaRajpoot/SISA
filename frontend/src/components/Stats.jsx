import React, { useState, useEffect, useRef } from 'react';
import '../styles/Stats.css';
import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';

const StatCard = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    let start = 0;
    const increment = stat.end / 100;
    const duration = 2000;
    const stepTime = duration / 100;

    const timer = setInterval(() => {
      start += increment;
      if (start >= stat.end) {
        setCount(stat.end);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible]);

  return (
    <div
      className={`stat-card ${isVisible ? 'animate' : ''}`}
      onMouseEnter={startAnimation}
    >
      <div className="stat-icon">{stat.icon}</div>
      <h3 className="stat-number">
        {count.toLocaleString()}{stat.suffix}
      </h3>
      <p className="stat-label">{stat.label}</p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { key: 'courses', end: 10000, suffix: '+', label: 'Online Courses', icon: <FaBook /> },
    { key: 'students', end: 50000, suffix: '+', label: 'Active Students', icon: <FaUserGraduate /> },
    { key: 'instructors', end: 500, suffix: '+', label: 'Expert Instructors', icon: <FaChalkboardTeacher /> },
    { key: 'success', end: 95, suffix: '%', label: 'Success Rate', icon: <FaTrophy /> }
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

  return (
    <section className="stats" ref={sectionRef} data-animate>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.key} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;