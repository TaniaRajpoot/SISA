import React from 'react';
import '../styles/SISAOverview.css';
import Stats from './Stats';
import Partners from './Partners';
import worldMapImage from '../assets/world-map.png'; // Adjust path as needed

const SISAOverview = () => {
    return (
        <div className="sisa-overview">
            <div className="container">
                {/* Hero Section */}
                <section className="overview-hero">
                    <div className="hero-card">
                        <span className="eyebrow">Welcome to SISA</span>
                        <h1>Bridging Boundaries, Building Futures</h1>
                        <p className="lead">
                            Since 4 September, 2006, SISA has provided world-class international education — a seamless journey from Playgroup to professional qualifications with global accreditations and a registered international online campus.
                        </p>

                        <div className="features-tags">
                            <div className="feature-tag">Cambridge • Edexcel • OxfordAQA</div>
                            <div className="feature-tag">BTEC Levels 3–5</div>
                            <div className="feature-tag">Registered Online School</div>
                        </div>
                    </div>

                    <aside className="info-card">
                        <h3>Based in Johar Town, Lahore</h3>
                        <p className="muted">
                            SISA operates from a modern campus while delivering virtual classrooms to students in multiple countries across Asia, the Middle East, the UK and Canada.
                        </p>

                        <hr className="divider" />

                        <h4>Led by Mrs. Saeeda Salim</h4>
                        <p className="muted">
                            Under the guidance of one of today's leading educationists, our mission is to nurture young minds for global success.
                        </p>

                        <div className="pill-container">
                            <div className="pill">Established 4 Sep 2006</div>
                        </div>
                    </aside>
                </section>

                {/* About Cards */}
                <section className="about-section">
                    <div className="cards-grid">
                        <div className="info-card-small">
                            <h4>Our Vision</h4>
                            <p className="muted">
                                To provide an international, holistic education that transcends borders and prepares students for a rapidly changing global landscape.
                            </p>
                        </div>

                        <div className="info-card-small">
                            <h4>Who we teach</h4>
                            <p className="muted">From Playgroup to Higher Secondary and professional vocational awards — supporting learners at every stage.</p>
                            <ul className="feature-list">
                                <li>Playgroup → Primary</li>
                                <li>IGCSE, GCE O' & A' Levels</li>
                                <li>BTEC Levels 3, 4 & 5</li>
                            </ul>
                        </div>

                        <div className="info-card-small">
                            <h4>Global Reach</h4>
                            <p className="muted">
                                We welcome students virtually from multiple countries, including the UAE, KSA, Oman, Bahrain, Egypt, the Philippines, Bangladesh, the UK and Canada.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <Stats />

                {/* Academic Pathway */}
                <section className="pathway-section">
                    <h2>Academic Pathway</h2>
                    <p className="section-desc muted">A flexible journey tailored to academic and vocational goals.</p>

                    <div className="cards-grid">
                        <div className="info-card-small">
                            <h4>Early Years & Primary</h4>
                            <p className="muted">
                                Playgroup through Primary with play-based learning, foundational literacy & numeracy and social-emotional development.
                            </p>
                        </div>

                        <div className="info-card-small">
                            <h4>Secondary & Higher Secondary</h4>
                            <p className="muted">
                                Complete IGCSE, GCE O' & A' Levels with subject choice counselling and exam-centre support.
                            </p>
                        </div>

                        <div className="info-card-small">
                            <h4>BTEC Vocational Pathway</h4>
                            <p className="muted">
                                Practical, career-focused BTEC qualifications (Level 3, 4 & 5) — ideal for learners intending to enter industry or vocational higher education.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Accreditation */}
                <section className="accreditation-section">
                    <h2>Triple-Accredited Institution</h2>
                    <p className="section-desc muted">SISA proudly offers curricula from the United Kingdom's leading examination boards.</p>

                    {/* Partners Section */}
                    <Partners />
                </section>


                {/* Core Values */}
                <section className="values-section">
                    <div className="values-header">
                        <h2>CORE VALUES</h2>
                        <h2 className="values-subtitle">(The S.I.S.A. Way)</h2>
                    </div>

                    <div className="sisa-way-grid">
                        <div className="sisa-card">
                            <div className="sisa-icon-wrapper">
                                <div className="sisa-letter">S</div>
                            </div>
                            <div className="sisa-card-content">
                                <h5>Scholarship</h5>
                                <p>Promoting academic rigor through our affiliations with the UK's top 3 exam boards.</p>
                            </div>
                        </div>

                        <div className="sisa-card">
                            <div className="sisa-icon-wrapper">
                                <div className="sisa-letter">I</div>
                            </div>
                            <div className="sisa-card-content">
                                <h5>Innovation</h5>
                                <p>Embracing digital classrooms and connecting students from 6+ countries.</p>
                            </div>
                        </div>

                        <div className="sisa-card">
                            <div className="sisa-icon-wrapper">
                                <div className="sisa-letter">S</div>
                            </div>
                            <div className="sisa-card-content">
                                <h5>Service</h5>
                                <p>Dedication to the holistic development of the student from Playgroup to Professional level.</p>
                            </div>
                        </div>

                        <div className="sisa-card">
                            <div className="sisa-icon-wrapper">
                                <div className="sisa-letter">A</div>
                            </div>
                            <div className="sisa-card-content">
                                <h5>Adaptability</h5>
                                <p>Offering diverse pathways (Academic & BTEC) to suit every learner's strengths.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* International Classroom */}
                <section className="coverage-section">
                    <h2>Our International Classroom</h2>
                    <p className="muted">Virtual students join us from cities across Pakistan (Karachi, Islamabad, Multan, Hunza and more) and countries across the region and beyond.</p>

                    <div className="countries-pills">
                        <div className="pill">Pakistan</div>
                        <div className="pill">UAE</div>
                        <div className="pill">KSA</div>
                        <div className="pill">Oman</div>
                        <div className="pill">Bahrain</div>
                        <div className="pill">Egypt</div>
                        <div className="pill">Philippines</div>
                        <div className="pill">Bangladesh</div>
                        <div className="pill">UK</div>
                        <div className="pill">Canada</div>
                    </div>

                    {/* World Map Image - Placed after countries */}
                    <div className="world-map-container">
                        <img
                            src={worldMapImage}
                            alt="SISA International Classroom - Global Reach Map"
                            className="world-map-image"
                        />
                    </div>
                </section>

                {/* Admissions & Transition Support */}
                <section className="admissions-section">
                    <div className="admissions-grid">
                        <div className="admissions-content">
                            <h2>Admissions & Transition Support</h2>
                            <p className="muted">
                                We provide personalised guidance for students transitioning to higher education or vocational pathways (BTEC Levels 4 & 5). Our counsellors assist with subject choice, university selection and career planning.
                            </p>

                            <ul className="feature-list">
                                <li>One-to-one counselling sessions</li>
                                <li>Exam centre & assessment support</li>
                                <li>University pathway planning</li>
                            </ul>

                            <div className="cta-button-container">
                                <a href="mailto:admissions@sisa.edu.pk" className="cta-button">Get in touch</a>
                            </div>
                        </div>

                        <div className="contact-card">
                            <h4>Contact & Enquiries</h4>
                            <p className="muted">Johar Town, Lahore — Registered International Online School</p>

                            <div className="contact-info-item">
                                <strong>Head:</strong> Mrs. Saeeda Salim
                            </div>

                            <div className="contact-info-item">
                                <strong>Established:</strong> 4 Sep 2006
                            </div>

                            <p className="muted contact-details">
                                For admissions, email <a href="mailto:admissions@sisa.edu.pk">admissions@sisa.edu.pk</a> or call +92 42 0000 0000
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SISAOverview;