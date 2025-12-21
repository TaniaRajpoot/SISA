import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/MiddleSchool.css';

const MiddleSchool = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for fade-up animations
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.fade-up').forEach(el => {
            if (observerRef.current) {
                observerRef.current.observe(el);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="middle-school-page">
            <Header />

            {/* Hero Section */}
            <header className="ms-hero">
                <div className="ms-container">
                    <h1> Middle School (Grades 6–8)<br /><span>Foundation for GCE O‑Levels, A‑Levels & BTEC</span></h1>
                    <p className="ms-subtitle">
                        The SISA Middle School program (Grades 6, 7, and 8) is specifically designed as the vital <strong>Pre‑IGCSE / O‑Level foundation phase</strong>, developing academic maturity, independence, and clarity for future success.
                    </p>

                    {/* Photo Gallery */}
                    <div className="ms-photo-grid">
                        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Students studying" />
                        <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" alt="Classroom discussion" />
                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7" alt="Teacher mentoring students" />
                    </div>
                </div>
            </header>

            {/* Transition Phase Section */}
            <section className="ms-section">
                <div className="ms-container fade-up">
                    <h2>The Critical Transition Phase</h2>
                    <p className="ms-subtitle">
                        The Middle School years serve as the bridge between primary education and high‑stakes examination coursework, ensuring students are confident, capable, and future‑ready.
                    </p>

                    <div className="ms-grid">
                        <div className="ms-card">
                            <div className="ms-icon">📘</div>
                            <h3>Subject Specialization</h3>
                            <p>
                                Students explore a broader range of subjects, understand links between core disciplines, and experience learning structures that mirror future <strong>GCE O‑Levels</strong>.
                            </p>
                        </div>

                        <div className="ms-card">
                            <div className="ms-icon">🧠</div>
                            <h3>Skill Development</h3>
                            <p>
                                Strong emphasis on research, critical analysis, and academic writing—essential skills for success in <strong>A‑Levels</strong> and <strong>BTEC</strong> coursework.
                            </p>
                        </div>

                        <div className="ms-card">
                            <div className="ms-icon">🎯</div>
                            <h3>Personalized Mentorship</h3>
                            <p>
                                Small class sizes with both in‑person and online support ensure every student receives individualized academic and personal guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathways Section */}
            <section className="ms-section">
                <div className="ms-container fade-up">
                    <h2>Direct Preparation for All Three Pathways</h2>
                    <p className="ms-subtitle">
                        The Grades 6–8 curriculum is meticulously structured to prepare students equally for SISA's diverse higher secondary options.
                    </p>

                    {/* Animated Pathway Diagram */}
                    <div className="ms-pathway">
                        <div className="ms-step active">Grades 6–8<br /><span>Middle School</span></div>
                        <div className="ms-arrow">→</div>
                        <div className="ms-step">O / A Levels<br /><span>Academic Track</span></div>
                        <div className="ms-arrow">→</div>
                        <div className="ms-step">University</div>
                    </div>

                    <div className="ms-table-wrapper">
                        <table className="ms-table">
                            <thead>
                                <tr>
                                    <th>Future Pathway</th>
                                    <th>Middle School Preparation Focus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>GCE O & A' Levels</strong></td>
                                    <td>Deep subject knowledge, theoretical understanding, and examination technique practice.</td>
                                </tr>
                                <tr>
                                    <td><strong>BTEC Qualifications (Level 3, 4, 5)</strong></td>
                                    <td>Applied learning, project management, IT literacy, and collaborative teamwork skills.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Outcome Section */}
            <section className="ms-section">
                <div className="ms-container fade-up">
                    <div className="ms-highlight">
                        By the end of <strong className="yellow-text">Grade 8</strong>, every SISA student is equipped with the knowledge base and academic maturity to confidently choose their pathway—<strong>GCE Academic</strong> or <strong>BTEC Vocational</strong>—aligned with their goals and strengths.
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default MiddleSchool;
