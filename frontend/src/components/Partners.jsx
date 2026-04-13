import React from 'react';
import '../styles/Partners.css';
import pearsonLogo from '../assets/pearson-logo.png';
import oxfordaqaLogo from '../assets/oxfordaqa-logo.png';
import cambridgeLogo from '../assets/cambridge-logo.png';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Cambridge International School',
      logo: cambridgeLogo,
      centreNumber: 'PK817'
    },
    {
      id: 2,
      name: 'Pearson International School',
      logo: pearsonLogo,
      centreNumber: '90538'
    },
    {
      id: 3,
      name: 'OxfordAQA International Qualifications',
      logo: oxfordaqaLogo,
      centreNumber: '96926'
    }
  ];

  return (
    <div className="partners-section-wrapper">
      <div className="partners-custom-grid">
        {partners.map((partner, index) => (
          <div 
            key={partner.id} 
            className="partner-card-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="partner-logo-container">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className={`partner-logo-img${partner.id === 3 ? ' oxfordaqa-logo' : ''}`}
                loading="lazy"
              />
            </div>
            {partner.centreNumber && (
              <div className="centre-info-box">
                <span className="centre-label-text">Centre Number:</span>
                <span className="centre-value-text">{partner.centreNumber}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;