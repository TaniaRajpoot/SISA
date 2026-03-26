import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/InstructorsPage.css';

const Instructors = () => {
  const [hoveredShareBtn, setHoveredShareBtn] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allInstructors = [
    {
      id: 1,
      name: "Robert Smith",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bgColor: "#E0F2FE",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 2,
      name: "Olivia Mia",
      role: "Web Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bgColor: "#D1FAE5",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 3,
      name: "William Hope",
      role: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bgColor: "#E0E7FF",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 4,
      name: "Sophia Ava",
      role: "Support Staff",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bgColor: "#FCE7F3",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Math Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bgColor: "#FEF3C7",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 6,
      name: "Emma Davis",
      role: "Science Expert",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      bgColor: "#F3E8FF",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "IT Specialist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bgColor: "#E0F2FE",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 8,
      name: "Sarah Miller",
      role: "English Literature",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bgColor: "#D1FAE5",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    }
  ];

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
          <div className="instructors-full-grid">
            {allInstructors.map((instructor) => (
              <div key={instructor.id} className="instructor-card-large">
                <div className="card-top" style={{ backgroundColor: instructor.bgColor }}>
                  <img src={instructor.image} alt={instructor.name} className="card-img" />
                  
                  <div 
                    className="card-share"
                    onMouseEnter={() => setHoveredShareBtn(instructor.id)}
                    onMouseLeave={() => setHoveredShareBtn(null)}
                  >
                    <div className={`card-socials ${hoveredShareBtn === instructor.id ? 'active' : ''}`}>
                      <a href={instructor.socials.facebook} className="s-link"><i className="fab fa-facebook-f"></i></a>
                      <a href={instructor.socials.twitter} className="s-link"><i className="fab fa-twitter"></i></a>
                      <a href={instructor.socials.linkedin} className="s-link"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <button className="s-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    </button>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="card-role">{instructor.role}</span>
                  <h3 className="card-name">{instructor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
