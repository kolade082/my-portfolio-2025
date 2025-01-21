import React from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

function Contact({ reference }) {
  return (
    <section id="contact" className="contact" ref={reference}>
      <div className="container">
        <SectionTitle title="Contact" subtitle="Contact Me" />
        <div className="row mt-2">
          
        <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>Location</h3>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="https://github.com/kolade082" className="github">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.instagram.com/kolade_oo/" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/kolade-oluwadara-87563a245/" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>koladedara@outlook.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>+44 7572 887155</p>
            </div>
          </div>
        </div>

        
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
