import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-heading">
          Welcome to <span className="hero-highlight">My World</span>
        </h1>
        <p className="hero-subtext">
          Crafting modern solutions with a vintage touch.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn">
            Learn More
          </a>
          <a href="#projects" className="btn btn-secondary">
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;