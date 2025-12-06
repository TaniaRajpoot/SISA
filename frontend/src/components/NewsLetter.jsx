
import React, { useState } from 'react';

// ======================== Newsletter.jsx ========================
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-illustration">
          <svg viewBox="0 0 400 300" className="newsletter-svg">
            <circle cx="200" cy="150" r="120" fill="#E8F0FE" opacity="0.5"/>
            <circle cx="140" cy="100" r="8" fill="#4285F4" opacity="0.3"/>
            <circle cx="280" cy="180" r="6" fill="#4285F4" opacity="0.3"/>
            
            <g transform="translate(180, 120)">
              <path d="M0 0 L40 -20 L40 20 Z" fill="#4285F4"/>
              <path d="M40 -20 L60 -10 L40 0 Z" fill="#5E97F6"/>
              <path d="M40 0 L60 10 L40 20 Z" fill="#5E97F6"/>
              <circle cx="50" cy="0" r="12" fill="#FFA000"/>
              <path d="M50 0 L45 -5 L45 5 Z" fill="white"/>
            </g>
            
            <g transform="translate(120, 200)">
              <rect x="0" y="0" width="60" height="45" fill="#4285F4" rx="4"/>
              <path d="M0 0 L30 25 L60 0" fill="#5E97F6"/>
              <rect x="5" y="8" width="20" height="4" fill="#34A853" rx="2"/>
            </g>
            
            <g transform="translate(250, 190)">
              <circle cx="0" cy="-15" r="12" fill="#FBBF77"/>
              <ellipse cx="0" cy="10" rx="18" ry="25" fill="#1A237E"/>
              <rect x="-8" y="-5" width="16" height="3" fill="#4285F4" rx="1.5"/>
            </g>
            
            <g transform="translate(80, 160) rotate(-30)">
              <rect x="0" y="0" width="8" height="60" fill="#FFA000" rx="2"/>
              <path d="M0 60 L4 70 L8 60 Z" fill="#FBBF77"/>
            </g>
            
            <g transform="translate(100, 80)">
              <rect x="0" y="0" width="40" height="18" fill="#4285F4" rx="4"/>
              <text x="20" y="13" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">SEND</text>
            </g>
          </svg>
        </div>

        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Let's Join To<br />Our Newsletters
          </h2>
          
          <div className="newsletter-form-area">
            <div className="form-wrapper">
              <input
                type="email"
                placeholder="Enter your email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`newsletter-input ${status === 'error' ? 'error' : ''}`}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
              <button 
                onClick={handleSubmit}
                className="newsletter-btn" 
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="success-msg">✓ Successfully subscribed to our newsletter!</p>
            )}
            {status === 'error' && (
              <p className="error-msg">⚠ Please enter a valid email address</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;