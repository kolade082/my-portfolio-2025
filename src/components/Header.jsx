import React from 'react';
import './Header.css';
import profileImg from '../images/profile-img.png';

function Header() {
  return (
    <header id="header" className="hero">
      <div className="hero-content">
        <div className="hero-intro">
          <span className="hero-greeting">Hi, I'm Kolade</span>
          <h1 className="hero-title">Software Engineer & Creative Developer</h1>
          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/kolade082" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kolade-oluwadara-87563a245/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/kolade_oo/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="mailto:koladedara@outlook.com" title="Email">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Kolade Oluwadara" className="profile-image" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </header>
  );
}

export default Header;
