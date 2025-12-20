import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Policies.css';

const RulesRegulations = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policies-page">
            <Header />

            <header className="policies-header">
                <h1>Disciplinary Policy</h1>
                <p>The SISA Disciplinary Policy is rooted in respect, integrity, and responsibility.</p>
            </header>

            <section className="policies-container">
                <div className="policy-card">

                    <p>The SISA Disciplinary Policy is rooted in respect, integrity, and responsibility.</p>

                    <h3>Code of Conduct</h3>
                    <ul>
                        <li><strong>Respect:</strong> For all staff, peers, school property, and cultural diversity.</li>
                        <li><strong>Integrity:</strong> Honesty in all academic work and personal interactions.</li>
                        <li><strong>Responsibility:</strong> Compliance with all school rules and attendance requirements.</li>
                        <li><strong>Online Etiquette:</strong> Respectful communication and adherence to digital safety guidelines during all online classes and communications.</li>
                    </ul>

                    <h3>Disciplinary Framework</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Offense Examples</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minor Offenses</td>
                                <td>Repeated tardiness, non-compliance with uniform/dress code, minor disruptive behaviour (online or on-campus).</td>
                                <td>Verbal warning, detention/loss of privileges, parental contact.</td>
                            </tr>
                            <tr>
                                <td>Intermediate Offenses</td>
                                <td>Academic dishonesty (minor plagiarism), bullying (including cyberbullying), repeated truancy/unauthorized absence.</td>
                                <td>Written warning, internal suspension, mandatory parental meeting, counseling referral.</td>
                            </tr>
                            <tr>
                                <td>Major Offenses</td>
                                <td>Physical violence, severe bullying/harassment, gross academic fraud, possession of dangerous items, repeated intermediate offenses.</td>
                                <td>External suspension (short or long-term), referral to the Board, Permanent Expulsion.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Anti-Bullying and Anti-Harassment</h3>
                    <p>SISA maintains a zero-tolerance policy towards all forms of bullying, harassment, and discrimination (physical, verbal, or cyber). All incidents must be reported immediately to a teacher, a Head of Section, or the Principal.</p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RulesRegulations;
