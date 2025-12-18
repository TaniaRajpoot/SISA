import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AcademicProgrammes.css';

const AcademicProgrammes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="academic-programmes-page">
            <Header />

            {/* Hero Section */}
            <header className="ap-hero">
                <div className="ap-hero-grid">
                    <div>
                        <h1>🏆 Academic Programmes at SISA: Excellence from Preschool to BTEC</h1>
                        <p>SISA delivers a world-class, triple-accredited curriculum that is designed to unlock every student's full potential, ensuring they are prepared for global university admission or immediate career success.</p>
                    </div>
                    <div className="ap-hero-img">
                        <i className="fa-solid fa-graduation-cap one"></i>
                        <i className="fa-solid fa-globe two"></i>
                    </div>
                </div>
            </header>

            {/* Educational Journey Section */}
            <section className="ap-section">
                <div className="ap-section-title">
                    <h2>Comprehensive Educational Journey: Preschool to BTEC Level 5</h2>
                    <p>Our academic structure provides a seamless progression through key developmental phases, offering clear pathways into higher education:</p>
                </div>

                <table className="ap-table">
                    <thead>
                        <tr>
                            <th>Programme Level</th>
                            <th>Grades/Years</th>
                            <th>Primary Focus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Preschool & Junior</td>
                            <td>Playgroup – Grade 5</td>
                            <td>Foundational literacy, numeracy, and personal development.</td>
                        </tr>
                        <tr>
                            <td>Middle School</td>
                            <td>Grades 6 – 8</td>
                            <td>Pre-IGCSE/O-Level subject specialization and study skill development.</td>
                        </tr>
                        <tr>
                            <td>Higher Secondary</td>
                            <td>O' & A' Levels / BTEC</td>
                            <td>High-stakes examination preparation and vocational expertise.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Dual Delivery Model Section */}
            <section className="ap-highlight">
                <div className="ap-section-title">
                    <h2>Dual Delivery Model: On-Campus and Online</h2>
                    <p>Every academic programme listed below, from foundational Preschool skills through to specialized O' & A' Levels and BTEC Level 5 qualifications, is available via our flexible dual model:</p>
                </div>

                <div className="ap-grid">
                    <div className="ap-card">
                        <h3>1. On-Campus (Lahore)</h3>
                        <p>Traditional, face-to-face instruction at our main campus in Johar Town.</p>
                    </div>
                    <div className="ap-card">
                        <h3>2. Registered International Online School</h3>
                        <p>Live, interactive classes delivered globally, ensuring students from the UAE, UK, Philippines, and beyond receive the same quality education.</p>
                    </div>
                </div>
            </section>

            {/* Subject Offerings Section */}
            <section className="ap-section">
                <div className="ap-section-title">
                    <h2>SISA Subject Offerings: GCE O' & A' Levels</h2>
                    <p>SISA leverages the syllabi of all three major UK boards (Cambridge International, Pearson-Edexcel, and OxfordAQA) to offer a comprehensive and diverse range of subjects. Each subject is selected to build specific critical skills vital for future success.</p>
                </div>

                {/* Sciences & Environmental Studies */}
                <h3 className="ap-subject-heading">Sciences & Environmental Studies</h3>
                <table className="ap-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Skill Developed</th>
                            <th>Student Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Biology</td>
                            <td>Scientific methodology, cellular analysis</td>
                            <td>Foundation for medicine, ecology, and health sciences.</td>
                        </tr>
                        <tr>
                            <td>Chemistry</td>
                            <td>Experimental design, chemical reasoning</td>
                            <td>Understanding materials science, pharmacy, and engineering principles.</td>
                        </tr>
                        <tr>
                            <td>Physics</td>
                            <td>Analytical thinking, mathematical modeling</td>
                            <td>Crucial background for engineering, technology, and applied sciences.</td>
                        </tr>
                        <tr>
                            <td>Environmental Management</td>
                            <td>Sustainability analysis, problem identification</td>
                            <td>Understanding global climate issues and sustainable development.</td>
                        </tr>
                        <tr>
                            <td>Marine Science</td>
                            <td>Oceanography, ecological system knowledge</td>
                            <td>Specialized insight into marine conservation and biodiversity.</td>
                        </tr>
                        <tr>
                            <td>Agriculture</td>
                            <td>Crop science, sustainable farming practices</td>
                            <td>Knowledge of food production and agribusiness management.</td>
                        </tr>
                    </tbody>
                </table>

                {/* Mathematics, Technology & Logic */}
                <h3 className="ap-subject-heading">Mathematics, Technology & Logic</h3>
                <table className="ap-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Skill Developed</th>
                            <th>Student Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mathematics</td>
                            <td>Core quantitative analysis, algebraic reasoning</td>
                            <td>Essential logical foundation for nearly all higher education fields.</td>
                        </tr>
                        <tr>
                            <td>Additional Mathematics</td>
                            <td>Advanced problem-solving, calculus introduction</td>
                            <td>Strong preparation for engineering and specialist science degrees.</td>
                        </tr>
                        <tr>
                            <td>Statistics</td>
                            <td>Data analysis, probability theory</td>
                            <td>Critical skill for research, economics, and business intelligence.</td>
                        </tr>
                        <tr>
                            <td>Computer Science</td>
                            <td>Computational thinking, coding proficiency</td>
                            <td>Gateway to software development, AI, and IT careers.</td>
                        </tr>
                        <tr>
                            <td>Design & Technology</td>
                            <td>Practical application, iterative design</td>
                            <td>Develops product design and engineering skills.</td>
                        </tr>
                        <tr>
                            <td>Thinking Skills</td>
                            <td>Critical reasoning, argument evaluation</td>
                            <td>Improves logic and essential for university entrance exams (e.g., Law).</td>
                        </tr>
                    </tbody>
                </table>

                {/* Business, Commerce & Enterprise */}
                <h3 className="ap-subject-heading">Business, Commerce & Enterprise</h3>
                <table className="ap-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Skill Developed</th>
                            <th>Student Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Accounting</td>
                            <td>Financial record keeping, statement analysis</td>
                            <td>Provides core skills for finance, audit, and management roles.</td>
                        </tr>
                        <tr>
                            <td>Business Studies</td>
                            <td>Market analysis, management theory</td>
                            <td>Understanding business functions and entrepreneurial practice.</td>
                        </tr>
                        <tr>
                            <td>Commerce</td>
                            <td>Trade operations, commercial law basics</td>
                            <td>Foundation for logistics, trade, and small business management.</td>
                        </tr>
                        <tr>
                            <td>Enterprise</td>
                            <td>Entrepreneurial spirit, business planning</td>
                            <td>Develops skills necessary to launch and manage new ventures.</td>
                        </tr>
                        <tr>
                            <td>Travel & Tourism</td>
                            <td>Destination management, service operations</td>
                            <td>Focuses on one of the world's largest service industries.</td>
                        </tr>
                    </tbody>
                </table>

                {/* Languages, Humanities & Social Studies */}
                <h3 className="ap-subject-heading">Languages, Humanities & Social Studies</h3>
                <table className="ap-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Skill Developed</th>
                            <th>Student Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>English (as a Second Language)</td>
                            <td>Academic writing, fluency, comprehension</td>
                            <td>Essential for global communication and university enrollment.</td>
                        </tr>
                        <tr>
                            <td>English Literature</td>
                            <td>Textual analysis, critical evaluation</td>
                            <td>Deepens cultural understanding and advanced essay writing ability.</td>
                        </tr>
                        <tr>
                            <td>Global Perspectives</td>
                            <td>Cross-cultural awareness, collaborative research</td>
                            <td>Fosters skills required to analyze global issues from multiple viewpoints.</td>
                        </tr>
                        <tr>
                            <td>Urdu, Islamiyat, Pakistan Studies</td>
                            <td>Cultural identity, local historical context</td>
                            <td>Essential subjects for students pursuing studies within Pakistan.</td>
                        </tr>
                        <tr>
                            <td>History</td>
                            <td>Historical inquiry, evidence-based argument</td>
                            <td>Builds skills in political analysis and understanding world events.</td>
                        </tr>
                        <tr>
                            <td>Psychology</td>
                            <td>Human behavior analysis, research methods</td>
                            <td>Foundation for counseling, HR, and social sciences.</td>
                        </tr>
                    </tbody>
                </table>

                {/* Creative & Applied Arts */}
                <h3 className="ap-subject-heading">Creative & Applied Arts</h3>
                <table className="ap-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Skill Developed</th>
                            <th>Student Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Art & Design</td>
                            <td>Visual communication, aesthetic creativity</td>
                            <td>Supports careers in design, architecture, and marketing.</td>
                        </tr>
                        <tr>
                            <td>Media Studies</td>
                            <td>Critical analysis of media, production techniques</td>
                            <td>Understanding digital communication and journalism.</td>
                        </tr>
                        <tr>
                            <td>Food & Nutrition</td>
                            <td>Health science, dietary planning, practical skills</td>
                            <td>Relevant for careers in healthcare, hospitality, and home economics.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Popular Subject Combinations */}
            <section className="ap-highlight">
                <div className="ap-section-title">
                    <h2>Popular Subject Combinations at O' & A' Levels</h2>
                    <p>Students at SISA typically select combinations that align with university requirements. The most popular combinations include:</p>
                </div>

                <div className="ap-grid">
                    <div className="ap-card">
                        <p>• Pre-Medical: Biology, Chemistry, Physics (or Psychology/Maths), and English.</p>
                    </div>
                    <div className="ap-card">
                        <p>• Pre-Engineering: Physics, Chemistry, Mathematics, and Computer Science (or Additional Mathematics).</p>
                    </div>
                    <div className="ap-card">
                        <p>• Business & Commerce: Accounting, Business Studies, Economics (often supplemented by Mathematics or Commerce).</p>
                    </div>
                    <div className="ap-card">
                        <p>• Humanities & Law: Global Perspectives, English Literature, Psychology, History, and Thinking Skills.</p>
                    </div>
                </div>
            </section>

            <footer className="ap-footer">
                <p>© <span>SISA</span> Academic Programmes · Triple Accredited British Curriculum</p>
            </footer>

            <Footer />
        </div>
    );
};

export default AcademicProgrammes;
