import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';
import '../styles/GetStarted.css';

const GetStarted = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            <Header />
            <PageBanner title={isLogin ? "Welcome Back" : "Get Started"} />

            <div className="registration-container">
                <div className="auth-header">
                    <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
                    <p className="text-gray">
                        {isLogin
                            ? "Enter your credentials to access your account"
                            : "Join us today and start your journey"}
                    </p>
                </div>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                    {!isLogin && (
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="John Doe" />
                        </div>
                    )}

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="john@example.com" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="••••••••" />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="••••••••" />
                        </div>
                    )}

                    <div className="form-options">
                        <div className="checkbox-group">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">
                                {isLogin ? "Remember me" : "I agree to Terms & Conditions"}
                            </label>
                        </div>
                        {isLogin && (
                            <Link to="#" className="forgot-password">Forgot Password?</Link>
                        )}
                    </div>

                    <button type="submit" className="submit-btn">
                        {isLogin ? "Sign In" : "Register Now"}
                    </button>
                </form>

                <div className="auth-footer">
                    <p className="privacy-note">
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to="#">privacy policy</Link>.
                    </p>

                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            className="toggle-btn"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Sign Up" : "Sign In"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
