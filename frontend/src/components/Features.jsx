import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Features.css';
import {
  FaAward,
  FaGlobeAmericas,
  FaUserGraduate,
  FaTools,
  FaHandshake,
  FaLayerGroup,
  FaRoad
} from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaAward />,
    title: "Triple UK Accreditation",
    description: "We are unique in offering affiliations with all three major British examination boards: Cambridge International, Pearson-Edexcel, and OxfordAQA. This allows us to tailor exam choices to suit your child’s specific academic strengths."
  },
  {
    icon: <FaGlobeAmericas />,
    title: "A Classroom without Borders",
    description: "Whether in Lahore or London, our quality remains the same. As a Registered International Online School, we connect students from Pakistan, the UAE, KSA, Egypt, and the Philippines in a truly multicultural learning environment. Our physical campus in Johar Town, Lahore, provides a vibrant hub for local students, while our robust online infrastructure brings the world to the classroom."
  },
  {
    icon: <FaUserGraduate />,
    title: "From Playgroup to Professional",
    description: "We offer a complete educational ecosystem. A child can start with us in Playgroup and stay until they complete their A’ Levels or BTEC Higher National Diplomas (Level 5), ensuring stability and consistent mentorship throughout their youth."
  },
  {
    icon: <FaTools />,
    title: "Vocational & Academic Excellence",
    description: "We understand that not every student takes the same path. By offering both traditional GCE O’ & A’ Levels and practical BTEC qualifications, we open diverse doors to universities and careers worldwide."
  },
  {
    icon: <FaHandshake />,
    title: "A Legacy of Trust",
    description: "Established in 2006, SISA has years of experience in nurturing talent. Our history is built on academic integrity and a forward-thinking approach to sciences and arts."
  },
  {
    icon: <FaLayerGroup />,
    title: "Unmatched Curriculum Flexibility",
    description: "Most schools bind students to a single examination board. At SISA, we are affiliated with Cambridge, Pearson-Edexcel, and OxfordAQA. This triple accreditation gives us the flexibility to choose the best syllabus and assessment style for our students, maximizing their chances of achieving top grades."
  },
  {
    icon: <FaRoad />,
    title: "A Pathway for Every Learner",
    description: "We believe education is NOT \"one size fits all.\" For the Academic: Rigorous O’ & A’ Level programs tailored to challenge and inspire."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose SISA?</h2>
          <p className="section-subtitle">
            Choosing the right school is about finding the right fit for your child's future.
            Here is why families from Lahore to the UK choose SISA:
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
