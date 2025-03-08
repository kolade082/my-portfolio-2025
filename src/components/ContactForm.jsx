import React, { useState } from "react";
import "./contactForm.css";
import Swal from "sweetalert2";

function ContactForm() {
  const initialState = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };

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
    // Clear error when user starts typing
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
      const response = await fetch("https://my-portfolio-2025-backend-c498a232e553.herokuapp.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        setFormData(initialState);
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "Thank you for your message. I'll get back to you soon!",
          background: "#1f1f1f",
          color: "#fff",
          confirmButtonColor: "var(--primary)",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
        background: "#1f1f1f",
        color: "#fff",
        confirmButtonColor: "var(--primary)",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
