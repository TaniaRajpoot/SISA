import React, { useState, useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Web Developer',
      avatar: '👨‍💼',
      text: 'Eduvalt transformed my career completely! The courses are comprehensive, well-structured, and the instructors are absolutely top-notch. I landed my dream job within 3 months of completing the bootcamp.',
      rating: 5
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'UX Designer',
      avatar: '👩‍💼',
      text: 'Best investment I ever made in my professional development. The quality of content is exceptional and very practical. The community support is amazing too!',
      rating: 5
    },
    {
      id: 3,
      name: 'James Smith',
      role: 'Data Scientist',
      avatar: '👨‍💻',
      text: 'I learned more in 3 months than I did in a year of self-study. The structured approach and hands-on projects made all the difference. Highly recommended!',
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Product Manager',
      avatar: '👩‍💻',
      text: 'The flexibility to learn at my own pace while having access to expert guidance was perfect for my busy schedule. The certificates helped me advance in my career.',
      rating: 5
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" ref={sectionRef} data-animate>
      <div className="container">
        <div className="section-header">
          <h2>What Our Students Say</h2>
          <p>Real feedback from our amazing community of learners</p>
        </div>

        <div className={`testimonials-slider ${isVisible ? 'animate' : ''}`}>
          <button className="slider-btn prev" onClick={prevSlide}>‹</button>
          
          <div className="testimonials-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div className="testimonial-rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-btn next" onClick={nextSlide}>›</button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
