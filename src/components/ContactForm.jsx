import React, { useState } from "react";
import "./contactForm.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const initialState = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    result: "",
  };

  const [text, setText] = useState(initialState);

  const changeText = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, result: "" });
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    if (text.fullname === "" || text.email === "" || text.message === "") {
      setText({ ...text, result: "incomplete" });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the details.",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: text.fullname,
          email: text.email,
          subject: text.subject,
          message: text.message,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setText(initialState); 
        Swal.fire({
          icon: "success",
          title: "Message sent!",
          text: "Your message was sent successfully.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Failed to send the message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send the message. Please try again later.",
      });
    }
  };

  return (
    <form className="contact-form mt-4" onSubmit={handleSubmitMessage}>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="fullname"
            value={text.fullname}
            onChange={changeText}
            className="form-control"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            value={text.email}
            onChange={changeText}
            id="email"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          value={text.subject}
          onChange={changeText}
          id="subject"
          placeholder="Subject"
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          value={text.message}
          onChange={changeText}
          rows="6"
          placeholder="Message"
        ></textarea>
      </div>
      {/* {text.result === "incomplete" && (
        <div className="error-message">Please fill in all above details</div>
      )} */}
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
