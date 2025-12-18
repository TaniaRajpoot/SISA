import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Careers.css';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="careers-page">
            <Header />

            {/* Hero Section */}
            <header className="careers-hero">
                <div className="careers-hero-grid">
                    <div>
                        <h1>💼 Careers at SISA</h1>
                        <p>Join a globally focused educational institution offering rewarding opportunities across our Lahore campus and International Online School.</p>
                        <div className="careers-pill-group">
                            <div className="careers-pill">Cambridge</div>
                            <div className="careers-pill">Edexcel</div>
                            <div className="careers-pill">OxfordAQA</div>
                            <div className="careers-pill">BTEC</div>
                        </div>
                    </div>
                    <div className="careers-hero-img">
                        <i className="fa-solid fa-chalkboard-user one"></i>
                        <i className="fa-solid fa-globe two"></i>
                    </div>
                </div>
            </header>

            {/* Why Work at SISA Section */}
            <section className="careers-section">
                <div className="careers-section-title">
                    <h2>Why Work at SISA?</h2>
                    <p>A professional environment defined by innovation, diversity, and academic excellence.</p>
                </div>

                <div className="careers-grid">
                    <div className="careers-card">
                        <i className="fa-solid fa-lightbulb"></i>
                        <h3>Innovation</h3>
                        <p>Teach within a pioneering Registered International Online School using the latest ed‑tech.</p>
                    </div>
                    <div className="careers-card">
                        <i className="fa-solid fa-award"></i>
                        <h3>Academic Excellence</h3>
                        <p>Deliver curricula aligned with Cambridge, Pearson‑Edexcel, and OxfordAQA.</p>
                    </div>
                    <div className="careers-card">
                        <i className="fa-solid fa-earth-asia"></i>
                        <h3>Global Exposure</h3>
                        <p>Engage daily with students from Pakistan, the Middle East, the UK, and beyond.</p>
                    </div>
                    <div className="careers-card">
                        <i className="fa-solid fa-chart-line"></i>
                        <h3>Professional Growth</h3>
                        <p>Ongoing training in hybrid learning models and GCE/BTEC delivery.</p>
                    </div>
                </div>
            </section>

            {/* Current Vacancies Section */}
            <section className="careers-highlight">
                <div className="careers-section-title">
                    <h2>Current Vacancies</h2>
                    <p>We are always looking for passionate professionals to join our team.</p>
                </div>

                <div className="careers-grid">
                    <div className="careers-card">
                        <h3>Academic Faculty</h3>
                        <p>In‑person & online roles for A‑Levels and BTEC specialists in Sciences, Mathematics, and Business.</p>
                    </div>
                    <div className="careers-card">
                        <h3>Administrative Staff</h3>
                        <p>Admissions, Student Support, and IT roles across Lahore and Global Online operations.</p>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="careers-section">
                <div className="careers-section-title">
                    <h2>Application Process</h2>
                    <p>Submit your CV and join a globally respected educational institution.</p>
                </div>

                <div className="careers-apply">
                    <div className="careers-steps">
                        <div className="careers-step">
                            <span>1</span>
                            <p><strong>Prepare Documents:</strong> CV/Resume and cover letter specifying the role.</p>
                        </div>
                        <div className="careers-step">
                            <span>2</span>
                            <p><strong>Submit Application:</strong><br />Email: <strong>Careers@SISA.edu</strong><br />Subject: <em>[Role Applied For] – [Your Full Name]</em></p>
                        </div>
                        <a href="mailto:Careers@SISA.edu" className="careers-btn">Apply via Email</a>
                    </div>
                    <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" alt="SISA Careers" />
                </div>
            </section>

            <footer className="careers-footer">
                <p>© <span>SISA</span> Careers · Equal Opportunity Employer · Global British Education</p>
            </footer>

            <Footer />
        </div>
    );
};

export default Careers;
