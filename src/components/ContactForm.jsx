import React, { useState, useRef, useEffect, useMemo } from "react";
import "./contactForm.css";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const initialState = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };

  const emailConfig = useMemo(() => ({
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  }), []); 

  useEffect(() => {
    emailjs.init(emailConfig.publicKey);
    console.log('EmailJS Config:', emailConfig);
  }, [emailConfig]);

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      console.log('Success:', result);
      setFormData(initialState);
      Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Thank you for your message. I'll get back to you soon!",
        background: "#1f1f1f",
        color: "#fff",
        confirmButtonColor: "var(--primary)",
      });
    } catch (error) {
      console.error("Error details:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong. Please try again later.",
        background: "#1f1f1f",
        color: "#fff",
        confirmButtonColor: "var(--primary)",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Your Name"
            className={errors.fullname ? "error" : ""}
          />
          {errors.fullname && <span className="error-message">{errors.fullname}</span>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
      </div>

      <div className="input-group">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject (Optional)"
        />
      </div>

      <div className="input-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          placeholder="Your Message"
          className={errors.message ? "error" : ""}
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <button type="submit" className={loading ? "loading" : ""} disabled={loading}>
        {loading ? (
          <>
            <span className="spinner"></span>
            Sending...
          </>
        ) : (
          <>
            <i className="bi bi-send"></i>
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
