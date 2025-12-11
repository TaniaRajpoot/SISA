// ...existing code...
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import Courses from '../components/Courses';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import About from '../components/About';
import Review from '../components/Reviews';
import TopInstructors from '../components/TopInstructor';
import NewsEvents from '../components/NewsEvents';
import JoinTeacher from '../components/JoinTeacher';
import SISAOverview from '../components/SISAOverview';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id || entry.target.dataset.section;
        if (entry.isIntersecting) {
          // add css class so [data-animate].visible selector in App.css makes it visible
          entry.target.classList.add('visible');
          setIsVisible(prev => ({ ...prev, [id ?? entry.target.id]: true }));
          console.log('section visible:', id || entry.target.id);
        } else {
          // remove when out of view (optional)
          entry.target.classList.remove('visible');
          setIsVisible(prev => ({ ...prev, [id ?? entry.target.id]: false }));
        }
      });
    }, observerOptions);

    // Observe all sections that have the data-animate attribute
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">

      <Header />
      <Hero />
      <Partners />
      <SISAOverview />
      {/* <About /> */}
      <Stats />
      {/* <Categories /> */}
      {/* <Courses /> */}
      {/* <Features /> */}
      <Review />
      <TopInstructors />
      <JoinTeacher />
      {/* <NewsEvents /> */}
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
