import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/MissionVision.css';

const MissionVision = () => {
    useEffect(() => {
        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="mission-vision-page">
            <Header />

            <div className="mv-hero">
                <div className="mv-hero-overlay"></div>
                <div className="mv-hero-content">
                    <h1>Mission & Vision</h1>
                    <p>Education Without Borders</p>
                </div>
            </div>

            <section className="mv-content-section">
                <div className="container">
                    {/* Vision Section */}
                    <div className="mv-card vision-card" data-animate>
                        <div className="mv-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <h2>Our Vision</h2>
                        <div className="mv-content">
                            <p>
                                The team of dedicated staff at SISA strives to provide young boys and girls with the knowledge and skills they require to reach their academic and social potential. We enrich their lives with a stimulating and supportive programme for continuing learning and self-education so that they become well adjusted, well–mannered and well groomed individuals equipped to confront the challenges of adulthood.
                            </p>
                            <p>
                                SISA stands as a borderless beacon of knowledge, creating a world where high-quality international education is accessible to every student, regardless of their geographical location. We envision a community of learners in Pakistan and beyond who are culturally diverse, academically competitive, and globally connected.
                            </p>
                            <p>
                                To cultivate a generation of critical thinkers and innovators proficient in both the Sciences and the Arts. SISA aspires to be a center of excellence where traditional academic values meet modern educational needs, fostering leaders ready for the challenges of the 21st century and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Motto Section */}
                    <div className="motto-card" data-animate>
                        <div className="motto-content">
                            <h3>MOTTO</h3>
                            <p>ACTA NON VERBA</p>
                            <span className="motto-translation">(Actions not Words)</span>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="mv-card mission-card" data-animate>
                        <div className="mv-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h2>Our Mission</h2>
                        <div className="mv-content">
                            <ul className="mv-list">
                                <li>
                                    <span className="list-icon">✓</span>
                                    <div>
                                        <strong>To Nurture Talent:</strong> We exist to develop the unique intellectual, physical, social, emotional and artistic aspects of our students through a sensitive, academically oriented, collaborative and cooperative environment so that they have a positive influence on their families, community, county and the world!
                                    </div>
                                </li>
                                <li>
                                    <span className="list-icon">✓</span>
                                    <div>
                                        <strong>To Bridge Boundaries:</strong> By integrating physical excellence in Lahore with a state-of-the-art online infrastructure that connects students from the Middle East to the UK.
                                    </div>
                                </li>
                                <li>
                                    <span className="list-icon">✓</span>
                                    <div>
                                        <strong>To Diversify Potential:</strong> Offering a wide spectrum of qualifications—from rigorous GCE O' & A' Levels to vocational BTEC pathways—ensuring every student finds their unique road to success.
                                    </div>
                                </li>
                                <li>
                                    <span className="list-icon">✓</span>
                                    <div>
                                        <strong>To Uphold Standards:</strong> Delivering an uncompromised standard of education through our triple affiliation with Cambridge, Pearson-Edexcel, and OxfordAQA.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Director's Message Section */}
                    <div className="director-card" data-animate>
                        <h2>From the Director's Desk</h2>
                        <div className="director-content">
                            <p><strong>Welcome to SISA – Education without Borders.</strong></p>

                            <p>
                                Since opening our doors on 4th September, 2006, the School of International Studies in Sciences & Arts has been driven by a singular mission: to provide an education that empowers students to navigate a complex world with confidence and competence.
                            </p>

                            <p>
                                Over the years, SISA has evolved from a local center of excellence in Johar Town, Lahore, into a truly global institution. Today, I am proud to lead a school that transcends physical boundaries. As a Registered International Online School, our classrooms extend far beyond Pakistan, welcoming bright minds from the UAE, Saudi Arabia, Egypt, the Philippines, and the UK.
                            </p>

                            <p>
                                In today's connected world, we understand that education requires flexibility. That is why we have invested heavily in becoming a premier International School – offering classes on campus as well as online; our Hybrid model of studies!
                            </p>

                            <p>
                                At SISA, we believe in the power of choice and rigorous standards. We are one of the select few institutions affiliated with all three premier UK examination boards: Cambridge International, Pearson–Edexcel, and OxfordAQA. Whether your child joins us in Playgroup, strives for academic excellence in O' & A' Levels, or pursues a professional pathway through our BTEC Level 3, 4, and 5 programs, they are receiving a world-class education.
                            </p>

                            <p>
                                We invite you to join a community where tradition meets innovation, and where your child's potential is our priority. Thank you for considering SISA as a partner in your child's future. I look forward to welcoming you to our global family.
                            </p>

                            <div className="director-signature">
                                <p><strong>SAEEDA SALIM</strong></p>
                                <p>Director & Principal, SISA</p>
                                <p>Contact: <a href="mailto:info@sisa.edu.pk">info@sisa.edu.pk</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MissionVision;
