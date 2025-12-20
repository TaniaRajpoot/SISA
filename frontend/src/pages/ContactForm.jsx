import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'admissions'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'admissions'
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <Header />

      <div className="contact-container">
        <div className="contact-page-header">
          <h1> Contact SISA</h1>
          <p>
            Whether you are interested in a campus tour in Lahore or joining our
            online community from abroad, we look forward to hearing from you.
          </p>
        </div>

        <div className="contact-card">
          <h2> SISA Main Campus (Physical & Local Inquiries)</h2>

          <div className="info-grid">
            <div className="info-item">
              <span>Location</span>
              <strong>House # 12 – 13, Block J-1</strong>
            </div>

            <div className="info-item">
              <span>Area</span>
              <strong>M.A. Johar Town, Lahore, Pakistan (54782)</strong>
            </div>

            <div className="info-item">
              <span>Telephone</span>
              <a href="tel:+924235951444">+92 (0)42 35951444 – 45</a>
            </div>

            <div className="info-item">
              <span>WhatsApp</span>
              <a href="https://wa.me/923113777472" target="_blank" rel="noopener noreferrer">+92 311 3777472</a>
            </div>

            <div className="info-item">
              <span>Email (Admissions)</span>
              <a href="mailto:info@sisa.edu.pk">info@sisa.edu.pk</a>
            </div>

            <div className="info-item">
              <span>Email (Co-curricular)</span>
              <a href="mailto:spaeds@sisa.edu.pk">spaeds@sisa.edu.pk</a>
            </div>
          </div>

          <div className="hours">
            <h3>Office & Visiting Hours</h3>
            <p><strong>Monday – Friday:</strong> 8:30 a.m. – 4:30 p.m. (Pakistan Time)</p>
            <p><strong>Saturday:</strong> 10:00 a.m. – 4:30 p.m. (Pakistan Time)</p>
          </div>

          <p className="note">
            We welcome prospective parents to visit our campus. Please schedule an
            appointment in advance by calling the Admissions Office.
          </p>

          <div className="contact-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d581.1857367204561!2d74.25120945879985!3d31.472354040577283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902253b02dc89%3A0x67ab9f32e1dcab29!2sSchool%20of%20International%20Studies%20in%20Sciences%20And%20Arts!5e1!3m2!1sen!2smy!4v1766208037093!5m2!1sen!2smy"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SISA Location"
            ></iframe>
            <div className="map-link">
              <a href="https://maps.app.goo.gl/6WReruQyBS8QPRgz5" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-card form-card">
          <h2>Send Us a Message</h2>

          {submitted && (
            <div className="success-alert">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="contact-form-container">
            <div className="form-field">
              <label htmlFor="inquiryType" className="field-label">Inquiry Type</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="field-input"
              >
                <option value="admissions">Admissions</option>
                <option value="cocurricular">Co-curricular Activities</option>
                <option value="campus-tour">Campus Tour</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div className="form-row-grid">
              <div className="form-field">
                <label htmlFor="name" className="field-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="field-input"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="field-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="field-input"
                  required
                />
              </div>
            </div>

            <div className="form-row-grid">
              <div className="form-field">
                <label htmlFor="phone" className="field-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 XXX XXXXXXX"
                  className="field-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="field-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="field-input"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message" className="field-label">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Please share your inquiry or message..."
                className="field-input field-textarea"
                required
              ></textarea>
            </div>

            <button type="button" onClick={handleSubmit} className="submit-button">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;