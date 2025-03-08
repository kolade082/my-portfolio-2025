import React from "react";
import "./about.css";
import SectionTitle from "../components/SectionTitle";
import profileImg from "../images/profile-img.png";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";

function About({ reference, aboutActive }) {
  return (
    <section id="about" className="about" ref={reference}>
      <div className="about-me container">
        <SectionTitle title="About" subtitle="Learn more about me" />
        
        <div className="about-content">
          <div className="about-grid">
            <div className="profile-section" data-aos="fade-right">
              <div className="profile-image-wrapper">
                <img src={profileImg} alt="Kolade Oluwadara" />
                <div className="profile-backdrop"></div>
              </div>
              {/* <div className="quick-info">
                <div className="info-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>London, United Kingdom</span>
                </div>
                <div className="info-item">
                  <i className="bi bi-envelope"></i>
                  <span>koladeoluwadara@gmail.com</span>
                </div>
                <div className="info-item">
                  <i className="bi bi-globe"></i>
                  <span>www.koldadedara.com</span>
                </div>
                <div className="info-item">
                  <i className="bi bi-phone"></i>
                  <span>+44 7572 887155</span>
                </div>
              </div> */}
            </div>

            <div className="about-details" data-aos="fade-left">
              <div className="about-header">
                <h3>🎯 Software Engineer</h3>
                {/* <p className="about-description">
                  Hi, I'm Kolade! I like to build cool stuff on the web 🌐, solve
                  real-world problems 💡, and bring ideas to life 🚀.
                </p> */}
              </div>

              <div className="about-description">
                <p>
                Hi, I'm Kolade! I like to build cool stuff on the web 🌐, solve
                real-world problems 💡, and bring ideas to life 🚀.
                  Whether it's creating user-friendly web apps, crafting APIs, or collaborating
                  at hackathons (Literally the same header in my{" "}
                  <a href="https://github.com/kolade082" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>{" "}
                  😭😭😭, I'm out of words).
                </p>
                <div className="additional-info">
                <div className="info-grid">
                  <div className="info-card">
                    <i className="bi bi-calendar-date"></i>
                    {/* <strong>DOB</strong> */}
                    <span>12 April</span>
                  </div>
                  <div className="info-card">
                    <i className="bi bi-mortarboard"></i>
                    {/* <strong>Degree</strong> */}
                    <span>BSc Software Engineering</span>
                  </div>
                </div>
              </div>
                <p>
                  With experience spanning software engineering internships and
                  hackathons, I specialize in technologies like JavaScript, PHP, and
                  Python. Whether it's leading teams, developing efficient
                  workflows, or integrating APIs, I strive to deliver impactful and
                  secure solutions.
                </p>
              </div>

              {/* <div className="additional-info">
                <div className="info-grid">
                  <div className="info-card">
                    <i className="bi bi-calendar-date"></i>
                    <strong>DOB</strong>
                    <span>12 April</span>
                  </div>
                  <div className="info-card">
                    <i className="bi bi-mortarboard"></i>
                    <strong>Degree</strong>
                    <span>BSc Software Engineering</span>
                  </div>
                </div>
              </div> */}

              <div className="quick-info">
                <div className="info-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>London, United Kingdom</span>
                </div>
                <div className="info-item">
                  <i className="bi bi-envelope"></i>
                  <span>koladeoluwadara@gmail.com</span>
                </div>
                <div className="info-item">
                  <i className="bi bi-globe"></i>
                  <span>www.koladedara.com</span>
                </div>
                <div className="info-item">
                  <i className="bi bi-phone"></i>
                  <span>+44 7572 887155</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <Skills active={aboutActive} />
      <Certifications active={aboutActive} />
    </section>
  );
}

export default About;
