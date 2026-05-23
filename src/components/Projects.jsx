// src/components/Projects.jsx
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../App.css';
import Tilt from 'react-parallax-tilt';

// Import your project images
import renalEaseImg from '../assets/Renalease.png';
import eduCycleImg from '../assets/EduCycle.png';
import aspiraFiImg from '../assets/Aspirafi.png';
import parkWiseImg from '../assets/Parkwise.png';

const projectData = [
  {
    title: 'RenalEase',
    description: 'A low-cost portable dialysis solution aimed at kidney patients. Uses AI to monitor health data and aligns with SDG 3.',
    image: renalEaseImg
  },
  {
    title: 'EduCycle',
    description: 'A sustainable e-learning app with peer-to-peer notes exchange and recyclable education practices.',
    image: eduCycleImg
  },
  {
    title: 'AspiraFi',
    description: 'Financial empowerment app for women entrepreneurs, offering multilingual budgeting and sponsorship tools.',
    image: aspiraFiImg
  },
  {
    title: 'ParkWise',
    description: 'Smart parking solution that allows users to reserve their parking slots.',
    image: parkWiseImg
  }
];

const Projects = () => {
  useEffect(() => {
    // Animate the section title
    ScrollReveal().reveal('.section-title', {
      delay: 200,
      distance: '40px',
      origin: 'top',
      duration: 800,
      easing: 'ease-in-out',
      reset: false
    });

    // Animate each card
    ScrollReveal().reveal('.tilt-card', {
      interval: 150,
      distance: '60px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-in-out',
      reset: false
    });
  }, []);

  return (
    <section id="projects" className="projects-flip-section parallax-projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-flip-grid">
        {projectData.map((project, index) => (
          <Tilt
            className="tilt-card"
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={2500}
            key={index}
          >
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={project.image} alt={project.title} className="project-thumb" />
                  <h3>{project.title}</h3>
                </div>
                <div className="flip-back">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
