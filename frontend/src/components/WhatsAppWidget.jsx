import React, { useState } from 'react';
import '../styles/WhatsAppWidget.css';
import logo from '../assets/logo.png';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Replace with actual phone number (country code + number, no symbols)
    const phoneNumber = "923113777472";
    const message = encodeURIComponent("Hello SISA Admissions Team, I have a query regarding...");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="whatsapp-widget-container">
            {isOpen && (
                <div className="whatsapp-chat-popup">
                    <div className="chat-header">
                        <div className="avatar-container">
                            <div className="avatar-wrapper">
                                {/* Find a real logo or avatar later */}
                                <img src={logo} alt="SISA Support" />
                                <div className="online-dot"></div>
                            </div>
                        </div>
                        <div className="chat-info">
                            <h3>SISA Admissions</h3>
                            <p>Typically replies within minutes</p>
                        </div>
                        <button className="close-btn" onClick={togglePopup}>&times;</button>
                    </div>

                    <div className="chat-body">
                        <div className="message-received">
                            Hello! 👋<br />
                            Welcome to SISA. How can we help you today?
                        </div>
                    </div>

                    <div className="chat-footer">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="start-chat-btn"
                        >
                            <svg viewBox="0 0 32 32" className="whatsapp-icon-sm">
                                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.188 2.058 7.34L2.378 29.5l6.398-1.638c2.083.996 4.416 1.554 6.892 1.554 7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5c-2.224 0-4.32-.638-6.14-1.748l-.44-.27-3.6.924.962-3.51-.286-.454C5.178 20.354 4.5 18.258 4.5 16 4.5 9.658 9.658 4.5 16 4.5s11.5 5.158 11.5 11.5-5.158 11.5-11.5 11.5z" opacity=".4" />
                                <path d="M22.9 19.3c-.3-.15-1.72-.85-1.984-.948-.265-.098-.458-.15-.65.15-.192.3-.743.948-.91 1.146-.168.198-.336.223-.635.073-.3-.15-1.265-.466-2.41-1.487-.893-.796-1.496-1.78-1.67-2.078-.175-.298-.018-.46.13-.608.134-.133.3-.348.45-.522.15-.175.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.65-1.567-.892-2.146-.235-.563-.473-.487-.65-.496-.168-.008-.36-.008-.553-.008-.192 0-.505.073-.77.36-.264.288-1.008.986-1.008 2.404s1.033 2.79 1.177 2.986c.144.195 2.033 3.104 4.925 4.352.687.297 1.223.475 1.637.607.68.216 1.3.186 1.792.113.55-.083 1.72-.703 1.963-1.38.24-.68.24-1.262.168-1.383-.07-.122-.263-.197-.563-.347z" />
                            </svg>
                            WhatsApp Us
                        </a>
                        <div className="footer-note">
                            <span>●</span> Online | Privacy policy
                        </div>
                    </div>
                </div>
            )}

            <div className="whatsapp-button" onClick={togglePopup}>
                <svg viewBox="0 0 32 32" className="whatsapp-icon">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.755 5.188 2.058 7.34L2.378 29.5l6.398-1.638c2.083.996 4.416 1.554 6.892 1.554 7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5c-2.224 0-4.32-.638-6.14-1.748l-.44-.27-3.6.924.962-3.51-.286-.454C5.178 20.354 4.5 18.258 4.5 16 4.5 9.658 9.658 4.5 16 4.5s11.5 5.158 11.5 11.5-5.158 11.5-11.5 11.5z" fill="white" />
                    <path d="M22.9 19.3c-.3-.15-1.72-.85-1.984-.948-.265-.098-.458-.15-.65.15-.192.3-.743.948-.91 1.146-.168.198-.336.223-.635.073-.3-.15-1.265-.466-2.41-1.487-.893-.796-1.496-1.78-1.67-2.078-.175-.298-.018-.46.13-.608.134-.133.3-.348.45-.522.15-.175.2-.298.3-.497.1-.2.05-.373-.025-.522-.075-.15-.65-1.567-.892-2.146-.235-.563-.473-.487-.65-.496-.168-.008-.36-.008-.553-.008-.192 0-.505.073-.77.36-.264.288-1.008.986-1.008 2.404s1.033 2.79 1.177 2.986c.144.195 2.033 3.104 4.925 4.352.687.297 1.223.475 1.637.607.68.216 1.3.186 1.792.113.55-.083 1.72-.703 1.963-1.38.24-.68.24-1.262.168-1.383-.07-.122-.263-.197-.563-.347z" fill="white" />
                </svg>
            </div>
        </div>
    );
};

export default WhatsAppWidget;
