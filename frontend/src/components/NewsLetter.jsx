import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }
    
    // Simulate API call
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest courses, updates, and special offers delivered to your inbox</p>
          </div>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={status === 'error' ? 'error' : ''}
              />
              <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {status === 'success' && (
              <p className="success-message">✓ Successfully subscribed!</p>
            )}
            {status === 'error' && (
              <p className="error-message">Please enter a valid email address</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
