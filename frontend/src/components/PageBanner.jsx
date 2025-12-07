import React from 'react';
import '../styles/PageBanner.css';

const PageBanner = ({ title, breadcrumb }) => {
    return (
        <div className="page-banner">
            <div className="container">
                <h1 className="page-title">{title}</h1>
                <div className="breadcrumbs">
                    <span>Home</span>
                    <span className="separator">›</span>
                    <span className="current">{breadcrumb || title}</span>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
