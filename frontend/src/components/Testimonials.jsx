import React, { useState, useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
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

  // For infinite loop, we clone the first and last slides
  const slides = [
    testimonials[testimonials.length - 1], // Last slide clone at beginning
    ...testimonials,
    testimonials[0] // First slide clone at end
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide (index 1)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const transitionTimer = useRef(null);

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

  // Handle auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // Jumped to the last slide clone, snap to the real last slide
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
    } else if (currentIndex === slides.length - 1) {
      // Jumped to the first slide clone, snap to the real first slide
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  // Turn transition back on after snapping
  useEffect(() => {
    if (!isTransitioning) {
      // Small timeout to allow the browser to process the snap without transition
      transitionTimer.current = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
    return () => clearTimeout(transitionTimer.current);
  }, [isTransitioning]);

  const goToSlide = (index) => {
    setCurrentIndex(index + 1); // Offset by 1 because of clones
    setIsTransitioning(true);
  };

  const nextSlide = () => {
    if (!isTransitioning && currentIndex >= slides.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    if (!isTransitioning && currentIndex <= 0) return;
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
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

          <div
            className={`testimonials-track ${!isTransitioning ? 'no-transition' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial-slide">
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
              className={`dot ${(currentIndex === index + 1) || (currentIndex === 0 && index === testimonials.length - 1) || (currentIndex === slides.length - 1 && index === 0) ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
