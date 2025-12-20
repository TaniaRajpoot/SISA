import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Policies.css';

const AttendancePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policies-page">
            <Header />

            <header className="policies-header">
                <h1>Attendance Policy</h1>
                <p>Maximizing student learning through consistent presence and engagement.</p>
            </header>

            <section className="policies-container">
                <div className="policy-card">
                    <div className="policy-title">
                        <i className="fa-solid fa-clipboard-check"></i>
                        <h2>Attendance Requirements</h2>
                    </div>

                    <p>The SISA Attendance Policy is designed to maximize student learning and uphold academic rigor, recognizing the importance of consistent presence in both physical and virtual classrooms.</p>

                    <h3>Rationale and Minimum Requirement</h3>
                    <ul>
                        <li><strong>Commitment to Learning:</strong> Regular attendance is mandatory for academic success and crucial for covering the intensive GCE O' & A' Levels and BTEC curricula.</li>
                        <li><strong>Minimum Threshold:</strong> All students (On-Campus and Online) are required to maintain a minimum of 85% attendance across all subjects per academic term. Failure to meet this threshold may result in exclusion from final examinations or progression to the next grade level.</li>
                    </ul>

                    <h3>Procedures for Absence</h3>
                    <ul>
                        <li><strong>Authorized Absence:</strong> Requires prior written notice (via email or application form) from a parent/guardian for reasons such as family travel (maximum 5 days per year), planned medical appointments, or religious holidays.</li>
                        <li><strong>Illness/Unforeseen Absence:</strong> Parents must notify the school office or the online coordinator before 9:00 AM PKT on the day of the absence. For prolonged illness (3+ consecutive days), a medical certificate is mandatory.</li>
                        <li><strong>Unauthorized Absence (Truancy):</strong> Any absence not documented or approved will be logged as unauthorized. Repeated instances of unauthorized absence will trigger the Disciplinary Policy.</li>
                    </ul>

                    <h3>Online Student Expectations</h3>
                    <ul>
                        <li><strong>Punctuality:</strong> Online students must be logged in and prepared for live lessons at the scheduled time according to their regional timetable.</li>
                        <li><strong>Engagement:</strong> Failure to attend live classes without notification, or consistent failure to engage with required recorded material or assignments, will be treated as non-attendance.</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AttendancePolicy;
