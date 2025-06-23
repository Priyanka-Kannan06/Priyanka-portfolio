// src/components/Skills.jsx
import React from 'react';
import '../App.css';

const skillsRow1 = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'AI/ML',
    icon: 'https://img.icons8.com/color/96/000000/artificial-intelligence.png'
  }
];

const skillsRow2 = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="marquee-skills">
      <h2 className="section-title">My ToolKit</h2>
      
      <div className="marquee">
        <div className="marquee-content">
          {skillsRow1.map((skill, index) => (
            <div key={index} className="icon-box">
              <img src={skill.icon} alt={skill.name} />
              <p className="skill-label">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee reverse">
        <div className="marquee-content">
          {skillsRow2.map((skill, index) => (
            <div key={index} className="icon-box">
              <img src={skill.icon} alt={skill.name} />
              <p className="skill-label">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
