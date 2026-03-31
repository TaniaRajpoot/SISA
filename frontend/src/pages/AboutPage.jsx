import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';
import sisaVideo from '../assets/At SISA Online School, education goes beyond classrooms. Our online classes bring quality learni.mp4';
import videoThumbnail from '../assets/Screenshot 2026-04-01 003155.png';

/* ── Inline SVG Icons ── */
const IcoGradCap = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="32,8 60,22 32,36 4,22" />
        <polyline points="16,29 16,46 32,54 48,46 48,29" />
        <line x1="60" y1="22" x2="60" y2="38" />
    </svg>
);
const IcoLecture = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="44" height="30" rx="3" />
        <line x1="4" y1="26" x2="48" y2="26" />
        <line x1="26" y1="40" x2="26" y2="54" />
        <line x1="16" y1="54" x2="36" y2="54" />
        <circle cx="52" cy="18" r="8" />
        <path d="M44,40 Q44,32 52,32 Q60,32 60,40" />
    </svg>
);
const IcoGlobe = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="26" />
        <ellipse cx="32" cy="32" rx="12" ry="26" />
        <line x1="6" y1="32" x2="58" y2="32" />
        <line x1="10" y1="20" x2="54" y2="20" />
        <line x1="10" y1="44" x2="54" y2="44" />
    </svg>
);
const IcoClock = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="26" />
        <polyline points="32,18 32,34 44,40" />
    </svg>
);
const IcoUsers = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="10" />
        <path d="M4,54 Q4,38 24,38 Q44,38 44,54" />
        <circle cx="48" cy="18" r="8" />
        <path d="M44,36 Q57,36 60,52" />
    </svg>
);
const IcoBook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32,54 Q20,46 8,50 L8,14 Q20,10 32,18 Q44,10 56,14 L56,50 Q44,46 32,54 Z" />
        <line x1="32" y1="18" x2="32" y2="54" />
    </svg>
);
const IcoStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="32,6 39,24 58,24 43,36 49,55 32,44 15,55 21,36 6,24 25,24" />
    </svg>
);
const IcoAward = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="24" r="16" />
        <polyline points="22,38 18,58 32,50 46,58 42,38" />
    </svg>
);
const IcoMission = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
);
const IcoVision = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
);
const IcoPlay = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5,3 19,12 5,21" />
    </svg>
);

/* ── Data ── */
const featureCards = [
    { icon: <IcoGradCap />, title: 'Graduate Admission', desc: 'Seamless admissions from Playgroup to BTEC Level 5, guided by dedicated counsellors every step of the way.' },
    { icon: <IcoLecture />, title: 'Skilled Lecturers', desc: 'Our faculty are UK-qualified specialists in Cambridge, Edexcel, and OxfordAQA curricula, delivering excellence daily.' },
    { icon: <IcoGlobe />, title: 'International Online School', desc: 'A fully registered online campus welcoming students from the UAE, KSA, UK, Philippines, Bangladesh and beyond.' },
    { icon: <IcoClock />, title: 'Flexible Learning', desc: 'Campus and online classes designed to fit every lifestyle, with live sessions, recordings, and dedicated support.' },
];

const stats = [
    { icon: <IcoUsers />, num: '5,000', suffix: '+', label: 'Our Happy Students' },
    { icon: <IcoBook />, num: '50', suffix: '+', label: 'Subjects Offered' },
    { icon: <IcoLecture />, num: '120', suffix: '+', label: 'Expert Instructors' },
    { icon: <IcoStar />, num: '98', suffix: '%', label: 'Satisfaction Rate' },
];

const howItWorks = [
    { step: '01', title: 'Choose Your Programme', desc: 'Browse our O\' & A\' Level, BTEC, and online programmes and select the one that fits your goals.' },
    { step: '02', title: 'Enrol & Get Started', desc: 'Complete a simple enrolment form. Our admissions team will guide you through every detail.' },
    { step: '03', title: 'Learn & Grow', desc: 'Attend expert-led classes — on-campus in Lahore or online from anywhere in the world.' },
    { step: '04', title: 'Achieve & Succeed', desc: 'Sit internationally recognised UK exams and earn qualifications respected around the globe.' },
];

/* ── Animated counter ── */
function useCounter(num, suffix, active) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!active) return;
        const target = parseInt(num.replace(/,/g, ''), 10);
        const duration = 1600;
        const step = Math.max(1, Math.floor(target / (duration / 16)));
        let cur = 0;
        const t = setInterval(() => {
            cur = Math.min(cur + step, target);
            setVal(cur);
            if (cur >= target) clearInterval(t);
        }, 16);
        return () => clearInterval(t);
    }, [active, num]);
    const display = val >= 1000 ? (val / 1000).toFixed(0) + 'k' : val.toLocaleString();
    // If original num had 'k' style large number (5000), show as 5k
    const finalNum = parseInt(num.replace(/,/g, ''), 10);
    const formatted = finalNum >= 1000 ? Math.floor(val / 1000) + (val >= finalNum ? 'k' : 'k') : val.toString();
    return (parseInt(num.replace(/,/g, ''), 10) >= 1000 ? formatted : val.toString()) + suffix;
}

