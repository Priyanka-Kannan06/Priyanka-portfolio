// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Loader from './components/loader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import GlowCursor from './components/GlowCursor';
import ResumeModal from './components/ResumeModal';
import AchievementPolaroid from './components/AchievementPolaroid';
import MilestoneTimeline from './components/MilestoneTimeline';

function App() {
  // phases: 'loader' → 'splash' → 'main'
  const [phase, setPhase] = useState('loader');
  const [showResume, setShowResume] = useState(false);

  // 1. Start with loader
  useEffect(() => {
    if (phase === 'loader') {
      const t = setTimeout(() => setPhase('splash'), 2500);
      return () => clearTimeout(t);
    }
  }, [phase]);


  // phase === 'main'
  return (
    <div className="App">
     
      <GlowCursor />
      <Navbar />

      <Hero openResumeModal={() => setShowResume(true)} />
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />

      <About />
      <Projects />
      <AchievementPolaroid />
      <Skills />
      <MilestoneTimeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
