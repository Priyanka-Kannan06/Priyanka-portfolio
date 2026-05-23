import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

// Image imports
import renalImage from '../assets/renalease.jpg';
import win1 from '../assets/award1.jpeg';
import win2 from '../assets/award2.jpeg';
import win3 from '../assets/award3.jpeg';

// ✅ Slideshow images
const images = [renalImage, win1, win2, win3];

// ✅ Timeline Data
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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500); // Change image every 3.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="milestone-timeline" id="timeline">
      <h2 className="section-title">RenalEase Journey</h2>

      <div className="timeline-wrapper">
        {/* Left Timeline */}
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

        {/* Right Image Slideshow */}
        <div className="timeline-image">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="RenalEase Slide"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Bottom Quote */}
      <motion.div
        className="timeline-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3>“Success is not the destination — it's the trail of impact you leave behind.”</h3>
      </motion.div>

      {/* Timeline Gallery */}
      <motion.div
        className="timeline-gallery"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        
      </motion.div>
    </section>
  );
};

export default MilestoneTimeline;
