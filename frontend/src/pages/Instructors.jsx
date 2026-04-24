import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/InstructorsPage.css';

// Admin Imports
import inst01 from '../assets/New folder/SISA - Website Instructor-01.png';
import inst02 from '../assets/New folder/SISA - Website Instructor-02.png';
import inst03 from '../assets/New folder/SISA - Website Instructor-03.png';
import inst04 from '../assets/New folder/SISA - Website Instructor-04.png';
import inst05 from '../assets/New folder/SISA - Website Instructor-05.png';
import inst06 from '../assets/New folder/SISA - Website Instructor-06.png';

// Faculty Imports
import inst07 from '../assets/New folder/SISA - Website Instructor-07.png';
import inst08 from '../assets/New folder/SISA - Website Instructor-08.png';
import inst09 from '../assets/New folder/SISA - Website Instructor-09.png';
import inst10 from '../assets/New folder/SISA - Website Instructor-10.png';
import inst11 from '../assets/New folder/SISA - Website Instructor-11.png';
import inst12 from '../assets/New folder/SISA - Website Instructor-12.png';
import inst13 from '../assets/New folder/SISA - Website Instructor-13.png';
import inst14 from '../assets/New folder/SISA - Website Instructor-14.png';
import inst15 from '../assets/New folder/SISA - Website Instructor-15.png';
import inst16 from '../assets/New folder/SISA - Website Instructor-16.png';
import inst17 from '../assets/New folder/SISA - Website Instructor-17.png';
import inst18 from '../assets/New folder/SISA - Website Instructor-18.png';
import inst19 from '../assets/New folder/SISA - Website Instructor-19.png';
import inst20 from '../assets/New folder/SISA - Website Instructor-20.png';
import inst21 from '../assets/New folder/SISA - Website Instructor-21.png';
import inst22 from '../assets/New folder/SISA - Website Instructor-22.png';
import inst23 from '../assets/New folder/SISA - Website Instructor-23.png';
// inst24 is missing in assets
import inst25 from '../assets/New folder/SISA - Website Instructor-25.png';
import inst26 from '../assets/New folder/SISA - Website Instructor-26.png';
import inst27 from '../assets/New folder/SISA - Website Instructor-27.png';
import inst28 from '../assets/New folder/SISA - Website Instructor-28.png';
import inst29 from '../assets/New folder/SISA - Website Instructor-29.png';
import inst30 from '../assets/New folder/SISA - Website Instructor-30.png';

