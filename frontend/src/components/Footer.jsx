import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';
import logo from "../assets/sisa_logo.png";
import twitterIcon from "../assets/twitter (2).png";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Upper Footer */}
            <div className="footer-content container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <div className="logo-icon">
                                <img src={logo} alt="SISA Education System" style={{ height: '50px', width: 'auto' }} />
                            </div>
                            <h3>SISA EDUCATION</h3>
                        </div>
                        <p className="footer-desc">
                            Connecting Our Local and Global Campuses. Whether you are interested in a campus tour in Lahore or joining our online community from abroad, we look forward to hearing from you.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <p>House # 12 – 13 Block J-1, M.A. Johar Town, Lahore, Pakistan (54782)</p>
                            </div>
                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <p>+92 (0)42 35951444 – 45</p>
                            </div>
                            <div className="contact-item">
                                <FaWhatsapp className="contact-icon" />
                                <p>+92 311 3777472</p>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <a href="mailto:info@sisa.edu.pk">info@sisa.edu.pk</a> (Admissions)<br />
                                    <a href="mailto:spaeds@sisa.edu.pk">spaeds@sisa.edu.pk</a> (Co-curricular)
                                </div>
                            </div>
                        </div>
                        <div className="footer-social-links">
                            <a href="https://www.facebook.com/SISAeducationPk" className="footer-social-link"><FaFacebookF /></a>
                            <a href="" className="footer-social-link">
                                <img src={twitterIcon} alt="Twitter" className="footer-twitter-icon" />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=923113777472&text=Hello+SISA+Admissions+Team%2C+I+have+a+query+regarding...&type=phone_number&app_absent=0" className="footer-social-link"><FaWhatsapp className="footer-whatsapp-icon" /></a>
                            <a href="https://www.linkedin.com/school/sisaschool/" className="footer-social-link"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/sisaeducationpk/" className="footer-social-link"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/admissions">Admissions</Link></li>
                            <li><Link to="/student-life">Student Life</Link></li>
                            <li><Link to="/policies">School Policies</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Programs Column */}
                    <div className="footer-col">
                        <h4>Programs</h4>
                        <ul className="footer-links">
                            <li><Link to="/academics/preschool-junior">Preschool & Junior</Link></li>
                            <li><Link to="/academics/middle-school">Middle School</Link></li>
                            <li><Link to="/academics/curriculum">O' &amp; A' Levels</Link></li>
                            <li><Link to="/academics/btec">BTEC Programme</Link></li>
                        </ul>
                    </div>

                    {/* Office Hours Column */}
                    <div className="footer-col">
                        <h4>Office Hours</h4>
                        <div className="schedule">
                            <div className="schedule-item">
                                <span>Mon - Fri</span>
                                <span>8:30 AM - 4:30 PM</span>
                            </div>
                            <div className="schedule-item">
                                <span>Saturday</span>
                                <span>10:00 AM - 4:30 PM</span>
                            </div>
                            <div className="schedule-item">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                        <div style={{ marginTop: '15px', fontSize: '13px', color: '#999' }}>
                            <p>Visiting Hours: Please schedule an appointment in advance.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Footer */}
            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p className="copyright">
                        Copyright &copy; 2025 SISA. All Rights Reserved.
                    </p>
                    <div className="bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">·</span>
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
