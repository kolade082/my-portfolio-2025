import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Get in Touch</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:koladedara@outlook.com">koladedara@outlook.com</a>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-telephone"></i>
              </div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+447572887155">+44 7572 887155</a>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3>Location</h3>
              <p>London, United Kingdom</p>
            </div>

            <div className="social-links">
              <a href="https://github.com/kolade082" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/kolade-oluwadara-87563a245/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/kolade_oo/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
