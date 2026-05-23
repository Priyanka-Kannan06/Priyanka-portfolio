import React from 'react';
import '../App.css';
import { FaEnvelope, FaLinkedin, FaGithub,FaInstagram} from 'react-icons/fa';

const Contact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:priyankannan2005@gmail.com'; // Replace with your email
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-subtext">Have a project or just want to say hi? I'd love to connect!</p>

      <button className="contact-btn" onClick={handleContactClick}>
        Say Hello
      </button>

      <div className="contact-icons">
        <a href="mailto:priyankakannan2005@gmail.com" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/priyanka-kannan1506/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Priyanka-Kannan06" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
         <a href="https://www.instagram.com/priyanka._.kannan/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
