import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { launchConfetti } from '../utils/confetti';
import '../App.css';
import profile from '../assets/priyanka.jpeg';

const Hero = ({ openResumeModal }) => {
  const handleHireMeClick = () => {
    launchConfetti();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-wrapper">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Hi, I'm <span className="name-highlight">Priyanka Kannan</span>....

        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Typewriter
            words={['Full Stack Developer', 'UI/UX Designer', 'ML Developer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Creating solutions with creativity, code and caffeine 
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <a href="#contact" className="btn">Let's Connect</a>
          <button onClick={openResumeModal} className="btn">View Resume</button>
          <button onClick={handleHireMeClick} className="btn">Hire Me</button>
        </motion.div>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Head of Product — <span className="highlight">RenalEase</span>
        </motion.p>
      </motion.div>

      <Tilt glareEnable={true} glareMaxOpacity={0.45} scale={1.05} transitionSpeed={1500}>
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="blob-avatar">
            <img src={profile} alt="profile" />
          </div>
        </motion.div>
      </Tilt>
    </section>
  );
};

export default Hero;
