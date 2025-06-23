// src/components/Loader.jsx
import React from 'react';

import '../App.css';
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="cube">
        <div className="face front">P</div>
        <div className="face back">K</div>
        <div className="face left">👩‍💻</div>
        <div className="face right">🚀</div>
        <div className="face top">💡</div>
        <div className="face bottom">🌐</div>
      </div>
      <h2 className="loading-text">Launching your galaxy...</h2>
    </div>
  );
};

export default Loader;
