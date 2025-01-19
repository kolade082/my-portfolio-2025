import React from "react";
import "./about.css";
import SectionTitle from "../components/SectionTitle";
import profileImg from "../images/profile-img-brown-bg.jpg";

function About({ reference, aboutActive }) {
  return (
    <section id="about" className="about" ref={reference}>
      <div className="about-me container">
        <SectionTitle title="About" subtitle="Learn more about me" />
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profileImg} className="img-fluid" alt="Me" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>🎯 Software Engineer</h3>
            <p className="fst-italic">
              Hi, I'm Kolade! I like to build cool stuff on the web 🌐, solve
              real-world problems 💡, and bring ideas to life 🚀. Whether it’s
              creating user-friendly web apps, crafting APIs, or collaborating
              at hackathons (Literally the same header in my GitHub 😭😭😭, I'm
              out of words).
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>12 April 2003</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.koldadedara.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+44 7572 887155</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>London, United Kingdom</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>21</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>BSc Software Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <span>koladeoluwadara@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              With experience spanning software engineering internships and
              hackathons, I specialize in technologies like JavaScript, PHP, and
              Python. Whether it’s leading teams, developing efficient
              workflows, or integrating APIs, I strive to deliver impactful and
              secure solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
