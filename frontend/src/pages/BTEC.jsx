import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/BTEC.css';

const BTEC = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Unobserve after revealing to only animate once
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.btec-fade-in');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="btec-page">
            <Header />

            <section className="btec-hero">
                <div className="container btec-fade-in">
                    <h1>Vocational Excellence &<br />Career Pathways</h1>
                    <p>SISA recognizes that success is not measured by a single path. Discover our globally recognized BTEC programs designed for practical learners.</p>
                    <a href="#levels" className="btec-cta-btn">Explore Levels</a>
                </div>
            </section>

            <section className="btec-section-padding">
                <div className="container">
                    <div className="btec-about">
                        <div className="btec-about-text btec-fade-in">
                            <h2>What is BTEC?</h2>
                            <p style={{ marginBottom: '20px' }}>
                                BTEC qualifications are practical, work-related courses globally recognized by universities and employers. They focus on continuous assessment, project work, and building industry-specific skills.
                            </p>
                            <ul className="btec-feature-list">
                                <li><i className="fas fa-check-circle"></i> Continuous Assessment & Project Work</li>
                                <li><i className="fas fa-briefcase"></i> Direct Career Entry Skills</li>
                                <li><i className="fas fa-globe"></i> Recognized in UK, Australia & Globally</li>
                            </ul>
                        </div>
                        <div className="btec-about-image btec-fade-in">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Students collaborating" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="levels" className="btec-section-padding btec-levels-section">
                <div className="container">
                    <div className="btec-section-header btec-fade-in">
                        <h2>BTEC Levels at SISA</h2>
                        <p>Pathways from secondary school completion to university-equivalent qualifications.</p>
                    </div>

                    <div className="btec-levels-grid">
                        <div className="btec-level-card btec-fade-in">
                            <span className="btec-level-badge">Foundation</span>
                            <h3>Level 3</h3>
                            <span className="btec-level-equiv">Equivalent to GCE A-Levels</span>
                            <div className="btec-level-detail">
                                <p><strong>Duration:</strong> 2 Years</p>
                                <p><strong>Path:</strong> University entry, direct employment.</p>
                            </div>
                        </div>

                        <div className="btec-level-card btec-fade-in">
                            <span className="btec-level-badge">Intermediate</span>
                            <h3>Level 4</h3>
                            <span className="btec-level-equiv">Equivalent to University 1st Year</span>
                            <div className="btec-level-detail">
                                <p><strong>Duration:</strong> 1 Year</p>
                                <p><strong>Path:</strong> Entry into 2nd year of UK degree, supervisory roles.</p>
                            </div>
                        </div>

                        <div className="btec-level-card btec-fade-in">
                            <span className="btec-level-badge">Advanced</span>
                            <h3>Level 5</h3>
                            <span className="btec-level-equiv">Equivalent to HND / Univ 2nd Year</span>
                            <div className="btec-level-detail">
                                <p><strong>Duration:</strong> 1 Year</p>
                                <p><strong>Path:</strong> Final year of UK degree (Top-up), specialist professional roles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="btec-section-padding">
                <div className="container btec-fade-in">
                    <div className="btec-section-header">
                        <h2>BTEC vs. GCE A-Levels</h2>
                        <p>Choosing the path that fits your learning style.</p>
                    </div>

                    <div className="btec-comparison-wrapper">
                        <table className="btec-comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>BTEC at SISA</th>
                                    <th>GCE A-Levels at SISA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Assessment</strong></td>
                                    <td>70-100% Coursework & Portfolio. Continuous assessment through projects.</td>
                                    <td>Primarily Examination-based. Terminal exams at the end of the course.</td>
                                </tr>
                                <tr>
                                    <td><strong>Learning Style</strong></td>
                                    <td>Practical, hands-on, work-related, team-based projects.</td>
                                    <td>Theoretical, essay-writing, analytical, academic focus.</td>
                                </tr>
                                <tr>
                                    <td><strong>University Entry</strong></td>
                                    <td>Excellent for applied subjects (Business, IT, Engineering).</td>
                                    <td>Preferred for highly theoretical degrees (Medicine, Pure Sciences).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="container btec-fade-in">
                <div className="btec-online-section">
                    <div className="btec-online-content">
                        <h2>BTEC Online Learning</h2>
                        <p>As a <strong>Registered International Online School</strong>, SISA delivers BTEC qualifications globally. Our digital platforms facilitate project submission, team collaboration, and remote tutor access.</p>
                        <br />
                        <a href="/academics/online-school" className="btec-cta-btn" style={{ alignSelf: 'flex-start' }}>Learn Anywhere</a>
                    </div>
                    <div className="btec-online-img"></div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BTEC;
