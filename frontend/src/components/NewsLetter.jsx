import React, { useState } from 'react';
import '../styles/NewsLetter.css';

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
          {/* Simplified Abstract School Illustration */}
          <svg viewBox="0 0 400 300" className="newsletter-svg">
            <circle cx="200" cy="150" r="140" fill="#E1F5FE" opacity="0.5" />
            <path d="M100 200 L150 120 L200 200 Z" fill="#2f2657" opacity="0.8" />
            <rect x="180" y="140" width="80" height="60" fill="#403672" rx="4" />
            <circle cx="280" cy="100" r="30" fill="#FFA000" opacity="0.8" />
            <rect x="80" y="220" width="240" height="10" fill="#ddd" rx="5" />

            {/* Mail Icon Floating */}
            <g transform="translate(250, 180) rotate(-10)">
              <rect x="0" y="0" width="60" height="40" rx="5" fill="#fff" stroke="#2f2657" strokeWidth="2" />
              <path d="M0 0 L30 20 L60 0" fill="none" stroke="#2f2657" strokeWidth="2" />
            </g>
          </svg>
        </div>

        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Subscribe to our<br />Academic Updates
          </h2>
          <p style={{ marginBottom: '30px', color: '#666', lineHeight: '1.6' }}>
            Stay informed about admissions, school events, and educational resources.
            Join our community today.
          </p>

          <div className="newsletter-form-area">
            <div className="form-wrapper">
              <input
                type="email"
                placeholder="Enter your email address"
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
              <p className="success-msg">✓ Successfully subscribed!</p>
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