function StatCard({ item }) {
    const ref = useRef(null);
    const [on, setOn] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    const display = useCounter(item.num, item.suffix, on);
    return (
        <div className="ap-stat-item" ref={ref}>
            <div className="ap-stat-icon">{item.icon}</div>
            <div className="ap-stat-text">
                <span className="ap-stat-num">{display}</span>
                <span className="ap-stat-lbl">{item.label}</span>
            </div>
        </div>
    );
}

/* ── Page Component ── */
const AboutPage = () => {
    const whoRef = useRef(null);
    const videoRef = useRef(null);
    const [whoVisible, setWhoVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setWhoVisible(true); }, { threshold: 0.1 });
        if (whoRef.current) obs.observe(whoRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="ap-page">
            <Header />

            {/* ══ HERO ══ */}
            <div className="ap-hero">
                <div className="ap-hero-overlay" />
                <div className="ap-hero-content">
                    <h1>About</h1>
                    <div className="ap-breadcrumb">
                        <a href="/">Home</a>
                        <span>›</span>
                        <span>About</span>
                    </div>
                </div>
            </div>

            {/* ══ FEATURE CARDS ══ */}
            <section className="ap-features">
                <div className="ap-container">
                    <div className="ap-cards-grid">
                        {featureCards.map((c, i) => (
                            <div className="ap-card" key={i}>
                                <div className="ap-card-icon">{c.icon}</div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                                <a href="/admissions" className="ap-card-link">Learn More...</a>
                            </div>
                        ))}
                    </div>
                    <div className="ap-trust-bar">
                        <span>Trusted by Families from </span>
                        <a href="/about">Pakistan to the World →</a>
                    </div>
                </div>
            </section>

            {/* ══ WHO WE ARE ══ */}
            <section className="ap-who" ref={whoRef}>
                <div className="ap-container ap-who-grid">

                    {/* Images column */}
                    <div className={`ap-imgs ${whoVisible ? 'ap-in-left' : ''}`}>
                        <div className="ap-img-main">
                            <img src="https://images.unsplash.com/photo-1616587226157-48e49175ee20?w=600&q=80" alt="SISA campus" />
                        </div>
                        <div className="ap-img-float">
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" alt="SISA students" />
                            <div className="ap-float-badge">
                                <IcoAward />
                                <span>Experience Advisor</span>
                            </div>
                        </div>
                        <div className="ap-est-text">EST 2006</div>
                    </div>

                    {/* Text column */}
                    <div className={`ap-who-content ${whoVisible ? 'ap-in-right' : ''}`}>
                        <div className="ap-eyebrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                            About Our SISA
                        </div>
                        <h2 className="ap-who-title">
                            We create world-class<br />
                            <span>international learners.</span>
                        </h2>
                        <div className="ap-who-line"></div>
                        <p className="ap-who-body">
                            Since <strong>4th September, 2006</strong>, the School of International Studies in Sciences &amp; Arts (SISA) has delivered world-class education under the visionary leadership of <strong>Mrs. Saeeda Salim</strong>. From our modern Lahore campus to our registered international online school, we connect learners across borders and empower them to achieve globally recognised qualifications.
                        </p>

                        <div className="ap-mv-grid">
                            <div className="ap-mv-item">
                                <div className="ap-mv-icon"><IcoMission /></div>
                                <div>
                                    <h4>Our Mission</h4>
                                    <p>To nurture talent, uphold academic rigour, and deliver Cambridge, Edexcel &amp; OxfordAQA qualifications to students worldwide.</p>
                                </div>
                            </div>
                            <div className="ap-mv-item">
                                <div className="ap-mv-icon"><IcoVision /></div>
                                <div>
                                    <h4>Our Vision</h4>
                                    <p>A borderless classroom where every student, regardless of location, accesses the highest standards of international education.</p>
                                </div>
                            </div>
                        </div>

                        <a href="/academics/curriculum" className="ap-cta-btn">View All Programmes</a>
                    </div>
                </div>
            </section>

            {/* ══ STATS BAR ══ */}
            <section className="ap-stats">
                <div className="ap-container">
                    <div className="ap-stats-bar">
                        {stats.map((s, i) => <StatCard item={s} key={i} />)}
                    </div>
                </div>
            </section>

            {/* ══ HOW IT WORKS ══ */}
            <section className="ap-hiw">
                <div className="ap-container">
                    <div className="ap-section-hdr">
                        <span className="ap-section-lbl">WORKING PROCESS</span>
                        <h2>How It Works</h2>
                        <div className="ap-hdr-line"></div>
                    </div>

                    {/* Video */}
                    <div className="ap-video-wrap">
                        <video
                            ref={videoRef}
                            src={sisaVideo}
                            poster={videoThumbnail}
                            className={`ap-video-thumb ${isPlaying ? '' : 'ap-video-paused'}`}
                            playsInline
                            onEnded={() => setIsPlaying(false)}
                        />

                        <button className="ap-play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
                            {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <rect x="5" y="3" width="4" height="18" rx="1" />
                                    <rect x="15" y="3" width="4" height="18" rx="1" />
                                </svg>
                            ) : (
                                <IcoPlay />
                            )}
                        </button>
                    </div>

                    {/* Steps */}
                    <div className="ap-steps-grid">
                        {howItWorks.map((s, i) => (
                            <div className="ap-step" key={i}>
                                <div className="ap-step-num">{s.step}</div>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;