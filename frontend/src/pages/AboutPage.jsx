import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';
import sisaVideo from '../assets/At SISA Online School, education goes beyond classrooms. Our online classes bring quality learni.mp4';
import videoThumbnail from '../assets/Screenshot 2026-04-01 003155.png';
import aboutImage1 from '../assets/about-1.jpg';
import aboutImage2 from '../assets/about-2.jpg';

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
    const [whoVisible, setWhoVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isModalOpen]);

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
                    <div className={`ap-imgs ${whoVisible ? 'ap-in-left' : ''}`}>
                        <div className="ap-img-main">
                            <img src={aboutImage1} alt="SISA campus" />
                        </div>
                        <div className="ap-img-float">
                            <img src={aboutImage2} alt="SISA students" />
                            <div className="ap-float-badge">
                                <IcoAward />
                                <span>Experience Advisor</span>
                            </div>
                        </div>
                        <div className="ap-est-text">EST 2006</div>
                    </div>

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

                    <div className="ap-video-wrap" onClick={() => setIsModalOpen(true)}>
                        <img 
                            src={videoThumbnail} 
                            alt="Video Thumbnail" 
                            className="ap-video-thumb ap-video-paused" 
                        />
                        <button className="ap-play-btn" aria-label="Play video">
                            <IcoPlay />
                        </button>
                    </div>

                    {isModalOpen && (
                        <VideoModal 
                            src={sisaVideo} 
                            onClose={() => setIsModalOpen(false)} 
                        />
                    )}

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

/* ── Custom Video Modal Component ── */
const VideoModal = ({ src, onClose }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const controlsTimeout = useRef(null);

    const togglePlay = (e) => {
        if (e) e.stopPropagation();
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) setDuration(videoRef.current.duration);
    };

    const handleSeek = (e) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (e) => {
        const val = parseFloat(e.target.value);
        setVolume(val);
        if (videoRef.current) {
            videoRef.current.volume = val;
            setIsMuted(val === 0);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        if (videoRef.current) videoRef.current.muted = newMuted;
    };

    const toggleFullscreen = (e) => {
        e.stopPropagation();
        const container = videoRef.current.parentElement;
        if (!document.fullscreenElement) {
            if (container.requestFullscreen) container.requestFullscreen();
            else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
            else if (container.msRequestFullscreen) container.msRequestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            setIsFullscreen(false);
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleMouseMove = () => {
        setShowControls(true);
        clearTimeout(controlsTimeout.current);
        controlsTimeout.current = setTimeout(() => {
            if (isPlaying) setShowControls(false);
        }, 3000);
    };

    return (
        <div className="ap-modal-overlay" onClick={onClose} onMouseMove={handleMouseMove}>
            <div className="ap-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="ap-modal-close" onClick={onClose} aria-label="Close modal">×</button>
                
                <div className={`ap-video-player-container ${!showControls && isPlaying ? 'hide-cursor' : ''}`}>
                    <video 
                        ref={videoRef}
                        src={src}
                        onClick={togglePlay}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={() => setIsPlaying(false)}
                        autoPlay
                        playsInline
                    />

                    <div className={`ap-video-controls ${showControls || !isPlaying ? 'show' : 'hide'}`}>
                        <div className="ap-video-progress-wrap">
                            <input 
                                type="range" 
                                min="0" 
                                max={duration || 0} 
                                step="0.1"
                                value={currentTime} 
                                onChange={handleSeek}
                                className="ap-video-progress"
                                style={{ '--progress': `${(currentTime / (duration || 1)) * 100}%` }}
                            />
                        </div>

                        <div className="ap-video-controls-bottom">
                            <div className="ap-video-controls-left">
                                <button className="ap-control-btn" onClick={togglePlay}>
                                    {isPlaying ? <IcoPause /> : <IcoPlaySmall />}
                                </button>
                                <div className="ap-volume-wrap">
                                    <button className="ap-control-btn" onClick={toggleMute}>
                                        {isMuted || volume === 0 ? <IcoMute /> : <IcoVolume />}
                                    </button>
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="1" 
                                        step="0.05" 
                                        value={isMuted ? 0 : volume} 
                                        onChange={handleVolumeChange}
                                        className="ap-volume-slider"
                                    />
                                </div>
                                <span className="ap-video-time">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </span>
                            </div>

                            <div className="ap-video-controls-right">
                                <button className="ap-control-btn" onClick={toggleFullscreen}>
                                    {isFullscreen ? <IcoExitFull /> : <IcoFullscreen />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ── Small Icons for Controls ── */
const IcoPlaySmall = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M8 5v14l11-7z"/></svg>
);
const IcoPause = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
);
const IcoVolume = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
);
const IcoMute = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
);
const IcoFullscreen = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
);
const IcoExitFull = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>
);

export default AboutPage;