import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Alumni.css';

const Alumni = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        graduationYear: '',
        program: 'GCE O/A Levels',
        location: '',
        profession: '',
        email: '',
        phone: ''
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
        console.log('Alumni form submitted:', formData);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                fullName: '',
                graduationYear: '',
                program: 'GCE O/A Levels',
                location: '',
                profession: '',
                email: '',
                phone: ''
            });
        }, 3000);
    };

    return (
        <div className="alumni-page">
            <Header />

            {/* Hero Section */}
            <header className="alumni-hero">
                <div className="alumni-hero-grid">
                    <div>
                        <h1> SISA Alumni Network</h1>
                        <p>
                            At SISA, graduation is not an end, but the beginning of a lifelong connection.
                            Our alumni are leaders, innovators, and thinkers making an impact across the globe,
                            empowered by our triple-accredited GCE and BTEC pathways.
                        </p>
                        <div className="alumni-hero-badges">
                            <div className="alumni-badge">Cambridge</div>
                            <div className="alumni-badge">Edexcel</div>
                            <div className="alumni-badge">OxfordAQA</div>
                            <div className="alumni-badge">BTEC</div>
                        </div>
                    </div>
                    <div className="alumni-hero-graphic">
                        <div className="alumni-hero-square-bg"></div>
                        <div className="alumni-float-icon one"><i className="fa-solid fa-globe"></i></div>
                        <div className="alumni-float-icon two"><i className="fa-solid fa-user-graduate"></i></div>
                        <div className="alumni-float-icon three"><i className="fa-solid fa-network-wired"></i></div>
                    </div>
                </div>
            </header>

            {/* Benefits Section */}
            <section className="alumni-section">
                <div className="alumni-section-title">
                    <h2>Your Continued Journey with SISA</h2>
                    <p>
                        Whether you are studying in the UK, building a startup in the UAE, or working locally,
                        the SISA family remains your professional and social home.
                    </p>
                </div>

                <div className="alumni-benefits">
                    <div className="alumni-benefit-card">
                        <i className="fa-solid fa-handshake-angle"></i>
                        <h3>Mentorship Opportunities</h3>
                        <p>Guide current students in their academic and career choices through structured mentorship.</p>
                    </div>

                    <div className="alumni-benefit-card">
                        <i className="fa-solid fa-briefcase"></i>
                        <h3>Professional Development</h3>
                        <p>Exclusive alumni networking events, career talks, and skill-focused workshops.</p>
                    </div>

                    <div className="alumni-benefit-card">
                        <i className="fa-solid fa-earth-asia"></i>
                        <h3>Global Connections</h3>
                        <p>Reconnect with classmates and teachers across SISA's international alumni hubs.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="alumni-testimonials">
                <div className="alumni-section-title">
                    <h2>Alumni Success Stories</h2>
                    <p>Our graduates carry the SISA values forward into universities and careers worldwide.</p>
                </div>

                <div className="alumni-testimonial-grid">
                    <div className="alumni-testimonial">
                        <p>
                            "The rigor of the Cambridge, Edexcel, and OxfordAQA curriculum at SISA prepared me perfectly
                            for my university studies. The international exposure was invaluable."
                        </p>
                        <div className="alumni-author">— Alumnus Name</div>
                        <span>Class of [Year] · [University / Country]</span>
                    </div>

                    <div className="alumni-testimonial">
                        <p>
                            "Switching to the BTEC Level 5 pathway opened doors to immediate career opportunities.
                            The practical learning gave me real-world confidence and skills."
                        </p>
                        <div className="alumni-author">— Alumna Name</div>
                        <span>Class of [Year] · [Company / Field]</span>
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section className="alumni-section">
                <div className="alumni-section-title">
                    <h2>Stay Connected</h2>
                    <p>Register with the official SISA Alumni Network to receive updates and invitations.</p>
                </div>

                <div className="alumni-form-wrapper">
                    <div className="alumni-form-info">
                        <p>
                            Join a growing global community of SISA graduates and stay involved in shaping the
                            next generation of learners.
                        </p>
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="SISA Alumni Community" />
                    </div>

                    <form className="alumni-form" onSubmit={handleSubmit}>
                        {submitted && (
                            <div className="alumni-success-alert">
                                ✓ Thank you for registering! The SISA Alumni Team will be in touch soon.
                            </div>
                        )}

                        <div className="alumni-field">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="alumni-field">
                            <label>Year of Graduation</label>
                            <input
                                type="number"
                                name="graduationYear"
                                value={formData.graduationYear}
                                onChange={handleChange}
                                placeholder="e.g. 2022"
                            />
                        </div>

                        <div className="alumni-field">
                            <label>Program Studied</label>
                            <select
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                            >
                                <option>GCE O/A Levels</option>
                                <option>BTEC</option>
                                <option>Junior School</option>
                            </select>
                        </div>

                        <div className="alumni-field">
                            <label>Current City & Country</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="alumni-field">
                            <label>Current Profession / Study</label>
                            <input
                                type="text"
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="alumni-field">
                            <label>Email Address (Required)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="alumni-field">
                            <label>Phone / WhatsApp (Optional)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit">Join the Alumni Network</button>
                    </form>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default Alumni;
