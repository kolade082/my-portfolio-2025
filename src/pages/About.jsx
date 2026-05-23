import React from 'react';
import './about.css';

function About() {
  const skills = [
    'JavaScript', 'React', 'Python', 'PHP', 'Node.js', 'Express',
    'MongoDB', 'SQL', 'HTML/CSS', 'Git', 'REST APIs', 'Web Design'
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' },
    { number: '∞', label: 'Passion' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Who I am</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate software engineer based in London, specializing in full-stack web development. 
              I love building products that solve real problems and create meaningful user experiences.
            </p>
            <p>
              With a BSc in Software Engineering and experience across internships and hackathons, 
              I've honed my skills in JavaScript, Python, PHP, and modern frameworks like React.
            </p>
            <p>
              Whether I'm leading teams, architecting systems, or crafting beautiful interfaces, 
              I'm driven by a desire to deliver impactful, scalable solutions.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills & Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
