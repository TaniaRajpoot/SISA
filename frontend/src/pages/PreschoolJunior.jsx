import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/PreschoolJunior.css';

const PreschoolJunior = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for scroll animations
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.animate([
                        { opacity: 0, transform: 'translateY(40px)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], {
                        duration: 700,
                        easing: 'ease-out',
                        fill: 'forwards'
                    });
                    observerRef.current.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal').forEach(el => {
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
        <div className="preschool-junior-page">
            <Header />

            {/* Hero Section */}
            <section className="pj-hero reveal">
                <h1>👶 SISA Preschool & Junior School</h1>
                <p>
                    Building Foundational Excellence from <strong>Playgroup to Grade 5</strong> — nurturing curiosity, confidence,
                    and a lifelong love of learning in a supportive, international environment.
                </p>
            </section>

            {/* Preschool Section */}
            <section className="pj-section reveal">
                <h2 className="pj-section-title"><span>🌱</span> The Early Years (Preschool / Playgroup)</h2>
                <p className="pj-section-desc">
                    Our Playgroup curriculum is thoughtfully designed to encourage exploration, creativity, and social development.
                    Through structured play and interactive learning, children build essential foundations for future success.
                </p>

                <div className="pj-cards">
                    <div className="pj-card">
                        <div className="pj-card-icon">📖</div>
                        <h3>Language Acquisition</h3>
                        <p>
                            Early literacy skills, phonics, and expressive language development to build confident communicators.
                        </p>
                    </div>

                    <div className="pj-card">
                        <div className="pj-card-icon">🔢</div>
                        <h3>Numeracy Foundations</h3>
                        <p>
                            Introduction to basic mathematical concepts, problem-solving, and logical reasoning.
                        </p>
                    </div>

                    <div className="pj-card">
                        <div className="pj-card-icon">🤝</div>
                        <h3>Personal & Social Development</h3>
                        <p>
                            Cultivating independence, sharing, empathy, and respect in a multicultural setting.
                        </p>
                    </div>
                </div>
            </section>

            {/* Junior School Section */}
            <section className="pj-section reveal">
                <h2 className="pj-section-title"><span>🎓</span> Junior School (Grades 1–5)</h2>
                <p className="pj-section-desc">
                    The Junior School curriculum builds on the early years foundation, introducing students to core subjects
                    and rigorous academic standards aligned with the UK education system.
                </p>

                <div className="pj-cards">
                    <div className="pj-card">
                        <div className="pj-card-icon">📚</div>
                        <h3>Core Subject Mastery</h3>
                        <p>
                            Focused instruction in English Language Arts, Mathematics, and Science, benchmarked against international standards.
                        </p>
                    </div>

                    <div className="pj-card">
                        <div className="pj-card-icon">🎨</div>
                        <h3>Creative Curriculum</h3>
                        <p>
                            Integration of Arts, Music, and Physical Education to ensure holistic child development.
                        </p>
                    </div>

                    <div className="pj-card">
                        <div className="pj-card-icon">🌍</div>
                        <h3>International Perspective</h3>
                        <p>
                            Global themes and cultural awareness prepare students for Middle School and international programs.
                        </p>
                    </div>
                </div>

                <div className="pj-split">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200" alt="Students learning together" />
                    <img src="https://images.unsplash.com/photo-1596495578065-9b33f7d9e3b8?q=80&w=1200" alt="Creative classroom activities" />
                </div>
            </section>

            {/* Closing Note */}
            <section className="pj-section reveal">
                <div className="pj-note">
                    <p>
                        By <strong>Grade 5</strong>, SISA students develop confidence, critical thinking, and a strong academic base—
                        empowering them to transition successfully into the challenging Middle School phase and beyond.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PreschoolJunior;
