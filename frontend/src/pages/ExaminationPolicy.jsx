import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Policies.css';

const ExaminationPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policies-page">
            <Header />

            <header className="policies-header">
                <h1>Examination Policy</h1>
                <p>Ensuring fairness, integrity, and transparency in all assessments.</p>
            </header>

            <section className="policies-container">
                <div className="policy-card">
                    <div className="policy-title">
                        <i className="fa-solid fa-file-pen"></i>
                        <h2>Examination Guidelines</h2>
                    </div>

                    <p>The SISA Examination Policy ensures fairness, integrity, and transparency in the assessment process for all students preparing for examinations by Cambridge, Pearson-Edexcel, and OxfordAQA, as well as internal assessments.</p>

                    <h3>Scope of Examinations</h3>
                    <ul>
                        <li><strong>Internal Assessments:</strong> Includes unit tests, mid-term examinations, and mandatory mock examinations held throughout the academic year for all GCE O' & A' Level subjects.</li>
                        <li><strong>External Examinations:</strong> Governed strictly by the regulations of the respective UK examination boards. SISA serves as the preparatory center, ensuring all coursework (for BTEC) and final assessment standards are met.</li>
                    </ul>

                    <h3>Examination Conduct and Malpractice</h3>
                    <ul>
                        <li><strong>Integrity:</strong> Absolute academic integrity is expected. Students must be familiar with and strictly adhere to the examination board rules regarding conduct and permitted materials.</li>
                        <li><strong>Malpractice:</strong> Any attempt to cheat, plagiarize, share confidential examination material, or breach security during internal or external exams will result in severe consequences, including automatic failure of the paper/course and potential expulsion.</li>
                    </ul>

                    <h3>Special Consideration and Appeals</h3>
                    <ul>
                        <li><strong>Special Consideration:</strong> If a student is incapacitated by sudden illness or severe misfortune immediately before or during an external examination, the school will facilitate an application to the relevant UK examination board for special consideration, provided comprehensive medical documentation is supplied promptly.</li>
                        <li><strong>Appeals:</strong> Appeals regarding internal grading must follow the school's internal review procedure. Appeals regarding external examination results must be submitted through the formal procedures established by the respective examination board.</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ExaminationPolicy;
