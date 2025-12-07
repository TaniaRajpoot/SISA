import React, { useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';

const GenericPage = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [title]);

    return (
        <div className="generic-page">
            <Header />
            <PageBanner title={title} breadcrumb={title} />
            <div className="container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                {children || (
                    <div className="content-placeholder">
                        <p>Content for {title} page goes here.</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default GenericPage;