const Instructors = () => {
  const [hoveredShareBtn, setHoveredShareBtn] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adminTeam = [
    {
      id: "admin-1",
      name: "Mrs. Saeeda Salim",
      role: "Director & Principal",
      image: inst01,
    },
    {
      id: "admin-2",
      name: "Mr. Wasif W. Mir",
      role: "Vice Principal",
      image: inst02,
    },
    {
      id: "admin-3",
      name: "Mrs. Saneea Sohaib Khan",
      role: "Administrator",
      image: inst03,
    },
    {
      id: "admin-4",
      name: "Mr. Hassan Askari",
      role: "Coordinator – Math",
      image: inst04,
    },
    {
      id: "admin-5",
      name: "Mrs. Khadija Idrees",
      role: "Coordinator – Urdu",
      image: inst05,
    },
    {
      id: "admin-6",
      name: "Mr. Furrukh Abbas",
      role: "Coordinator – History, Geography & Social Studies",
      image: inst06,
    }
  ];

  const faculty = [
    {
      id: "faculty-1",
      name: "Mrs. Saeeda Salim",
      role: "A’Level Chemistry, IGCSE O’ & A’ Level Design & Tech, IGCSE O’ & A’ Level Travel & Tourism, IGCSE O’ & A’ Level Envirommental Management",
      image: inst07,
    },
    {
      id: "faculty-2",
      name: "Mr. Wasif W. Mir",
      role: "IGCSE O’Level Chemistry, IGCSE O’ & A’ Global Perspectives",
      image: inst08,
    },
    {
      id: "faculty-3",
      name: "Mr. Hassan Askari",
      role: "IGCSE O’ & A’ Mathematics & IGCSE O’Level Additional Mathematics",
      image: inst09,
    },
    {
      id: "faculty-4",
      name: "Mrs. Saneea Sohaib Khan",
      role: "IGCSE O’ Level Mathematics & Key Stage",
      image: inst10,
    },
    {
      id: "faculty-5",
      name: "Mrs. Khadija Idrees",
      role: "IGCSE O’Level Urdu",
      image: inst11,
    },
    {
      id: "faculty-6",
      name: "Mr. Mazhar Abbas Chaudhry",
      role: "IGCSE O’ & A’ Level Urdu",
      image: inst12,
    },
    {
      id: "faculty-7",
      name: "Mr. Furrukh Abbas",
      role: "IGCSE O’ Level Islamiyat & Pakistan Studies",
      image: inst13,
    },
    {
      id: "faculty-8",
      name: "Mr. Waris Ali",
      role: "IGCSE O’ Level Islamiyat & Pakistan Studies",
      image: inst14,
    },
    {
      id: "faculty-9",
      name: "Mr. Sajjad Afzal",
      role: "A’ Level Accounting & BTEC",
      image: inst15,
    },
    {
      id: "faculty-10",
      name: "Mr. Azam Saleem",
      role: "IGCSE O’Level Accounting & BTEC",
      image: inst16,
    },
    {
      id: "faculty-11",
      name: "Mr. M. Waqar Khan",
      role: "A’ Level Business & BTEC",
      image: inst17,
    },
    {
      id: "faculty-12",
      name: "Mr. Raja Shahzore Khan",
      role: "IGCSE O’ Level Business Studies & Commerce",
      image: inst18,
    },
    {
      id: "faculty-13",
      name: "Mr. M. Dawood Murtaza",
      role: "A’ Level Physics",
      image: inst19,
    },
    {
      id: "faculty-14",
      name: "Mr. Muhammad Jameel",
      role: "IGCSE O’ Level Physics",
      image: inst20,
    },
    {
      id: "faculty-15",
      name: "Mrs. Hafsa Akhtar",
      role: "IGCSE O’ Level English Language",
      image: inst21,
    },
    {
      id: "faculty-16",
      name: "Ms. Mishal Usman",
      role: "IGCSE O’ Level Biology & Chemistry",
      image: inst22,
    },
    {
      id: "faculty-17",
      name: "Mr. Abdul Quddus",
      role: "A’ Level Law",
      image: inst23,
    },
    {
      id: "faculty-18",
      name: "Mr. Muhammad Ali",
      role: "A’ Level Sociology",
      image: inst25,
    },
    {
      id: "faculty-19",
      name: "Instructor 26",
      role: "Faculty Member",
      image: inst26,
    },
    {
      id: "faculty-20",
      name: "Instructor 27",
      role: "Faculty Member",
      image: inst27,
    },
    {
      id: "faculty-21",
      name: "Instructor 28",
      role: "Faculty Member",
      image: inst28,
    },
    {
      id: "faculty-22",
      name: "Instructor 29",
      role: "Faculty Member",
      image: inst29,
    },
    {
      id: "faculty-23",
      name: "Instructor 30",
      role: "Faculty Member",
      image: inst30,
    }
  ];

  const InstructorCard = ({ instructor }) => (
    <div key={instructor.id} className="simple-instructor-card-list">
      <div className="simple-card-img-wrapper">
        <img src={instructor.image} alt={instructor.name} className="simple-faculty-img" />
      </div>
    </div>
  );

  return (
    <div className="instructors-page">
      <Header />

      <div className="page-banner">
        <div className="container">
          <span className="banner-badge">Our Educators</span>
          <h1 className="banner-title">Meet Our <span className="highlight">Professional</span> Instructors</h1>
          <p className="banner-desc">Highly qualified and dedicated professionals shaping the future of our students.</p>
        </div>
      </div>

      <section className="instructors-main">
        <div className="container">
          <div className="section-type">
            <h2 className="type-title">Admin Team</h2>
            <div className="instructors-custom-grid">
              {adminTeam.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          </div>

          <div className="section-type faculty-section">
            <h2 className="type-title">O’ & A’Level Faculty</h2>
            <div className="instructors-custom-grid">
              {faculty.map((instructor) => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
