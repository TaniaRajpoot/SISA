import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Policies.css';

const Policies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policies-page">
            <Header />

            <header className="policies-header">
                <h1>POLICIES</h1>
                <p>These policies are critical for establishing clear expectations and ensuring the safety and academic integrity of the School of International Studies in Sciences & Arts (SISA).</p>
            </header>

            <section className="policies-container">
                <div className="policy-card">
                    <div className="policy-title">
                        <i className="fa-solid fa-clipboard-check"></i>
                        <h2>1. 📋 Attendance Policy</h2>
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

                <div className="policy-card">
                    <div className="policy-title">
                        <i className="fa-solid fa-file-pen"></i>
                        <h2>2. 📝 Examination Policy</h2>
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

                <div className="policy-card">
                    <div className="policy-title">
                        <i className="fa-solid fa-shield-halved"></i>
                        <h2>3. 🛡️ Disciplinary Policy</h2>
                    </div>

                    <p>The SISA Disciplinary Policy is rooted in respect, integrity, and responsibility, aiming to maintain a safe, productive, and harmonious environment for all members of the school community.</p>

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

                <div className="policy-card">
                    <div className="policy-title">
                        <i className="fa-solid fa-heart"></i>
                        <h2>4. 💖 Child Protection Policy</h2>
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

            <footer className="policies-footer">
                <span>© School of International Studies in Sciences & Arts (SISA) — All Rights Reserved</span>
            </footer>

            <Footer />
        </div>
    );
};

export default Policies;
