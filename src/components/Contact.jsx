import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-intro">
        I'm open to opportunities, collaborations, or even a friendly chat. Reach out! 🚀
      </p>
      <div className="contact-links">
        <a href="mailto:priyankakannan2005@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
        <a href="https://github.com/Priyanka-Kannan06" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/priyanka-kannan1506/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
         <a href="https://www.instagram.com/priyanka._.kannan/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
