import React, { useState, useEffect, useRef } from 'react';
import '../styles/Features.css';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: '🎓',
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of practical experience and proven track records.'
    },
    {
      id: 2,
      icon: '📺',
      title: 'HD Video Quality',
      description: 'Crystal clear video content in HD quality for the best possible learning experience.'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Mobile Learning',
      description: 'Access your courses on any device, anytime, anywhere with our mobile app.'
    },
    {
      id: 4,
      icon: '🏆',
      title: 'Certificates',
      description: 'Earn recognized certificates upon course completion to showcase your new skills.'
    },
    {
      id: 5,
      icon: '💬',
      title: 'Community Support',
      description: 'Connect with fellow learners, ask questions, and get help from our active community.'
    },
    {
      id: 6,
      icon: '♾️',
      title: 'Lifetime Access',
      description: 'Once enrolled, access your courses forever with free updates and new content.'
    }
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
    <section className="features" ref={sectionRef} data-animate>
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Eduvalt</h2>
          <p>Discover what makes us the best choice for online learning</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
