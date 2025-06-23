import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import '../App.css';

const achievements = [
  {
    image: require('../assets/award1.jpeg'),
    title: 'Agni Ideathon',
  },
  {
    image: require('../assets/award2.jpeg'),
    title: 'SRM Ideathon',
  },
  {
    image: require('../assets/award3.jpeg'),
    title: 'Presentia',
  },
];

const AchievementPolaroid = () => {
  return (
    <section className="polaroid-gallery" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="polaroid-container">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            className="polaroid-card"
            style={{ zIndex: index + 1 }}
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.2} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <img src={item.image} alt={item.title} />
              <p className="polaroid-title">{item.title}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementPolaroid;
