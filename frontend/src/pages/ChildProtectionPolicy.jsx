import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Policies.css';

const ChildProtectionPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policies-page">
            <Header />

            <header className="policies-header">
                <h1>Child Protection Policy</h1>
                <p>Unconditionally committed to the welfare and safeguarding of every child.</p>
            </header>

            <section className="policies-container">
                <div className="policy-card">
                    <div className="policy-title">
                        <i className="fa-solid fa-heart"></i>
                        <h2>Safeguarding Framework</h2>
                    </div>

                    <p>SISA is unconditionally committed to the welfare and safeguarding of every child enrolled in our school, recognizing that all students—both on-campus and online—have the right to be safe from harm.</p>

                    <h3>School Commitment and Responsibility</h3>
                    <ul>
                        <li><strong>Legal & Ethical Duty:</strong> All SISA staff (teachers, administrators, and support staff) have a legal and ethical responsibility to promote and protect the well-being of every student.</li>
                        <li><strong>Designated Safeguarding Lead (DSL):</strong> The school maintains a formally appointed DSL and Deputy DSLs who receive specialized training in recognizing and responding to child protection concerns.</li>
                    </ul>

                    <h3>Recognition and Types of Harm</h3>
                    <ul>
                        <li>Physical abuse, neglect, or emotional harm.</li>
                        <li>Sexual abuse or exploitation (including online grooming).</li>
                        <li>Online risks, including cyberbullying, exposure to inappropriate content, or radicalisation.</li>
                    </ul>

                    <h3>Reporting Procedures</h3>
                    <ol>
                        <li><strong>Staff Reporting:</strong> Any staff member who has a concern about a child's safety, welfare, or well-being must immediately report it to the Designated Safeguarding Lead (DSL).</li>
                        <li><strong>External Reporting:</strong> The DSL is responsible for deciding whether the concern meets the threshold for referral to relevant external authorities (local law enforcement or social services, depending on the student's location).</li>
                        <li><strong>Confidentiality:</strong> All disclosures will be handled with sensitivity, respecting the privacy of the child and family while prioritizing the child's safety above all other considerations.</li>
                    </ol>

                    <h3>E-Safety and Online Safeguarding</h3>
                    <p>The policy extends explicitly to the online environment. SISA implements strict monitoring protocols and educational programs to teach students responsible digital citizenship, protecting them from online risks and ensuring appropriate behaviour in the online classroom setting.</p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ChildProtectionPolicy;
