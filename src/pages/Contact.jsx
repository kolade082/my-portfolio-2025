import React from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

function Contact({ reference }) {
  return (
    <section id="contact" className="contact" ref={reference}>
      <div className="container">
        <SectionTitle title="Contact" subtitle="Let's Connect" />
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card location">
              <div className="icon-wrapper">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3>Location</h3>
              <p>London, United Kingdom</p>
            </div>

            <div className="contact-info-card email">
              <div className="icon-wrapper">
                <i className="bi bi-envelope"></i>
              </div>
              <h3>Email</h3>
              <a href="mailto:koladedara@outlook.com">koladedara@outlook.com</a>
            </div>

            <div className="contact-info-card phone">
              <div className="icon-wrapper">
                <i className="bi bi-phone"></i>
              </div>
              <h3>Phone</h3>
              <a href="tel:+447572887155">+44 7572 887155</a>
            </div>

            <div className="contact-info-card social">
              <div className="icon-wrapper">
                <i className="bi bi-share"></i>
              </div>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="https://github.com/kolade082" target="_blank" rel="noopener noreferrer" className="github">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.instagram.com/kolade_oo/" target="_blank" rel="noopener noreferrer" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/kolade-oluwadara-87563a245/" target="_blank" rel="noopener noreferrer" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Have a question or want to work together? Drop me a line!</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
