import React, { useState } from 'react';
import './navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="nav-wrapper">
        <div className="nav-logo">KO</div>
        <button className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#header" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#resume" onClick={() => setIsOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
