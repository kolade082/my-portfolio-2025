import React from 'react';
import './resume.css';

function Resume() {
  const experiences = [
    {
      id: 1,
      role: 'Software Engineer Intern',
      company: 'Tech Company',
      period: '2023 - 2024',
      description: 'Developed full-stack features, led API integrations, and improved system performance.'
    },
    {
      id: 2,
      role: 'Hackathon Participant',
      company: 'Various Events',
      period: '2022 - Present',
      description: 'Built innovative solutions in competitive environments, winning multiple awards.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'BSc Software Engineering',
      school: 'University',
      year: '2022 - 2025',
      details: 'First Class Honours, specializing in web technologies and software architecture.'
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2>Resume</h2>
          <p>Experience & Education</p>
        </div>

        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-section-title">Experience</h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.role}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-column">
            <h3 className="resume-section-title">Education</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="school">{edu.school}</p>
                    <p className="period">{edu.year}</p>
                    <p className="description">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-download">
          <p>Want to see my full resume?</p>
          <a href="/my-portfolio-2025/Kolade's Resume.pdf" download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
