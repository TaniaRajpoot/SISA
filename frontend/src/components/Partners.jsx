// src/components/Partners.jsx
import React from 'react';
import '../styles/Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Cambridge Assessment International Education',
      logo: 'https://headstarteducationalacademy.edu.in/wp-content/uploads/2020/10/cambridge-assessment-international-education-logo.jpg',
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: 'https://tse3.mm.bing.net/th/id/OIP.kegS-aTBe-aEWVEU4xR-ogHaCt?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: 'https://th.bing.com/th/id/OIP.6-XGRIi65FcBh-0w8w2VYwHaEC?w=307&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
    }
  ];

  return (
    <section className="partners">
      <div className="container">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="partner-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="partner-logo"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="partner-logo-text">${partner.name}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;