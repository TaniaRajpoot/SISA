import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/StudentLife.css';

const StudentLife = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for fade-in effects
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observerRef.current.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        document.querySelectorAll('.section-card').forEach(section => {
            if (observerRef.current) {
                observerRef.current.observe(section);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="student-life-page">
            <Header />

            {/* Hero Section */}
            <header className="sl-hero">
                <div className="sl-hero-content">
                    <h1>Student Life at SISA: Culture, Community, & Connection</h1>
                    <p>At SISA, we believe a student's growth extends beyond the textbook. We foster a vibrant school culture that celebrates diversity, creativity, and service, ensuring every student—whether on-campus in Lahore or online globally—feels connected and valued.</p>
                </div>
            </header>

            <main className="sl-container">
                {/* Campus Excellence Section */}
                <section className="section-card campus-excellence">
                    <h2 className="section-title">Co-Curricular Excellence (Main Campus, Lahore)</h2>
                    <p>Our physical campus in Johar Town is a hub of activity, offering a rich array of clubs and activities designed to develop leadership, teamwork, and artistic talent.</p>

                    <div className="excellence-grid">
                        <div className="activity-block">
                            <div className="icon-box">🎭</div>
                            <h3>Arts & Culture</h3>
                            <p>Drama club, school band, literary societies, and annual arts exhibitions.</p>
                        </div>
                        <div className="activity-block">
                            <div className="icon-box">🏅</div>
                            <h3>Sports & Fitness</h3>
                            <p>Team sports, inter-school competitions, and fitness programs designed for holistic well-being.</p>
                        </div>
                        <div className="activity-block">
                            <div className="icon-box">💡</div>
                            <h3>Academic Enrichment</h3>
                            <p>Debate societies, Model United Nations (MUN), and science fairs that extend learning outside the classroom.</p>
                        </div>
                    </div>
                </section>

                {/* Online Classroom Section */}
                <section className="section-card online-classroom">
                    <h2 className="section-title">The Global Online Classroom</h2>
                    <p>We ensure that our international online students are equally engaged in the SISA spirit. Our virtual student life programs include:</p>

                    <div className="online-features">
                        <div className="feature-item">
                            <div className="icon-box">💻</div>
                            <h4>Virtual Student Life</h4>
                            <p>Online book clubs, digital art and photography contests, and coding societies.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon-box">🌍</div>
                            <h4>Student Leadership</h4>
                            <p>Virtual Student Council positions allowing students from the UAE, UK, or Philippines to contribute to school governance.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon-box">🗓️</div>
                            <h4>Digital Assemblies & Events</h4>
                            <p>Regular virtual gatherings, guest speaker sessions, and celebration events to foster camaraderie across time zones.</p>
                        </div>
                    </div>
                </section>

                {/* Two Column Layout */}
                <div className="two-column-layout">
                    <div className="section-card achievements">
                        <h2 className="section-title">Key Student Achievements</h2>
                        <ul className="styled-list">
                            <li>Debates – International and National winnings</li>
                            <li>Dramatics</li>
                            <li>Poetry Recitation</li>
                            <li>Sports – International and National winnings</li>
                            <li>SISA Olympiad – international teams and local teams</li>
                            <li>Social Work – Community Service & Fund Raising</li>
                            <li>Essay Writing – International and National</li>
                            <li>Art – International and National</li>
                            <li>Interhouse events – sports, debates etc.</li>
                        </ul>
                    </div>

                    <div className="section-card holistic-development">
                        <h2 className="section-title">Nurturing Holistic Development</h2>
                        <p>Every co-curricular activity at SISA is rooted in our mission to develop well-rounded global citizens. We emphasize critical skills like <strong>communication, leadership, and emotional intelligence</strong>, ensuring students are prepared not only for exams but for life.</p>
                    </div>
                </div>
            </main>

            <footer className="sl-footer">
                <p>&copy; 2025 SISA School. All Rights Reserved. | LMS Student Portal</p>
            </footer>

            <Footer />
        </div>
    );
};

export default StudentLife;
