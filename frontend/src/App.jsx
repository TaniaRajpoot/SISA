import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import GetStarted from './pages/GetStarted';
import GenericPage from './pages/GenericPage';
import ContactForm from './pages/ContactForm'; // Import ContactForm from pages
import './App.css';
import AnimatedCursor from "react-animated-cursor";
import WhatsAppWidget from './components/WhatsAppWidget';
import WhyChooseSISA from './pages/WhyChooseSISA';
import MissionVision from './pages/MissionVision';
import BTEC from './pages/BTEC';


function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='58, 12, 163'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        zIndex={99999}
        clickables={[
          'a',
          'button',
          '.link',
          '.nav-link',
          '.menu-item',
          '.header-link',
          'li',
          '.whatsapp-button',
          '.close-btn',
          '.start-chat-btn'
        ]}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/why-choose-sisa" element={<WhyChooseSISA />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/admissions" element={<GenericPage title="Admissions" />} />

        {/* Academics */}
        <Route path="/academics/curriculum" element={<GenericPage title="Curriculum & Sections" />} />
        <Route path="/academics/preschool-junior" element={<GenericPage title="Preschool & Junior School" />} />
        <Route path="/academics/middle-school" element={<GenericPage title="Middle School" />} />
        <Route path="/academics/senior-school" element={<GenericPage title="Senior School" />} />
        <Route path="/academics/btec" element={<BTEC />} />
        <Route path="/academics/awards-distinctions" element={<GenericPage title="Awards & Distinctions" />} />
        <Route path="/academics/affiliations" element={<GenericPage title="Affiliations" />} />
        <Route path="/academics/calendar" element={<GenericPage title="Academic Calendar" />} />
        <Route path="/academics/online-school" element={<GenericPage title="Online School" />} />

        {/* Student Life */}
        <Route path="/student-life/clubs" element={<GenericPage title="Clubs & Co-curricular" />} />
        <Route path="/student-life/houses" element={<GenericPage title="School teams & Houses" />} />
        <Route path="/student-life/alumni" element={<GenericPage title="Alumni & Testimonials" />} />
        <Route path="/student-life/council" element={<GenericPage title="Student Council" />} />
        <Route path="/student-life/awards" element={<GenericPage title="Awards & Honours" />} />

        {/* News & Events */}
        <Route path="/news/upcoming" element={<GenericPage title="Upcoming Events" />} />
        <Route path="/news/gallery" element={<GenericPage title="Photo Gallery" />} />
        <Route path="/news/videos" element={<GenericPage title="Videos etc" />} />

        {/* Policies */}
        <Route path="/policies/rules" element={<GenericPage title="Rules & Regulations" />} />
        <Route path="/policies/child-protection" element={<GenericPage title="Child Protection Policy" />} />
        <Route path="/policies/exams" element={<GenericPage title="Examination Policy" />} />
        <Route path="/policies/attendance" element={<GenericPage title="Attendance Policy" />} />

        {/* Contact Pages - Use ContactForm page directly */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/contact-form" element={<ContactForm />} />

        {/* About */}
        <Route path="/about/us" element={<GenericPage title="About Us" />} />
        <Route path="/about/director-message" element={<GenericPage title="Director's Message" />} />
        <Route path="/about/mission-vision" element={<GenericPage title="Mission & Vision" />} />
        <Route path="/about/facilities" element={<GenericPage title="Facilities" />} />
        <Route path="/about/accreditation" element={<GenericPage title="Accreditation" />} />
        <Route path="/about/virtual-tour" element={<GenericPage title="Campus Virtual Tour" />} />

        {/* Fallback for other links */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      <WhatsAppWidget />
    </div>
  );
}

export default App;