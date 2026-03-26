import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/InstructorsPage.css';

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
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    {
      id: "admin-2",
      name: "Mr. Wasif W. Mir",
      role: "Vice Principal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: "admin-3",
      name: "Mrs. Saneea Sohaib Khan",
      role: "Administrator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: "admin-4",
      name: "Mr. Hassan Askari",
      role: "Coordinator – Math",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: "admin-5",
      name: "Mrs. Khadija Idrees",
      role: "Coordinator – Urdu",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      id: "admin-6",
      name: "Mr. Furrukh Abbas",
      role: "Coordinator – History, Geography & Social Studies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    }
  ];

  const faculty = [
    {
      id: "faculty-1",
      name: "Mrs. Saeeda Salim",
      role: "A’Level Chemistry, IGCSE O’ & A’ Level Design & Tech, IGCSE O’ & A’ Level Travel & Tourism, IGCSE O’ & A’ Level Envirommental Management",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-2",
      name: "Mr. Wasif W. Mir",
      role: "IGCSE O’Level Chemistry, IGCSE O’ & A’ Global Perspectives",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-3",
      name: "Mr. Hassan Askari",
      role: "IGCSE O’ & A’ Mathematics & IGCSE O’Level Additional Mathematics",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-4",
      name: "Mrs. Saneea Sohaib Khan",
      role: "IGCSE O’ Level Mathematics & Key Stage",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-5",
      name: "Mrs. Khadija Idrees",
      role: "IGCSE O’Level Urdu",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-6",
      name: "Mr. Mazhar Abbas Chaudhry",
      role: "IGCSE O’ & A’ Level Urdu",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-7",
      name: "Mr. Furrukh Abbas",
      role: "IGCSE O’ Level Islamiyat & Pakistan Studies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-8",
      name: "Mr. Waris Ali",
      role: "IGCSE O’ Level Islamiyat & Pakistan Studies",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-9",
      name: "Mr. Sajjad Afzal",
      role: "A’ Level Accounting & BTEC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-10",
      name: "Mr. Azam Saleem",
      role: "IGCSE O’Level Accounting & BTEC",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-11",
      name: "Mr. M. Waqar Khan",
      role: "A’ Level Business & BTEC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-12",
      name: "Mr. Raja Shahzore Khan",
      role: "IGCSE O’ Level Business Studies & Commerce",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-13",
      name: "Mr. M. Dawood Murtaza",
      role: "A’ Level Physics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-14",
      name: "Mr. Muhammad Jameel",
      role: "IGCSE O’ Level Physics",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-15",
      name: "Mrs. Hafsa Akhtar",
      role: "IGCSE O’ Level English Language",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-16",
      name: "Ms. Mishal Usman",
      role: "IGCSE O’ Level Biology & Chemistry",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-17",
      name: "Mr. Abdul Quddus",
      role: "A’ Level Law",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: "faculty-18",
      name: "Mr. Muhammad Ali",
      role: "A’ Level Sociology",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    }
  ];

  const InstructorCard = ({ instructor }) => (
    <div key={instructor.id} className="instructor-card-new">
      <div className="card-image-box">
        <div className="purple-bg-rect"></div>
        <div className="slanted-border"></div>
        <img src={instructor.image} alt={instructor.name} className="instructor-img" />
      </div>
      <div className="card-text-content">
        <h3 className="instructor-name-new">{instructor.name}</h3>
        <p className="instructor-role-new">{instructor.role}</p>
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
