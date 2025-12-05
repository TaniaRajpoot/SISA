// src/components/Partners.jsx
import React from 'react';
import '../styles/Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    },
    {
      id: 2,
      name: 'Udemy',
      logo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    },
    {
      id: 3,
      name: 'Microsoft',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    },

    {
      id: 5,
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      id: 6,
      name: 'Adobe',
      logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg',
    },
    // {
    //   id: 7,
    //   name: 'IBM',
    //   logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    // },
    // {
    //   id: 8,
    //   name: 'LinkedIn',
    //   logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    // }
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
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="partner-logo-fallback">${partner.name}</div>`;
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