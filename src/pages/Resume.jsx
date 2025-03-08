import React from "react";
import "./resume.css";
import SectionTitle from "../components/SectionTitle";
import resumePDF from "../Kolade's Resume.pdf";

function Resume({ reference }) {
  const handleDownloadResume = () => {
    const resumeUrl = resumePDF;
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="resume" ref={reference}>
      <div className="container">
        <div className="resume-header">
          <SectionTitle title="Resume" subtitle="My Professional Journey" />
          <button className="download-resume" onClick={handleDownloadResume}>
            <i className="bi bi-download"></i>
            Download Resume
          </button>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="resume-item pb-0">
              <h4>Kolade Oluwadara</h4>
              <ul className="contact-info">
                <li>
                  <i className="bi bi-geo-alt"></i>
                  London, United Kingdom
                </li>
                <li>
                  <i className="bi bi-phone"></i>
                  (+44) 7572 887155
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  koladedara@outlook.com
                </li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BSc in Computing (Software Engineering)</h4>
              <h5>2021 - 2024</h5>
              <p>
                University of Northampton - <em>First Class</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Foundation in Computing</h4>
              <h5>2020 - 2021</h5>
              <p>
                University of Northampton - <em>Distinction</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Electrical Electronics Engineering</h4>
              <h5>2019 - 2020</h5>
              <p>
                Afe Babalola University - <em>4.60 GPA</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>O'level</h4>
              <h5>2013 - 2019</h5>
              <p>Deeper Life High School</p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer Intern</h4>
              <h5>June, 2024 - Aug, 2024</h5>
              <p>
                <em>JPMorgan Chase, London, UK </em>
              </p>
              <ul>
                <li>
                  Developed a feature in the data centres allowing users to view
                  the roles and sites they have access to, enhancing user
                  accessibility and transparency.
                </li>
                <li>
                  Created a personalization feature for the data centre
                  application, enabling users to store and manage panels,
                  frequently visited sites, and preferred content for a
                  customized user experience
                </li>
                <li>
                  Utilized technologies such as Angular, NgRx, Node.js, and
                  TypeScript to implement and enhance these features.
                </li>
              </ul>
            </div>

            <h3 className="resume-title">Hackathon Experience</h3>
            <div className="resume-item">
              <h4>Barclaycard</h4>
              <h5>Apr 2024</h5>
              <p>
                <em>Northampton, UK </em>
              </p>
              <ul>
                <li>
                  As the team leader and a full stack developer, I led the
                  creation of an innovative credit card decision platform that
                  enhances consumer credit acquisition
                </li>
                <li>
                  Employed technologies like Laravel framework, PHP, MySQL,
                  JavaScript, HTML and CSS
                </li>
                <li>
                  <em>
                    Recognized as the overall best in the Barclaycard challenge
                    event
                  </em>
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>The Access Group</h4>
              <h5>Nov, 2023</h5>
              <p>
                <em>Milton Keynes, UK </em>
              </p>
              <ul>
                <li>
                  Led the development of a system to synchronize local patient
                  records with the NHS's database, focusing on ensuring both accuracy 
                  and security in the record management process
                </li>
                <li>
                  Employed technologies like PHP, JavaScript, MySQL, HTML and
                  CSS
                </li>
                <li>
                  <em>
                    Received recognition as the Best Team Collaboration and
                    Presentation
                  </em>
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>JPMorgan Chase Code for Good</h4>
              <h5>Oct, 2023</h5>
              <p>
                <em>London, UK </em>
              </p>
              <ul>
                <li>
                  Collaborated with a team at JPMorgan Chase & Co to develop a
                  system for Make-A-Wish® UK in a 24-hour window
                </li>
                <li>
                  Utilized React, Flask, Firebase authentication, and Google
                  APIs to create a comprehensive platform facilitating efficient
                  wish management for children and volunteers
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Google Solution Challenge</h4>
              <h5>Oct, 2023</h5>
              <p>
                <em>London, UK </em>
              </p>
              <ul>
                <li>
                  Designed and developed a user-friendly web application
                  for students, offering seamless event management
                </li>
                <li>
                  Created features for booking events, event creation, calendar
                  integration, and interactive map location using Google Maps API
                </li>
                <li>
                  Integrated technologies: React, Node.js, SQL, and Google Maps API
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Barclaycard</h4>
              <h5>Apr, 2023</h5>
              <p>
                <em>Northampton, UK </em>
              </p>
              <ul>
                <li>
                  Implemented a workflow system using agile methodologies that
                  enhanced internal communication and responsiveness
                </li>
                <li>
                  Employed technologies like Laravel framework, PHP, MySQL,
                  JavaScript, HTML and CSS
                </li>
                <li>
                  <em>
                    Recognized as the overall best in the Barclaycard challenge
                    event
                  </em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
