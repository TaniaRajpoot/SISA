import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/WhyChooseSISA.css';

const WhyChooseSISA = () => {
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

    const features = [
        {
            title: "Triple UK Accreditation",
            description: "Affiliated with Cambridge International, Pearson-Edexcel, and OxfordAQA—allowing tailored exam choices to match student strengths."
        },
        {
            title: "A Classroom Without Borders",
            description: "Our Registered International Online School connects students globally—from Pakistan, UAE, KSA, Egypt, UK, and the Philippines."
        },
        {
            title: "From Playgroup to Professional",
            description: "Students can grow with us from Playgroup to A' Levels or BTEC Level 5, ensuring stability and long-term mentorship."
        },
        {
            title: "Vocational & Academic Excellence",
            description: "Offering both GCE O' & A' Levels and BTEC qualifications to open diverse pathways to universities and careers."
        },
        {
            title: "A Legacy of Trust",
            description: "Since 2006, SISA has nurtured generations with integrity and a forward-thinking approach to sciences and arts."
        },
        {
            title: "Unmatched Curriculum Flexibility",
            description: "Triple accreditation allows us to choose the best syllabus for every student, maximizing academic success."
        },
        {
            title: "A Pathway for Every Learner",
            description: "Academic or career-focused—students find a tailored roadmap with O' & A' Levels or BTEC Levels 3–5."
        },
        {
            title: "Stability You Can Count On",
            description: "Since 4th September 2006, we combine experience with innovation to deliver future-proof education."
        }
    ];

    return (
        <div className="why-choose-sisa-page">
            <Header />

            <div className="why-hero">
                <div className="why-hero-overlay"></div>
                <div className="why-hero-content">
                    <h1>Why Choose SISA?</h1>
                    <p>Where Excellence Meets Global Learning</p>
                </div>
            </div>

            <section className="why-content-section">
                <div className="container">
                    <div className="why-intro">
                        <h2>Why Choose SISA?</h2>
                        <p>Choosing the right school is about finding the right fit for your child's future. Here is why families from Lahore to the UK choose SISA:</p>
                    </div>

                    <div className="feature-grid">
                        {features.map((feature, index) => (
                            <div className="feature-card" key={index} data-animate>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WhyChooseSISA;
