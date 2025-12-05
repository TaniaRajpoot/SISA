import React, { useState, useEffect, useRef } from 'react';
import '../styles/Categories.css';

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = [
    { id: 1, icon: '💻', title: 'Web Development', courses: 250, color: '#6366f1' },
    { id: 2, icon: '📱', title: 'Mobile Apps', courses: 180, color: '#8b5cf6' },
    { id: 3, icon: '🎨', title: 'Design', courses: 320, color: '#ec4899' },
    { id: 4, icon: '📊', title: 'Business', courses: 200, color: '#f59e0b' },
    { id: 5, icon: '🔬', title: 'Science', courses: 150, color: '#10b981' },
    { id: 6, icon: '💼', title: 'Marketing', courses: 220, color: '#3b82f6' },
    { id: 7, icon: '📸', title: 'Photography', courses: 140, color: '#ef4444' },
    { id: 8, icon: '🎵', title: 'Music', courses: 190, color: '#8b5cf6' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="categories" id="categories" ref={sectionRef} data-animate>
      <div className="container">
        <div className="section-header">
          <h2>Explore Top Categories</h2>
          <p>Browse our most popular course categories and find your passion</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-card ${isVisible ? 'animate' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--category-color': category.color
              }}
            >
              <div className="category-icon" style={{ background: category.color }}>
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <p>{category.courses}+ Courses</p>
              <div className="category-overlay">
                <button className="btn btn-primary btn-sm">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
