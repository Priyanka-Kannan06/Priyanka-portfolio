// src/components/About.jsx
import React from 'react';
import '../App.css';
import { FaBrain, FaLaptopCode, FaLightbulb, FaCoffee, FaHeartbeat, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

const things = [
  {
    icon: <FaBrain />, title: "Creative Thinker", desc: "Blending innovation with practicality — especially in health tech like RenalEase."
  },
  {
    icon: <FaLaptopCode />, title: "Code Lover", desc: "Building full-stack apps & automating things that matter."
  },
  {
    icon: <FaLightbulb />, title: "Ideator", desc: "From problem to pitch — I lead projects with vision & strategy."
  },
  {
    icon: <FaCoffee />, title: "Caffeine Coder", desc: "Coffee is my silent teammate for late-night builds ☕."
  },
  {
    icon: <FaHeartbeat />, title: "Empathy First", desc: "My work always connects with real-world human problems."
  },
  {
    icon: <FaChalkboardTeacher />, title: "Lifelong Learner", desc: "AI/ML, UI/UX, Dev — always curious & learning!"
  }
];

const About = () => {
  return (
    <section id="about" className="about-unique">
      <h2 className="section-title">Things About Me</h2>
      <div className="things-grid">
        {things.map((item, index) => (
          <motion.div
            key={index}
            className="thing-card"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default About;
