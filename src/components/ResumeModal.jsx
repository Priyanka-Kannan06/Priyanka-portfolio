import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const ResumeModal = ({ isOpen, onClose }) => {
  const [isDark, setIsDark] = useState(false);

  if (!isOpen) return null; // 💡 Stop rendering when modal is closed

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className={`resume-modal-box ${isDark ? 'dark' : ''}`}
        onClick={(e) => e.stopPropagation()} // 🛑 Prevent close on modal box click
      >
        <button className="close-btn" onClick={onClose}>✖</button>
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀ Light Preview' : '🌙 Dark Preview'}
        </button>

        <motion.div
          className="resume-flip-container"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 2 }}
        >
          <img src="/assets/resume/resume-page1.jpg" alt="Resume Page 1" className="resume-page" />
          <img src="/assets/resume/resume-page2.jpg" alt="Resume Page 2" className="resume-page" />
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeModal;
