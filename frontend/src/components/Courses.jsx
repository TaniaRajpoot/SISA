import React, { useState, useEffect, useRef } from 'react';
import '../styles/Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const mockCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Doe',
      price: 49.99,
      originalPrice: 99.99,
      rating: 4.8,
      students: 15000,
      level: 'Beginner',
      duration: '40 hours',
      category: 'web',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'React - The Complete Guide 2024',
      instructor: 'Jane Smith',
      price: 59.99,
      originalPrice: 119.99,
      rating: 4.9,
      students: 12000,
      level: 'Intermediate',
      duration: '35 hours',
      category: 'web',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Node.js & Express Masterclass',
      instructor: 'Mike Johnson',
      price: 44.99,
      originalPrice: 89.99,
      rating: 4.7,
      students: 10000,
      level: 'Advanced',
      duration: '30 hours',
      category: 'web',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Sarah Wilson',
      price: 39.99,
      originalPrice: 79.99,
      rating: 4.9,
      students: 18000,
      level: 'Beginner',
      duration: '25 hours',
      category: 'design',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      title: 'Python for Data Science',
      instructor: 'David Brown',
      price: 54.99,
      originalPrice: 109.99,
      rating: 4.8,
      students: 14000,
      level: 'Intermediate',
      duration: '45 hours',
      category: 'science',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 6,
      title: 'Digital Marketing Mastery',
      instructor: 'Emily Davis',
      price: 42.99,
      originalPrice: 85.99,
      rating: 4.6,
      students: 11000,
      level: 'Beginner',
      duration: '28 hours',
      category: 'marketing',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 500);
  }, []);

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

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <section className="courses" id="courses" ref={sectionRef} data-animate>
      <div className="container">
        <div className="section-header">
          <h2>Featured Courses</h2>
          <p>Explore our most popular and highly-rated courses</p>
        </div>

        <div className="course-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Courses
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            Design
          </button>
          <button 
            className={`filter-btn ${filter === 'marketing' ? 'active' : ''}`}
            onClick={() => setFilter('marketing')}
          >
            Marketing
          </button>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`course-card ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="course-image" style={{ background: course.image }}>
                  <span className="course-badge">{course.level}</span>
                  <div className="course-overlay">
                    <button className="btn-view">View Details</button>
                  </div>
                </div>
                
                <div className="course-content">
                  <div className="course-meta">
                    <span>👤 {course.instructor}</span>
                    <span>⏱️ {course.duration}</span>
                  </div>
                  
                  <h3>{course.title}</h3>
                  
                  <div className="course-footer">
                    <div className="course-pricing">
                      <span className="course-price">${course.price}</span>
                      <span className="course-original-price">${course.originalPrice}</span>
                    </div>
                    
                    <div className="course-rating">
                      <span className="rating-stars">⭐</span>
                      <span className="rating-value">{course.rating}</span>
                      <span className="rating-count">({course.students.toLocaleString()})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="courses-cta">
          <button className="btn btn-primary btn-lg">View All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
