import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import renalImage from '../assets/renalease.jpg'; // Add your image inside assets folder

const milestones = [
  {
    title: 'Ideathon Victory – Agni College',
    description: 'RenalEase secured 1st place at Agni Ideathon for innovation in affordable dialysis tech.',
    year: '2025',
  },
  {
    title: 'Presentia – Meenakshi Sundararajan',
    description: 'Awarded First Prize at Presentia for impactful healthcare pitch presentation.',
    year: '2025',
  },
  {
    title: 'SRM Ideathon Winner',
    description: 'Recognized for medical tech excellence in SRM’s national level competition.',
    year: '2025',
  },
  {
    title: '₹7,500 Seed Fund – KCG College (PDC)',
    description: 'Received Product Development Cell seed fund for building RenalEase v2.0.',
    year: '2025',
  }
];

const MilestoneTimeline = () => {
  return (
    <section className="milestone-timeline" id="timeline">
      <h2 className="section-title">RenalEase Journey</h2>
      <div className="timeline-wrapper">
        <div className="timeline-container">
          {milestones.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="dot" />
              <div className="content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="year">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side image */}
        <motion.div
          className="timeline-image"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={renalImage} alt="RenalEase Project" />
        </motion.div>
      </div>

      {/* Quote at bottom */}
      <motion.div
        className="timeline-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3>“Success is not the destination — it's the trail of impact you leave behind.” 🚀</h3>
      </motion.div>
    </section>
  );
};

export default MilestoneTimeline;
